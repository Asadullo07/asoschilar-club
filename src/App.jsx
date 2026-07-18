import Card from "./components/card/card"
import Networking from "./components/networking/networking"
import Application from './components/application/Application'
import About from './components/about/about'
import Statistics from './components/stats/statistics'
import Mission from './components/mission/mission'
import Reason from './components/reaso/reason'
import Requirement from './components/Requirement/Requirement'
import Meeting from './components/meeting/Meeting'
import Pricing from './components/Pricing/Pricing'
import Steps from './components/steps/steps'
import Members from './components/members/members'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Hero from './components/hero/Hero'
const App = () => {
  return (
    <div>
      <Hero/>
      <Card/>
      <Networking/>
      <Application/>
      <About/>
      <Statistics/>
      <Mission/>
      <Reason/>
      <Requirement/>
      <Meeting/>
      <Steps/>
      <Pricing/>
      <Members/>
      <Application/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App