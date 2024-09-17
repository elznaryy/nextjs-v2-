import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustedCompanies from './components/Trusted companies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <Navigation />
      <Hero />
      <TrustedCompanies />
      <Services />
      <Testimonials />
      <ContactForm />
    </main>
  );
}