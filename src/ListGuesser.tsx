// in src/posts.tsx
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
} from "react-admin";

export const PostList = () => (
  <List>
   <Datagrid>
     <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
     <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
      </SimpleForm>
  </Edit>
);