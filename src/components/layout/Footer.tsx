import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="font-display font-black text-3xl tracking-tighter mb-6 block">
              URBAN<span className="text-brand-accent">EDGE</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Redefining streetwear with bold designs, premium fabrics, and an unapologetic attitude. Join the movement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">SHOP</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/men" className="hover:text-brand-white transition-colors">Men's Collection</Link></li>
              <li><Link to="/women" className="hover:text-brand-white transition-colors">Women's Collection</Link></li>
              <li><Link to="/juniors" className="hover:text-brand-white transition-colors">Juniors</Link></li>
              <li><Link to="/accessories" className="hover:text-brand-white transition-colors">Accessories</Link></li>
              <li><Link to="/sale" className="text-brand-accent hover:text-brand-accent-hover transition-colors">Clearance Sale</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">SUPPORT</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/faq" className="hover:text-brand-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/track-order" className="hover:text-brand-white transition-colors">Track Order</Link></li>
              <li><Link to="/size-guide" className="hover:text-brand-white transition-colors">Size Guide</Link></li>
              <li><Link to="/contact" className="hover:text-brand-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">STAY IN THE LOOP</h4>
            <p className="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-900 text-white px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-brand-accent"
                required
              />
              <button 
                type="submit" 
                className="bg-brand-accent text-brand-black font-bold px-6 py-3 hover:bg-brand-accent-hover transition-colors"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Urban Edge. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
