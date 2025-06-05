import React from 'react';

const BalanceCard: React.FC = () => {
  // Dummy data, replace with backend endpoint data
  const balance: number = 0; // Placeholder: fetch from /api/wallet/balance

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-lg font-semibold">Total Balance</h2>
      <p className="text-2xl">{balance} KWD</p>
      <button className="mt-2 bg-blue-500 text-white p-2 rounded">
        Charge Wallet
      </button>
    </div>
  );
};

export default BalanceCard;
