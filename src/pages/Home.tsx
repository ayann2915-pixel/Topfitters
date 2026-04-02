import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523398002811-999aa8e95707?q=80&w=2070&auto=format&fit=crop" 
          alt="Streetwear Collection" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-brand-white mb-6 tracking-tighter uppercase">
            Defy <span className="text-brand-accent">Gravity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-medium">
            The new SS26 collection has dropped. Bold silhouettes, technical fabrics, and unapologetic style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/men" 
              className="bg-brand-accent text-brand-black font-display font-bold text-lg px-8 py-4 hover:bg-brand-white transition-colors flex items-center justify-center gap-2"
            >
              SHOP MEN <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/women" 
              className="bg-brand-white text-brand-black font-display font-bold text-lg px-8 py-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              SHOP WOMEN <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Categories Grid */}
      <section className="py-20 px-4 container mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter">TRENDING NOW</h2>
          <Link to="/new" className="hidden md:flex items-center gap-2 font-bold hover:text-brand-accent transition-colors">
            VIEW ALL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category Card 1 */}
          <Link to="/category/outerwear" className="group relative h-[500px] overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop" 
              alt="Outerwear" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-display font-black text-white mb-2">OUTERWEAR</h3>
              <span className="inline-block bg-brand-white text-brand-black font-bold px-4 py-2 text-sm group-hover:bg-brand-accent transition-colors">
                SHOP NOW
              </span>
            </div>
          </Link>

          {/* Category Card 2 */}
          <Link to="/category/graphic-tees" className="group relative h-[500px] overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop" 
              alt="Graphic Tees" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-display font-black text-white mb-2">GRAPHIC TEES</h3>
              <span className="inline-block bg-brand-white text-brand-black font-bold px-4 py-2 text-sm group-hover:bg-brand-accent transition-colors">
                SHOP NOW
              </span>
            </div>
          </Link>

          {/* Category Card 3 */}
          <Link to="/category/cargo-pants" className="group relative h-[500px] overflow-hidden bg-gray-100 md:col-span-2 lg:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1994&auto=format&fit=crop" 
              alt="Cargo Pants" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-display font-black text-white mb-2">UTILITY CARGOS</h3>
              <span className="inline-block bg-brand-white text-brand-black font-bold px-4 py-2 text-sm group-hover:bg-brand-accent transition-colors">
                SHOP NOW
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Shop The Look (Interactive Section Mockup) */}
      <section className="bg-brand-black text-brand-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop" 
                alt="Shop the look" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Hotspots */}
              <div className="absolute top-[30%] left-[40%] w-6 h-6 bg-brand-accent rounded-full animate-pulse cursor-pointer border-2 border-brand-black"></div>
              <div className="absolute top-[60%] left-[50%] w-6 h-6 bg-brand-accent rounded-full animate-pulse cursor-pointer border-2 border-brand-black"></div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6">SHOP THE LOOK</h2>
              <p className="text-gray-400 mb-10 text-lg">
                Curated fits for the urban explorer. Get the complete outfit with one click.
              </p>
              
              <div className="space-y-6">
                {/* Product 1 */}
                <div className="flex items-center gap-6 bg-gray-900 p-4 hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800 hover:border-brand-accent">
                  <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=200&auto=format&fit=crop" alt="Jacket" className="w-20 h-24 object-cover" referrerPolicy="no-referrer" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg">Oversized Utility Jacket</h4>
                    <p className="text-brand-accent font-mono">$120.00</p>
                  </div>
                  <button className="bg-brand-white text-brand-black p-3 hover:bg-brand-accent transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Product 2 */}
                <div className="flex items-center gap-6 bg-gray-900 p-4 hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800 hover:border-brand-accent">
                  <img src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=200&auto=format&fit=crop" alt="Pants" className="w-20 h-24 object-cover" referrerPolicy="no-referrer" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg">Tactical Cargo Pants</h4>
                    <p className="text-brand-accent font-mono">$85.00</p>
                  </div>
                  <button className="bg-brand-white text-brand-black p-3 hover:bg-brand-accent transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <button className="mt-10 w-full bg-brand-accent text-brand-black font-display font-bold text-lg py-4 hover:bg-brand-white transition-colors">
                ADD ALL TO CART - $205.00
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
