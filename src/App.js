import React from 'react';

import './App.css';

import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import NewTransaction from './components/NewTransaction';

import { OpenProvider } from './context/Global';

function App() {
  return (
        <OpenProvider>
        <div>
        <Header /> 
        <IncomeExpense />
        <TransactionList />
        <NewTransaction />
      
        </div>
        </OpenProvider>
      
  );
}

export default App;