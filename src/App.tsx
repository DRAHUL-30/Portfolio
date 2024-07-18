// import React from 'react';
// import './App.css'

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="w-[80%] h-[80%] bg-white text-4xl font-bold text-gray-800">
//         ?
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-gray-700"
        // style={{
        //   backgroundImage:
        //     "url('https://www.mnpartners.kz/images/home-bg11.png')",
        // }}
      ></div>

      {/* Content wrapper */}
      <div className="flex w-full z-10 relative">
        {/* Sidebar */}
        <div className="w-16bg-opacity-80 flex flex-col items-center justify-center px-3">
          <div className="flex flex-col items-center space-y-6 py-6">
            <button className="p-3 bg-blue-600 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="w-1/2 p-12">
            <h1 className="text-5xl font-bold text-white mb-4 shadow-text">
              Rahul
            </h1>
            <p className="text-xl text-white mb-6 shadow-text">
              I'm Software Developer
            </p>
            <div className="flex space-x-4">
              <FaTwitter
                className="text-white hover:text-blue-400 cursor-pointer"
                size={24}
              />
              <FaFacebookF
                className="text-white hover:text-blue-600 cursor-pointer"
                size={24}
              />
              <FaInstagram
                className="text-white hover:text-pink-600 cursor-pointer"
                size={24}
              />
              <FaLinkedinIn
                className="text-white hover:text-blue-700 cursor-pointer"
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;