// src/resources/vehicles/VehicleShow.jsx

import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

const VehicleShow = () => (
  <Show>
    <SimpleShowLayout>

      {/* Vehicle fields */}
      <TextField source="registration_number" />
      <TextField source="make" />
      <TextField source="model" />
      <NumberField source="year" />
      <TextField source="color" />
      <TextField source="transmission" />
      <TextField source="fuel_type" />
      <NumberField source="mileage" />
      <TextField source="status" />

      <NumberField source="seats" />
      <DateField source="last_service_date" />
      <DateField source="next_service_due" />
      <DateField source="purchase_date" />

      {/* Category details */}
      <ReferenceField label="Category" source="category_id" reference="vehicle_categories">
        <TextField source="name" />
      </ReferenceField>

      <ReferenceField label="Daily Rate" source="category_id" reference="vehicle_categories">
        <NumberField source="daily_rate" />
      </ReferenceField>

      {/* All rentals for this vehicle */}
      <ReferenceManyField
        label="Rental History"
        reference="rentals"
        target="vehicle_id"
      >
        <Datagrid rowClick="show">
          <TextField source="rental_number" />

          <ReferenceField label="Customer" source="customer_id" reference="customers">
            <TextField source="name" />
          </ReferenceField>

          <DateField source="start_date" />
          <DateField source="end_date" />
          <TextField source="status" />
        </Datagrid>
      </ReferenceManyField>

      {/* Maintenance Records */}
      <ReferenceManyField
        label="Maintenance Records"
        reference="maintenance_records"
        target="vehicle_id"
      >
        <Datagrid rowClick="show">
          <TextField source="maintenance_type" />
          <TextField source="description" />
          <NumberField source="cost" />
          <DateField source="service_date" />
          <TextField source="status" />
        </Datagrid>
      </ReferenceManyField>

    </SimpleShowLayout>
  </Show>
);

export default VehicleShow;
