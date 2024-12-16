import c from './Footer.module.css';

export const FooterComponent = () => {
  return (
    <footer className={c.footer}>
      <div className={`${c.footer__wrapper} container`}>
        Footer
      </div>
    </footer>
  )
}
