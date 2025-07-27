import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";

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
          {/* Hidden input for form identification */}
          <input type="hidden" name="form-name" value="contact" />

          <BriefcaseIcon className="w-10 mb-2 block mx-auto" />
          <h1 className="sm:text-4xl text-3xl font-medium font-mono text-gray-800 mb-4 text-center">
            Hire Me
          </h1>
          <p className="leading-relaxed mb-5 text-center">
            If you'd like to get in contact for potential opportunities, feel
            free to fill out this form!
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/80 hover:bg-amber-50 border-4 border-amber-200 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/80 hover:bg-amber-50 border-4 border-amber-200 rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white/80 hover:bg-amber-50 border-4 border-amber-200 rounded border focus:border-indigo-500 focus:ring-indigo-900 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
