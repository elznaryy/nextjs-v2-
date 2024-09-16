const services = [
    { title: "Branding", description: "Creative branding solutions for your business." },
    { title: "Web Development", description: "High-quality websites that deliver results." },
    { title: "Digital Marketing", description: "Marketing strategies to grow your audience." },
    { title: "Mobile App", description: "Mobile applications with seamless experiences." },
    { title: "SEO", description: "Search engine optimization for better visibility." },
    { title: "User Testing", description: "Comprehensive user testing services." },
  ];
  
  export function Services() {
    return (
      <section className="w-full py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  