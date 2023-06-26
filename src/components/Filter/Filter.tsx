import './filter.scss'
import priceIcon from '../../assets/icons/price.png'
import searchIcon from '../../assets/icons/search.png'
import typeIcon from '../../assets/icons/type.png'
import swordIcon from '../../assets/icons/sword.png'
import arrowIcon from '../../assets/icons/arrow-filter.png'

function Filter() {
  return ( 
    <div className='filter'>
      <div className='filter__item filter__item--select'>
        <img src={swordIcon} alt="sword" />
        <span className='filter__text'>Select a game</span>
        <img className='select-arrow' src={arrowIcon} alt="arrow" />
      </div>
      <div className='filter__item filter__item--search'>
        <img src={searchIcon} alt="search" />
        <span className='filter__text'>Search</span>
      </div>
      <div className='filter__item filter__item--group'>
        <div className='filter__item filter__item--price'>
          <img src={priceIcon} alt="price" />
          <div className='filter__text-wrapper'>
            <span className='filter__text filter__text--floating'>Price</span>
            <span className='filter__text'>All</span>
          </div>
          <img className='select-arrow' src={arrowIcon} alt="arrow" />
        </div>
        <div className='filter__item filter__item--type'>
          <img src={typeIcon} alt="type" />
          <div className='filter__text-wrapper'>
            <span className='filter__text filter__text--floating'>Item Type</span>
            <span className='filter__text'>All</span>
          </div>
          <img className='select-arrow' src={arrowIcon} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Filter;