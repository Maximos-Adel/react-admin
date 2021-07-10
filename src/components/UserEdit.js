import React from 'react'
import { Edit, SimpleForm, TextInput} from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
      </SimpleForm>
    </Edit>
  );
}

export default UserEdit
