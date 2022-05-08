import React from "react";
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { flexbox, style } from "@mui/system";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Labels = ['Tên xe', 'Thương hiệu',  'Loại xe', 'Giá thuê xe', 'Số chỗ ngồi', 'Địa điểm cho thuê', 'Loại hộp số']
const Brands = ['Kia', 'Hyundai', 'VinFast', 'Toyota']
const TypeCars = [' 4 chỗ', '7 chỗ']
const Address = ['Nha Trang', 'Vũng Tàu', 'TP.HCM', 'Đà Nẵng']
const CarGearBox = ['Tự động', 'Số sàn']
const StyleForm = {
    width:1000,
    height:500,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop:50,
    borderRadius: 10,
    boxShadow: '0px 10px 10px 2px rgb(219, 219, 219)'
}
const StyleDivForm = {
    width:'100%',
    display:"flex",
    marginTop:50,
    justifyContent:'center',
    

}
const StyleItem = {
    display:'flex',
    justifyContent:'space-evenly',
    
}
const StyleBtn = {
    marginLeft:450, 
    marginTop:60,
    border:0,
    width:130,
    height:40,
    fontWeight:'bold',
}
function EditCars() {
    const labels = Labels.map(label =>
        <h5 style={{margin:0}}>{label}</h5>
    )
    const brands = Brands.map(brand =>
        <option>{brand}</option>
    )
    const typeCars = TypeCars.map(type =>
        <option>{type}</option>
    )
    const addresses = Address.map(address =>
        <option>{address}</option>
    )
    const carGearBox = CarGearBox.map(gear =>
        <option>{gear}</option>
    )
    return(
        
        <div>
            <div className="div-form" style={StyleDivForm}>
                <form id="form" style={StyleForm}>
                        <h2 style={{textAlign:'center', marginBottom:30, fontWeight:'bold'}}>THÊM XE VÀO WEBSITE</h2>
                    <div style={StyleItem}>
                        <div style={{display:'flex'}}>
                            {labels[0]}
                            <input type={'text'} style={{marginLeft:10, marginRight:20}}></input>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            {labels[1]}
                            <select id="option" style={{marginLeft:10}}>
                                {brands}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div style={{display:'flex'}}>
                        <div style={{display:'flex',marginLeft:120}}>
                            {labels[3]}
                            <input type={'number'} style={{marginLeft:10, marginRight:20, width:200}} min='0' max = '10000000'  ></input>
                        </div>
                        <div style={{display:'flex', marginLeft:200}}>
                            {labels[2]}
                            <select id="option" style={{marginLeft:23}}>
                            {typeCars}
                            </select>
                        </div>
                        <br  />
                    </div>  
                    <br />
                    <div style={{display:'flex'}}>
                        <div style={{display:'flex',marginLeft:60, alignItems:'center'}}>
                            {labels[5]}
                            <select id="option" style={{marginLeft:10, width:200, }}>
                            {addresses}
                            </select>
                        </div>
                            
                        <div style={{display:'flex', marginLeft:200,alignItems:'center'}}>
                            {labels[6]}
                            <select id="option" style={{marginLeft:8}}>
                            {carGearBox}
                            </select>
                        </div>  
                    </div><br />
                    <div style={{display:'flex'}}>
                        <div style={{display:'flex',marginLeft:60, alignItems:'center'}}>
                            {labels[5]}
                            <select id="option" style={{marginLeft:10, width:200, }}>
                            {addresses}
                            </select>
                        </div>
                        
                        <div style={{display:'flex', marginLeft:200,alignItems:'center'}}>
                            {labels[6]}
                            <select id="option" style={{marginLeft:8}}>
                            {carGearBox}
                            </select>
                        </div>  
                    </div>
                    {/* <Link to='/Partner'>
                        <Button> Thêm xe</Button>
                    </Link> */}
                    <button style={StyleBtn}>Thêm xe</button>
                </form>
            </div>
        </div>
    )
}
export default EditCars;