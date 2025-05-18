import { FaUpload, FaSearchDollar, FaMoneyCheckAlt } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-14">
          {[
            {
              icon: <FaUpload className="text-blue-600 dark:text-blue-400 text-5xl mb-4" />,
              title: "Upload License",
              desc: "Provide details of your unused software licenses through our simple form.",
            },
            {
              icon: <FaSearchDollar className="text-blue-600 dark:text-blue-400 text-5xl mb-4" />,
              title: "Get Valuation",
              desc: "We evaluate your license and offer you a competitive price instantly.",
            },
            {
              icon: <FaMoneyCheckAlt className="text-blue-600 dark:text-blue-400 text-5xl mb-4" />,
              title: "Get Paid",
              desc: "Once approved, you receive your payment quickly and securely.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-md dark:shadow-black/30 hover:shadow-lg dark:hover:shadow-black/50 transition-shadow duration-300"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
