import './App.css'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/hero/Hero'
const App = () => {
 

  return (
    <>
    <div className = 'pt-[4.75rem] lg:pt-[4.75rem] overflow-hidden'>
      <Header/>
    </div>
    <ButtonGradient />
    <Hero/>
    </>
  )
}

export default App
