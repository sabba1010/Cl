export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Driving Innovation Through Technology
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                At <span className="text-primary font-bold">SkyTrades</span>, we believe technology is the bridge to the future. 
                Established with a vision to empower businesses, we specialize in comprehensive IT solutions that range from 
                foundational support to cutting-edge blockchain implementations.
              </p>
              <p>
                Our team of dedicated engineers and consultants works tirelessly to ensure your digital infrastructure 
                is not just functional, but a competitive advantage. Whether you're a startup looking to disrupt the market 
                or an enterprise seeking optimization, we are your strategic partners in growth.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center mt-8">
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Support Available</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center mt-8">
              <h3 className="text-4xl font-bold text-primary mb-2">Global</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Remote Presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
