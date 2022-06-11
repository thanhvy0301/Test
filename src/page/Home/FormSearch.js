import React from 'react';
import Home from './Home';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { hover } from '@testing-library/user-event/dist/hover';
import Categories from "../CategoryCarRental/CatagoriesCarRen";
import DateTimePicker from 'react-datetime-picker';
import { Dropdown } from 'bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useState, useEffect} from 'react';
const labelStyle = {
    marginTop:'0px',
    // paddingTop:'20px'
}
const btnStyle={
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
    marginTop:25,
    height:40
    
}
function App() {
  const [Vitri, setVitri] = useState([]);
  const [Car, setCar] = useState([]);
  var urlG = "http://localhost:5000/location";
  useEffect(()=>{
      const getVitri = async() =>{
          const {data: res} = await axios.get(urlG);
          console.log(res);
          setVitri(res);
      };
      getVitri();
  },[]);
  useEffect(()=>{
    const getCar = async() => {
      const {carData: res} = await axios.get()
      
    }
  })
const navigate= useNavigate();

  const laBel = ['Cho thuê xe', 'Địa điểm thuê xe của bạn', 'Ngày bắt đầu ', 'Giờ bắt đầu',
  'Ngày kết thúc', 'Giờ kết thúc']
  const dateCurrent = new Date().toISOString().slice(0,10);
  const timeCurrent = (new Date().toISOString().slice(11,16));
  return (
      <div id="form-search" style={{marginTop:20, width:'fit-content'}}>
        <div class="div-search-child">
          <label style={labelStyle}>{laBel[0]}</label><br/>   
          <select id="option">
            <option>Tự lái</option>
            <option>Có tài xế</option>
          </select>
        </div>
      <div>
      <div className='div-search-child'>
            <label>{laBel[1]}</label><br/>
      <select key={Vitri.XEID} onChange={e=>{setCar(e.target.value);console.log(Car)}}  placeholder="Điền thành phố, sân bay, hoặc khách sạn" id="address" required>
        {Vitri.map((vitri)=>
        <option value={vitri.VITRIID}>
          {vitri.PROVINCE}
        </option>)}
      </select><br />
      </div>
        <div style={{display:'flex', alignItems:'center'}}>
            <div class="div-search-child" style={{width:'fit-content'}}>
                <label style={labelStyle}>{laBel[2]}</label><br/>
                <input type={"date"} className="input-date-time" id='dateStart' value={dateCurrent}/>
                {/* <DateTimePicker placeholder='Choose time' value={dateCurrent}></DateTimePicker> */}
            </div>
            <div className='div-search-child' style={{width:'fit-content'}}>
                <label style={{paddingLeft:'10px'}}>{laBel[3]}</label><br/>
                <input className="input-time" type={"time"} value={timeCurrent}></input>
            </div>
            <div class="div-search-child" style={{width:'fit-content', marginLeft:'10px'}}>
                <label style={labelStyle}>{laBel[2]}</label><br/>
                <input type={"date"} className="input-date-time" id='dateEnd' />
            </div>
            <div className='div-search-child' style={{width:'fit-content'}}>
                <label style={{paddingLeft:'10px'}}>{laBel[5]}</label><br/>
                <input className="input-time" type={"time"} ></input>
            </div>
            <button type="submit" id="btn-search" style={btnStyle} onClick={e=>{navigate("/Categories",{state:{id:Car}})}}> Tìm xe</button>
        </div>
      </div>
      </div>
  )
}
 
export default App;