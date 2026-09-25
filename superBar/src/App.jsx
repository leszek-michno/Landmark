
import Offer from './components/Offer'
import MainPage from './components/MainPage'
import Nav from './components/Nav'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {

  return (
    <div id='home'>
    <Nav />
    <main>
    <MainPage />
    <Menu />
    <Gallery />
    <Offer /> 
    <Contact/>
    <Footer />
    </main>
    </div>
  )
}

export default App
