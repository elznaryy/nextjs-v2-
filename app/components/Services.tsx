export default function Services() {
  const services = [
    { title: "Branding", description: "Creative branding solutions for your business." },
    { title: "Web Development", description: "High-quality websites that deliver results." },
    { title: "Digital Marketing", description: "Marketing strategies to grow your audience." },
    { title: "Mobile App", description: "Mobile applications with seamless experiences." },
    { title: "SEO", description: "Search engine optimization for better visibility." },
    { title: "User Testing", description: "Comprehensive user testing services." },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 animate-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
