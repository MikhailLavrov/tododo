import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, updateTask } from "../../store/tasksSlice";
import c from './TaskItem.module.css';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, Popconfirm } from "antd";

export const TaskItem = ({task}: any) => {
  const dispatch = useDispatch();

  const handleUpdateTask = (id: number, text: string) => {
    dispatch(updateTask({ id, text }));
  }

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  }

  return (
    <li className={c.taskItem}>
      <Checkbox
        onChange={() => dispatch(toggleTask(task.id))}
        checked={task.isCompleted}
        className={c.taskItem__checkbox}
      >
        <span className={`${c.taskItem__text} ${task.isCompleted ? c.taskItem__completed : ''}`}>{task.text}</span>
      </Checkbox>
      <div className={c.taskItem__controls}>
        <Button 
          onClick={() => handleUpdateTask(task.id, task.text)}
          className={`${c.taskItem__button} ${c.taskItem__editButton}`}
        >
          <EditOutlined />
        </Button>
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
    </li>
  )
}