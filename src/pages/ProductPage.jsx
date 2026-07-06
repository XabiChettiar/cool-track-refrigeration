import { useEffect, useRef } from "react"
import { useParams, Link, useNavigate, useLocation } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import { products } from "../data/products"

function ProductPage() {
  const { productId } = useParams()
  const product = products.find(p => p.id === productId)
  const navigate = useNavigate()
  const location = useLocation()
  const scrollRef = useRef(null)

  const titleOverlapClass =
    product?.id === "chest-freezer" ? "-mb-6 md:-mb-21" :
    product?.id === "cake-display-counter" ? "-mb-5 md:-mb-13" :
    product?.id === "aerocore-12" ? "-mb-5 md:-mb-14" :
    product?.id === "1tr-20tr-chiller" ? "-mb-6 md:-mb-28" :
    "-mb-4 md:-mb-8"

  const imageSizeClass =
    product?.id === "cold-room" ? "max-w-lg" :
    product?.id === "1tr-20tr-chiller" ? "max-w-xs" :
    "max-w-md"

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [productId])

  if (!product) {
    return (
      <div className="fixed inset-0 z-100 bg-brand-black overflow-y-auto flex flex-col items-center justify-center px-8">
        <Navbar />
        <p className="text-brand-white text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Product not found.
        </p>
        <Link to="/" className="text-brand-gold underline">Back home</Link>
      </div>
    )
  }

  return (
    <div ref={scrollRef} className="fixed inset-0 z-100 bg-brand-black overflow-y-auto">
      <Navbar />
      <section className="pt-28 pb-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">

          <button
            onClick={() => navigate(-1)}
            className="text-brand-grey text-sm hover:text-brand-gold transition-colors inline-block mb-6"
            style={{ fontFamily: 'var(--font-mono-spec)' }}
          >
            Back to Products
          </button>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16">

            <div className="flex-1 relative flex flex-col items-center">
              <h1
                className={"text-brand-white text-4xl md:text-6xl font-bold text-center relative z-0 " + titleOverlapClass}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {product.name}
              </h1>
              <img
                src={product.image}
                alt={product.name}
                className={"relative z-10 w-full " + imageSizeClass + " object-contain"}
              />
            </div>

            <div className="flex-1 flex flex-col">
              <p
                className="text-brand-gold text-sm tracking-widest uppercase mb-3"
                style={{ fontFamily: 'var(--font-mono-spec)' }}
              >
                {product.category}
              </p>
              <h2
                className="text-brand-white text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {product.tagline}
              </h2>
              <p className="text-brand-grey text-base md:text-lg mb-6 max-w-md">
                {product.blurb}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {product.specs.map(function (spec) {
                  return (
                    <span
                      key={spec}
                      className="text-brand-white text-xs md:text-sm px-4 py-2 border border-brand-steel/30 rounded-full"
                      style={{ fontFamily: 'var(--font-mono-spec)' }}
                    >
                      {spec}
                    </span>
                  )
                })}
              </div>

              <Link
                to={"/products/" + product.id + "/quote"}
                state={{ backgroundLocation: location.state?.backgroundLocation || location }}
                className="bg-brand-gold text-brand-black font-medium px-6 py-3 rounded-full text-sm hover:bg-brand-gold-deep transition-colors inline-block w-fit"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get a Quote
              </Link>

            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default ProductPage
