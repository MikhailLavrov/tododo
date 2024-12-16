import { Button, Dropdown, MenuProps } from 'antd';
import c from './MenuButton.module.css';
import { AppstoreOutlined } from '@ant-design/icons';

export const MenuButton = () => {
  const items: MenuProps['items'] = [
    { key: '1', label: 'Удалить все задачи' },
    { key: '2', label: 'Изменить имя' },
    { key: '3', label: 'Выйти из профиля' },
  ]

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button className={c.navigation__button} onClick={(e) => e.preventDefault()}>
        <AppstoreOutlined />
      </Button>
    </Dropdown>
  )
}
