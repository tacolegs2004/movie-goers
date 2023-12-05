"use client";
import React from "react";

const LoginPage: React.FC = () => {
  const handleGoogleSignIn = () => {
    // Add Google sign in logic
    const provider = new firebase.auth.GoogleAuthProvider();
    // If successful, redirect to home page
    window.location.href = "/";
  };

  const handleFacebookSignIn = () => {
    // Add Facebook sign in logic
  };

  const handleTwitterSignIn = () => {
    // Add Twitter sign in logic
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1>Login Page</h1>
      <button
        onClick={handleGoogleSignIn}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded  transition-all duration-200"
      >
        Sign in with Google
      </button>
      <button
        onClick={handleFacebookSignIn}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-200"
      >
        Sign in with Facebook
      </button>
      <button onClick={handleTwitterSignIn}>Sign in with Twitter</button>
    </div>
  );
};

export default LoginPage;
