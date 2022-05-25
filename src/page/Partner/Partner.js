import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';
import {Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import "../Partner/Partner.css";
import EditCar from "./EditCar";
import Loading from '../../Component/Loading';
import AddNewCars from "./AddNewCars";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';


function Partner() {
    const [Car, setCar] = useState([]);
    var urlG = "http://localhost:5000/car";
    var urlU;
    useEffect(()=>{
        const getCar = async() =>{
            const {data: res} = await axios.get(urlG);
            setCar(res);
        };
        getCar();
    },[]);
    const handleDelete = async (car)=>{
        await axios.delete(`http://localhost:5000/car/deleteCar/${car.XEID}`);
    };
    return(
        <>
            <div>
                <Button class="btn btn-primary">Xe</Button>
                <Button class="btn btn-primary">Vị trí</Button> 
                <Button class="btn btn-primary">Điều khoản</Button>
            </div>
            <Button>Thêm xe</Button>
            <br/>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>location</th>
                        <th>Name Car</th>
                        <th>Car Price</th>
                        <th>Car Image</th>
                        <th>Car Model</th>
                        <th>Car Type</th>
                        <th>Number of Seat</th>
                        <th>Number of Luggage</th>
                        <th>Office Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Car.map((car)=> 
                        <tr key={car.XEID}>
                            <td>{car.XEID}</td>
                            <td>{car.VITRIID}</td>
                            <td>{car.TENXE}</td>
                            <td>{car.GIAXE}</td>
                            <td>{car.HINHXE}</td>
                            <td>{car.MAUXE}</td>
                            <td>{car.LOAIXE}</td>
                            <td>{car.SOGHE}</td>
                            <td>{car.SOHANHLY}</td>
                            <td>{car.DIACHIVANPHONG}</td>
                            <td>
                                <Button>Sửa</Button>
                                <Button onClick={()=> handleDelete(car)}>Xóa</Button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </>
    )
    /*const getLocation = () => {
        axios.get(url)
        .then(res => {
            console.log(res.data);
            locations = res.data;
            console.log(locations);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return(
        <div className='App'>
            <button onClick={getLocation}>Click me</button>
        </div>
    )*/
}
export default Partner;

    /*const handleClickOpen = () => {    
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };*/
    // const ListCars = [
    //   { id: 1, Brand:'Vinfast', Name: "Fadil", Price: 550, Type: "4 Seat" },
    //   { id: 2, Brand: 'Kia', Name: "Kia Morning", Price: 550, Type: "4 Seat" },
    //   { id: 3, Brand: 'Toyota', Name: "Vios", Price: 700, Type: "4 Seat" },
    //   { id: 4, Brand: 'Hyundai', Name: "Grand i10", Price: 550, Type: "4 Seat" },
    // ];
    //const ListCars = axios.get("https://jsonplaceholder.typicode.com/posts/");
    //const [car, setCar] = React.useState(ListCars);  
    /*const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(false)
     useEffect(()=>{
         axios.get("localhost:5000/")
         .then((res) =>{ 
             console.table("Getting from :::", res.json());
             setLists(res);
             setLoading(true);
         }).catch (error => console.log(error))
     }, [])
     const list = lists.map((data, key) =>{
         return (
             <tr >
                 <td>{data.id}</td>
                 <td>{data.country}</td>
                 <td>{data.city}</td>
                 <td>{data.province}</td>
                 <Link to='/EditCar'>
                    <li id='li-item-table'>Edit</li> 
                </Link>
                <button 
                onClick={handleClickOpen} 
                id="btn-delete-item">
                     Delete 
                </button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
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
                        <Button onClick={handleClose} autoFocus>Agree</Button>
                    </DialogActions>
                </Dialog>
             </tr>
         )
     })
    return (
        <div>
            <div id='div-btn-addNew'>
                <Link to="/AddNewCars">
                    <button id='btn-addNew'>Add new</button>
                </Link>
            </div>
            <Table striped bordered hover size="sm" style={{width:1400, marginLeft:50}}>
            <thead>
                <tr style={{height:'fit-content'}}>
                    <th>STT</th>
                    <th>country</th>
                    <th>city</th>
                    <th>province</th> 
                    <th style={{width:200}}></th>                    
                    </tr>
                    {loading ? (list):<Loading/>}
            </thead>
               
            </Table> 
            
            {/* <table id='ListCars'> 
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
                    </table> }
        </div>
     
    );
  }*/