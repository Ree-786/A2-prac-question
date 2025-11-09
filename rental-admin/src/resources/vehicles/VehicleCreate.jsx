// VehicleCreate.jsx

import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const VehicleCreate = () => (
  <Create>
    <SimpleForm>

      <TextInput source="registration_number" required />

      <TextInput source="make" required />
      <TextInput source="model" required />
      <NumberInput source="year" min={2000} max={2025} required />

      <TextInput source="color" required />
      <ReferenceInput label="Category" source="category_id" reference="vehicle_categories">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <NumberInput source="mileage" min={0} required />
      <NumberInput source="seats" min={2} max={15} required />

      <SelectInput
        source="transmission"
        choices={[
          { id: "Manual", name: "Manual" },
          { id: "Automatic", name: "Automatic" },
        ]}
        required
      />

      <SelectInput
        source="fuel_type"
        choices={[
          { id: "Petrol", name: "Petrol" },
          { id: "Diesel", name: "Diesel" },
          { id: "Electric", name: "Electric" },
          { id: "Hybrid", name: "Hybrid" },
        ]}
        required
      />

      <SelectInput
        source="status"
        defaultValue="available"
        choices={[
          { id: "available", name: "Available" },
          { id: "rented", name: "Rented" },
          { id: "maintenance", name: "Maintenance" },
          { id: "retired", name: "Retired" },
        ]}
      />

      <DateInput source="last_service_date" />
      <DateInput source="next_service_due" />
      <DateInput source="purchase_date" required />

    </SimpleForm>
  </Create>
);

export default VehicleCreate;
