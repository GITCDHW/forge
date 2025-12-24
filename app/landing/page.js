import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-black to-[#1E1E1E] opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            FORGE: <span className="text-[#962525]">REALITY</span>, Not Dreams.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The World's Fastest Software Agency. Blazing-fast, precise MVPs & Brand Kits.
            <br />
            Delivered <span className="text-[#962525]">Today.</span>
          </p>
          <Link href="/mvp" className="inline-block bg-[#962525] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg transform hover:scale-105">
            Forge Your MVP
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Or DM us directly on WhatsApp: <a href="https://wa.me/919748725259" target="_blank" rel="noopener noreferrer" className="text-[#962525] hover:underline">9748725259</a>
          </p>
        </div>
      </section>

      {/* Features/Pricing Section */}
      <section className="py-16 sm:py-24 px-4 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white">
            <span className="text-[#962525]">BLAZING</span> FAST. PRECISE. REAL.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

            {/* Pricing Tier 1 */}
            <div className="bg-gray-900 border border-[#962525] rounded-xl p-6 sm:p-8 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold text-[#962525] mb-4">AESTHETIC BRAND BUILD</h3>
                <p className="text-lg text-gray-200 mb-2">₹8,000</p>
                <p className="text-sm text-gray-400 mb-6">Same-Day Delivery</p>
                <ul className="text-left text-gray-300 space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> BRAND KIT
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> VISUALS DESIGN
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> BASIC NEXT.JS LANDING PAGE
                  </li>
                </ul>
              </div>
              <Link href="/mvp" className="block w-full text-center bg-[#962525] hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
                Get Started
              </Link>
            </div>

            {/* Pricing Tier 2 */}
            <div className="bg-gray-900 border border-white rounded-xl p-6 sm:p-8 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#962525] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Popular
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">12-HOUR TECH START-UP BUILD</h3>
                <p className="text-lg text-gray-200 mb-2">₹25,000</p>
                <p className="text-sm text-gray-400 mb-6">12-Hour Delivery</p>
                <ul className="text-left text-gray-300 space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> BRAND KIT + VISUALS
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> REPO & VERCEL HOSTING SETUP
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> MVP BUILD (NEXT.JS, FIREBASE & VERCEL FUNCTIONS)
                  </li>
                </ul>
              </div>
              <Link href="/mvp" className="block w-full text-center bg-white hover:bg-gray-200 text-[#1E1E1E] font-bold py-2 px-4 rounded-md transition-colors duration-300">
                Launch Now
              </Link>
            </div>

            {/* Pricing Tier 3 */}
            <div className="bg-gray-900 border border-[#962525] rounded-xl p-6 sm:p-8 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold text-[#962525] mb-4">EMERGENCY TECH START-UP LAUNCH</h3>
                <p className="text-lg text-gray-200 mb-2">₹50,000</p>
                <p className="text-sm text-gray-400 mb-6">2-3 Hours Timeline</p>
                <ul className="text-left text-gray-300 space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> MVP (NEXT.JS, FIREBASE & VERCEL)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> REPO & HOSTING SETUP
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#962525] mr-2">&#10003;</span> BRAND KIT + LAUNCH ESSENTIALS + PPTs + VISUALS
                  </li>
                </ul>
              </div>
              <Link href="/mvp" className="block w-full text-center bg-[#962525] hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
                Emergency Launch
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#1E1E1E] py-16 sm:py-24 px-4 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-[#962525]">FORGE</span> Your Reality?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Stop dreaming. Start building. We deliver tangible results, faster than anyone else.
          </p>
          <Link href="/mvp" className="inline-block bg-[#962525] hover:bg-red-800 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors duration-300 shadow-xl transform hover:scale-105">
            Initiate Forge Protocol
          </Link>
          <p className="mt-8 text-lg text-gray-400">
            For direct inquiries, <span className="text-[#962525]">DM us on WhatsApp:</span>{' '}
            <a href="https://wa.me/919748725259" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">9748725259</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 text-center text-gray-500 text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} FORGE. All Rights Reserved.</p>
          <p>
            WE DON'T SHIP "DREAMS", WE SHIP <span className="text-[#962525]">REALITY</span>.
          </p>
          <p>
            WhatsApp:{' '}
            <a href="https://wa.me/919748725259" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline">9748725259</a>
          </p>
        </div>
      </footer>
    </div>
  );
}