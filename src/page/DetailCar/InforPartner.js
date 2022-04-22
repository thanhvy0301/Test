import React from 'react';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { hover } from '@testing-library/user-event/dist/hover';
import { Link } from 'react-router-dom';
import "./DetailCar.css";
import SortResult from "./SortResult";
import ListCars from './ListCars';
const NamePartner = ['Chung Xe NHA TRANG']
const Address = ['Nha Trang']
function InfoPartner() {
    return(
        <div className='detail-info-partner' style={{width:475}}>
            <div className='detail-info-partner-left'>
                <h4>{NamePartner}</h4>
                <p>{Address}</p>
                <span className='spans-rate'>Chưa có Xếp hạng &amp; Đánh giá</span>
            </div>
            <div className='detail-info-partner-right'>
                  <p style={{width:'fit-content',marginLeft:115}}>Giá thuê cơ bản từ</p>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <span style={{color: 'rgb(255, 94, 31)', fontWeight: 'bold', fontSize: '18px'}}>609.600 VND</span>
                    <p style={{margin: '0px', padding: '6px 0px 0px 5px', color: 'rgb(104, 113, 118)'}}> / ngày</p></div>
                  <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '4px'}}>
                    <span style={{fontSize:12, color: 'rgb(104, 113, 118)'}}>1.219.200</span>
                    <p style={{margin: '0px', paddingLeft: '5px', color: 'rgb(104, 113, 118)', fontSize:12}}>VND Tổng</p></div>
                <Link to="/DetailCar" style={{width:'fit-content'}}>
                <button type="submit" id="btn-search" style={{width: '150px', margin:'20px 0px 0px 100px '}}>Tiếp tục</button>
                </Link>
            </div>
            
        </div>
    )
}
export default InfoPartner;