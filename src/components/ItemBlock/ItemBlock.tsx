import { useState } from "react";
import './item-block.scss';
import ItemCard from '../ItemCard/ItemCard'
import settingsIcon from '../../assets/icons/settings.png'
import arrowIcon from '../../assets/icons/arrow-filter.png'
import itemsFile from '../../assets/data/items.json'

export type Item = {
  "index": number,
  "isOnSale": boolean,
  "isInStock": boolean,
  "title": string,
  "price": string,
  "fullPrice": string,
  "description": string,
  "gameIcon": string,
  "itemIcon": string,
}

function ItemBlock() {
  const [pages, setPages] = useState(11)
  const [items, setItems] = useState<Item[]>(itemsFile)

  return (
    <div className="item-block">
      <div className="item-block__header filter">
        <div className="filter__subtitle">Showing 20 - from 125</div>
        <div className='filter__item filter__item--sort'>
          <img src={settingsIcon} alt="type" />
          <div className='filter__text-wrapper'>
            <span className='filter__text filter__text--floating'>Sort By</span>
            <span className='filter__text'>Featured</span>
          </div>
          <img className='select-arrow' src={arrowIcon} alt="arrow" />
        </div>
      </div>
      <div className="item-block__list">
        {items.map((item, i) => (
          <ItemCard item={item} key={i}/>
        ))}
      </div>
      <div className="item-block__pages"></div>
    </div>
  );
}

export default ItemBlock;