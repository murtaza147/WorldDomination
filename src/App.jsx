import { BrowserRouter } from "react-router-dom";
import { Carousel, Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Carousel />
      <Hero />
    </BrowserRouter>
  )
}

export default App
