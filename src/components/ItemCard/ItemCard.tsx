import { Item } from '../ItemBlock/ItemBlock'
import cartIcon from '../../assets/icons/cart.png'
import upIcon from '../../assets/icons/up-arrow.png'
import downIcon from '../../assets/icons/down-arrow.png'
import './item-card.scss'

function ItemCard({item}: {item: Item}) {
  return ( 
    <div className='item-card__wrapper' key={item.index}>
      <div className="item-card">
        {item.isOnSale && (
          <span className="item-card__sale">
            <span>ON SALE</span>
          </span>
        )}
        {item.isInStock && (
          <div className="item-card__stock">
            <span>In Stock</span>
          </div>
        )}
        <div className="item-card__qty">
          <span>1</span>
          <span className='arrows'>
            <img src={upIcon} alt="" />
            <img src={downIcon} alt="" />
          </span>
        </div>
        <div className='item-card__game-item'>
          <img src={require(`../../assets/icons/${item.itemIcon}`)} alt="" />
        </div>
        <div className="item-card__title">{item.title}</div>
        <div className="item-card__price">
          <span className="current-price">{item.price}</span>
          <span className="old-price">{item.fullPrice}</span>
        </div>
        <div className='item-card__game'>
          <img src={require(`../../assets/icons/${item.gameIcon}`)} alt="" />
        </div>
        <div className="item-card__description">{item.description}</div>
        <div className="item-card__buttons">
          <button className="button button--secondary">DETAILS</button>
          <button className="button button--primary">
            <span>ADD</span>
            <span className='cart-icon'><img src={cartIcon} alt="" /></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;