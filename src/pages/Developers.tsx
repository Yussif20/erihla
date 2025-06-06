import React, { useState } from 'react';
import { Copy, BookOpen, Code, Headphones } from 'lucide-react';

const Developers: React.FC = () => {
  const [apiKey] = useState('your-api-key-12345'); // Placeholder for API key
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 px-4 min-h-screen mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-2">
          Developers Hub
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Build powerful integrations with our API. Access tools, documentation,
          and resources to get started quickly.
        </p>
      </div>

      {/* API Key Section */}
      <div className="mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
          Your API Key
        </h3>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex items-center justify-between">
          <code className="text-sm sm:text-base text-gray-800 dark:text-gray-200 truncate">
            {apiKey}
          </code>
          <button
            onClick={() => handleCopy(apiKey)}
            className="flex items-center space-x-2 px-3 py-1.5 bg-orange-500 dark:bg-orange-600 text-white rounded-lg hover:bg-orange-600 dark:hover:bg-orange-500 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 transition-all duration-200"
          >
            <Copy className="h-4 w-4" />
            <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Documentation Links */}
      <div className="mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
          Resources
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://api-docs.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-orange-100 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-300 transition-all duration-300"
          >
            <BookOpen className="dark:text-white h-6 w-6 mr-3" />
            <div>
              <h4 className="text-sm dark:text-white sm:text-base font-medium">
                API Documentation
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Explore our API endpoints and usage guides.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/example/sdks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-orange-100 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-300 transition-all duration-300"
          >
            <Code className="dark:text-white h-6 w-6 mr-3" />
            <div>
              <h4 className="dark:text-white text-sm sm:text-base font-medium">
                SDKs & Libraries
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Download SDKs for faster integration.
              </p>
            </div>
          </a>
          <a
            href="https://support.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-orange-100 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-300 transition-all duration-300"
          >
            <Headphones className="dark:text-white h-6 w-6 mr-3" />
            <div>
              <h4 className="dark:text-white text-sm sm:text-base font-medium">
                Developer Support
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Get help from our support team.
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Sample API Request */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
          Sample API Request
        </h3>
        <div className="relative bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <pre className="text-sm text-white overflow-x-auto">
            <code>
              {`curl -X GET "https://api.usim.com/v1/users" \\
  -H "Authorization: Bearer your-api-key-12345" \\
  -H "Content-Type: application/json"
`}
            </code>
          </pre>
          <button
            onClick={() =>
              handleCopy(
                `curl -X GET "https://api.usim.com/v1/users" -H "Authorization: Bearer your-api-key-12345" -H "Content-Type: application/json"`
              )
            }
            className="absolute top-4 right-4 flex items-center space-x-2 px-3 py-1.5 bg-orange-500 dark:bg-orange-600 text-white rounded-lg hover:bg-orange-600 dark:hover:bg-orange-500 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 transition-all duration-200"
          >
            <Copy className="h-4 w-4" />
            <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Developers;
