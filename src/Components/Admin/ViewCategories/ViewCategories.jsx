import React from 'react';
import styles from './ViewCategories.module.css';
import { useSelector } from 'react-redux';
import CategoryCreate from '../CategoryCreate/CategoryCreate';
import AdminNav from '../AdminNav/AdminNav';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../../Redux/Actions';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display:'flex',
  justifyContent:'space-between' ,
  color: theme.palette.text.secondary,
}));

function ViewCategories() {
  const allCategories = useSelector((state) => state.categories)
  const dispatch = useDispatch();

  
  function handleDelete(e) {
    console.log(e.target.id)
    dispatch(deleteCategory(e.target.id))
    window.alert('Category deleted')
  }

  return (
    <div className={styles.viewCategoriesContainer}>
      <AdminNav/>
      {/* <div className={styles.viewCategories}>
        <div className={styles.categories}> */}
      <Box sx={{ maxWidth: '300px', margin: '20px auto' }}>
        <Stack spacing={2}>
          {
            allCategories?.map(el => { 
              return(
              // <h5 className={styles.name} key={el.id}>{el.name}</h5>
              <Item key={el.id} value={el.id}>
                {el.name}
                { el.id > 5 ? ( 
                  // <IconButton aria-label="delete" size="small" sx={{ backgroundColor:'red'}} id={el.id} value={el.id} onClick={handleDelete}>
                  //   <DeleteIcon fontSize="inherit" disabled="true"/>
                  // </IconButton>
                      <Button
                      variant="text"
                      color="primary"
                      className={styles.button}
                      sx={{ minWidth: 'auto', width:'auto'}}
                      startIcon={<DeleteIcon />}
                      id={el.id} value={el.id} onClick={handleDelete}
                      />
                  )
                : null}
              </Item>
              )
            })
          }
        </Stack>
      </Box>
        {/* </div>
      </div> */}
    <CategoryCreate />
    </div>
  )
}

export default ViewCategories