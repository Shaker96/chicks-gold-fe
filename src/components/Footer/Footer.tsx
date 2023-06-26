import logo from '../../assets/img/chicks-logo-large.svg'
import './footer.scss'

function Footer() {
  return ( 
    <footer className="footer">
      <div className='footer__section footer__section--dark'>
        <div className="footer__container footer__payment">
          <span className='footer-payment__item'><img src={require('../../assets/img/visa.svg').default} alt="visa" /></span>
          <span className='footer-payment__item'><img src={require('../../assets/img/mastercard.svg').default} alt="mastercard" /></span>
          <span className='footer-payment__item'><img src={require('../../assets/img/amex.svg').default} alt="amex" /></span>
          <span className='footer-payment__item'><img src={require('../../assets/img/skrill.svg').default} alt="skrill" /></span>
          <span className='footer-payment__item'><img src={require('../../assets/img/crypto.svg').default} alt="crypto" /></span>
          <span className='footer-payment__item'>and 50+ more</span>
        </div>
      </div>
      <div className='footer__section'>
        <div className="footer__container footer__social">
          <div className='footer-social__item-wrapper'>
            <a href="https://facebook.com" target="_blank"><span className='footer-social__item'><img src={require('../../assets/icons/facebook.svg').default} alt="facebook" /></span></a>
            <a href="https://instagram.com" target="_blank"><span className='footer-social__item'><img src={require('../../assets/icons/instagram.svg').default} alt="instagram" /></span></a>
            <a href="https://twitter.com" target="_blank"><span className='footer-social__item'><img src={require('../../assets/icons/twitter.svg').default} alt="twitter" /></span></a>
            <a href="https://discord.com" target="_blank"><span className='footer-social__item'><img src={require('../../assets/icons/discord.svg').default} alt="discord" /></span></a>
          </div>
        </div>
        <div className="footer__container footer__body">
          <div className="footer-body__item footer-body__logo">
            <span><img src={logo} alt="logo" /></span>
            <span className='footer-body__text'>support@chicksgold.com</span>
          </div>
          <div className='footer-body__item footer-body__about'>
            <span className='footer-body__subtitle'>Chicks Gold</span>
            <span className='footer-body__text'>Games</span>
            <span className='footer-body__text'>About Us</span>
            <span className='footer-body__text'>Blog</span>
            <span className='footer-body__text'>Sitemap</span>
          </div>
          <div className='footer-body__item footer-body__support'>
            <span className='footer-body__subtitle'>Support</span>
            <span className='footer-body__text'>Contact Us</span>
            <span className='footer-body__text'>FAQ</span>
          </div>
          <div className='footer-body__item footer-body__legal'>
            <span className='footer-body__subtitle'>Legal</span>
            <span className='footer-body__text'>Privacy Policy</span>
            <span className='footer-body__text'>Terms of Service</span>
            <span className='footer-body__text'>Copyright Policy</span>
          </div>
          <div className='footer-body__item footer-body__reviews'>
            <div className='stars'>
              <img src={require('../../assets/icons/star.png')} alt="star" />
              <img src={require('../../assets/icons/star.png')} alt="star" />
              <img src={require('../../assets/icons/star.png')} alt="star" />
              <img src={require('../../assets/icons/star.png')} alt="star" />
              <img src={require('../../assets/icons/star.png')} alt="star" />
            </div>
            <span className='footer-body__text'>Trustpilot Reviews</span>
          </div>
        </div>
        <div className="footer__container footer__rights">
          <span>© 2017 - 2020 Chicksgold.com. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;