import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
}