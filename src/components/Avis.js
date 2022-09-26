import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Avis() {
    const [posts, setPosts] = useState([]);
    const fetchPost = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/posts")
        setPosts(response.data);
        console.log(response)
    }
    useEffect(() => {
      fetchPost();
     }, []);
     return (
        <div className='container mt-3'>
      <h2 className='text-center'>Restaurant tunisien</h2>

      <div className="row d-flex justify-content-center align-items-center">
        <Card border="secondary" style={{ width: '100rem' }}>
        {posts.map((p) => (<><Card.Header>post {p.id}</Card.Header>
        <Card.Body>
          <Card.Title>title {p.title}</Card.Title>
          <Card.Text>
          {p.body}
          </Card.Text>
        </Card.Body></>))}
      </Card>
      </div></div>
    );
}