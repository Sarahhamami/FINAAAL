import {React,useState} from 'react'
import { Form,Button,InputGroup,Col,Row } from 'react-bootstrap'
import {Link} from "react-router-dom"
export default function EmailValidation({authLogin,ChangeAuthLogin,password,email,ChangeEmail,ChangePassword}) {


  return (   <Form className='form '>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="email" placeholder="Email" onChange={ChangeEmail} value={email} />
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Password
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="password" placeholder="Password" onChange={ChangePassword} value={password}/>
      </Col>
    </Form.Group>
    <fieldset>
      
    </fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
      <Col sm={{ span: 10, offset: 2 }}>
        <Form.Check label="Remember me" />
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} className="mb-3">
      <Col sm={{ span: 10, offset: 2 }}>
     {authLogin?  (<><Link to={`/home`}>    <Button type="submit" variant='dark' onClick={ChangeAuthLogin}>Sign in</Button></Link></>):
     <Link to={`/`}>    <Button type="submit" variant="dark" onClick={ChangeAuthLogin}>Sign in</Button></Link>
     
     }
    
      </Col>
   
    </Form.Group>
  
  </Form>

  );   
  
}