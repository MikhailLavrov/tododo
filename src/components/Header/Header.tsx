import { Button, Dropdown, MenuProps } from 'antd';
import c from './Header.module.css';
import { AppstoreOutlined } from '@ant-design/icons';

export const HeaderComponent = () => {
  const items: MenuProps['items'] = [
    { key: '1', label: 'Menu 1' },
    { key: '2', label: 'Menu 2' },
    { key: '3', label: 'Menu 3' },
    { key: '4', label: 'Menu 4' },
    { key: '5', label: 'Menu 5' },
    { key: '6', label: 'Menu 6' },
    { key: '7', label: 'Menu 7' },
    { key: '8', label: 'Menu 8' },
    { key: '9', label: 'Menu 9' },
    { key: '10', label: 'Menu 10' },
    { key: '11', label: 'Menu 11' },
    { key: '12', label: 'Menu 12' },
  ]

  return (
    <header className={c.header}>
      <div className={`${c.header__wrapper} container`}>
        <nav className={c.navigation}>
          <Dropdown menu={{ items }} trigger={['click']}>
            <Button className={c.navigation__button} onClick={(e) => e.preventDefault()}>
              <AppstoreOutlined />
            </Button>
          </Dropdown>
        </nav>
      </div>
    </header>
  )
}
