import React from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

const EmailSubscription = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 md:p-10 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Stay Updated!
        </h2>
        <p className="text-gray-600 max-w-xl text-base md:text-lg">
          Subscribe to our newsletter to get the latest services, exclusive offers, and expert insights directly in your inbox.
        </p>

        {/* Input + Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg mt-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <PrimaryBtn label="Subscribe" />
        </div>

        <div className="mt-4">
          <SecondaryBtn label="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
