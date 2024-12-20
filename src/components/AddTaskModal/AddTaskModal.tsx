import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import c from './AddTaskModal.module.css';
import { useEffect, useRef, useState } from "react";
import { addTask } from "../../store/tasksSlice";
import { useDispatch } from "react-redux";

export const AddTaskModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  useEffect(() => {
    if (isModalOpen) {
      const focus = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 0)
      return () => clearTimeout(focus);
    }
  }, [isModalOpen])

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({
        id: Date.now(),
        text: taskText,
        isCompleted: false,
        category: 'string',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));
      setTaskText('');
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        icon={<PlusOutlined />}
        className={c.floatButton}
        />
      <Modal
        title="Добавить задачу"
        open={isModalOpen}
        onOk={handleAddTask}
        onCancel={handleCancel}
      >
        <div className={c.taskList__form}>
          <textarea
            className={c.taskList__textarea}
            ref={inputRef}
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Введите текст новой задачи"
          />
        </div>
      </Modal>
    </>
  ); 
}
