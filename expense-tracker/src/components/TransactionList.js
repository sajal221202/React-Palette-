import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction'; // Make sure to import your CSS file

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list scrollable-list">
        {transaction.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
