import React, { Dispatch, FC, SetStateAction } from 'react';

import { Formik } from 'formik';
import moment from 'moment';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

import tasks from '../../../../store/tasks';

import { ITasksPreview } from '../../../../types';

import { Modal, Input, DatePicker, TimePicker, Button } from 'antd';
import 'antd/dist/antd.css';

interface IEditTaskProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EditTaskModal: FC<IEditTaskProps> = observer(({ open, setOpen }) => {
  const { TextArea } = Input;

  const task = toJS(tasks.currentTask);

  const handleDeleteTask = () => {
    task && task.id && tasks.deleteTask(task.id, task.status);
    setOpen(false);
  };

  const handleEditTask = (values: ITasksPreview) => {
    task &&
      tasks.editTask({
        ...values,
        expireDate: moment(values.expireDate).format('YYYY-MM-DD'),
        index: task.index,
        status: task.status,
        performersId: task.performersId,
        id: task.id,
      });
    setOpen(false);
  };

  return (
    <Formik
      initialValues={{
        title: task?.title,
        description: task?.description,
        expireDate: task?.expireDate,
        comment: task?.comment,
      }}
      onSubmit={(values: ITasksPreview, { setSubmitting }) => {
        handleEditTask(values);
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
            title={
              <div className='edit-modal-title'>
                <p>Edit task</p>
                <img
                  onClick={() => handleDeleteTask()}
                  src='/assets/delete-icon.svg'
                  alt='delete task icon'
                />
              </div>
            }
            onCancel={() => setOpen(false)}
            visible={open}
            footer={[
              <Button
                key='back'
                onClick={() => {
                  tasks.handleSetCurrentTask(null);
                  setOpen(false);
                }}
              >
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
            <p>{task?.title}</p>
            <Input
              name='title'
              placeholder={task?.title}
              value={values.title}
              onChange={handleChange}
              maxLength={30}
            />
            <p>Add Description</p>
            <TextArea
              name='description'
              placeholder={task?.description}
              defaultValue={values.description}
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
              placeholder={moment(task?.expireDate).format('DD.MM.YYYY')}
              onChange={(date, dateString) =>
                setFieldValue('expireDate', moment(dateString, 'YYYY-MM-DD'))
              }
            />
            <TimePicker />
            <p>Add comment</p>
            <TextArea
              name='comment'
              placeholder={task?.comment}
              defaultValue={values.comment}
              onChange={handleChange}
              maxLength={80}
              className='comments-area'
              rows={4}
            />
          </Modal>
        </form>
      )}
    </Formik>
  );
});

export default EditTaskModal;
