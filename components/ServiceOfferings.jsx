import React from 'react';

const ServiceOfferings = () => {
  const services = [
    {
      id: 1,
      title: '12 HOUR STARTUP LAUNCH',
      description: 'Turn your idea into a functional, market-ready Minimum Viable Product (MVP) in HOURS, not months. Focus on core features, swift iteration, and user validation.',
      price: 'Starting from ₹25,000',
      features: ['Core Feature Implementation', 'User Authentication', 'Firebade Integration', 'Responsive Design', 'Github & Vercel Setup','Brand Identity & Visuals Design','12 Hour Delivery']
    },
    {
      id: 2,
      title: 'AESTHETIC BRAND BUILD',
      description: 'Establish a strong, consistent brand identity that resonates with your audience. We deliver everything you need to make a memorable first impression.',
      price: 'Starting from ₹8,000',
      features: ['Logo Design', 'Color Palette', 'Typography Guidelines', 'Brand Style Guide', 'Social Media Templates']
    },
    {
      id: 3,
      title: 'EMERGENCY START-UP LAUNCH',
      description: 'GET A READY STARTUP IN 2-3 HOURS',
      price: 'Starting from ₹50,000',
      features: ['Core MVP', 'All Brand Kit Features', 'Integrated Design Strategy', 'Priority Support']
    }
  ];

  return (
<section
  id="services"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#EDEDED] mb-14">
      Our <span className="text-[#962525]">Forged</span> Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="
            bg-[#1E1E1E]
            border border-[#2A2A2A]
            rounded-lg
            p-8
            transition-all
            duration-300
            hover:border-[#962525]
            hover:-translate-y-1
          "
        >
          <h3 className="text-2xl font-bold text-[#962525] mb-4">
            {service.title}
          </h3>

          <p className="text-[#B3B3B3] mb-6">
            {service.description}
          </p>

          <div className="mb-6">
            <ul className="space-y-2 text-[#E0E0E0]">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#962525] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center border-t border-[#2A2A2A] pt-6">
            <p className="text-xl font-bold text-[#EDEDED]">
              {service.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default ServiceOfferings;
