import { Banner } from '../components/Home/Banner'
import Approach from '../components/Home/Approach'
import { KeyHighlight } from '../components/Home/KeyHighlights'
import LeaderShip from '../components/Home/Leadership'
import { FocusArea } from '../components/Home/FocusArea'
import { AboutUs } from '../components/Home/AboutUs'
import { Services } from '../components/Home/Services'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <AboutUs />
      <FocusArea />
      <Approach />
      <KeyHighlight />
      <LeaderShip />
    </div>
  )
}
export default Home;
