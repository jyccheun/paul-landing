import { ReactLenis } from './utils/lenis'

import Header from './components/header'
import Headline from './components/headline'
import HouseSolution from './components/houseSolution'
import SolarSolution from './components/solarSolution'
import BuildingSolution from './components/buildingSolution'
import Footer from './components/footer'

function App() {
  return (
    <ReactLenis root>
      <Header />
      <Headline />
      <HouseSolution />
      <SolarSolution />
      <BuildingSolution />
      <Footer />
    </ReactLenis>
  )
}

export default App
