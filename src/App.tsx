// in src/App.tsx
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { UserList } from "./UserList";
import { PostList, PostEdit } from "./ListGuesser";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
 <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} />
    <Resource name="users" list={UserList} recordRepresentation="name" />

   </Admin>
  );
export default App;