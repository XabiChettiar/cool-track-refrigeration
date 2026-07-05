import { Routes, Route, useLocation } from "react-router-dom"
import ScrollToTop from "./components/common/ScrollToTop"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import QuotePage from "./pages/QuotePage"

function App() {
  const location = useLocation()
  const backgroundLocation = location.state?.backgroundLocation

  return (
    <>
      <ScrollToTop />
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/products/:productId/quote" element={<QuotePage />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/products/:productId/quote" element={<QuotePage />} />
        </Routes>
      )}
    </>
  )
}

export default App