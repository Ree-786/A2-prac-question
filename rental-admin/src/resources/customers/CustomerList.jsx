// src/resources/customers/CustomerList.jsx

import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  BooleanField,
  TextInput,
  BooleanInput,
} from "react-admin";
import { makeStyles } from "@mui/styles";

// OPTIONAL BONUS: highlight blacklisted customers
const useStyles = makeStyles({
  blacklisted: {
    backgroundColor: "#ffcccc", // light red
  },
});

const customerFilters = [
  // Search by name
  <TextInput source="q" label="Search by name" alwaysOn />,

  // Filter by blacklist status
  <BooleanInput source="is_blacklisted" label="Blacklisted" />,
];

const CustomerList = () => {
  const classes = useStyles();

  return (
    <List filters={customerFilters}>
      <Datagrid
        rowClick="edit"
        rowStyle={(record) =>
          record.is_blacklisted ? classes.blacklisted : {}
        }
      >
        <TextField source="customer_number" sortable />
        <TextField source="name" sortable />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="drivers_license" />
        <DateField source="license_expiry" />
        <BooleanField source="is_blacklisted" />
      </Datagrid>
    </List>
  );
};

export default CustomerList;
