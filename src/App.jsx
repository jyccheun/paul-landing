import { ReactLenis } from './utils/lenis'

import Header from './components/header'
import Headline from './components/headline'
import HouseSolution from './components/houseSolution'
import Component3 from './components/component3'

function App() {
  return (
    <ReactLenis root>
      <Header />
      <Headline />
      <HouseSolution />
      <Component3 />
    </ReactLenis>
  )
}

export default App
