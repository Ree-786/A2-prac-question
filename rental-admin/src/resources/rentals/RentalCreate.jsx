// src/resources/rentals/RentalCreate.jsx

import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

const RentalCreate = () => (
  <Create>
    <SimpleForm>

      {/* Rental number: R + 7 digits */}
      <TextInput source="rental_number" label="Rental Number" required />

      {/* Only show vehicles with status = 'available' */}
      <ReferenceInput
        label="Vehicle"
        source="vehicle_id"
        reference="vehicles"
        filter={{ status: "available" }}
      >
        <SelectInput optionText="registration_number" />
      </ReferenceInput>

      {/* Customer */}
      <ReferenceInput
        label="Customer"
        source="customer_id"
        reference="customers"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>

      {/* Dates */}
      <DateInput source="start_date" label="Start Date" required />
      <DateInput source="end_date" label="End Date" required />

      {/* Mileage */}
      <NumberInput source="pickup_mileage" label="Pickup Mileage" min={0} required />

      {/* Pricing */}
      <NumberInput source="daily_rate" label="Daily Rate" min={1} required />
      <NumberInput source="total_days" min={1} required />
      <NumberInput source="total_amount" min={0} required />
      <NumberInput source="deposit_paid" min={0} required />

      {/* Status */}
      <SelectInput
        source="status"
        label="Status"
        choices={[
          { id: "active", name: "Active" },
          { id: "completed", name: "Completed" },
          { id: "cancelled", name: "Cancelled" },
        ]}
        defaultValue="active"
      />

      {/* Notes */}
      <TextInput source="notes" label="Notes" multiline rows={3} />

    </SimpleForm>
  </Create>
);

export default RentalCreate;
