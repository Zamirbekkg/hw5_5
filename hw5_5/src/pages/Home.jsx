import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false); 
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    console.log(users);
    return (
        <div>
            {loading ? (
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <div>
                    {users.map(user => (
                        <h1 key={user.id}>
                            <Link to={`${user.id}`}>{user.username}</Link>
                        </h1>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;

