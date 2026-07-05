import logo from "../../assets/images/CoolTrackLogo.png"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-3 flex items-center bg-linear-to-b from-brand-black via-brand-black/80 to-transparent pointer-events-none">
      <img 
        id="site-logo"
        src={logo} 
        alt="Cool Track Refrigeration Logo" 
        className="w-20 h-20 md:w-24 md:h-24 object-contain origin-top-left pointer-events-auto"
      />
    </nav>
  )
}

export default Navbar