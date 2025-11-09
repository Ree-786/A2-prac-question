// src/resources/vehicles/VehicleList.jsx

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  TextInput,
  Filter,
} from "react-admin";

const vehicleFilters = [
  // Filter by status
  <SelectInput
    source="status"
    label="Status"
    choices={[
      { id: "available", name: "Available" },
      { id: "rented", name: "Rented" },
      { id: "maintenance", name: "Maintenance" },
      { id: "retired", name: "Retired" },
    ]}
    alwaysOn
  />,

  // Filter by category
  <ReferenceInput label="Category" source="category_id" reference="vehicle_categories" alwaysOn>
    <SelectInput optionText="name" />
  </ReferenceInput>,

  // Filter by transmission
  <SelectInput
    source="transmission"
    label="Transmission"
    choices={[
      { id: "Manual", name: "Manual" },
      { id: "Automatic", name: "Automatic" },
    ]}
  />,
];

const VehicleList = () => (
  <List filters={vehicleFilters} sort={{ field: "registration_number", order: "ASC" }}>
    <Datagrid rowClick="edit">
      <TextField source="registration_number" sortable />
      <TextField source="make" sortable />
      <TextField source="model" sortable />
      <NumberField source="year" sortable />
      <TextField source="color" />
      <TextField source="transmission" />
      <TextField source="fuel_type" />
      <NumberField source="mileage" />
      <TextField source="status" />

      {/* Category name (ReferenceField) */}
      <ReferenceField label="Category" source="category_id" reference="vehicle_categories">
        <TextField source="name" />
      </ReferenceField>

      {/* Daily Rate (bonus marks) */}
      <ReferenceField label="Daily Rate" source="category_id" reference="vehicle_categories">
        <NumberField source="daily_rate" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default VehicleList;
