const Contact = () => (
  <section id="contact" className="py-16 px-6 bg-blue-50 text-[#0f172a]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <p className="mb-6 text-gray-700">
        Feel free to reach out for collaboration or opportunities.
      </p>

      <form
        action="mailto:nith6shetty@gmail.com"
        method="post"
        encType="text/plain"
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-3 border rounded-md"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:scale-105 transition"
        >
          Send
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-10 text-blue-600">
        <a
          href="https://github.com/niteshshetty-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/nithesh6shetty"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:nith6shetty@gmail.com">Email</a>
      </div>
    </div>
  </section>
);

export default Contact;
