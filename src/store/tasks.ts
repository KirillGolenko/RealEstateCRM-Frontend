import { DragEvent } from 'react';
import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { instance } from '../api';
import { IDeck, ITasks } from '../types';

interface IVisible {
  [index: number]: string;
}

class Tasks {
  decks: IDeck[] = [
    {
      title: 'To Do',
      id: 1,
      items: [],
    },
    {
      title: 'In Progress',
      id: 2,
      items: [],
    },
    {
      title: 'Done',
      id: 3,
      items: [],
    },
  ];

  currentDeck: IDeck | null = null;
  currentTask: ITasks | null = null;
  visible: IVisible = {
    1: 'hidden',
    2: 'hidden',
    3: 'hidden',
  };

  constructor() {
    makeAutoObservable(this);
  }

  deleteTask = async (id: number, status: string) => {
    await instance.delete(`/tasks/delete/${id}`);
    runInAction(() => {
      switch (status) {
        case 'TO DO':
          this.decks[0].items = this.decks[0].items.filter(
            (item) => item.id !== id
          );
          break;
        case 'IN PROGRESS':
          this.decks[1].items = this.decks[1].items.filter(
            (item) => item.id !== id
          );
          break;
        case 'DONE':
          this.decks[2].items = this.decks[2].items.filter(
            (item) => item.id !== id
          );
          break;
        default:
          return;
      }
    });
  };

  editTask = async (values: ITasks) => {
    await instance.put(`/tasks/update/${values.id}`, { ...values });
    runInAction(() => {
      switch (values.status) {
        case 'TO DO':
          this.decks[0].items = this.decks[0].items.map((item) => {
            if (item.id === values.id) item = { ...values };
            return item;
          });
          break;
        case 'IN PROGRESS':
          this.decks[1].items = this.decks[1].items.map((item) => {
            if (item.id === values.id) item = { ...values };
            return item;
          });
          break;
        case 'DONE':
          this.decks[2].items = this.decks[2].items.map((item) => {
            if (item.id === values.id) item = { ...values };
            return item;
          });
          break;
        default:
          return;
      }
    });
  };

  createNewTask = async (values: ITasks) => {
    await instance.post('/tasks', { ...values });
    runInAction(() => {
      switch (values.status) {
        case 'TO DO':
          this.decks[0].items.push(values);
          break;
        case 'IN PROGRESS':
          this.decks[1].items.push(values);
          break;
        case 'DONE':
          this.decks[2].items.push(values);
          break;
        default:
          return;
      }
    });
  };

  ondragStart = (e: DragEvent<HTMLDivElement>, item: IDeck, task: ITasks) => {
    e.currentTarget.style.opacity = '0.5';
    let obj = { ...this.visible };
    for (const style in this.visible) {
      if (+style !== item.id) {
        obj = { ...obj, [+style]: 'visible' };
      }
    }

    this.visible = obj;
    this.currentTask = task;
    this.currentDeck = item;
  };

  handleSetCurrentTask = (task: ITasks | null) => {
    this.currentTask = task;
  };

  handleSortTasks = async () => {
    const { data } = await instance.get('/tasks');
    runInAction(() => {
      const newArr = data.reduce(
        (acc: IDeck[], cur: ITasks) => {
          switch (cur.status) {
            case 'TO DO':
              acc[0].items.push(cur);
              break;
            case 'IN PROGRESS':
              acc[1].items.push(cur);
              break;
            case 'DONE':
              acc[2].items.push(cur);
              break;
            default:
              return;
          }
          return acc;
        },
        [...this.decks]
      );
      this.decks = newArr;
    });
  };

  handleChangeTaskStatus = async (task: ITasks, status: string) => {
    await instance.put(`/tasks/update/${task.id}`, { ...task, status });
  };

  handleFindIndex = (arr: ITasks[], val: ITasks) => {
    let number = -1;
    arr.forEach((item: ITasks, index: number) => {
      if (item.id === val.id) number = index;
    });
    return number;
  };

  ondrop = (e: DragEvent<HTMLDivElement>, item: IDeck, task: ITasks) => {
    e.preventDefault();
    this.visible = { 1: 'hidden', 2: 'hidden', 3: 'hidden' };
    if (this.currentDeck && this.currentTask) {
      const deck = { ...toJS(this.currentDeck) };
      const currTask = { ...toJS(this.currentTask) };

      const currentIndex = this.handleFindIndex(deck.items, currTask);

      this.currentDeck.items.splice(currentIndex, 1);
      item.items.splice(currentIndex, 1);

      const dropIndex = item.items.indexOf(task);
      if (currentIndex > dropIndex) {
        item.items.splice(dropIndex, 0, currTask);
      } else {
        item.items.splice(dropIndex + 1, 0, currTask);
      }
      this.decks = this.decks.map((val: IDeck) => {
        if (toJS(val.id) === item.id) {
          return item;
        }
        if (toJS(val.id) === this.currentDeck?.id) {
          return this.currentDeck;
        }
        return val;
      });
    }
  };

  newDrop = (e: DragEvent<HTMLDivElement>, item: IDeck) => {
    e.preventDefault();
    if (this.currentTask && this.currentDeck) {
      this.handleChangeTaskStatus(this.currentTask, item.title.toUpperCase());
      runInAction(() => {
        const changedDeck = { ...item };
        this.decks = this.decks.map((deck: IDeck) => {
          if (deck.id === changedDeck.id) {
            this.currentTask && changedDeck.items.push(this.currentTask);
            return changedDeck;
          }
          if (deck.id === this.currentDeck?.id) {
            const newArr = { ...this.currentDeck };
            const filtredArr = newArr.items.filter(
              (value) => value.id !== this.currentTask?.id
            );
            const result = { ...newArr, items: [...filtredArr] };
            this.currentDeck = result;
            return result;
          }
          return deck;
        });
        this.visible = { 1: 'hidden', 2: 'hidden', 3: 'hidden' };
      });
    }
  };
}

export default new Tasks();
