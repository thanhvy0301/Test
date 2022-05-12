import React from 'react'
import { IconName, AiOutlineClockCircle, AiOutlineCheck} from "react-icons/ai";
import {FaGasPump, FaClipboardList, FaMoneyBillWave, FaRegCalendarAlt} from 'react-icons/fa'
import {Ri24HoursLine} from 'react-icons/ri'
import {IoShieldCheckmarkOutline} from 'react-icons/io5'
import './InforCarRentail.css';
const listPolicy= [
  'Trả xe với cùng mức nhiên liệu khi nhận', 
  'Sử dụng tới  đa 20:00 mỗi ngày thuê',
  'Yêu cầu thuê xe',
  'Áp dụng hoàn tiền',
  'Đổi lịch lại khả dụng'
]
const listRequestRen = [
  'CMND / Hộ chiếu',
  'Bằng lái xe',
  'Đặt cọc  VND 15.000.000',
  'Others (if provider requires additional verification',
]
const listUtilities = [
  'Dịch vụ hỗ trợ trên đường khẩn cấp 24/7',
  'Không có bảo hiểm'
]
// const Policy = listPolicy.map((item) =>
//   <li>{item}</li>)
const RequestRen = listRequestRen.map((item)=>
    <li ><AiOutlineCheck style={{paddingRight:10, width:25}}/>{item}</li>
)
export const DetailInfor = () => {
  return (
    <div>
      <div style={{width:650, boxShadow:' 0px 1px 1px 1px rgb(219, 219, 219)', marginLeft:20, borderRadius:5}}>
        <h5 style={{fontWeight:'bold'}}>Thông tin thuê xe</h5>
        <p style={{fontWeight:'bold'}}>Chính sách</p>
        
        <ul>
          <li><FaGasPump className='icon-item' />{listPolicy[0]}</li>          
          <li><AiOutlineClockCircle className='icon-item'/>{listPolicy[1]}</li>

          <div>
            <li><FaClipboardList className='icon-item'/>{listPolicy[2]}</li>
                <div >
                  <ul style={{paddingLeft:50, lineHeight:2}}>{RequestRen}</ul>
                </div>
          </div>

          <li><FaMoneyBillWave className='icon-item'/>{listPolicy[3]}</li>
          <li><FaRegCalendarAlt className='icon-item'/>{listPolicy[4]}</li>
        </ul>
        <p style={{fontWeight:'bold'}}>Chính sách</p>
        <ul>
          <li><Ri24HoursLine className='icon-item'/>{listPolicy[0]}</li>
          <li><IoShieldCheckmarkOutline className='icon-item'/>{listPolicy[1]}</li>
        </ul>
      <div style={{borderTop: '1px solid gray', width:650, padding:0}}>
        <h5>Chung Xe NHA TRANG văn phòng</h5>
        <p style={{margin:0}}>Có 1 văn phòng</p>
        <p style={{paddingTop:0}}>Chạm vào hình bên dưới để xem các văn phòng thuê xe.</p>
      </div>
      </div>

    </div>
  )
}
