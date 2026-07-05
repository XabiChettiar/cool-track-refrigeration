import fridge1 from "../assets/images/Fridge1.png"
import fridge2 from "../assets/images/Fridge2.png"
import fridge3 from "../assets/images/Fridge3.png"
import fridge4 from "../assets/images/Fridge4.png"
import fridge5 from "../assets/images/Fridge5.png"

export const products = [
  {
    id: "cake-display-counter",
    name: "Cake Display Counter",
    category: "Display Refrigeration",
    tagline: "Showcase-ready. Every shelf.",
    blurb: "Engineered for bakeries and patisseries — full visibility, even illumination, consistent holding temperature across every shelf.",
    specs: ["180L Capacity", "3-Tier LED Shelving", "2°C – 8°C"],
    image: fridge1
  },
  {
    id: "chest-freezer",
    name: "Chest Freezer",
    category: "Storage Freezing",
    tagline: "Deep capacity. Small footprint.",
    blurb: "Maximum frozen storage without the floor space penalty — split-lid access keeps cold air in while you work.",
    specs: ["500L Gross Capacity", "Dual Independent Lids", "-18°C to -22°C"],
    image: fridge2
  },
  {
    id: "cold-room",
    name: "Cold Room",
    category: "Cold Storage Rooms",
    tagline: "Built to hold the line.",
    blurb: "Prefabricated, insulated, and built for daily heavy-duty use — the backbone of any serious cold chain operation.",
    specs: ["6m² Modular Footprint", "Insulated Panel Build", "-5°C to 5°C"],
    image: fridge3
  },
  {
    id: "aerocore-12",
    name: "CTR AeroCore 12",
    category: "Condensing Units",
    tagline: "The engine behind the cold.",
    blurb: "The mechanical heart of your refrigeration system — engineered for continuous duty and outdoor reliability.",
    specs: ["12HP Compressor", "Dual Fan Array", "Weatherproof Housing"],
    image: fridge4
  },
  {
    id: "1tr-20tr-chiller",
    name: "1TR to 20TR Chiller",
    category: "Process Chillers",
    tagline: "Precision cooling, engineered.",
    blurb: "Where exact temperature control matters — built for process cooling that can't afford to drift.",
    specs: ["1TR – 20TR Capacity Range", "Programmable Set Points", "Compact Industrial Housing"],
    image: fridge5
  }
]

export const company = {
  name: "Cool Track Refrigeration",
  shortName: "CTR",
  tagline: "Engineered Cold. Built to Last.",
  founded: "2010",
  serviceArea: "Cool Track Refrigeration, Bhayander",
  email: "infocooltrack@yahoo.com",
  phone: "+91 98701 74622",
  mapsLink: "https://maps.app.goo.gl/v5Rn2XSxjF3oUmnF8"
}