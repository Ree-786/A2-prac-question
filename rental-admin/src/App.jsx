// src/App.jsx

import { Admin, Resource, usePermissions } from "react-admin";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

/* -----------------------------
   VEHICLES
------------------------------*/
import VehicleList from "./resources/vehicles/VehicleList";
import VehicleCreate from "./resources/vehicles/VehicleCreate";
import VehicleEdit from "./resources/vehicles/VehicleEdit";
import VehicleShow from "./resources/vehicles/VehicleShow";

/* -----------------------------
   CUSTOMERS
------------------------------*/
import CustomerList from "./resources/customers/CustomerList";
import CustomerCreate from "./resources/customers/CustomerCreate";
import CustomerEdit from "./resources/customers/CustomerEdit";
import CustomerShow from "./resources/customers/CustomerShow";

/* -----------------------------
   RENTALS
------------------------------*/
import RentalList from "./resources/rentals/RentalList";
import RentalCreate from "./resources/rentals/RentalCreate";
import RentalEdit from "./resources/rentals/RentalEdit";

/* -----------------------------
   MAINTENANCE RECORDS
------------------------------*/
import MaintenanceRecordList from "./resources/maintenance/MaintenanceRecordList";
import MaintenanceRecordCreate from "./resources/maintenance/MaintenanceRecordCreate";
import MaintenanceRecordEdit from "./resources/maintenance/MaintenanceRecordEdit";

/* -----------------------------
   VEHICLE CATEGORIES (Manager only)
------------------------------*/
import CategoryList from "./resources/categories/CategoryList";
import CategoryCreate from "./resources/categories/CategoryCreate";
import CategoryEdit from "./resources/categories/CategoryEdit";

/* -----------------------------
   PAYMENTS (Manager only)
------------------------------*/
import PaymentList from "./resources/payments/PaymentList";


/* ----------------------------------------
   APP WITH ROLE-BASED PERMISSIONS
-----------------------------------------*/

const AppResources = () => {
  const { permissions } = usePermissions();

  return (
    <>

      {/* ------------------ MANAGER RESOURCES ------------------ */}
      {permissions === "manager" && (
        <>
          <Resource
            name="vehicle_categories"
            list={CategoryList}
            create={CategoryCreate}
            edit={CategoryEdit}
          />

          <Resource
            name="vehicles"
            list={VehicleList}
            create={VehicleCreate}
            edit={VehicleEdit}
            show={VehicleShow}
          />

          <Resource
            name="customers"
            list={CustomerList}
            create={CustomerCreate}
            edit={CustomerEdit}
            show={CustomerShow}
          />

          <Resource
            name="rentals"
            list={RentalList}
            create={RentalCreate}
            edit={RentalEdit}
          />

          <Resource
            name="maintenance_records"
            list={MaintenanceRecordList}
            create={MaintenanceRecordCreate}
            edit={MaintenanceRecordEdit}
          />

          <Resource
            name="payments"
            list={PaymentList}
          />
        </>
      )}

      {/* ------------------ STAFF RESOURCES ------------------ */}
      {permissions === "staff" && (
        <>
          {/* Vehicles → VIEW ONLY */}
          <Resource
            name="vehicles"
            list={VehicleList}
            show={VehicleShow}
          />

          {/* Customers → CRUD */}
          <Resource
            name="customers"
            list={CustomerList}
            create={CustomerCreate}
            edit={CustomerEdit}
            show={CustomerShow}
          />

          {/* Rentals → CRUD */}
          <Resource
            name="rentals"
            list={RentalList}
            create={RentalCreate}
            edit={RentalEdit}
          />
        </>
      )}
    </>
  );
};


/* ----------------------------------------
   MAIN APP COMPONENT
-----------------------------------------*/

const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <AppResources />
    </Admin>
  );
};

export default App;
