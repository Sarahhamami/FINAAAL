import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cardsdata from './CardsData'

const Details = () => {

    const [data, setData] = useState(Cardsdata);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  

  // console.log(getdata);


  const compare = ()=>{
    let comparedata = data.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }

  // add data
  




  useEffect(()=>{
    compare();
  },[id])

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return (
                <>
                <div className="items_img">
              <img src={ele.imgdata} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                    <p> <strong>Price</strong>  : {ele.price}</p>
                    <p> <strong>Dishes</strong>  : {ele.address}</p>
                   
                   
                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                   
                  </td>
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default Details