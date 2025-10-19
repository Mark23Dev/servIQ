function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a0033] to-[#0d001a] text-white py-12 font-sans relative overflow-hidden">
      
      {/* Starry background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-10 pointer-events-none"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-y-12">
          
          {/* ServIQ Column - left */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">ServIQ</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              A sleek and modern template designed to help emerging businesses and startups create a professional online presence.
            </p>
          </div>

          {/* Pages - center */}
          <div className="md:w-1/3 flex justify-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">PAGES</h3>
              <ul className="space-y-2 text-sm text-center">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Testimonials</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Marketplace</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media - right */}
          <div className="md:w-1/3 flex justify-end">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-right">SOCIAL MEDIA</h3>
              <ul className="space-y-5 text-sm text-right">
                <li><a href="#" className="hover:underline">X</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Discord</a></li>
                <li><a href="#" className="hover:underline">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="mt-12 text-center text-xm text-gray-400">
          © {new Date().getFullYear()} Designed by FusionForceTeam.
        </div>
      </div>
    </footer>
  );
}
export default Footer;