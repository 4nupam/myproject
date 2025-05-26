import React from 'react';

const Tc = ({ onClose }) => {
  const date = new Date().toLocaleDateString();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 px-4" onClick={onClose}>
      <div className="bg-amber-100 opacity-95 rounded-2xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 text-gray-800 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        <h1 className="text-2xl md:text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: {date}</p>

        <div className="space-y-6 text-base leading-relaxed">
          <div>
            <h2 className="font-semibold text-lg">Account Responsibility</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account information and for all activities under your account. Please ensure your login credentials are secure.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Use of Service</h2>
            <p>
              You agree to use this website and its services only for lawful purposes. Any misuse, unauthorized access, or illegal activity may result in termination of your account.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Privacy</h2>
            <p>
              Your personal information will be handled in accordance with our Privacy Policy. We do not share your data with third parties without your consent, except as required by law.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Modifications</h2>
            <p>
              We reserve the right to update or change these terms at any time. Continued use of the service after changes are made will constitute acceptance of those changes.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at our discretion, without notice, if any of the terms are violated.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Contact</h2>
            <p>
              If you have any questions or concerns regarding these terms, please contact us at <a href="mailto:4.anupamupadhyay@gmail.com" className="text-blue-600 underline">4.anupamupadhyay@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tc;
