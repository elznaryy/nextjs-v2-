export default function ContactForm() {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-md mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-8">Let's discuss the idea</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    );
}
