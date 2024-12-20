import c from './TaskItem.module.css';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal, Popconfirm } from "antd";
import { useEffect, useRef, useState } from "react";

interface TaskItemProps {
  task: { id: number, text: string, completed: boolean, createdAt: Date, isCompleted: boolean},
  handleUpdateTask: (id: number, text: string) => void,
  handleDeleteTask: (id: number) => void,
  handleToggleTask: (id: number) => void,
}

export const TaskItem = (props :TaskItemProps) => {
  const { task, handleUpdateTask, handleDeleteTask, handleToggleTask } = props;

  const [editedText, setEditedText] = useState(task.text);
  const [openEditor, setEditorOpen] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const createdTime = new Date(task.createdAt).toLocaleTimeString();

  useEffect(() => {
    if (openEditor) {
      const focus = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          const length = inputRef.current.value.length;
          inputRef.current.setSelectionRange(length, length);
        }
      }, 0)
      return () => clearTimeout(focus);
    }
  }, [openEditor])

  const handleUpdate = (id: number, text: string) => {
    handleUpdateTask( id, text );
    setEditorOpen(false)
  }

  const handleCancelUpdateTask = () => {
    setEditedText(task.text)
    setEditorOpen(false)
  }

  return (
    <li className={c.taskItem}>
      <Checkbox
        onChange={() => handleToggleTask(task.id)}
        checked={task.isCompleted}
        className={c.taskItem__checkbox}
      >
        <span className={`${c.taskItem__text} ${task.isCompleted ? c.taskItem__completed : ''}`}>
          {task.text}
        </span>
      </Checkbox>
      <div className={c.taskItem__aside}>
        <div className={c.taskItem__controls}>
          <Button 
            onClick={() => setEditorOpen(true)}
            className={`${c.taskItem__button} ${c.taskItem__editButton}`}
          >
            <EditOutlined />
          </Button>
          <Modal
            title="Редактировать текст"
            open={openEditor}
            onOk={() => handleUpdate(task.id, editedText)}
            onCancel={handleCancelUpdateTask}
            okText="Сохранить"
            cancelText="Отмена"
          >
            <div className={c.taskItem__form}>
              <textarea
                className={c.taskItem__textarea}
                ref={inputRef}
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              >
              </textarea>
            </div>
          </Modal>
          <Popconfirm
            title="Необходимо подтверждение"
            description="Удалить задачу?"
            onConfirm={() => handleDeleteTask(task.id)}
            okText="Да"
            cancelText="Нет"
          >
            <Button className={`${c.taskItem__button} ${c.taskItem__deleteButton}`}>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </div>
        <span className={c.taskItem__createdTime}>{createdTime}</span>    
      </div>
    </li>
  )
}
