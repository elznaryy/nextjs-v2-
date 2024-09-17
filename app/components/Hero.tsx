export default function Hero() {
    return (
      <section className="pt-32 pb-20 px-6 text-center text-white grid-background min-h-screen flex flex-col justify-center">
        <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h1 className="text-6xl font-bold mb-6">
            Attract <span className="text-pink-500">NewLeads</span><br />
            like never before
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Transform Your Lead Generation with AI-Driven Business Strategies. Get personalized POCs and cold email outreach strategies that convert leads into clients, effortlessly.
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300 transform hover:scale-105">
            ATTRACT
          </button>
        </div>
      </section>
    );
  }
