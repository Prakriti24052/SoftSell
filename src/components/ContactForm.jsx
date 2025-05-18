import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", licenseType: "", message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted (mock only)");
  };

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md dark:shadow-none rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" className="text-gray-500 dark:text-gray-400">
              Select License Type
            </option>
            <option value="Windows">Windows</option>
            <option value="Office">Office</option>
            <option value="Adobe">Adobe</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}
