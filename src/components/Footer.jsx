import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="md:col-span-1">
          <h1 className="text-2xl font-bold text-white">SoftSell</h1>
        </div>

        {/* Link columns */}
        {[
          { title: "SoftSell", links: ["About Us", "Editions", "Investors", "Sustainability"] },
          { title: "Ecosystem", links: ["Docs", "Theme Store", "Partners", "Affiliates"] },
          { title: "Resources", links: ["Blog", "Guides", "Courses", "Tools"] },
          { title: "Support", links: ["Help Center", "Forum", "Contact", "Status"] },
        ].map((col, i) => (
          <div className="space-y-3" key={i}>
            <h3 className="font-semibold text-white">{col.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {col.links.map((link, j) => (
                <li key={j}>
                  <a href="#" className="hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          {/* Language */}
          <div className="flex items-center gap-2 text-gray-400">
            <GlobeAltIcon className="w-5 h-5" />
            <span>India | English</span>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-500">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTiktok className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaPinterestP className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
    </footer>
  );
}
