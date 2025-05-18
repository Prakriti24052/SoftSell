export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[ 
            {
              quote: "“SoftSell made it incredibly easy to sell our unused software. We got a quote in minutes!”",
              name: "Jane Williams",
              role: "CTO, BlueMatrix",
            },
            {
              quote: "“Fast, secure, and trustworthy. I’d recommend SoftSell to anyone in IT asset management.”",
              name: "Michael Chen",
              role: "IT Manager, NovaCorp",
            },
          ].map(({ quote, name, role }, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-black/20 text-left transition-shadow duration-300"
            >
              <p className="mb-4">{quote}</p>
              <h4 className="font-semibold">{name}</h4>
              <span className="text-sm text-gray-600 dark:text-gray-400">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}