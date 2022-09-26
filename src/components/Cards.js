import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/actions';
import { Link } from "react-router-dom";
const Cards = ({data}) => {


  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Restaurant tunisien</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Link to={`/detail/${element.id}`}>  <Button variant="dark"  
                    
                     className='col-lg-12'>Details</Button></Link>
                     </div><br></br>
                     <div className="button_div d-flex justify-content-center">
                   <Link to={`/cart/${element.id}`}>  <Button variant="secondary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button></Link>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards