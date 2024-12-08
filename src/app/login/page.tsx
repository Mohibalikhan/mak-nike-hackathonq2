import React from 'react';


const Login = () => {
  return (
    <div id="Login" className="bg-white w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <div className="text-center mb-8  ">
          <img src="NIKE.png" alt="Nike Logo" className="w-20 h-20 " />
          <h2 className="text-2xl font-bold text-gray-800">YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
        </div>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <input type="checkbox" id="remember" className="form-checkbox text-gray-700" />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Keep me signed in
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgotten your password?
            </a>
          </div>
          <button
            type="submit"></button>
            <a href="#" className="bg-black block text-center text-xl text-white hover:text-blue-300">
              Sign Up
            </a>
        </form>
      </div>
    </div>
  );
}
export default Login;