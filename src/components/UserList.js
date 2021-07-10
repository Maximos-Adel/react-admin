import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  useListContext,
  Filter,
  SearchInput,
} from "react-admin";
import TablePagination from "@material-ui/core/TablePagination";

const PostPagination = (props) => {
  const { page, setPage } = useListContext();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder="Search Name" source="name" resettable alwaysOn />
  </Filter>
);

const UserList = (props) => {
  
  return (
    <List {...props} pagination={<PostPagination />} filters={<PostFilter />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList
