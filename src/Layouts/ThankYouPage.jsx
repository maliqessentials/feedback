// eslint-disable-next-line no-unused-vars
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
      <h1 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        THANK YOU!
      </h1>
      <div className="text-green-500 text-5xl md:text-6xl mb-4">✔️</div>
      <p className="font-poppins text-base md:text-lg text-gray-600 mb-4 text-center">
        Thank you for your Feedback!
      </p>
      <p className="text-base md:text-lg text-gray-600 mb-4 text-center">
        We appreciate your input and will use it to improve our services. Your
        support means a lot to us.
      </p>
    </div>
  );
};

export default ThankYouPage;