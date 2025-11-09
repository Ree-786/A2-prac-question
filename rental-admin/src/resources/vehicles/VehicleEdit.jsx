// VehicleEdit.jsx

import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const VehicleEdit = () => (
  <Edit>
    <SimpleForm>

      <TextInput source="registration_number" disabled />

      <TextInput source="make" />
      <TextInput source="model" />
      <NumberInput source="year" min={2000} max={2025} />

      <TextInput source="color" />
      <ReferenceInput source="category_id" reference="vehicle_categories">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <NumberInput source="mileage" min={0} />
      <NumberInput source="seats" min={2} max={15} />

      <SelectInput
        source="transmission"
        choices={[
          { id: "Manual", name: "Manual" },
          { id: "Automatic", name: "Automatic" },
        ]}
      />

      <SelectInput
        source="fuel_type"
        choices={[
          { id: "Petrol", name: "Petrol" },
          { id: "Diesel", name: "Diesel" },
          { id: "Electric", name: "Electric" },
          { id: "Hybrid", name: "Hybrid" },
        ]}
      />

      <SelectInput
        source="status"
        choices={[
          { id: "available", name: "Available" },
          { id: "rented", name: "Rented" },
          { id: "maintenance", name: "Maintenance" },
          { id: "retired", name: "Retired" },
        ]}
      />

      <DateInput source="last_service_date" />
      <DateInput source="next_service_due" />
      <DateInput source="purchase_date" />

    </SimpleForm>
  </Edit>
);

export default VehicleEdit;
