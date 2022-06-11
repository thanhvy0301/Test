import React from 'react';
import './InforCarRentail.css';
import { DetailInfor } from './DetailInfor';
import Image from '../../Img/imgContent.webp'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Content(props) {
    const navigate = useNavigate();
    const payNow = async token => {
        console.log(token)
         try {
           const response = await axios({
             url: 'http://localhost:5000/payment',
             method: 'post',
             data: {
               amount:((props.gia)/23000).toFixed(0),
               token,},
           });
           if (response.status === 200) {
             navigate("/")
           }
         } catch (error) {
           console.log(error);
         }
       };
    const publishableKey =
    'pk_test_51L4SfVCPHb2K90y8DJJ0BWxIouMxgYTpG5CrFCkRJQVnSvbzgcju0jAE58fr58cdx4zGzIrIqrHbO9oMZdaoKo2r006lWsNyCd';
    return(

        <div className='Content'>
            <div className='Header' style={{display:'flex'}}>
                <div>
                    <img src={Image} style={{width:260, borderRadius:10, marginLeft:10}}/>
                </div>
                <div style={{marginLeft:80, marginTop:20}}>
                    <h4 style={{fontWeight:'bold'}}>{props.name}</h4>
                    <p>Chung cấp bởi Chung xe NHA TRANG</p>
                    <p>Chưa có Xếp hạng</p>
                    <p>Tự lái</p>
                    
                </div>
            </div>
            <DetailInfor/>
            <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        email='0938224718nguyen@gmail.com'
        amount={((props.gia)/23000).toFixed(2)}
        description={`Your total is $${((props.gia)/23000).toFixed(2)}`}
        token={payNow}/>
        </div>
    )
}
export default Content;