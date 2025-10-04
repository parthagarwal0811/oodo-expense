import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
        Expense Manager 🧾
      </h1>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to your hackathon prototype frontend!
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Submit and view expenses</li>
          <li>Manager approvals</li>
          <li>Multi-level approval workflow</li>
          <li>OCR receipt scanning</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
