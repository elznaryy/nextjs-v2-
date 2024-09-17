import { Testimonial } from "@/types/testimonial";

const testimonials: Testimonial[] = [
  { name: "Brooklyn Simmons", company: "Manam", feedback: "Amazing service and great results!" },
  { name: "Esther Howard", company: "Offmax", feedback: "Helped us scale our lead generation effortlessly." },
  { name: "Arlene McCoy", company: "Bloopixel", feedback: "Incredible strategies that convert leads into clients." },
];

export default function Testimonials() {
  const testimonials = [
    { name: "Brooklyn Simmons", company: "Manam", feedback: "Amazing service and great results!" },
    { name: "Esther Howard", company: "Offmax", feedback: "Helped us scale our lead generation effortlessly." },
    { name: "Arlene McCoy", company: "Bloopixel", feedback: "Incredible strategies that convert leads into clients." },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Hear what our customers say :)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 animate-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <p className="mb-4 text-gray-600">"{testimonial.feedback}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
