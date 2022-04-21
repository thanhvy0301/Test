import React, { useState } from "react";
import {Link} from "react-router-dom";
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { StyledEngineProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Categories} from "./Categories.css";

function FilterCategory() {
  const divContent = {
    marginTop:250,
    display: 'flex',
    marginLeft:100
  }
    return(
        <div>
      <form>
        <div style={divContent}>
          <div id="filter-left">
            <div id="label-filter" style={{display: 'flex', alignItems: 'center', marginLeft: '15px', paddingTop:20, marginBottom:15}}>
              <p style={{width: '70%', fontWeight: 600, marginRight:10}}>BỘ LỌC</p>
              <button type="reset" id="btn-reset-filter" value="xx">Cài lại</button>
            </div>
            <div id="SoXe-btn" onclick="myFunction()" className="dropbtn">
              <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold', marginTop:10, paddingBottom:10}}>Số xe</p>
              <i className="fa-solid fa-angle-up" style={{paddingTop: '20px'}} />
            </div>
            <div id="Filter-item" className="dropdown-content">
              <label className="container">Tất cả
                <input type="radio" defaultChecked="checked" name="radio" />
                <span className="checkmark" />
              </label>
              <label className="container">Tự dộng
                <input type="radio" name="radio" />
                <span className="checkmark" />
              </label>
              <label className="container">Số sàn
                <input type="radio" name="radio" />
                <span className="checkmark" />
              </label>                      
            </div>
            <div id="SoXe-btn" onclick="myFunction()" className="dropbtn">
              <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold',paddingBottom:10}}>Số hành khách tối đa</p>
              <i className="fa-solid fa-angle-up" style={{paddingTop: '20px'}} />
            </div>
            <div id="Filter-item" className="dropdown-content">
              <label className="container">Tất cả
                <input type="radio" defaultChecked="checked" name="radio-2" />
                <span className="checkmark" />
              </label>
              <label className="container">4 hành khách
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
              </label>
              <label className="container">5 - 6 hành khách
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
              </label> 
              <label className="container"> &gt;&gt; 6 hành khách
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
              </label>                      
            </div>
            <div id="SoXe-btn" onclick="myFunction()" className="dropbtn">
              <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold', paddingBottom:10}}>Khoảng giá mỗi ngày thuê</p>
              <i className="fa-solid fa-angle-up" style={{paddingTop: '20px'}} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <div className="price">
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '4px'}}>
                  <label className="vnd">VND</label>
                  <input type="text" className="ip-price" min={0} max={1016000} step={1} defaultValue={0} pattern="{1,15}" />
                </div>
              </div>
              <div className="price">
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '4px'}}>
                  <label className="vnd" style={{width: 'fit-content', paddingRight: '5px'}}>VND</label>
                  {/* <input type="text" class="ip-price" min="0" max="1016000" step="1" value="1016000" pattern="{1,15}"/> */}
                  <p style={{margin: '0px', width: '70px'}}><span id="demo" style={{fontSize: '12px'}} /></p>
                </div>
              </div>
            </div>
            <input type="range" style={{width: '200px', marginLeft: '25px'}} min={0} max={1060000} defaultValue={50} id="myRange" />
            <div id="short-item" className="dropdown-content">
              <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold', paddingLeft: '15px'}}>Sắp xếp</p>
              <div style={{width: 'fit-content', marginLeft: '20px', marginTop: '20px'}}>
                <label className="container">Tất cả
                  <input type="radio" defaultChecked="checked" name="radio-2" />
                  <span className="checkmark" />
                </label>
                <label className="container">4 hành khách
                  <input type="radio" name="radio-2" />
                  <span className="checkmark" />
                </label>
                <label className="container">5 - 6 hành khách
                  <input type="radio" name="radio-2" />
                  <span className="checkmark" />
                </label> 
                <label className="container"> &gt;&gt; 6 hành khách
                  <input type="radio" name="radio-2" />
                  <span className="checkmark" />
                </label>     
              </div>
            </div>
          </div>         
          <div style={{display: 'flex', backgroundColor: '#e6e6e6c4!important', flexDirection: 'column'}}>
            <p style={{paddingLeft: '10px', fontWeight: 'bold', paddingBottom:10}}>Tìm thấy  
            <span id="result-cars" style={{color: 'black'}}> 10</span> loại xe</p>
            <div id="content-right">
              <div style={{display: 'flex'}}>
                <img src="../Img/KiaMorning.webp" style={{objectFit: 'contain', width: '160px', height: '120px', marginTop: '25px'}} />
                <div className="div-detail">
                  <p className="name-car-detail" style={{color: 'black'}}>Kia Morning</p>
                  <p style={{marginBottom: '0px', backgroundColor: 'gainsboro', fontSize: '13px', borderRadius: '20px', width: '65px', height: '20px', textAlign: 'center', paddingTop: '5px', color: 'rgb(104, 113, 118)'}}>Tự động</p>
                  <div style={{display: 'flex'}}>
                    <p style={{width: '50px'}}><i className="fa-solid fa-suitcase" style={{paddingRight: '5px'}} />2</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-suitcase" />2</p>
                  </div>                            
                  <p>Tự lái</p>
                </div>
                <div style={{width: '250px', marginLeft: '10px'}}>
                  <p style={{marginBottom: '0px', paddingLeft: '115px', color: 'rgb(104, 113, 118)', paddingTop:20}}>Giá thuê cơ bản từ</p>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}><span style={{color: 'rgb(255, 94, 31)', fontWeight: 'bold', fontSize: '1.7em'}}>609.600 VND</span>
                    <p style={{margin: '0px', padding: '6px 0px 0px 5px', color: 'rgb(104, 113, 118)'}}> / ngày</p></div>
                  <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '4px'}}><span>1.219.200</span>
                    <p style={{margin: '0px', paddingLeft: '5px', color: 'rgb(104, 113, 118)'}}>VND Tổng</p></div>
                  <button type="submit" id="btn-search" style={{width: '220px', margin: '50px 0px 0px 30px'}}>
                    <a href="../public/ThueXeTL.html" style={{textDecoration: 'none', color: 'white'}}>Tiếp tục</a>
                  </button>
                </div>
              </div>
            </div>
            <div id="content-right" style={{marginTop: '15px'}}>
              <div style={{display: 'flex'}}>
                <img src="../Img/VinfastFadil.webp" style={{objectFit: 'contain', width: '160px', height: '120px', marginTop: '25px'}} />
                <div className="div-detail">
                  <p className="name-car-detail" style={{color: 'black'}}>Kia Morning</p>
                  <p style={{marginBottom: '0px', backgroundColor: 'gainsboro', fontSize: '13px', borderRadius: '20px', width: '65px', height: '20px', textAlign: 'center', paddingTop: '5px', color: 'rgb(104, 113, 118)'}}>Tự động</p>
                  <div style={{display: 'flex'}}>
                    <p style={{width: '50px'}}><i className="fa-solid fa-suitcase" style={{paddingRight: '5px'}} />2</p>
                    <p><i className="fa-solid fa-suitcase" style={{paddingRight: '5px'}} />2</p>
                  </div>                            
                  <p>Tự lái</p>
                </div>
                <div style={{width: '250px', marginLeft: '10px'}}>
                  <p style={{marginBottom: '0px', paddingLeft: '115px', color: 'rgb(104, 113, 118)', paddingTop:20}}>Giá thuê cơ bản từ</p>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}><span style={{color: 'rgb(255, 94, 31)', fontWeight: 'bold', fontSize: '1.7em'}}>609.600 VND</span>
                    <p style={{margin: '0px', padding: '6px 0px 0px 5px', color: 'rgb(104, 113, 118)'}}> / ngày</p></div>
                  <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '4px'}}><span>1.219.200</span>
                    <p style={{margin: '0px', paddingLeft: '5px', color: 'rgb(104, 113, 118)'}}>VND Tổng</p></div>
                  <button type="submit" id="btn-search" style={{width: '220px', margin: '50px 0px 0px 30px'}}>
                    <a href="../public/ThueXeTL.html" style={{textDecoration: 'none', color: 'white'}}>Tiếp tục</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
        </div>
    )
}
export default FilterCategory;