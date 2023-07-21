import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Burada giriş işlemlerini yapabilirsiniz
    console.log("Kullanici adi:", username);
    console.log("Sifre:", password);
    navigate("AdminPanel")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-900">
        Dernek Web
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900">
          Log in to your account
        </h2>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            onClick={handleLogin}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log in
          </button>
        </div>
        <div className="mt-4 text-sm text-center">
          <span>Don't have an account yet?</span>
          <Link
            to="register"
            className="ml-1 text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
