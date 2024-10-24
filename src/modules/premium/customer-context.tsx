// src/context/CustomerIdContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CustomerIdContextProps {
  customerId: string | null;
  setCustomerId: (id: string) => void;
}

const CustomerIdContext = createContext<CustomerIdContextProps | undefined>(undefined);

export const CustomerIdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customerId, setCustomerId] = useState<string | null>(null);

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
