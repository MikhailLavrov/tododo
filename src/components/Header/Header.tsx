import { MenuButton } from '../MenuButton/MenuButton';
import { UserProfile } from '../UserProfile/UserProfile';
import c from './Header.module.css';

export const HeaderComponent = () => {

  return (
    <header className={c.header}>
      <div className={`${c.header__wrapper} container`}>
        <nav className={c.navigation}>
          <UserProfile />
          <MenuButton />
        </nav>
      </div>
    </header>
  )
}
