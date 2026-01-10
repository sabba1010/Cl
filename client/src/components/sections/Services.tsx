import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Blocks, ShieldCheck } from "lucide-react";
import webImg from "@assets/generated_images/holographic_code_and_web_interface_elements.png";
import blockchainImg from "@assets/generated_images/abstract_glowing_3d_blockchain_cubes.png";
import itImg from "@assets/generated_images/secure_server_network_and_data_flow_visualization.png";

const services = [
  {
    title: "Web Development",
    description: "Custom, high-performance web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: Monitor,
    image: webImg,
  },
  {
    title: "Blockchain Consulting",
    description: "Expert guidance on smart contracts, DeFi protocols, and Web3 integration to secure and decentralize your operations.",
    icon: Blocks,
    image: blockchainImg,
  },
  {
    title: "IT Support & Security",
    description: "24/7 technical support, network infrastructure management, and cybersecurity solutions for peace of mind.",
    icon: ShieldCheck,
    image: itImg,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine technical excellence with industry insight to deliver solutions that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-panel border-0 overflow-hidden group hover:bg-white/5 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader className="relative z-20 -mt-6 mx-4 p-4 glass-panel rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 pb-6 px-6">
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
