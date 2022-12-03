import {
    TextInput,
    NumberInput,
    Button,
    Flex,
  } from "@mantine/core";
  import { Space } from "@mantine/core";
  import { DatePicker } from "@mantine/dates";
  import {
    collection,
    addDoc,
    serverTimestamp,
  } from "firebase/firestore";
  import { db } from "../../firebase/clientApp";
  import { useForm } from "@mantine/form";
  import { Loader } from '@mantine/core';
import { useState } from "react";
import { Center } from "@mantine/core";
import Nav from '../components/navbar';
import Listingback from "../components/listingback";


const AddListing = () => {
    const [add, setadd] = useState({name: '', description: '', income: '', expense: ''})
    const onSubmit = async () => {
        const collectionRef = collection(db, "manager");
        const docRef = await addDoc(collectionRef, { ...add, timestamp: serverTimestamp() })
            setadd({ name: '', description: '', income: '', expense: ''})
            alert(`Listing with id ${docRef.id} is added succesfully` )

}

    return (
        <div>
            <Nav></Nav>
      <Space h="xl" />
      
        <Listingback></Listingback>
        <Space w="md" />
        
      
      <Center><h1 className='title'>ADD LISTING</h1></Center>
            
            <TextInput label="Name"
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
             <TextInput label="Expense"
            style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
             value={add.expense} 
             onChange={e => setadd({...add, expense: e.target.value})}
             />
             <Space h={10}/>
            <Center><Button onClick={onSubmit} sx={{ mt: 3 }}>Submit</Button></Center>
        </div>
    )
}

export default AddListing;