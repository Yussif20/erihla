import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Destination {
  regional: string[];
  local: string[];
}

interface Bundle {
  name: string;
  data: string;
  duration: string;
  cost: string;
  price: string;
}

const destinations: Destination = {
  regional: [
    'Scandinavia',
    'South America',
    'Middle East',
    'New Zealand - Australia',
    'Caribbean',
    'Europe',
    'Africa',
    'Asia',
  ],
  local: [
    'Romania',
    'Azerbaijan',
    'Slovakia',
    'Albania',
    'Singapore',
    'Iraq',
    'South Africa',
  ],
};

const bundles: Bundle[] = [
  {
    name: 'Romania Unlimited',
    data: '∞',
    duration: '30 Days',
    cost: '22.500 KD',
    price: '25.000 KD',
  },
  {
    name: 'Russia 10GB',
    data: '10GB',
    duration: '30 Days',
    cost: '8.500 KD',
    price: '10.000 KD',
  },
  {
    name: 'Russia 20GB',
    data: '20GB',
    duration: '30 Days',
    cost: '12.750 KD',
    price: '15.000 KD',
  },
  {
    name: 'Russia 3GB',
    data: '3GB',
    duration: '30 Days',
    cost: '2.550 KD',
    price: '3.000 KD',
  },
];

const DataBundlesPage: React.FC = () => {
  const [tab, setTab] = useState<'regional' | 'local'>('regional');
  const [search, setSearch] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const filteredDestinations = destinations[tab].filter((d) =>
    d.toLowerCase().includes(search.toLowerCase())
  );

  const filteredBundles = bundles.filter(
    (b) => b.name.toLowerCase().includes(search.toLowerCase()) || search === ''
  );

  const handleSelectDestination = (destination: string) => {
    setSearch(destination);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={cn(
        'p-6 space-y-6 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen',
        'mt-16 ml-64 transition-all duration-300 data-[collapsible=icon]:ml-16'
      )}
      data-collapsible={isCollapsed ? 'icon' : ''}
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
        Buy Data Bundles
      </h2>

      <Tabs value={tab} onValueChange={(value: string) => setTab(value as 'regional' | 'local')}>
        <TabsList className="grid w-full max-w-sm grid-cols-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <TabsTrigger
            value="local"
            className={cn(
              'text-sm font-medium',
              tab === 'local'
                ? 'bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300'
                : 'text-gray-600 dark:text-gray-400'
            )}
          >
            Local
          </TabsTrigger>
          <TabsTrigger
            value="regional"
            className={cn(
              'text-sm font-medium',
              tab === 'regional'
                ? 'bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300'
                : 'text-gray-600 dark:text-gray-400'
            )}
          >
            Regional
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <label
          htmlFor="destination-search"
          className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 block"
        >
          Select Destination
        </label>
        <div className="relative w-full max-w-sm">
          <Input
            id="destination-search"
            placeholder="Search destinations..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => setIsDropdownOpen(true)}
            className="w-full text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600"
            aria-autocomplete="list"
          />
          {isDropdownOpen && filteredDestinations.length > 0 && (
            <ScrollArea className="absolute z-20 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg mt-1 max-h-60 shadow-lg">
              {filteredDestinations.map((d, i) => (
                <div
                  key={i}
                  role="option"
                  aria-selected={search === d}
                  className="p-2 hover:bg-orange-100 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-300 cursor-pointer text-sm text-gray-900 dark:text-gray-200 transition-colors duration-200"
                  onClick={() => handleSelectDestination(d)}
                >
                  {d}
                </div>
              ))}
            </ScrollArea>
          )}
        </div>
      </div>

      <Card className="bg-white dark:bg-gray-800 shadow-lg border-none">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left text-sm text-gray-900 dark:text-gray-200">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="p-3 font-semibold">Bundle</th>
                  <th className="p-3 font-semibold">Data</th>
                  <th className="p-3 font-semibold">Duration</th>
                  <th className="p-3 font-semibold">Partner Cost Price</th>
                  <th className="p-3 font-semibold">USim Sell Price</th>
                  <th className="p-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBundles.map((b, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900/50 transition-colors duration-200"
                  >
                    <td className="p-3">{b.name}</td>
                    <td className="p-3">{b.data}</td>
                    <td className="p-3">{b.duration}</td>
                    <td className="p-3">{b.cost}</td>
                    <td className="p-3">{b.price}</td>
                    <td className="p-3">
                      <Button
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white"
                      >
                        Buy
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredBundles.length === 0 && (
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              No bundles found for &quot;{search}&quot;.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DataBundlesPage;