import React from 'react';

const ServiceOfferings = () => {
  const services = [
    {
      id: 1,
      title: 'Rapid MVP Development',
      description: 'Turn your idea into a functional, market-ready Minimum Viable Product (MVP) in weeks, not months. Focus on core features, swift iteration, and user validation.',
      price: 'Starting from $X,XXX',
      features: ['Core Feature Implementation', 'User Authentication', 'Basic Database Integration', 'Responsive Design', 'Deployment Assistance']
    },
    {
      id: 2,
      title: 'Complete Brand Kit Design',
      description: 'Establish a strong, consistent brand identity that resonates with your audience. We deliver everything you need to make a memorable first impression.',
      price: 'Starting from $Y,YYY',
      features: ['Logo Design', 'Color Palette', 'Typography Guidelines', 'Brand Style Guide', 'Social Media Templates']
    },
    {
      id: 3,
      title: 'MVP + Brand Kit Bundle',
      description: 'The ultimate launchpad for your business. Get both a rapid MVP and a professional brand kit at a discounted rate, designed to work seamlessly together.',
      price: 'Starting from $Z,ZZZ',
      features: ['All MVP Features', 'All Brand Kit Features', 'Integrated Design Strategy', 'Priority Support']
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Accelerated Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <div className="mb-6">
                <ul className="text-gray-700 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-gray-900 mt-auto">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
