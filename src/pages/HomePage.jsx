import Navbar from "../components/layout/Navbar"
import HeroSequence from "../components/sections/HeroSequence"
import ProductOverview from "../components/sections/ProductOverview"

function HomePage() {
  return (
    <div className="bg-brand-black">
      <Navbar />
      <HeroSequence />
      <ProductOverview />
    </div>
  )
}

export default HomePage