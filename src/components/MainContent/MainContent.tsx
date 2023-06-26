import './main-content.scss'
import Filter from '../Filter/Filter'
import ItemBlock from '../ItemBlock/ItemBlock'

function MainContent() {
  return ( 
    <div className="main-content">
      <div className='main-content__wrapper'>
        <div className="main-content__body">
          <h1>Condimentum consectetur</h1>
          <Filter />
          <ItemBlock />
        </div>
      </div>
    </div>
  );
}

export default MainContent;