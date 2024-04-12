import React from "react";

const services = [
  "Food Distribution",
  "Community Meals",
  "Nutrition Education",
  "Volunteer Opportunities",
];
const contacts = [
  "General Inquiries",
  "Donation Queries",
  "Volunteer Coordination",
  "Media Inquiries",
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 md:py-24 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-0">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-gray-700">Nourish<span className="text-gray-500 font-bold">together</span></p>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Our Services</h2>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="text-gray-600">
                <a href="#" className="hover:underline">{service}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Contact Us</h2>
          <ul className="space-y-2">
            <li className="text-gray-600">
              Address: 123 Main Street, Anytown, USA
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 3a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10zm0 0V5l3.5 3.5m0 0L15 12m3.5-3.5L15 5m3.5 3.5l-3.5 3.5"
                />
              </svg>
              <p>+23491 6833 1282</p>
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 3c1.306 0 2.31.663 2.88 1.579C20.903 5.494 21 6.702 21 8v11c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V8c0-1.298.097-2.506.12-2.421C4.69 3.663 5.694 3 7 3h10zM5 5c-.668 0-1 .332-1 1v11c0 .668.332 1 1 1h12c.668 0 1-.332 1-1V6c0-.668-.332-1-1-1H5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14s1 2.5 3 2.5s3-2.5 3-2.5"
                />
              </svg>
              <a href="#" className="hover:underline">info@nourishtogether.org</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
