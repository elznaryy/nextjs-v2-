import { Testimonial } from "@/types/testimonial";

const testimonials: Testimonial[] = [
  { name: "Brooklyn Simmons", company: "Manam", feedback: "Amazing service and great results!" },
  { name: "Esther Howard", company: "Offmax", feedback: "Helped us scale our lead generation effortlessly." },
  { name: "Arlene McCoy", company: "Bloopixel", feedback: "Incredible strategies that convert leads into clients." },
];

export function Testimonials() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Hear what our customers say :)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ name, company, feedback }) => (
          <div key={name} className="p-6 bg-white rounded-lg shadow-lg">
            <p className="mb-4">{feedback}</p>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
