import React, { Component, Fragment } from 'react';
// import React, {Component} from 'react';
// import {render} from 'react-dom';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import Partner from '../Partner/Partner';
import { Link } from 'react-router-dom';
import './FormSearch';
import App from './FormSearch';

import Banner from "../../Component/Banner/Banner";
import Promotion from "../../Component/Promotion/Promotion";
import Propose from "../../Component/Explore/Explore";
import Partners from "../../Component/Partner/Partner";
import Advantage from "../../Component/Advantage/Advantage";
import Explore from "../../Component/Propose/Propose";


function contentRight() {
    const ScrollView = {
        width: '230px',
        scrollX:'none',
    }
    const menuItems = ['Vé máy bay', 'Khách sạn', 'Combo tiết kiệm', 'Đưa đón sân bay', 'Experience', 'Cho thuê xe','JR Pass',
    'Điểm thưởng của tôi', 'Tình trạng chuyến bay', 'Thông giá vé'];
    const list = menuItems.map((item) =>
        <li className='li-content' style={ScrollView} >{item}</li>)
    return(
        <Fragment>
                <Banner />
                
                <div id='content' style={{width:'fit-content'}}>
                    <div id='menu-scrollView'>
                        <ul id='ul-scrollView' >{list}</ul>
                    </div>
                    <App/>
                    <Link to="/Partner">
                        <button type="submit">Đăng nhập</button>
                    </Link>
                </div>
                <Promotion />
                <Partners />
                <Propose />
                <Advantage />
                <Explore />
          </Fragment>
    )
}
export default contentRight;

