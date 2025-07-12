// src/pages/Login.jsx
import { Box } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      className="bg-gray-900 text-white flex flex-col md:flex-row overflow-hidden"
    >
      {/* LEFT: Branding */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-800 p-8">
        <div className="text-center space-y-6">
          <Box className="mx-auto w-16 h-16 text-cyan-400" />
          <h1 className="text-4xl font-bold">Smart Inventory</h1>
          <p className="text-lg text-gray-300">
            Real-time analytics. Intelligent restocking. One login away.
          </p>
        </div>
      </div>

      {/* RIGHT: Login Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
          <p className="text-center text-gray-400 mb-6">Enter your credentials to continue</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="text-right text-sm">
              <Link to="/forgot-password" className="text-red-400 hover:underline">
                Forgot password?
              </Link>
            </div>


            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-2 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don’t have an account?{' '}
            <a href="/signup" className="text-cyan-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
