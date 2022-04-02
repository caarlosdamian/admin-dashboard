import { useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table';
import './single.scss'

const Single = () => {
  let params = useParams();
  console.log(params)
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleConatiner">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemImg" />
            
            <div className="details">
              <h1 className="itemTitle">Carlos Damian</h1>
              <div className="detailItem">
                <div className="itemKey">Email:</div>
                <div className="itemValue">cdamian@ucol.com</div>
              </div>
              <div className="detailItem">
                <div className="itemKey">Phone:</div>
                <div className="itemValue">+54 312 134 5471</div>
              </div>
              <div className="detailItem">
                <div className="itemKey">Address:</div>
                <div className="itemValue">Aveida 1234 Celaya</div>
              </div>
              <div className="detailItem">
                <div className="itemKey">Country:</div>
                <div className="itemValue">Mexico</div>
              </div>
              </div>
            </div>
          </div>
          <div className="right">
          <Chart aspect={3 / 1} title="User Transations"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transations</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single