import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminNav from '../../Admin/AdminNav/AdminNav';
import { useDispatch } from 'react-redux';
import { getUser, sortUsersByLastName } from '../../../Redux/Actions/index';
import UserCard from './UserCard'
import ProductNotFound from '../../ProductNotFound/ProductNotFound';
import styles from './Users.module.css'
import AdminNav2 from '../AdminNav/AdminNav2';
import {Box, TextField, MenuItem, Button } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';



function Users() {
  const allCategories = useSelector((state) => state.categories)
  const dispatch = useDispatch();
  const [order, setOrder] = useState('')

  useEffect(() => {
    dispatch(getUser())
    console.log(users)
  }, [dispatch]);

  const users = useSelector((state) => state.users)

  function handleSortByLastName(e) {
    e.preventDefault()
    dispatch(sortUsersByLastName(e.target.value))
    setOrder(e.target.value)
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'given_name', label: 'Name', minWidth: 200 },
    { id: 'family_name', label: 'Lastname', minWidth: 220 },
    {
      id: 'email',
      label: 'Email',
      minWidth: 220,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'phone',
      label: 'Phone',
      minWidth: 220,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'value',
      label: 'Value',
      minWidth: 220,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];

  const rows = users

  return (
    <div className={styles.users}>
      <AdminNav/>
      <AdminNav2/>

      <div style={{textAlign:'center', margin:'20px auto'}}>

        <TextField
          sx={{
            '& > :not(style)': { m: 1, display: 'flex', width: '20ch', color:'white' },
          }}
          variant="outlined"
          id="outlined-select-currency"
          select
          label="Purchase value"
          // value={order}
          // onChange={(e) => handleSortByLastName(e)}
        > 
          <MenuItem value='higher-value'>Higher value</MenuItem>
          <MenuItem value='lower-value'>Lower value</MenuItem>
        </TextField>

        <TextField
          sx={{
            '& > :not(style)': { m: 1, display: 'flex', width: '20ch', color:'white' },
          }}
          variant="outlined"
          id="outlined-select-currency"
          select
          label="Sort alphabetically"
          value={order}
          onChange={(e) => handleSortByLastName(e)}
        > 
          {/* <MenuItem value='Sort'>Sort</MenuItem> */}
          <MenuItem value='a-z'>A-Z</MenuItem>
          <MenuItem value='z-a'>Z-A</MenuItem>
        </TextField>

      </div>

      <div className={styles.tabla}>
      <Paper sx={{ width: '100%', background:'gray'}}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={6} style={{color:'white', background:'black'}}>
                    Users
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              { 
              users.length ? 
              <TableBody >
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align} style={{color:'white', background:'gray'}}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
                  : null
              }
            </Table>
          </TableContainer>
          <TablePagination
            style={{color:'white', background:'gray'}}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  )
}

export default Users