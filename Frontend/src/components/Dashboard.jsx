// Import necessary modules
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Navigate to a different page
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: 'url(/new-background-image.jpg)' }}>
      {/* Header section */}
      <header className="w-full flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="flex items-center">
          <img src="/new-logo.png" alt="New Logo" className="h-10 w-10 mr-3" />
          <span className="text-2xl font-bold">Quizler</span>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={() => handleNavigate('/login')}
        >
          Login
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold mb-4">Discover Your Next Challenge!</h1>
        <p className="text-lg mb-8 max-w-xl">
          Dive into a world of quizzes designed to test your knowledge and have fun. Start your journey now!
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg"
          onClick={() => handleNavigate('/explore')}
        >
          Get Started
        </button>
      </main>

      {/* Footer section */}
      <footer className="w-full bg-gray-800 py-4 mt-auto flex justify-center space-x-6">
        <i className="text-2xl">🌟</i>
        <i className="text-2xl">🧠</i>
        <i className="text-2xl">🏆</i>
      </footer>
    </div>
  );
};

export default Dashboard;
