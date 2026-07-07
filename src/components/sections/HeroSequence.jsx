import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link, useLocation } from "react-router-dom"
import coldRoomImg from "../../assets/images/Fridge3.png"
import frostVaultImg from "../../assets/images/Fridge2.png"
import { products } from "../../data/products"

gsap.registerPlugin(ScrollTrigger)

const features = [
  { title: "Premium Quality", desc: "Built with top-grade materials" },
  { title: "Custom Solutions", desc: "Tailored to your specific needs" },
  { title: "Advanced Technology", desc: "Efficient cooling with latest tech" },
  { title: "After Sales Support", desc: "Reliable support when you need it" },
]

function HeroSequence() {
  const location = useLocation()
  const sectionRef = useRef(null)
  const img1Ref = useRef(null)
  const text1Ref = useRef(null)
  const img2Ref = useRef(null)
  const text2Ref = useRef(null)
  const frostBgRef = useRef(null)
  const featuresRef = useRef(null)
  const productHeaderRef = useRef(null)
  const productOverlayRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=7400",
          scrub: 1,
          pin: true,
        }
      })

      // PHASE 1 (img1 exits, img2 enters)
      tl.to(img1Ref.current, { y: -200, scale: 0.6, opacity: 0, ease: "none", duration: 0.25 }, 0)
      tl.fromTo(img2Ref.current, { y: 250, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, ease: "none", duration: 0.25 }, 0.03)
      tl.to(frostBgRef.current, { opacity: 1, ease: "none", duration: 0.25 }, 0.05)

      // PHASE 3 (logo shrinks, text1 exits)
      const logoEl = document.getElementById("site-logo")
      tl.to(logoEl, { scale: 0.5, x: -10, y: -6, ease: "none", duration: 0.13 }, 0.35)
      tl.to(text1Ref.current, { y: -60, opacity: 0, ease: "none", duration: 0.13 }, 0.35)

      // PHASE 3b (text2 enters)
      tl.fromTo(text2Ref.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, ease: "none", duration: 0.1 }, 0.48)

      // PHASE 4 (text2 + img2 shift up to clear space)
      tl.to(text2Ref.current, { y: -160, ease: "none", duration: 0.13 }, 0.6)
      tl.to(img2Ref.current, { y: -160, ease: "none", duration: 0.13 }, 0.6)

      // PHASE 5 (features reveal one by one)
      tl.to(featuresRef.current, { opacity: 1, ease: "none", duration: 0.04 }, 0.72)
      const featurePositions = [0.78, 0.85, 0.92, 0.98]
      featurePositions.forEach((pos, i) => {
        tl.to(`.feature-item-${i}`, { opacity: 1, y: 0, ease: "none", duration: 0.08 }, pos)
      })

      // PHASE 6a: features + frost background exit — clears to pure black
      tl.to(featuresRef.current, { y: -100, opacity: 0, ease: "none", duration: 0.15 }, 1.1)
      tl.to(frostBgRef.current, { opacity: 0, ease: "none", duration: 0.15 }, 1.1)
      tl.to([text2Ref.current, img2Ref.current], { opacity: 0, ease: "none", duration: 0.15 }, 1.1)

      // PHASE 6b: "Our Products" header fades in, overlay becomes clickable
      tl.set(productOverlayRef.current, { pointerEvents: "auto" }, 1.3)
      tl.fromTo(productHeaderRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, ease: "none", duration: 0.15 }, 1.3)

      // PHASE 6c: product cards reveal one by one
      products.forEach((product, i) => {
        tl.to(`.product-card-${i}`, { opacity: 1, y: 0, ease: "none", duration: 0.12 }, 1.5 + i * 0.06)
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-brand-black overflow-hidden">
      <div
        ref={frostBgRef}
        className="absolute bottom-0 left-0 w-full h-1/2 opacity-0"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(184,188,194,0.06) 40%, rgba(184,188,194,0.12) 100%)" }}
      />

      <div className="relative z-20 min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 pt-16 md:pt-0 gap-2 md:gap-0">
        <div ref={text1Ref} className="flex-none md:flex-1 flex flex-col justify-center text-center md:text-left">
          <p className="text-brand-gold text-sm tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-mono-spec)' }}>
            Cool Track Refrigeration
          </p>
          <h1 className="text-brand-white text-5xl md:text-7xl font-bold leading-[0.95] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Refrigeration, <span className="text-brand-gold">Engineered.</span>
          </h1>
          <p className="text-brand-grey text-lg md:text-xl max-w-md">
            From display to deep freeze — precision cooling systems built for demanding environments.
          </p>
        </div>
        <div className="flex-none md:flex-1 flex items-center justify-center relative">
          <img ref={img1Ref} src={coldRoomImg} alt="Cold Room Modular Cold Storage" className="w-full max-w-sm md:max-w-xl object-contain scale-100 md:scale-125" />
        </div>
      </div>

      <div ref={text2Ref} className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center px-8 pb-84 md:pb-84 opacity-0">
        <p className="text-brand-gold text-sm tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-mono-spec)' }}>
          Storage Freezing
        </p>
        <h2 className="text-brand-white text-4xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
          Deep Capacity. <span className="text-brand-gold">Small Footprint.</span>
        </h2>
      </div>

      <img
          ref={img2Ref}
          src={frostVaultImg}
          alt="Chest Freezer"
          className="absolute bottom-20 md:bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-sm md:max-w-2xl object-contain opacity-0"
        />

      {/* Features row */}
      <div ref={featuresRef} className="absolute bottom-0 left-0 w-full z-20 bg-brand-charcoal py-6 md:py-8 px-8 md:px-16 opacity-0">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4 md:gap-y-0 md:gap-x-0">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`feature-item-${i} flex flex-col gap-1 px-4 md:px-6 opacity-0 ${i % 2 !== 0 ? "border-l border-white/10 md:border-none" : ""} ${i !== 0 ? "md:border-l md:border-white/10" : ""}`}
              style={{ transform: "translateY(20px)" }}
            >
              <p className="text-brand-gold text-sm font-medium" style={{ fontFamily: 'var(--font-heading)' }}>{f.title}</p>
              <p className="text-brand-grey text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product overview — Phase 6 */}
      <div ref={productOverlayRef} className="absolute inset-0 z-30 flex flex-col items-center justify-start md:justify-center px-8 pt-16 pb-8 md:py-0 pointer-events-none">
        <div ref={productHeaderRef} className="text-center mb-3 md:mb-10 opacity-0" style={{ transform: "translateY(40px)" }}>
          <p className="text-brand-gold text-sm tracking-widest uppercase mb-3" style={{ fontFamily: 'var(--font-mono-spec)' }}>
            Our Products
          </p>
          <h2 className="text-brand-white text-xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
            High Quality Refrigeration Solutions
          </h2>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
          {products.map((product, i) => (
            <Link key={product.id}
              to={`/products/${product.id}`}
              state={{ backgroundLocation: location }}
              className={`product-card-${i} group bg-brand-charcoal rounded-lg p-2 md:p-4 flex flex-col hover:bg-brand-charcoal/70 transition-colors opacity-0`}
              style={{ transform: "translateY(20px)" }}
            >
              <div className="flex-1 flex items-center justify-center py-4">
                <img src={product.image} alt={product.name} className="w-full h-24 md:h-32 object-contain" />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-brand-white text-xs font-medium uppercase tracking-wide" style={{ fontFamily: 'var(--font-mono-spec)' }}>
                  {product.category}
                </span>
                <span className="text-brand-gold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSequence
