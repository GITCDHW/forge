import React from 'react';

const WhatsAppCTA = () => {
  // It's crucial to prefix environment variables with NEXT_PUBLIC_ for client-side access in Next.js
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'; // Default for development/fallback
  const whatsappMessage = encodeURIComponent("Hello FORGE! I'm interested in your services. Can we chat?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-700 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Ready to FORGE Your Future?
        </h2>
        <p className="text-lg sm:text-xl font-light mb-8">
          Let's discuss your vision and how we can bring your MVP and brand kit to life, rapidly and effectively.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-indigo-700 bg-white hover:bg-indigo-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.557-3.843-1.557-5.881 0-5.421 4.417-9.825 9.825-9.825 2.592 0 5.068 1.018 6.946 2.893l-.001-.001c1.879 1.876 2.894 4.354 2.894 6.943 0 5.421-4.417 9.825-9.824 9.825-1.956 0-3.955-.553-5.698-1.57zm11.233-3.66c1.206 0 2.41-.35 3.447-.988l.019-.012 3.593 1.25-.989-3.486-.021-.061c.883-1.002 1.348-2.348 1.348-3.791 0-4.398-3.597-7.981-7.982-7.981s-7.982 3.583-7.982 7.981c0 4.397 3.584 7.981 7.982 7.981z" />
          </svg>
          Chat with us on WhatsApp
        </a>
        <p className="text-sm mt-6 opacity-80">
          Reach out now for a free consultation!
        </p>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
