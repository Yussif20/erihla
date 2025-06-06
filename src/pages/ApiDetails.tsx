import React, { useState } from 'react';
import { Eye, EyeOff, Copy, RefreshCcw } from 'lucide-react';

const ApiDetails: React.FC = () => {
  const [showToken, setShowToken] = useState(false);
  const [token] = useState('sk_***********************');
  const [callbackUrl, setCallbackUrl] = useState('');
  const [callbackVersion, setCallbackVersion] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefresh = () => {
    console.log('Refreshing token...');
  };

  const handleSave = () => {
    console.log('Saving callback settings:', { callbackUrl, callbackVersion });
  };

  return (
    <div className="min-h-screen px-4 mx-auto">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200">
          Usim API Details
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Instructions on how to authenticate and use the uSIM API can be found{' '}
          <a
            href="#"
            className="text-orange-500 dark:text-orange-400 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            here
          </a>
          .
        </p>
      </div>

      {/* API Token */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          API Token
        </label>
        <div className="flex gap-2 items-center">
          <input
            type={showToken ? 'text' : 'password'}
            value={token}
            readOnly
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200"
          />
          <button
            className="p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                hover:bg-gray-100 dark:hover:bg-gray-700 
                focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 
                transition-all duration-200"
            onClick={() => setShowToken(!showToken)}
          >
            {showToken ? (
              <EyeOff className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            ) : (
              <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            )}
          </button>
          <button
            className="p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                hover:bg-gray-100 dark:hover:bg-gray-700 
                focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 
                transition-all duration-200 flex items-center space-x-1"
            onClick={handleCopy}
          >
            <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {copied ? 'Copied!' : ''}
            </span>
          </button>
        </div>
      </div>

      {/* Refresh Token */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Refresh API Token
        </label>
        <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg text-sm">
          ⚠️ Warning: Once an API Token has been refreshed, the old token will
          no longer be usable.
        </div>
        <button
          className="mt-3 flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg 
              text-sm text-gray-900 dark:text-gray-200 
              hover:bg-gray-300 dark:hover:bg-gray-600 
              focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-300 
              transition-all duration-200"
          onClick={handleRefresh}
        >
          <RefreshCcw className="w-4 h-4" /> Refresh Token
        </button>
      </div>

      {/* Callback Settings */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Callback URL
        </label>
        <input
          type="text"
          placeholder="https://yourdomain.com/webhook"
          value={callbackUrl}
          onChange={(e) => setCallbackUrl(e.target.value)}
          className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
              bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
              focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
              focus:border-orange-500 dark:focus:border-orange-400 
              transition-all duration-200"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Callback Version
        </label>
        <input
          type="text"
          placeholder="v1"
          value={callbackVersion}
          onChange={(e) => setCallbackVersion(e.target.value)}
          className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
              bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
              focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
              focus:border-orange-500 dark:focus:border-orange-400 
              transition-all duration-200"
        />
      </div>

      <button
        className="px-6 py-2.5 bg-orange-500 dark:bg-orange-600 text-white 
            rounded-lg shadow-md hover:bg-orange-600 dark:hover:bg-orange-500 
            focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 
            transition-all duration-200 text-sm sm:text-base"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
};

export default ApiDetails;
