// src/resources/customers/CustomerShow.jsx

import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  DateField,
  BooleanField,
  ReferenceManyField,
  ReferenceField,
  Datagrid,
  NumberField,
} from "react-admin";

const CustomerShow = () => (
  <Show>
    <SimpleShowLayout>

      {/* Customer fields */}
      <TextField source="customer_number" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="drivers_license" />
      <DateField source="license_expiry" />
      <BooleanField source="is_blacklisted" />

      {/* Rentals by this customer */}
      <ReferenceManyField
        label="Rentals by Customer"
        reference="rentals"
        target="customer_id"
      >
        <Datagrid rowClick="show">

          <TextField source="rental_number" />

          <ReferenceField
            label="Vehicle"
            source="vehicle_id"
            reference="vehicles"
          >
            <TextField source="registration_number" />
          </ReferenceField>

          <DateField source="start_date" />
          <DateField source="end_date" />
          <NumberField source="total_amount" />

          <TextField source="status" />

        </Datagrid>
      </ReferenceManyField>

    </SimpleShowLayout>
  </Show>
);

export default CustomerShow;
