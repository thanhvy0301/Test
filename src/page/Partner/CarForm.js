import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const CarForm = () => {
    const [infor, setinfor] = useState([]);
    const handleChange = (e,id)=>{
        console.log(id);
        setinfor((prev)=>({...prev, [id]:e.tagert.value}))
        console.log(infor);
    }
    return(
        <div>
            <form>
                <input onChange={e=>{handleChange(e,"vitriid")}}/>
                <input onChange={e=>{handleChange(e,"tenxe")}}/>
                <input onchange={e=>{handleChange(e,"hinhxe")}}/>
                <input onchange={e=>{handleChange(e,"mauxe")}}/>
                <input onchange={e=>{handleChange(e,"loaixe")}}/>
                <input onchange={e=>{handleChange(e,"soghe")}}/>
                <input onchange={e=>{handleChange(e,"sohanhly")}}/>
                <input onchange={e=>{handleChange(e,"diachivanphong")}}/>
            </form>
        </div>
    );
};

export default CarForm;