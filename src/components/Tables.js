import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Tables(props) {
  return (
    <>
      <h3 style={{textAlign:'left',marginLeft:"60px ",marginTop:"6px",display:'inline-block'}}>List of Users</h3>
      <input onChange={(e)=>{props.setSearchText(e.target.value)}} value={props.searchText} type="text" style={{float:'right',marginRight:"100px",marginTop:"16px"}}/>
      <b style={{float:'right',marginRight:"10px",marginTop:"16px"}}>Search</b>
      <TableContainer  sx={{
          '& > :not(style)': { m: 0.5, width: '80%' },
          pl: 7,pr: 7
        }}>
        <Table stripe="3n" aria-label="simple table" style={{border: '1px solid '}} >
          <TableHead>
            <TableRow sx={{
                      backgroundColor: "#1976d2b8",
                      borderBottom: "1px solid #1976d2b8",
                      color:'white',
                      "& th": {
                      fontSize: "1.25rem"
                      }
                  }}>
              <TableCell >Name</TableCell>
              <TableCell >Email</TableCell>
              <TableCell >Phone Number</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.length>0? props.users.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.phone_number}</TableCell>
                <TableCell align="right">
                  <VisibilityIcon sx={{mr:1}} style={{ color: '#1976d2b8' }}  onClick={()=>props.handleClickViewOpen(row._id)}/>
                    <EditIcon sx={{mr:1}} onClick={()=>props.handleClickEditOpen(row._id)}/>
                    <DeleteIcon style={{ color: 'red' }} onClick={()=>props.handleClickOpen(row._id)}/>
                </TableCell>
              </TableRow>
            )):<TableRow
          
            sx={{ '&:last-child td, &:last-child th': { border: 0,textAlign:'center' } }}
          ><TableCell colSpan={4}>No User found!</TableCell></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}