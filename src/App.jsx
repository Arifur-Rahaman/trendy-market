import './App.css'
import Categories from './components/Categories/Categories'
import Deals from './components/Deals/Deals'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NewArrival from './components/NewArrival/NewArrival'
import Promotion from './components/Promotion/Promotion'
import SavingZone from './components/SavingZone/SavingZone';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Deals/>
      <NewArrival/>
      <SavingZone/>
      <Promotion/>
      <Categories title={'Categories For Men'}/>
    </>
  )
}

export default App
