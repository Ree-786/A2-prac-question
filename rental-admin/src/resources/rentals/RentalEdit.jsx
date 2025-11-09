// src/resources/rentals/RentalEdit.jsx

import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

const RentalEdit = () => (
  <Edit>
    <SimpleForm>

      <TextInput source="rental_number" disabled />

      <ReferenceInput label="Vehicle" source="vehicle_id" reference="vehicles">
        <SelectInput optionText="registration_number" />
      </ReferenceInput>

      <ReferenceInput label="Customer" source="customer_id" reference="customers">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <DateInput source="start_date" />
      <DateInput source="end_date" />

      {/* Return mileage ONLY in Edit */}
      <NumberInput source="return_mileage" min={0} />

      {/* Actual return date ONLY in Edit */}
      <DateInput source="actual_return_date" />

      <NumberInput source="daily_rate" min={1} />
      <NumberInput source="total_days" min={1} />
      <NumberInput source="total_amount" min={0} />
      <NumberInput source="deposit_paid" min={0} />

      <SelectInput
        source="status"
        choices={[
          { id: "active", name: "Active" },
          { id: "completed", name: "Completed" },
          { id: "cancelled", name: "Cancelled" },
        ]}
      />

      <TextInput source="notes" multiline rows={3} />

    </SimpleForm>
  </Edit>
);

export default RentalEdit;
