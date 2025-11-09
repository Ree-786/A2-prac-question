// src/resources/rentals/RentalList.jsx

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ReferenceField,
  SelectInput,
  DateInput,
} from "react-admin";

const rentalFilters = [
  // Filter by rental status
  <SelectInput
    source="status"
    label="Status"
    alwaysOn
    choices={[
      { id: "active", name: "Active" },
      { id: "completed", name: "Completed" },
      { id: "cancelled", name: "Cancelled" },
    ]}
  />,

  // Filter by start date (date range)
  <DateInput source="start_date_gte" label="Start Date From" />,
  <DateInput source="start_date_lte" label="Start Date To" />,
];

const RentalList = () => (
  <List
    filters={rentalFilters}
    sort={{ field: "start_date", order: "DESC" }}
  >
    <Datagrid rowClick="edit">

      {/* Basic rental fields */}
      <TextField source="rental_number" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <DateField source="actual_return_date" />
      <NumberField source="total_days" />
      <NumberField source="total_amount" />
      <NumberField source="deposit_paid" />
      <TextField source="status" />

      {/* Reference to vehicle (registration number) */}
      <ReferenceField
        label="Vehicle"
        source="vehicle_id"
        reference="vehicles"
      >
        <TextField source="registration_number" />
      </ReferenceField>

      {/* Reference to customer (name) */}
      <ReferenceField
        label="Customer"
        source="customer_id"
        reference="customers"
      >
        <TextField source="name" />
      </ReferenceField>

    </Datagrid>
  </List>
);

export default RentalList;
