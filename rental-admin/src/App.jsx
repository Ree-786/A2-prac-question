// 1) Imports = same idea as cheat sheet
import { Admin, Resource, usePermissions } from "react-admin";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

// 2) MULTIPLE RESOURCES (exam requirement)
import VehicleList from "./resources/vehicles/VehicleList";
import VehicleEdit from "./resources/vehicles/VehicleEdit";
import VehicleCreate from "./resources/vehicles/VehicleCreate";
import VehicleShow from "./resources/vehicles/VehicleShow";

// ... other resources

// 3) Permissions Logic
const AppResources = () => {
   const { permissions } = usePermissions();

   return (
      <>
         {permissions === "manager" && (
            <>
               <Resource name="vehicles" list={VehicleList} create={VehicleCreate} edit={VehicleEdit} show={VehicleShow} />
               {/* ALL OTHER RESOURCES */}
            </>
         )}

         {permissions === "staff" && (
            <>
               <Resource name="vehicles" list={VehicleList} show={VehicleShow} />
               <Resource name="customers" ... />
               <Resource name="rentals" ... />
            </>
         )}
      </>
   );
};

// 4) FINAL APP STRUCTURE
export default function App() {
   return (
      <Admin
         dataProvider={dataProvider}
         authProvider={authProvider}
      >
         <AppResources />
      </Admin>
   );
}
