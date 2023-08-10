import './App.css'
import Deals from './components/Deals/Deals'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NewArrival from './components/NewArrival/NewArrival'
import SavingZone from './components/SavingZone/SavingZone';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Deals/>
      <NewArrival/>
      <SavingZone/>
    </>
  )
}

export default App
