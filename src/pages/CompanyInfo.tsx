import React, { useState } from 'react';

const CompanyInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    registeredName: 'Yusuf.code',
    tradingName: '',
    address: '',
    townCity: '',
    postCode: '',
    website: '',
    productDescription: '',
    country: 'Egypt',
    businessType: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6">
        Company Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Company Registered Name */}
          <div>
            <label
              htmlFor="registeredName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Company Registered Name
            </label>
            <input
              type="text"
              id="registeredName"
              name="registeredName"
              value={formData.registeredName}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200"
            />
          </div>

          {/* Company Trading Name */}
          <div>
            <label
              htmlFor="tradingName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Company Trading Name
            </label>
            <input
              type="text"
              id="tradingName"
              name="tradingName"
              value={formData.tradingName}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200"
            />
          </div>

          {/* Town/City */}
          <div>
            <label
              htmlFor="townCity"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Town/City
            </label>
            <input
              type="text"
              id="townCity"
              name="townCity"
              value={formData.townCity}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200"
            />
          </div>

          {/* PostCode/Zip */}
          <div>
            <label
              htmlFor="postCode"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              PostCode/Zip
            </label>
            <input
              type="text"
              id="postCode"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200"
            />
          </div>

          {/* Company Website */}
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Company Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200"
            />
          </div>

          {/* Product Description */}
          <div className="sm:col-span-2">
            <label
              htmlFor="productDescription"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Product Description
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              rows={4}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200 resize-y"
            />
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Country
            </label>
            <div className="relative">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200 appearance-none"
              >
                <option value="Egypt">Egypt</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Type of Business */}
          <div>
            <label
              htmlFor="businessType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Type of Business
            </label>
            <div className="relative">
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200 appearance-none"
              >
                <option value="">Please Select</option>
                <option value="LLC">LLC</option>
                <option value="Corporation">Corporation</option>
                <option value="Partnership">Partnership</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="px-6 py-2.5 bg-orange-500 dark:bg-orange-600 text-white 
              rounded-lg shadow-md hover:bg-orange-600 dark:hover:bg-orange-500 
              focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 
              transition-all duration-200 text-sm sm:text-base"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfo;
