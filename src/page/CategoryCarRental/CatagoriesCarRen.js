import React from "react";
import ReSearchForm from "./ReSearchForm";
// import DropdownItem from "./DropdownItem";
import FilterCategory from "./FilterCategory";
import PriceRangeSlide from "./PriceRangeSlide";
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import Footer from "../../Component/Footer/FooterCustomer";
import {Categories} from "./Categories.css"
import { useLocation } from "react-router-dom";
function ThueXe() { 
    const location = useLocation();
    console.log(location.state.id);
    return(  
            <div style={{}}>
                <ReSearchForm/>                
                <FilterCategory id={location.state.id}/>
        </div>
    )
}
export default ThueXe;

