import React from 'react';

const WhatsAppCTA = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9728725259';
  
  const whatsappMessage = encodeURIComponent("Hello FORGE! I'm interested in your services. Can we chat?");
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
 <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#962525] text-[#F5F5F5]">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
      Ready to <span className="text-black">FORGE</span>?
    </h2>

    <p className="text-lg sm:text-xl text-[#F0DADA] mb-10">
      If you’re done waiting and ready to ship, let’s talk.
      We take ideas and turn them into working products—fast.
    </p>

    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        px-10 py-4
        rounded-full
        bg-[#1E1E1E]
        text-white
        text-lg
        font-semibold
        transition-all
        duration-300
        hover:bg-black
        hover:-translate-y-1
        hover:scale-105
        border border-[#2A2A2A]
      "
    >
      <svg
        className="w-6 h-6 mr-3 text-[#962525]"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.557-3.843-1.557-5.881 0-5.421 4.417-9.825 9.825-9.825 2.592 0 5.068 1.018 6.946 2.893 1.879 1.876 2.894 4.354 2.894 6.943 0 5.421-4.417 9.825-9.824 9.825-1.956 0-3.955-.553-5.698-1.57z" />
      </svg>
      Start the build on WhatsApp
    </a>

    <p className="text-sm mt-8 text-[#F0DADA] opacity-80">
      Free first conversation. No decks. No delays.
    </p>
  </div>
</section>
  );
};

export default WhatsAppCTA;
