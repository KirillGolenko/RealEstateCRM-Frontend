import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import moment from 'moment';

import tasks from '../../../store/tasks';

import CreateTaskModal from '../Modals/CreateTaskModal';
import EditTaskModal from '../Modals/EditTaskModal';

import { IDeck, ITasks } from '../../../types';
import Avatar from 'antd/lib/avatar/avatar';

const Tasks = observer(() => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    tasks.handleSortTasks();
  }, []);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const ondragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.opacity = '1';
  };

  const handleCreateTask = (status: string) => {
    setOpen(true);
    setStatus(status);
  };

  const handleOpenEditModal = async (task: ITasks) => {
    await tasks.handleSetCurrentTask(task);
    setEditOpen(true);
  };

  return (
    <div className='tasks-list-container'>
      {toJS(tasks.decks).map((item: IDeck, index: number) => {
        return (
          <div className='deck-container' key={`deck-${index}`}>
            <div className='deck-header'>
              <img
                onClick={() => handleCreateTask(item.title.toUpperCase())}
                src='/assets/plus-green.svg'
                alt='add task icon'
              />
              <p>{item.title}</p>
            </div>
            {item.items.map((task: ITasks, taskIndex: number) => {
              return (
                <div
                  className='task-list-item'
                  draggable={true}
                  onDragOver={(e) => onDragOver(e)}
                  onDragStart={(e) => tasks.ondragStart(e, item, task)}
                  onDragEnd={(e) => ondragEnd(e)}
                  onDrop={(e) => tasks.ondrop(e, item, task)}
                  key={`task-item-${taskIndex}`}
                >
                  <div className='task-header'>
                    {task.title}
                    <img
                      onClick={() => handleOpenEditModal(task)}
                      src='/assets/task-options.svg'
                      alt='task options'
                    />
                  </div>
                  <div className='task-footer-container'>
                    <div
                      className='date-container'
                      style={{
                        backgroundColor:
                          '#' +
                          (Math.random().toString(16) + '000000')
                            .substring(2, 8)
                            .toUpperCase(),
                      }}
                    >
                      <img
                        src='/assets/calendar-table-icon.svg'
                        alt='calendar icon'
                      />
                      <p className='task-expire-date'>
                        {moment(task.expireDate).format('DD MMMM')}
                      </p>
                    </div>
                    <Avatar size={30} src={'/assets/userImage.jpg'} />
                  </div>
                </div>
              );
            })}
            <div
              onDragOver={(e) => onDragOver(e)}
              onDragEnd={(e) => ondragEnd(e)}
              onDrop={(e) => tasks.newDrop(e, item)}
              style={{
                visibility: tasks.visible[item.id] as any,
              }}
              className={`drag-new ${item.id}`}
            >
              +
            </div>
          </div>
        );
      })}
      <EditTaskModal open={editOpen} setOpen={setEditOpen} />
      {toJS(tasks.currentTask) && (
        <CreateTaskModal open={open} setOpen={setOpen} status={status} />
      )}
    </div>
  );
});

export default Tasks;
