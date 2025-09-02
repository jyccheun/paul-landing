import { ReactLenis } from './utils/lenis'

import Header from './components/header'
import Headline from './components/headline'
import HouseSolution from './components/houseSolution'
import SolarSolution from './components/solarSolution'
import Component3 from './components/component3'

function App() {
  return (
    <ReactLenis root>
      <Header />
      <Headline />
      <HouseSolution />
      <SolarSolution />
      <Component3 />
    </ReactLenis>
  )
}

export default App
