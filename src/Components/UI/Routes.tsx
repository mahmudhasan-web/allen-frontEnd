import flower from '@/assests/Mask group.png'
import Edibles from '@/assests/chocolate-bar.png'
import Vapes from '@/assests/Mask group (2).png'
import Concentrates from '@/assests/Mask group (3).png'
import PreRolls from '@/assests/Mask group (4).png'
import Accessories from '@/assests/Mask group (5).png'
import home from '@/assests/home.png'
import destination from '@/assests/destination.png'
import product from '@/assests/product.png'
import sell from '@/assests/sell.png'
import packages from '@/assests/package.png'
import search from '@/assests/search (1).png'
import newProduct from '@/assests/new-product.png'
import { StaticImageData } from 'next/image'


interface route {
    route : string,
    title : string
    icon : StaticImageData | null
}

export const Routes : route[] = [
    {
      "route": "",
      "title": "Home",
      "icon": home
    },
    {
      "route": "/products",
      "title": "Products",
      "icon": product
    },
    {
      "route": "/delivery-map",
      "title": "Delivery Map",
      "icon": destination
    },
    {
      "route": "/products/flowers",
      "title": "Flowers",
      "icon": flower
    },
    {
      "route": "/products/edibles",
      "title": "Edibles",
      "icon": Edibles
    },
    {
      "route": "/products/vapes",
      "title": "Vapes",
      "icon": Vapes
    },
    {
      "route": "/products/concentrates",
      "title": "Concentrates",
      "icon": Concentrates
    },
    {
      "route": "/products/pre-rolls",
      "title": "Pre-Rolls",
      "icon": PreRolls,
    },
    {
      "route": "/products/accessories",
      "title": "Accessories",
      "icon": Accessories
    },
    {
      "route": "/merchandise",
      "title": "Merchandise",
      "icon": packages
    },
    {
      "route": "/sale",
      "title": "Sale",
      "icon": sell
    },
    {
      "route": "/new-releases",
      "title": "New Releases",
      "icon": newProduct
    },
    {
      "route": "/product-locator",
      "title": "Product Locator",
      "icon": search
    },
    {
      "route": "/about",
      "title": "About",
      "icon": null
    },
    {
      "route": "/contact-us",
      "title": "Contact Us",
      "icon": null
    }
  ]
  