// MaintenanceRecordCreate.jsx

import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin";

const MaintenanceRecordCreate = () => (
  <Create>
    <SimpleForm>

      <ReferenceInput label="Vehicle" source="vehicle_id" reference="vehicles">
        <SelectInput optionText="registration_number" />
      </ReferenceInput>

      <SelectInput
        source="maintenance_type"
        label="Type"
        required
        choices={[
          { id: "Service", name: "Service" },
          { id: "Repair", name: "Repair" },
          { id: "Inspection", name: "Inspection" },
          { id: "Accident", name: "Accident" },
        ]}
      />

      <TextInput source="description" multiline rows={4} required />

      <NumberInput source="cost" min={0} required />
      <DateInput source="service_date" required />

      <TextInput source="service_provider" />
      <DateInput source="next_service_due" />
      <TextInput source="parts_replaced" multiline rows={3} />

      <SelectInput
        source="status"
        defaultValue="completed"
        choices={[
          { id: "scheduled", name: "Scheduled" },
          { id: "in-progress", name: "In Progress" },
          { id: "completed", name: "Completed" },
        ]}
      />

    </SimpleForm>
  </Create>
);

export default MaintenanceRecordCreate;
