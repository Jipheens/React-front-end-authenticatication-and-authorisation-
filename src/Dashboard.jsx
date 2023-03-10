import React from 'react'
import { useLocation } from 'react-router-dom';
    
    export default function Dashboard() {
        const location =useLocation();
        const { user } = location.state;

        console.log(location);
       console.log(user);

        return (
<div style={{border: '1px solid black', padding: '20px'}}>
      <h2 style={{textAlign: 'center'}}>Sellers Dashboard</h2>
      <div>
        <h1>Welcome, {user.username}!</h1>
        <h1>You are a, {user.role}!</h1>
        <p>Email: {user.emailAddress}</p>
        </div>
        </div>
        );
        }
 

