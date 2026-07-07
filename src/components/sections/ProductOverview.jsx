import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years of Experience" },
]

function ProductOverview() {
  const sectionRef = useRef(null)
  const numberRefs = useRef([])

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    })

    numberRefs.current.forEach((el, i) => {
      const target = stats[i].value
      const counter = { val: 0 }

      tl.to(counter, {
        val: target,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.floor(counter.val) + stats[i].suffix
        },
      })
    })
  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (
    <section ref={sectionRef} className="bg-brand-black border-t border-brand-charcoal pt-16 pb-12 md:pt-8 md:pb-8 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex flex-col">
            <span
              ref={el => numberRefs.current[i] = el}
              className="text-brand-gold text-2xl font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              0{stat.suffix}
            </span>
            <span className="text-brand-grey text-sm">{stat.label}</span>
          </div>
        ))}
        <button
          className="bg-brand-gold text-brand-black font-medium px-6 py-3 rounded-full text-sm hover:bg-brand-gold-deep transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Know More About Us
        </button>
      </div>
    </section>
  )
}

export default ProductOverview