import ButtonMotion from '@/components/ui/ButtonMotion';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your account activity and insights.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Usage Statistics */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Usage Statistics</h2>
          <p className="text-gray-700">
            Total API Calls: <span className="font-medium text-blue-600">12,345</span>
          </p>
          <p className="text-gray-700">
            Data Stored: <span className="font-medium text-blue-600">5.2 GB</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: Just now</p>
        </div>

        {/* Card 2: Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>User `john.doe` logged in.</li>
            <li>New item "Premium Widget" created.</li>
            <li>API key `xyz123` rotated.</li>
            <li>Payment received from `Acme Corp`.</li>
          </ul>
        </div>

        {/* Card 3: Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-3">
            <ButtonMotion className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-150">
              Manage Settings
            </ButtonMotion>
            <ButtonMotion className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-150">
              View Documentation
            </ButtonMotion>
            <ButtonMotion className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-150">
              Upgrade Plan
            </ButtonMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
