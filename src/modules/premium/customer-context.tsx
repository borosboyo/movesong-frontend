import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface CustomerIdContextProps {
  customerId: string | null;
  setCustomerId: (_id: string) => void;
}

const CustomerIdContext = createContext<CustomerIdContextProps | undefined>(undefined);

export const CustomerIdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customerId, setCustomerIdState] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const storedCustomerId = localStorage.getItem('customerId');
    if (storedCustomerId) {
      setCustomerIdState(storedCustomerId);
    }
  }, []);

  // Update localStorage when customerId changes
  const setCustomerId = (id: string) => {
    setCustomerIdState(id);
    localStorage.setItem('customerId', id);
  };

  return (
    <CustomerIdContext.Provider value={{ customerId, setCustomerId }}>
      {children}
    </CustomerIdContext.Provider>
  );
};

export const useCustomerId = () => {
  const context = useContext(CustomerIdContext);
  if (!context) {
    throw new Error('useCustomerId must be used within a CustomerIdProvider');
  }
  return context;
};
