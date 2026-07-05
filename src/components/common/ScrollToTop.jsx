import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

function ScrollToTop() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // Product pages are self-scrolling overlays and manage their own scroll
    if (location.pathname.startsWith("/products/")) return

    // Don't reset scroll when navigating via back/forward —
    // this is what preserves HomePage's scroll position when
    // returning from a product overlay
    if (navigationType === "POP") return

    window.scrollTo(0, 0)
  }, [location.pathname, navigationType])

  return null
}

export default ScrollToTop