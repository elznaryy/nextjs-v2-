export function ContactForm() {
    return (
      <section className="w-full py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Let’s discuss the idea</h2>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Send
          </button>
        </form>
      </section>
    );
  }
  