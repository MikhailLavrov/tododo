import { Button, Dropdown, Input, MenuProps, Modal } from 'antd';
import c from './MenuButton.module.css';
import { AppstoreOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllTasks } from '../../store/tasksSlice';
import { useEffect, useState } from 'react';
import { setName } from '../../store/userSlice';

export const MenuButton = () => {
  const state = useSelector((state: any) => state.tasks);
  const currentUsername = useSelector((state: any) => state.user.userName);

  const [isStateEmpty, setIsStateEmpty] = useState(false);
  const [onDeleteConfirmOpen, setOnDeleteConfirmOpen] = useState(false);
  const [onProfileNameChangeOpen, setOnProfileNameChangeOpen] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');

  const dispatch = useDispatch();

  const items: MenuProps['items'] = [
    { key: 'deleteAll', label: 'Удалить все задачи', disabled: isStateEmpty },
    { key: 'changeName', label: 'Изменить имя' },
  ]

  useEffect(() => {
    setIsStateEmpty(state.length === 0);
  }, [state]);

  const handleMenuClick: MenuProps['onClick'] = ({key}) => {
    switch (key) {
      case 'deleteAll':
        setOnDeleteConfirmOpen(true)
        break;
      case 'changeName':
        setOnProfileNameChangeOpen(true)
        break;
    
      default:
        break;
    }
  }

  const handleDeleteConfirm = () => {
    setOnDeleteConfirmOpen(false);
    dispatch(deleteAllTasks(true));
  }

  const handleChangeProfileName = () => {
    setOnProfileNameChangeOpen(false);
    dispatch(setName(newProfileName));
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
        open={onDeleteConfirmOpen}
        onOk={handleDeleteConfirm}
        onCancel={() => setOnDeleteConfirmOpen(false)}
        okText="Да"
        cancelText="Отмена"
      >
        <p>Вы действительно хотите удалить все задачи?</p>
      </Modal>
      <Modal
        title="Изменить имя"
        open={onProfileNameChangeOpen}
        onOk={handleChangeProfileName}
        onCancel={() => setOnProfileNameChangeOpen(false)}
        okText="Подтвердить"
        cancelText="Отмена"
      >
        <p>Текущее имя: <b>{currentUsername}</b></p>
        <div>
          <Input
            value={newProfileName}
            onChange={(e) => setNewProfileName(e.target.value)}
            maxLength={10}
          />
        </div>
      </Modal>
    </>
  )
}
