import React from 'react';
import './main.scss';
import Header from  '../Header/Header'
import MainContent from '../MainContent/MainContent'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="main">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
