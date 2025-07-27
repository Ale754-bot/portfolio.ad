import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className=" text-white py-20 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          ¡Hablemos!
        </motion.h2>
        <p className="text-gray-400 mb-10">
          Si tenés alguna consulta, propuesta o simplemente querés saludar, podés escribirme directamente desde acá.
        </p>

        <form className="relative z-10 max-w-3xl mx-auto mt-24 bg-gradient #585858, #0f0f0f border border-[#1D2233] rounded-xl shadow-[0_0_25px_#00FFC320] p-8">
          <div>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              rows="5"
              placeholder="Tu mensaje"
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-[#13D6A3] to-[#00FFC3] hover:bg-blue-700 transition text-black py-3 px-6 rounded-xl font-semibold"
          >
            Enviar mensaje
          </motion.button>
        </form>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
  <a
    href="mailto:tucorreo@gmail.com"
    className="p-3 rounded-full bg-[#00FFC3]/10 hover:bg-[#00FFC3]/20 transition"
    aria-label="Gmail"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M20 4H4C2.9 4 2 .9 2 2v20l4-4h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
    </svg>
  </a>

  <a
    href="https://github.com/tuusuario"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#00FFC3]/10 hover:bg-[#00FFC3]/20 transition"
    aria-label="GitHub"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 1.7 2.6 1.2.1-.7.4-1.2.8-1.5-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.3 0-.3-.6-1.3.1-2.8 0 0 1-.3 3.3 1.3a11.4 11.4 0 016 0C17 5.2 18 5.5 18 5.5c.6 1.5.1 2.5.1 2.8a5 5 0 011.2 3.4c0 4.4-2.8 5.4-5.4 5.7.4.3.8 1 .8 2v2.9c0 .3.2.7.8.6A12 12 0 0012 .5z" />
    </svg>
  </a>

  <a
    href="https://linkedin.com/in/tuusuario"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#00FFC3]/10 hover:bg-[#00FFC3]/20 transition"
    aria-label="LinkedIn"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5S3.34 9.5 4.98 9.5 8 8.15 8 6.5 6.62 3.5 4.98 3.5zM2 20h6V10H2v10zM9 10v10h6v-5.4c0-3.1 4-3.3 4 0V20h6v-6.8c0-6.1-6.6-5.9-8-2.9V10H9z" />
    </svg>
  </a>

  <a
    href="https://wa.me/5411999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#00FFC3]/10 hover:bg-[#00FFC3]/20 transition"
    aria-label="WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512" className="w-6 h-6">
      <path d="M380.9 97.1C339.2 55.4 284.4 32 224.2 32c-114.9 0-208 93.1-208 208 0 36.5 9.5 72.1 27.6 103.3L7.1 480l139.7-36.7C179.7 458.5 201.4 464 224.2 464c114.9 0 208-93.1 208-208 0-60.2-23.4-115-66.1-158.9zM224.2 392c-19.3 0-38.1-5.2-54.6-15.1l-8.4-5-82.7 21.8 22.1-80-5.2-8.3c-12.7-20.3-19.4-43.7-19.4-67.4 0-82.4 67.1-149.5 149.5-149.5 39.9 0 77.5 15.5 105.8 43.8 28.2 28.2 43.8 65.9 43.8 105.8 0 82.4-67.1 149.5-149.5 149.5zm90.6-112.3l-27.2-7.7c-3.7-1.1-7.8-.2-10.6 2.5l-13.7 12.7c-35.8-17.1-59-40.2-75.8-75.8l12.7-13.7c2.8-2.8 3.8-6.8 2.5-10.6l-7.7-27.2c-1.5-5.5-7-8.9-12.5-7.7l-25.5 5.6c-4.9 1.1-8.7 5-9.8 9.9-2.6 11.3-4 23-4 34.7 0 70.7 57.7 128.4 128.4 128.4 11.7 0 23.4-1.3 34.7-4 4.9-1.1 8.8-4.9 9.9-9.8l5.6-25.5c1.2-5.5-2.2-11-7.7-12.5z" />
    </svg>
  </a>

  <a
    href="https://facebook.com/tuusuario"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#00FFC3]/10 hover:bg-[#00FFC3]/20 transition"
    aria-label="Facebook"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.51 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.85h2.77l-.44 2.89h-2.33V22c4.78-.75 8.44-4.88 8.44-9.88z" />
    </svg>
  </a>
</div>

      </div>
    </section>
  );
}