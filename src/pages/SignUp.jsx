// src/pages/Signup.jsx
import { UserPlus } from 'lucide-react';

export default function Signup() {
  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      className="bg-gray-900 text-white flex flex-col md:flex-row overflow-hidden"
    >
      {/* LEFT: Branding Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-800 p-8">
        <div className="text-center space-y-6">
          <UserPlus className="mx-auto w-16 h-16 text-cyan-400" />
          <h1 className="text-4xl font-bold">Create Account</h1>
          <p className="text-lg text-gray-300">
            Join Smart Inventory for seamless stock intelligence.
          </p>
        </div>
      </div>

      {/* RIGHT: Signup Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
          <p className="text-center text-gray-400 mb-6">Enter your details to get started</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Username</label>
              <input
                type="text"
                required
                placeholder="yourusername"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-cyan-400 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
