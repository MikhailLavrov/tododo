import { Button, Dropdown, MenuProps, Modal } from 'antd';
import c from './MenuButton.module.css';
import { AppstoreOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllTasks } from '../../store/tasksSlice';
import { useEffect, useState } from 'react';

export const MenuButton = () => {
  const state = useSelector((state: any) => state.tasks);
  const [isStateEmpty, setIsStateEmpty] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const items: MenuProps['items'] = [
    { key: 'deleteAll', label: 'Удалить все задачи', disabled: isStateEmpty },
    { key: 'changeName', label: 'Изменить имя' },
    { key: 'exitProfile', label: 'Выйти из профиля' },
  ]

  useEffect(() => {
    setIsStateEmpty(state.length === 0);
  }, [state]);

  const handleMenuClick: MenuProps['onClick'] = ({key}) => {
    switch (key) {
      case 'deleteAll':
        setOpen(true)
        break;
      case 'changeName':
        console.log('Изменить имя');
        break;
      case 'exitProfile':
        console.log('Выйти из профиля');
        break;
    
      default:
        break;
    }
  }

  const handleDeleteConfirm = () => {
    setOpen(false);
    dispatch(deleteAllTasks(true));
  }

  return (
    <>
      <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['click']}>
        <Button className={c.navigation__button} onClick={(e) => e.preventDefault()}>
          <AppstoreOutlined />
        </Button>
      </Dropdown>
      <Modal
        title="Необходимо подтверждение"
        open={open}
        onOk={handleDeleteConfirm}
        onCancel={() => setOpen(false)}
        okText="Да"
        cancelText="Отмена"
      >
        <p>Вы действительно хотите удалить все задачи?</p>
      </Modal>
    </>
  )
}
