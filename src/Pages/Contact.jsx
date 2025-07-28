import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    emailjs.send(
      "service_gjxdoy9", // Your Service ID (updated)
      "template_ne4jv4v", // Your Template ID
      {
        name: form.name,
        email: form.email,
        title: form.title,
        message: form.message,
      },
      "_HYTcFWCu0FIyp30d" // Your Public Key
    )
      .then(
        (result) => {
          setSuccess("Thank you for reaching out! Your message has been sent.");
          setForm({ name: "", email: "", title: "", message: "" });
        },
        (error) => {
          setError("Sorry, there was an error sending your message. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <Header />
      <Navbar />
      <div className="flex-grow flex items-center justify-center w-full min-h-screen">
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Glassmorphism container */}
          <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Contact Me</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              autoComplete="off"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-transparent border-b-2 border-gray-500 rounded-none px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-transparent border-b-2 border-gray-500 rounded-none px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition duration-300"
                required
              />
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-transparent border-b-2 border-gray-500 rounded-none px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition duration-300"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="bg-transparent border-b-2 border-gray-500 rounded-none px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition duration-300 resize-none"
                rows={5}
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg text-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
              {success && <div className="text-green-400 text-center mt-4 text-lg">{success}</div>}
              {error && <div className="text-red-400 text-center mt-4 text-lg">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;