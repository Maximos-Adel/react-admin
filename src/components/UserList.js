import React from 'react'
import {
  // List,
  // Datagrid,
  // TextField,
  EditButton,
  DeleteButton,
  useListContext,
  Filter,
  SearchInput,
} from "react-admin";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "./Textfield";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Datagrid, DatagridBody, List } from "react-admin";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const MyDatagridRow = ({
  record,
  resource,
  id,
  onToggleItem,
  children,
  selected,
  basePath,
}) => (
  <StyledTableRow key={id}>
    {/* first column: selection checkbox */}
    <TableCell padding="none">
      {record.status !== "pending" && (
        <Checkbox checked={selected} onClick={() => onToggleItem(id)} />
      )}
    </TableCell>
    {/* data columns based on children */}
    {React.Children.map(children, (field) => (
      <TableCell key={`${id}-${field.props.source}`}>
        {React.cloneElement(field, {
          record,
          basePath,
          resource,
        })}
      </TableCell>
    ))}
  </StyledTableRow>
);


const MyDatagridBody = (props) => (
  <DatagridBody {...props} row={<MyDatagridRow />} />
);
const MyDatagrid = (props) => <Datagrid {...props} body={<MyDatagridBody />} />;


const useStyles = makeStyles({
  price: { color: "red" },
});

const PriceField = (props) => {
  const classes = useStyles();
  return <TextField className={classes.price} {...props} />;
};

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
      <MyDatagrid>
        <TextField  source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </MyDatagrid>
    </List>
  );
};

export default UserList
