import { GithubOutlined } from '@ant-design/icons';
import c from './Footer.module.css';

export const FooterComponent = () => {
  return (
    <footer className={c.footer}>
      <div className={`${c.footer__container} container`}>
        <div className={c.devLink}>
          <a href="https://github.com/MikhailLavrov" target="_blank" rel="noopener noreferrer" aria-label="Перейти на сайт разработчика">
            Frontend - MikhailLavrov
          </a>
          <GithubOutlined />
        </div>
      </div>
    </footer>
  )
}
