// src/pages/ForgotPassword.jsx
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      className="bg-gray-900 text-white flex flex-col md:flex-row overflow-hidden"
    >
      {/* LEFT: Info */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-800 p-8">
        <div className="text-center space-y-6">
          <Lock className="mx-auto w-16 h-16 text-yellow-400" />
          <h1 className="text-4xl font-bold">Reset Password</h1>
          <p className="text-lg text-gray-300">
            Enter your email and we’ll send you a link to reset your password.
          </p>
        </div>
      </div>

      {/* RIGHT: Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4">Forgot Password</h2>
          <p className="text-center text-gray-400 mb-6">We'll help you get back in.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Back to{' '}
            <Link to="/login" className="text-yellow-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
