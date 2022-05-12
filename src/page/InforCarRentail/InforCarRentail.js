import React from 'react';
// import { css } from 'styled-components';
// import { type } from '@testing-library/user-event/dist/type';
// import { hover } from '@testing-library/user-event/dist/hover';
// import { Link } from 'react-router-dom';
import "./InforCarRentail.css";
import Content from "./Content";
import ReSearchForm from '../CategoryCarRental/ReSearchForm';
function DetailCar() {    
    return(
        <div>
            <div style={{marginLeft:200}}>
                <ReSearchForm/>
            </div>
            
            <div style={{display:'flex', width:'auto', flexWrap:'wrap'}}>               
                <Content/>
            </div>
        </div>
    )
}
export default DetailCar;