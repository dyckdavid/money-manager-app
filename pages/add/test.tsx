/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import {
  TextInput,
  NumberInput,
  Button,
  Flex,
} from "@mantine/core";
import { Space } from '@mantine/core';
import { Center } from '@mantine/core';
import { DatePicker } from "@mantine/dates";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import { useForm } from "@mantine/form";
import { Loader } from '@mantine/core';
import Listingback from "../components/listingback";
import { ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import Nav from '../components/navbar';
import Link from 'next/link';
import { Select } from '@mantine/core';
import Selecting from '../components/selectincomeexpense';
import Selectordavid from './test';
import add from '.'


function MyForm() {
  const [Loading, setLoading] = useState(false)
  const [Disabled, setDisable] = useState(false)
  
  const [add, setadd] = useState({name: '', description: '', income: ''})
  const onSubmit = async () => {
      setLoading(true)
      setDisable(true)
      const collectionRef = collection(db, "manager");
      
      const docRef = await addDoc(collectionRef, { ...add, timestamp: serverTimestamp() })
          setadd({ name: '', description: '', income: ''})
          
          setLoading(false)
          setDisable(false)
          
          

}






function SubmitButton(){
  if (add.name && add.description && add.income){
    return <Button  loading={Loading} onClick={onSubmit} sx={{ mt: 3 }}>Submit</Button>
  } else {
    return <Button loading={Loading} onClick={onSubmit} sx={{ mt: 3 }} disabled >Submit</Button>
  };
};




const [addexpense, setaddexpense] = useState({nameexpense: '', descriptionexpense: '', expense: ''})
const onSubmitExpense = async () => {
    setLoading(true)
    setDisable(true)
    const collectionRef = collection(db, "manager");
    
    const docRef = await addDoc(collectionRef, { ...addexpense, timestamp: serverTimestamp() })
        setaddexpense({ nameexpense: '', descriptionexpense: '', expense: ''})
        
        setLoading(false)
        setDisable(false)
        
        

}






function SubmitButtonExpense(){
if (addexpense.nameexpense && addexpense.descriptionexpense && addexpense.expense){
  return <Button  loading={Loading} onClick={onSubmitExpense} sx={{ mt: 3 }}>Submit</Button>
} else {
  return <Button loading={Loading} onClick={onSubmitExpense} sx={{ mt: 3 }} disabled >Submit</Button>
};
};

  // Declare a state variable for the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Declare a state variable for the income text field
  const [income, setIncome] = useState('');

  const [expense, setExpense] = useState('');

  // Declare a state variable for the expense text field

  // Function to handle changes to the select element
  function handleOptionChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setSelectedOption(event.target.value);
  }

  // Function to handle changes to the income text field
  function handleIncomeChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setIncome(event.target.value);
  }

    // Function to handle changes to the income text field
    function handleExpenseChange(event: { target: { value: React.SetStateAction<string>; }; }) {
      setExpense(event.target.value);
    }



  

  return (
    <Center><form>
      <label>
        
        <select value={selectedOption} onChange={handleOptionChange}>
        <option>Select</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>
      {selectedOption === 'income' && (
        <><TextInput label="Name"
        style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
         value={add.name}
         onChange={e => setadd({...add, name: e.target.value})}
         />
        <TextInput label="Description"
        style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
         value={add.description} 
         onChange={e => setadd({...add, description: e.target.value})}
         />
         <TextInput label="Income"
        style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
         value={add.income} 
         onChange={e => setadd({...add, income: e.target.value})}
         />
         <Space h={10}/>
            <Center><SubmitButton></SubmitButton></Center></>
      )}
      {selectedOption === 'expense' && (
        <><TextInput label="Name"
        style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
         value={addexpense.nameexpense}
         onChange={e => setadd({...addexpense, nameexpense: e.target.value})}
         />
        <TextInput label="Description"
        style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
         value={addexpense.descriptionexpense} 
         onChange={e => setadd({...addexpense, descriptionexpense: e.target.value})}
         />
         <TextInput label="Expense"
        style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
         value={addexpense.expense} 
         onChange={e => setadd({...addexpense, expense: e.target.value})}
         />
         <Space h={10}/>
            <Center><SubmitButtonExpense></SubmitButtonExpense></Center></>
      )}
    </form></Center>
  );
}

export default MyForm;