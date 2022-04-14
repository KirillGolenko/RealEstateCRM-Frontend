import React, { Dispatch, FC } from 'react';
import { Formik } from 'formik';
import { toJS } from 'mobx';
import moment from 'moment';

import tasks from '../../../../store/tasks';

import { ITasksPreview } from '../../../../types';

import { Modal, Input, DatePicker, TimePicker, Button } from 'antd';
import 'antd/dist/antd.css';

interface ICreateTaskProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  status: string;
}

const CreateTaskModal: FC<ICreateTaskProps> = ({ open, setOpen, status }) => {
  const { TextArea } = Input;

  const handleCreateNewTask = (values: ITasksPreview) => {
    let index = 0;

    switch (status) {
      case 'TO DO':
        index = toJS(tasks.decks)[0].items.length + 1;
        break;
      case 'IN PROGRESS':
        index = toJS(tasks.decks)[1].items.length + 1;
        break;
      case 'DONE':
        index = toJS(tasks.decks)[2].items.length + 1;
        break;
      default:
        return;
    }
    tasks.createNewTask({
      ...values,
      status,
      index,
      performersId: [],
    });
    setOpen(false);
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        expireDate: '',
        comment: '',
      }}
      onSubmit={(values: ITasksPreview, { setSubmitting }) => {
        handleCreateNewTask(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form
          id='modal-form'
          className='input-container'
          onSubmit={handleSubmit}
        >
          <Modal
            className='create-task-modal'
            title={`Create new task`}
            onCancel={() => setOpen(false)}
            visible={open}
            footer={[
              <Button key='back' onClick={() => setOpen(false)}>
                Cancel
              </Button>,
              <Button
                form='modal-form'
                disabled={isSubmitting}
                htmlType='submit'
                key='submit1'
                type='primary'
              >
                Create task
              </Button>,
            ]}
          >
            <p>Task title</p>
            <Input
              name='title'
              value={values.title}
              onChange={handleChange}
              maxLength={30}
            />
            <p>Add Description</p>
            <TextArea
              name='description'
              value={values.description}
              onChange={handleChange}
              className='description-area'
              rows={2}
              maxLength={60}
            />
            <p>Assigned to:</p>
            <div>
              <div></div>
              <div className='add-assigner'>+</div>
            </div>
            <p>Expire date</p>
            <DatePicker
              disabledDate={(d) =>
                !d || d.isAfter('2024-12-31') || d.isSameOrBefore('2022-01-01')
              }
              format='DD.MM.YYYY'
              name='expireDate'
              defaultValue={moment(values.expireDate)}
              onChange={(date, dateString) =>
                setFieldValue('expireDate', moment(dateString, 'YYYY-MM-DD'))
              }
            />
            <TimePicker />
            <p>Add comment</p>
            <TextArea
              name='comment'
              value={values.comment}
              onChange={handleChange}
              maxLength={80}
              className='comments-area'
              rows={4}
              placeholder='Write your comment here'
            />
          </Modal>
        </form>
      )}
    </Formik>
  );
};

export default CreateTaskModal;
