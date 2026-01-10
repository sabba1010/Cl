import logo from "@assets/e26f3825-8deb-481b-9445-6590bcc9760e_1765438481275.jpg";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="SkyTrades" className="h-12 w-auto rounded-md" />
            </a>
            <p className="text-gray-500 mt-2 text-sm ml-2">
              Innovating the digital future.
            </p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} SkyTrades. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
