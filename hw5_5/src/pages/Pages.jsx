import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Pages = () => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const { id } = useParams(); 

    useEffect(() => {
        setLoading(true); 
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setUser(response.data); 
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false); 
            });
    }, [id]);

    if (loading) {
        return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>; // Показываем прелоадер, пока loading true
    }


    if (!user) {
        return <div>Пользователь не найден.</div>;
    }

    return (
        <div>
            <ul>
                <li><h1>{user.name}</h1></li>
                <li><h2>{user.username}</h2></li>
                <li><h2>{user.email}</h2></li>
                <li><h2>{user.phone}</h2></li>
                <li><h2>{user.website}</h2></li>
            </ul>
            <Link to='/'>Go home</Link>
        </div>
    );
}

export default Pages;
