import { FaLock, FaRocket, FaThumbsUp, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8 text-left">
          {[
            {
              icon: <FaLock className="text-blue-600 dark:text-blue-400 text-3xl mb-4" />,
              title: "Secure Transactions",
              desc: "Your data and payments are protected with industry-grade security.",
            },
            {
              icon: <FaRocket className="text-blue-600 dark:text-blue-400 text-3xl mb-4" />,
              title: "Fast Process",
              desc: "Get quotes and receive payments faster than ever.",
            },
            {
              icon: <FaThumbsUp className="text-blue-600 dark:text-blue-400 text-3xl mb-4" />,
              title: "Top Value",
              desc: "We offer fair market pricing based on license condition and demand.",
            },
            {
              icon: <FaHeadset className="text-blue-600 dark:text-blue-400 text-3xl mb-4" />,
              title: "24/7 Support",
              desc: "Need help? Our support team is available anytime you need us.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-black/20 transition-shadow duration-300"
            >
              {icon}
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
