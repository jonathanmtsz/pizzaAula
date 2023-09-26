import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Sizes from "./pages/sizes/Sizes"
import Flavours from "./pages/flavours/Flavours"
import Summary from "./pages/summary/Summary"
import Checkout from "./pages/checkout/Checkout"
import Login from "./pages/login/Login"
import { routes } from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.pizzaSize} element={<Sizes />} />
        <Route path={routes.pizzaFlavour} element={<Flavours />} />
        <Route path={routes.summary} element={<Summary />} />
        <Route path={routes.checkout} element={<Checkout />} />
        <Route path={routes.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
