import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
        <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="lg:w-2/3 md:w-1/2 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0"
        >
          
          <input type="hidden" name="form-name" value="contact" />
         <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }} 
                                >
          <BriefcaseIcon className="w-10 mb-2 block mx-auto" />
          <h1 className="sm:text-5xl text-4xl font-baloo font-medium text-gray-800 mb-4 text-center">
            Hire Me
          </h1>
          <p className="font-mono text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center text-gray-600">
    If you'd like to get in contact for <span className="text-emerald-600 font-semibold">potential opportunities</span>, feel free to fill out this form!
  </p>
          </motion.div>

          <div className="relative mb-4">
            <label htmlFor="name" className="font-mono text-sm font-bold text-gray-700 mb-1 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-base font-mono outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
  {/* LABEL: Switched to Mono and semi-bold for a technical look */}
  <label htmlFor="email" className="font-mono text-sm font-bold text-gray-700 mb-1 block">
    Email
  </label>
  
  {/* INPUT: Removed amber, added emerald focus ring and Mono font */}
  <input
    type="email"
    id="email"
    name="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full bg-white border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-base font-mono outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
  />
</div>

          <div className="relative mb-4">
  {/* LABEL: Consistent Mono style */}
  <label htmlFor="message" className="font-mono text-sm font-bold text-gray-700 mb-1 block">
    Message
  </label>
  
  {/* TEXTAREA: Removed amber, added emerald focus ring and Mono font */}
  <textarea
    id="message"
    name="message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="w-full bg-white border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 h-32 text-base font-mono outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-all duration-200 ease-in-out"
  />
</div>

          <button
  type="submit"
  className="text-white font-mono font-bold uppercase tracking-widest bg-gray-800 border-0 py-3 px-10 focus:outline-none hover:bg-emerald-600 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-emerald-200/50"
>
  Submit
</button>
        </form>
      </div>
    </section>

  );
}
