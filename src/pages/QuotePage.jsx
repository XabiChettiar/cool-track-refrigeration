import { useState, useRef, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"
import Navbar from "../components/layout/Navbar"
import { products, company } from "../data/products"

function QuotePage() {
  const { productId } = useParams()
  const product = products.find(p => p.id === productId)
  const navigate = useNavigate()
  const scrollRef = useRef(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState(
    product ? "I'm interested in getting a quote for the " + product.name + "." : ""
  )

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [productId])

  function handleSubmit(e) {
    e.preventDefault()
    const subject = "Quote Request" + (product ? " - " + product.name : "")
    const body =
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      message
    const mailtoPart = "mailto:chettiar.bosco07@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body)
    const gmailUrl = "https://mail.google.com/mail/?extsrc=mailto&url=" + encodeURIComponent(mailtoPart)
    window.open(gmailUrl, "_blank")
  }

  return (
    <div ref={scrollRef} className="fixed inset-0 z-100 bg-brand-black overflow-y-auto">
      <Navbar />
      <section className="pt-28 pb-16 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-brand-grey text-sm hover:text-brand-gold transition-colors inline-block mb-8"
            style={{ fontFamily: 'var(--font-mono-spec)' }}
          >
            Back to Product
          </button>

          <div className="bg-brand-charcoal rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>
              <h1
                className="text-brand-white text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get a Quote
              </h1>
              <p className="text-brand-grey text-base mb-10 max-w-sm">
                {product
                  ? "Interested in the " + product.name + "? Send us a few details and we'll get back to you."
                  : "Interested in one of our systems? Send us a few details and we'll get back to you."}
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg border border-brand-steel/30 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-gold text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono-spec)' }}>
                      Email
                    </p>
                    <p className="text-brand-white text-sm">{company.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg border border-brand-steel/30 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-gold text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono-spec)' }}>
                      Phone
                    </p>
                    <p className="text-brand-white text-sm">{company.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg border border-brand-steel/30 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-gold text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono-spec)' }}>
                      Location
                    </p>
                    <a
                      href={company.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-white text-sm hover:text-brand-gold transition-colors underline underline-offset-2"
                    >
                      {company.serviceArea}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="text-brand-gold text-xs tracking-widest uppercase block mb-2"
                    style={{ fontFamily: 'var(--font-mono-spec)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full bg-brand-black border border-brand-steel/30 rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-grey focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label
                    className="text-brand-gold text-xs tracking-widest uppercase block mb-2"
                    style={{ fontFamily: 'var(--font-mono-spec)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-brand-black border border-brand-steel/30 rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-grey focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-brand-gold text-xs tracking-widest uppercase block mb-2"
                  style={{ fontFamily: 'var(--font-mono-spec)' }}
                >
                  Message
                </label>
                <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                required
                rows={3}
                className="w-full bg-brand-black border border-brand-steel/30 rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-grey focus:outline-none focus:border-brand-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-brand-gold text-brand-black font-medium py-3 rounded-lg text-sm uppercase tracking-widest hover:bg-brand-gold-deep transition-colors"
                style={{ fontFamily: 'var(--font-mono-spec)' }}
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  )
}

export default QuotePage
