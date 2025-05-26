import React from "react";

export default function MyAccount() {
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-500 rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-6">
        {/* User Image */}
        <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-300 border-4 border-gray-900 shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="w-full space-y-4 text-gray-900">
          {/* Name */}
          <div className="flex justify-between items-center font-semibold text-base">
            <span>Name:</span>
            <span>John Doe</span>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center font-semibold text-base">
            <div className="flex flex-col">
              <span>Email:</span>
              <span className="text-sm font-normal">john@example.com</span>
            </div>
            <button className="py-1 px-3 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-700 transition">
              Edit
            </button>
          </div>

          {/* Mobile */}
          <div className="flex justify-between items-center font-semibold text-base">
            <div className="flex flex-col">
              <span>Mobile:</span>
              <span className="text-sm font-normal">+91 9876543210</span>
            </div>
            <button className="py-1 px-3 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-700 transition">
              Edit
            </button>
          </div>

          {/* Password */}
          <div className="flex justify-between items-center font-semibold text-base">
            <span>Password:</span>
            <span>********</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3 mt-4">
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg text-lg font-bold hover:bg-blue-600 transition">
            UPDATE
          </button>
          <button className="w-full py-2 bg-red-600 cursor-pointer text-white rounded-lg text-lg font-bold transition">
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
