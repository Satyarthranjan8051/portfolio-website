
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
    <div className="flex flex-col min-h-screen bg-main font-mono text-white">
      <Header />
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-2 py-12">
        <h1 className="text-3xl font-bold mb-8 text-yellow-400 drop-shadow-lg">Contact</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex flex-col gap-6"
          autoComplete="off"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition"
            required
          />
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Subject"
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-xl mt-2 text-lg hover:bg-yellow-400 transition-colors duration-200"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {success && <div className="text-green-400 text-center mt-2">{success}</div>}
          {error && <div className="text-red-400 text-center mt-2">{error}</div>}
        </form>
    </div>
  </div>
  );
};

export default Contact;
