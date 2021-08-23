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
    <SearchInput placeholder="Search Title" source="title" resettable alwaysOn />
  </Filter>
);
 

const PostList = (props) => {
  
  return (
    <List
      {...props}
      pagination={<PostPagination />}
      filters={<PostFilter />}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField style={{backgroundColor:"yellow"}}source="title" />
        <TextField source="body" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};

export default PostList
