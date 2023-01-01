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
import Listingback from "../components/listingback";
import React from 'react';
import { ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import Nav from '../components/navbar';
import Link from 'next/link';
import { Select } from '@mantine/core';
import Selecting from '../components/selectincomeexpense';
import Selectordavid from './test';





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

    return (

        
        <div>
            <Nav></Nav>
      <Space h="xl" />
      
        <Listingback></Listingback><Space w="xs" /><Center><Link href="/add/settings"><ActionIcon variant="filled"><IconSettings size={16} /></ActionIcon></Link></Center>

        <Space w="md" />
        
      
      <Center><h2>ADD</h2></Center>
      <Center><Selectordavid></Selectordavid></Center>
            
            
        </div>
    )
}

export default AddListing;
