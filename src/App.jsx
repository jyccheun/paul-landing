import { ReactLenis } from './utils/lenis'

import Component1 from './components/component1'
import Component2 from './components/component2'
import Component3 from './components/component3'

function App() {
  return (
    <ReactLenis root>
      <Component1 />
      <Component2 />
      <Component3 />
    </ReactLenis>
  )
}

export default App
