import { useSelector } from 'react-redux';
import c from './UserProfile.module.css';
import AVA from '../../assets/ava.webp';
import { Image } from 'antd';

export const UserProfile = () => {
  const name = useSelector((state: any) => state.user.userName);
  
  return (
    <div className={c.user}>
      <Image
        className={c.user__avatar}
        src={AVA}
        width={20} 
        alt="аватар"
        preview={false}
      />
      <p className={c.user__name}>{name}</p>
    </div>
  )
}