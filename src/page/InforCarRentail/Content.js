import React from 'react';
import './InforCarRentail.css';
import { DetailInfor } from './DetailInfor';
import Image from '../../Img/imgContent.webp'
function Content() {
    return(
        <div className='Content'>
            <div className='Header' style={{display:'flex'}}>
                <div>
                    <img src={Image} style={{width:260, borderRadius:10, marginLeft:10}}/>
                </div>
                <div style={{marginLeft:80, marginTop:20}}>
                    <h4 style={{fontWeight:'bold'}}>Kia Morning</h4>
                    <p>Chung cấp bởi Chung xe NHA TRANG</p>
                    <p>Chưa có Xếp hạng</p>
                    <p>Tự lái</p>
                    
                </div>
            </div>
            <DetailInfor/>
            
        </div>
    )
}
export default Content;