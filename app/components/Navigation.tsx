export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-effect rounded-full px-6 py-3">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="space-x-6">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Company</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Resources</a>
          <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}
