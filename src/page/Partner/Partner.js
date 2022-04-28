import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';
import {Table} from 'react-bootstrap';
import { useState } from 'react';
import "../Partner/Partner.css";
import EditCar from "./EditCar";
import AddNewCars from "./AddNewCars";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function Partner(props) {    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {    
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const ListCars = [
      { id: 1, Brand:'Vinfast', Name: "Fadil", Price: 550, Type: "4 Seat" },
      { id: 2, Brand: 'Kia', Name: "Kia Morning", Price: 550, Type: "4 Seat" },
      { id: 3, Brand: 'Toyota', Name: "Vios", Price: 700, Type: "4 Seat" },
      { id: 4, Brand: 'Hyundai', Name: "Grand i10", Price: 550, Type: "4 Seat" },
    ];
    const [car, setCar] = React.useState(ListCars);  
    return (
        <div>
            <div id='div-btn-addNew'>
                <Link to="/AddNewCars">
                    <button id='btn-addNew'>Add new</button>
                </Link>
            </div>
            
            <table id='ListCars'> 
                <tr key={"header"} id="header-table">
                {Object.keys(car[0]).map((key) => (
                    <th>{key}</th>                    
                ))}
                
                </tr>
                {car.map((item) => (
                <tr key={item.id} id="item-table">
                    {Object.values(item).map((val) => (
                    <td>{val}</td>
                    ))}
                    <div style={{width:'fit-content', marginRight:0}}>
                        <ul style={{display:'flex', listStyleType:'none', padding:0, margin:0}}>
                            <Link to='/EditCar'>
                                <li id='li-item-table'>Edit</li> 
                            </Link>                           
                            <li id='li-item-table' >
                                <button onClick={handleClickOpen} id="btn-delete-item">
                                    Delete 
                                </button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                    {"Warning ! "}
                                    </DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure want to delete ?
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose}>Disagree</Button>
                                    <Button onClick={handleClose} autoFocus>
                                        Agree
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                            </li>
                            <li id='li-item-table'>Detail</li>
                        </ul>
                    </div>                   
                </tr>
                ))}
            </table>
        </div>
     
    );
  }
  
export default Partner;