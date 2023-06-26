import './header.scss'
import logo from '../../assets/img/chicks-logo-large.svg'
import profileIcon from '../../assets/icons/profile.svg'
import cartIcon from '../../assets/icons/cart.png'
import arrowIcon from '../../assets/icons/arrow-down.svg'
import { useEffect, useState } from 'react'

function Header() {
  const [cart, setCart] = useState(5)
  const [isLogged, setIsLogged] = useState(true);
  const [actions, setActions] = useState({
    currency: '',
    cart: 0,
    isLogged: false
  });

  useEffect(() => {
    setActions({
      currency: 'USD',
      cart: 5,
      isLogged: false
    })
  }, [])

  const navElements = [
    'Currency',
    'Items',
    'Accounts',
    'Services',
    'Swap',
    'Sell',
  ]

  return (
    <header className="header">
      <div className="header__logo">
        <a href="#"><img src={logo} alt="chicks gold" /></a>
      </div>
      <nav className='header__nav'>
        <ul>
          {navElements.map((el, i) => (
            <li key={i}>
              <a href="#" className='nav__link'>
                <span>{el}</span><img className='icon__arrow' src={arrowIcon} alt="arrow down" />
              </a>
            </li>
          ))}
          <li className='nav__link nav__link--currency'>
            <a href="#" className='nav__link'>
              <span>{actions.currency}</span><img className='icon__arrow' src={arrowIcon} alt="arrow down" />
            </a>
          </li>
        </ul>
      </nav>
      <div className='header__actions'>
        <span className='action__cart'>
          <img className='icon' src={cartIcon} alt="" />
          <span>Cart ({actions.cart})</span>
        </span>
        {!actions.isLogged && (
          <button className='action__session button'>
            <span>Sign in</span><img className='icon' src={profileIcon} alt="profile" />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;