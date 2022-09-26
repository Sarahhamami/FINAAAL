import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import { NavLink,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import {DLT} from '../redux/actions/actions';
import { MDBCol } from "mdbreact";
import img from "../components/images/img.png"
import image from "./images/logout.png"
const Header = ({rname,ChangeRname,authLogin,Disconnect}) => {
 
    const [price,setPrice] = useState(0);
    // console.log(price);

        const getdata = useSelector((state)=> state.cartreducer.carts);
        // console.log(getdata);

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }


    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])
console.log(rname)
if (authLogin){
    return (
        <><div>
            <Navbar bg="grey" variant="dark" style={{ height: "60px" }}>
            <Link to={`/home`}> <img className='img' src={img} /></Link>
                <Container>
         
            
                    <Nav className="me-auto">
                  
                        <NavLink to="/home" className="text-decoration-none " style={{ color:"black" }}>Home</NavLink>
                  
                  
                        <NavLink to="/Avis" className="text-decoration-none " style={{ color:"black" }}>Avis</NavLink>
                  
                    </Nav>
                    <MDBCol md="6">
      <input className="form-control" type="text"  onChange={ChangeRname} value={rname} placeholder="Search" aria-label="Search" />
    </MDBCol>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                       
                        <i class="fa-solid fa-cart-shopping " style={{ fontSize: 25, cursor: "pointer"  }}></i>
                    
                    
                    </Badge>
                
                    

                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : {e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total : {price}</p>
                                </tbody>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   
                   </div>
                    }

                </Menu>
                <i class="bi bi-x-octagon"></i>
                <Link to={`/`}>    <img src={image} alt="" className='logout' style={{width:"3rem",padding:10}}  onClick={Disconnect}/></Link>

            </Navbar>
            
          <div
    className='p-5 text-center bg-image'
    style={{ backgroundImage: "url('https://indiater.com/wp-content/uploads/2019/11/food-banner-design-template-free-psd-download.jpg')", height: 400, backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'}}
  >
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className='d-flex justify-content-center align-items-center h-100' >
        <div className='text-white'>
          
         
        </div>
      </div>
    </div></div></div></>
    )}else{
        return(<> <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://indiater.com/wp-content/uploads/2019/11/food-banner-design-template-free-psd-download.jpg')", height: 400, backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'}}
          >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <div className='d-flex justify-content-center align-items-center h-100' >
                <div className='text-white'>
                  
                 
                </div>
              </div>
            </div></div></>)
    }
}

export default Header