export default function TrustedCompanies() {
  const companies = ['Logoipsum', 'offmax', 'LOGO IPSUM', 'logoipsum'];

  return (
    <section className="bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-white mb-8 animate-fade-in">
          Trusted by 200+ companies around the world
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center animate-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <span className="text-gray-400 font-semibold text-xl">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
