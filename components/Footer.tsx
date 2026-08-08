import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp, FaTelegram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>Sabuwar Kasuwa Area Tambuwal, Gudu, Kebbe, Sokoto, Nigeria</p>
          <p>
            Phone (WhatsApp):{" "}
            <a href="tel:+2348033334353" className="text-blue-400">
              +2348033334353
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:support@ssahmad.com.ng" className="text-blue-400">
              support@ssahmad.com.ng
            </a>
          </p>
          <p>Mon - Sat / 9:00 AM - 5:00 PM</p>
        </div>
        
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p>
            ssahmad.com.ng is a virtual top-up platform owned and operated by ssahmad Technologies (BN 200000).
            Registered with CAC, we provide cheap data, airtime, electricity bill payment, cable TV subscription,
            and airtime-to-cash conversion.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Airtime</a></li>
            <li><a href="#" className="hover:text-blue-400">Data</a></li>
            <li><a href="#" className="hover:text-blue-400">Cable TV</a></li>
            <li><a href="#" className="hover:text-blue-400">Electricity</a></li>
            <li><a href="#" className="hover:text-blue-400">API Documentation</a></li>
            <li><a href="#" className="hover:text-blue-400">Track Order</a></li>
            <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Support Desk</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col space-y-3 text-lg">
          <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
            <FaFacebook className="text-xl" /><span>Facebook</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
            <FaTwitter className="text-xl" /><span>Twitter (X)</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
            <FaInstagram className="text-xl" /><span>Instagram</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
            <FaTiktok className="text-xl" /><span>TikTok</span>
          </a>
          <a href="https://wa.me/+2348033334353" className="flex items-center space-x-2 hover:text-blue-400">
            <FaWhatsapp className="text-xl" /><span>WhatsApp</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
            <FaTelegram className="text-xl" /><span>Telegram</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>Copyright © 2026 ssahmad.com.ng All Rights Reserved.</p>
        <p>
          <a href="#" className="hover:text-blue-400">Terms & Conditions</a> |{" "}
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
        </p>
      </div>
    </footer>
  )
}
