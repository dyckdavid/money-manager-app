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
    DocumentData,
    getDocs,
  } from "firebase/firestore";
  import { db } from "../../firebase/clientApp";
  import { useForm } from "@mantine/form";
  import { Loader } from '@mantine/core';
import { useState } from "react";
import { Center } from "@mantine/core";
import Listingback from "../components/listingback";
import React from 'react';
import { ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import Nav from '../components/navbar';
import Link from 'next/link';
import { Select } from '@mantine/core';
import { useEffect } from 'react';





const AddListing = () => {
    const [Loading, setLoading] = useState(false)
    const [Disabled, setDisable] = useState(false)


    
    const [add, setadd] = useState({name: '', description: '', income: '', expense: ''})
    const onSubmit = async () => {
        setLoading(true)
        setDisable(true)
        const collectionRef = collection(db, "manager");
        
        const docRef = await addDoc(collectionRef, { ...add, timestamp: serverTimestamp() })
            setadd({ name: '', description: '', income: '', expense: ''})
            
            setLoading(false)
            setDisable(false)
            
    }




function SubmitButton(){
    if (add.name && add.description && add.income && add.expense){
      return <Button  loading={Loading} onClick={onSubmit} sx={{ mt: 3 }}>Submit</Button>
    } else {
      return <Button loading={Loading} onClick={onSubmit} sx={{ mt: 3 }} disabled >Submit</Button>
    };
};



const [selecting] = useState({income: '', expense: ''})
function IsorNot() {
   
    if (add.income){
        return <Button>Not hidden</Button>
    } else {
        return <Button>Is hidden</Button>
    }

    
}






    return (

        
        <div>
            <Nav></Nav>
      <Space h="xl" />
      
        <Listingback></Listingback><Space w="xs" /><Center><Link href="/add/settings"><ActionIcon variant="filled"><IconSettings size={16} /></ActionIcon></Link></Center>

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
            <IsorNot></IsorNot>
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
            <Center><SubmitButton></SubmitButton></Center>
        </div>
    )
}

export default AddListing;