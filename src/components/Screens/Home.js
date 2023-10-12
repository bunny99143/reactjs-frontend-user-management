import React, { useState,useEffect } from 'react'
import { Grid } from '@mui/material';
import Forms from '../Forms';
import Tables from '../Tables';
import ConformationBox from '../ConformationBox';
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

  const API_BASE_URL="https://witty-hare-drawers.cyclic.app/";
  const [user,setUser]=useState({
              "name":'',
              "email":'',
              "phone_number":"",
            })
  const [users,setUsers]=useState([]);

  const [isMode, setIsMode] = useState("Add");

  const [open, setOpen] = useState(false);
  const [pageCount, setpageCount] = useState(2);
  const [selectedUserid, setselectedUserid] = useState("");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const handleClickOpen = (id) => {
    setselectedUserid(id)
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async () => {
    await axios.delete(API_BASE_URL+"users/"+selectedUserid).then((response) => {
        setUser({
          "name":'',
          "email":'',
          "phone_number":"",
        })
        setIsMode("Add")
        handleClose()
        setselectedUserid("")
        toast.success('User deleted successfully.');
    });    
  };

  const handleClickEditOpen =async (id) => {
    
    await axios.get(API_BASE_URL+"users/"+id)
    .then((response) => {
        setUser(response.data.data)
    });
    setIsMode("Edit")
  };

  const handleClickViewOpen =async (id) => {
    
    await axios.get(API_BASE_URL+"users/"+id)
    .then((response) => {
        setUser(response.data.data)
    });
    setIsMode("View")
  };

  const getAllUsers = async() =>{
    
    await axios.get(API_BASE_URL+"usersList?page="+page+"&searchText="+searchText).then((response) => {
      var totalCounts=Math.ceil(response.data.count / 5);  
      setpageCount(totalCounts)         
        if(page >= totalCounts){
          if(totalCounts===0){
            totalCounts=1
          }
          setPage(totalCounts);
        }
        setUsers(response.data.list);
    });
  }   

  const updateUser = async(id,userData) =>{
    
      await axios({
        method: "patch",
        url: API_BASE_URL+"users/"+id,
        data: userData,
      })
      .then((response) => {
          if(response.status===204){
            setIsMode("Add");
            setUser({
              "name":'',
              "email":'',
              "phone_number":"",
            });
          }
          toast.success('User updated successfully.');
      });
  }  

  const createUser = async (userData) =>{
    
      await axios({
        method: "post",
        url: API_BASE_URL+"users",
        data: userData,
      })
      .then((response) => {
          setUser({
            "name":'',
            "email":'',
            "phone_number":"",
          })
          toast.success('User created successfully.');

      });
  } 

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    getAllUsers();
  }, [user,isMode,page,searchText]);

  return(
    <>
      <Toaster />
        <Grid container style={{marginTop:'85px'}}>
            
        <ConformationBox open={open} setOpen={setOpen}  handleClose={handleClose} deleteUser={deleteUser}/>
        <Grid item xs={7} style={{borderRight: '4px solid '}}  justifyContent="center" alignItems="center">
            <Tables searchText={searchText} setSearchText={setSearchText} users={users} setUsers={setUsers} handleClickOpen={handleClickOpen} handleClickEditOpen={handleClickEditOpen} handleClickViewOpen={handleClickViewOpen}/>
            <Stack spacing={2} style={{float:'right',marginRight:"5px"}}>
                
                <Pagination color="primary" style={{marginRight:"75px"}}
                    count={pageCount} page={page} onChange={handleChange} 
                />

            </Stack>
        </Grid>
        <Grid item xs={5}  justifyContent="center" alignItems="center"> 
            <Forms isMode={isMode} setIsMode={setIsMode}  users={users} updateUser={updateUser} createUser={createUser} setUsers={setUsers} user={user} setUser={setUser}/>
        </Grid>
        
        </Grid>
    </>
  );
  
}
