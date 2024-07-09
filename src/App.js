import React from 'react';
import MovingTextComponent from './Components/MovingTextComponent';
import NavBar from './Components/NavBar';
import FirstSection from './Components/FirstSection';
import SponsorsComponent from './Components/SponsorsComponent';
import NewCollectionsComponent from './Components/NewCollections';
import WearToWeddingComponent from './Components/WearToWeddingComponent';
import TrendingCollectionsComponent from './Components/TrendingCollectionsComponent';
import FlashSalesComponent from './Components/FlashSalesComponent';
import Footer from './Components/Footer';
import Grids from './Components/Grids';
import Divs from './Components/Divs';
import CollectionSection from './Components/CollectionSection';
import ShoppingCart from './Components/ShoppingCart';



const App = () => (
  <div>
    <MovingTextComponent />
    <NavBar />
    <FirstSection />
    <SponsorsComponent />
    <NewCollectionsComponent />
    <CollectionSection />
    <WearToWeddingComponent />
    <TrendingCollectionsComponent />
    <Grids />
    <FlashSalesComponent />
    <Divs />
    <Footer />
  </div>
);

export default App;
