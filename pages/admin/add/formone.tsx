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
  } from "firebase/firestore";
  import { db } from "../../../firebase/clientApp";
  import { useForm } from "@mantine/form";

  function Demo() {
    const form = useForm({
      initialValues: {
        name: "",
        description: "",
        date: new Date(),
        income: 0,
        expense: 0,
      },
    });

    async function handleSubmit(values: typeof form["values"]) {
      await addDoc(collection(db, "users"), values);
    }

    return (
      <>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction="column" align="center">
            <TextInput
              style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
              placeholder="Name"
              label="Enter your Name"
              withAsterisk
              {...form.getInputProps("name")}
            />
            <Space h="xl" />
            <TextInput
              style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
              placeholder="Decription"
              label="Full Description"
              withAsterisk
              {...form.getInputProps("description")}
            />
            <Space h="xl" />
            <DatePicker
              style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
              placeholder="Pick date"
              label="Date"
              withAsterisk
              {...form.getInputProps("date")}
            />
            <Space h="xl" />
            <NumberInput
              style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
              placeholder="Income"
              defaultValue={10}
              label="Full Income"
              withAsterisk
              {...form.getInputProps("income")}
            />
            <Space h="xl" />
            <NumberInput
              style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
              placeholder="Expense"
              defaultValue={0}
              label="Full Expense"
              withAsterisk
              {...form.getInputProps("expense")}
            />
            <Space h="xl" />
            <Button type="submit">Submit</Button>
          </Flex>
        </form>
      </>
    );
  }

  export default Demo;
