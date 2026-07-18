import About from './components/about/about'
import Application from './components/application/Application'
import Card from './components/card/card'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Hero from './components/hero/Hero'
// import Meeting from './components/meeting/Meeting'
import Members from './components/members/members'
import Mission from './components/mission/mission'
import Networking from './components/networking/networking'
// import { Pricing } from './components/Pricing/Pricing'
import Reason from './components/reaso/reason'
// import { Requirement } from './components/Requirement/Requirement'
import Statistics from './components/stats/statistics'
import Steps from './components/steps/steps'
const App = () => {
	return (
		<div>
			<Hero />
			<Card />
			<Networking />
			<Application />
			<About />
			<Statistics />
			<Mission />
			<Reason />
			{/* <Requirement /> */}
			{/* <Meeting /> */}
			<Steps />
			{/* <Pricing /> */}
			<Members />
			<Application />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
