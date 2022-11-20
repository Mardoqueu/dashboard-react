// in src/App.tsx
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./UserList";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
 <Admin dataProvider={dataProvider}>
     <Resource name="users" list={UserList} />
   </Admin>
  );
export default App;