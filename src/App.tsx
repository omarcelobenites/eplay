import { BrowserRouter } from 'react-router-dom'
import Header from './componentes/Header'
import { GlobalCss } from './style'

import Rotas from './routes'
import Footer from './componentes/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
