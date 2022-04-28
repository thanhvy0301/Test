import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, Switch } from "react-router-dom";
import Categories from "./page/CategoryCarRental/CatagoriesCarRen";
import Contact from "./page/Contact";
import Home from "./page/Home/Home";
import DetailCar from "./page/DetailCar/DetailCar";
import Partner from "./page/Partner/Partner";
import AddNewCars from "./page/Partner/AddNewCars";
import EditCar from "./page/Partner/EditCar";
function App() {
    return(
        <div className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Categories" element={<Categories/>}/>
                <Route path="/DetailCar" element={<DetailCar/>}/>
                <Route path="/Partner" element={<Partner/>}/>
                <Route path="/AddNewCars" element={<AddNewCars/>}/>
                <Route path="/EditCar" element={<EditCar/>}/>
            </Routes>          
        </div>
    )
}
export default App;