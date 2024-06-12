import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState();

    const {addTransaction}=useContext(GlobalContext);

    function Add(e){
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }

    function handleText(e){
        setText(e.target.value);
    }

    function handleAmount(e){
        setAmount(e.target.value);
    }

  return (
    <>
    <h3>Add New Transaction</h3>
    <form onSubmit={Add}>
        <div className='form-control'>
            <label htmlfor="text">Text</label>
            <input value={text} onChange={handleText} type="text"  placeholder="Enter Text..." />
        </div>
        <div className='form-control'>
            <label htmlFor="amount">Amount<br/>
            (negative-expense, positive-income)
            </label>
            <input value={amount} onChange={handleAmount} type="number"  placeholder="Enter Amount..." />
        </div>
        <button className='btn'>Add Transaction</button>
    </form>

    </>
  )
}

export default AddTransaction