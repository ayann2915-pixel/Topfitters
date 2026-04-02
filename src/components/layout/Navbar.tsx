import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-brand-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4 lg:hidden">
          <button className="p-2 -ml-2 text-brand-black hover:text-gray-600 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="font-display font-black text-2xl tracking-tighter">
            URBAN<span className="text-brand-accent">EDGE</span>
          </Link>
        </div>

        {/* Desktop Logo */}
        <Link to="/" className="hidden lg:block font-display font-black text-3xl tracking-tighter">
          URBAN<span className="text-brand-accent">EDGE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-display font-bold text-sm tracking-wide">
          <Link to="/men" className="hover:text-brand-accent transition-colors">MEN</Link>
          <Link to="/women" className="hover:text-brand-accent transition-colors">WOMEN</Link>
          <Link to="/juniors" className="hover:text-brand-accent transition-colors">JUNIORS</Link>
          <Link to="/accessories" className="hover:text-brand-accent transition-colors">ACCESSORIES</Link>
          <Link to="/sale" className="text-red-600 hover:text-red-500 transition-colors">SALE</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-brand-black hover:text-brand-accent transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden sm:block p-2 text-brand-black hover:text-brand-accent transition-colors" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 text-brand-black hover:text-brand-accent transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-accent rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
