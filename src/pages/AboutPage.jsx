import { useEffect, useRef } from "react"
import Navbar from "../components/layout/Navbar"
import gsap from "gsap"
import { Star } from "lucide-react"
import { reviews } from "../data/reviews"
import ProductImage1 from "../assets/images/ProductImage1.jpeg"
import ProductImage2 from "../assets/images/ProductImage2.jpeg"
import ProductImage3 from "../assets/images/ProductImage3.jpeg"
import ProductImage4 from "../assets/images/ProductImage4.jpeg"
import ProductImage5 from "../assets/images/ProductImage5.jpeg"
import ProductImage6 from "../assets/images/ProductImage6.jpeg"
import ProductImage7 from "../assets/images/ProductImage7.jpeg"
import ProductImage8 from "../assets/images/ProductImage8.jpeg"

function AboutPage() {
  const galleryRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-image", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      })
    }, galleryRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <section className="pt-32 px-8 md:px-16">
        <p className="text-brand-gold text-sm tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-mono-spec)' }}>
          Our Work
        </p>
        <h1 className="text-brand-white text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Refrigeration Systems, In the Field
        </h1>
        <p className="text-brand-grey max-w-3xl">
          A look at real installations delivered by Cool Track Refrigeration.
        </p>
      </section>

      <section className="px-8 md:px-16 py-16">
        <div ref={galleryRef} className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
          {[
            ProductImage1,
            ProductImage2,
            ProductImage3,
            ProductImage4,
            ProductImage5,
            ProductImage6,
            ProductImage7,
            ProductImage8,
          ].map((src, index) => (
            <div key={index} className="gallery-image break-inside-avoid mb-4">
              <img
                src={src}
                alt="Cool Track Refrigeration installed product"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-16 py-16 border-t border-brand-charcoal">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-gold text-sm tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-mono-spec)' }}>
            Client Reviews
          </p>
          <h2 className="text-brand-white text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            What Our Customers Say
          </h2>
          <p className="text-brand-grey mb-12">
            Real reviews from Cool Track Refrigeration's Google Maps listing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-brand-charcoal rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold shrink-0" style={{ fontFamily: 'var(--font-heading)' }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-brand-white text-sm font-medium">{review.name}</p>
                  </div>
                </div>

                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <p className="text-brand-grey text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
