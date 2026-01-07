import { ReactLenis } from './utils/lenis'

import Header from './sections/header'
import Headline from './sections/headline'
import Introduction from './sections/introduction'
import Outdoor from './sections/outdoor'
import Solar from './sections/solar'
import Washroom from './sections/washroom'
import Video from './sections/video'
import Footer from './sections/footer'

function App() {
  return (
    <ReactLenis root>
      <Header />
      <Headline />
      <Introduction />
      <Outdoor />
      <Solar />
      <Washroom />
      <Video />
      <Footer />
    </ReactLenis>
  )
}

export default App
