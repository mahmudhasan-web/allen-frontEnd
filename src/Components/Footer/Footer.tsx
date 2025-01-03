// components/Footer.js

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-background text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center mb-4">
                {/* Replace 'logo.png' with your logo path */}
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="mr-2 w-10 h-10"
                />
                <h2 className="text-lg font-bold">Buddy&apos;s Bodega</h2>
              </div>
              <p className="text-sm leading-relaxed">
                Buddy&apos;s Bodega was born in 2018 in New York City with the
                aspiration to curate the best menu for New Yorkers by New Yorkers.
              </p>
            </div>
  
            {/* Buddy's Bodega Links */}
            <div>
              <h3 className="text-md font-semibold mb-4">BUDDY&apos;S BODEGA</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Delivery Maps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* New Members Links */}
            <div>
              <h3 className="text-md font-semibold mb-4">NEW MEMBERS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  