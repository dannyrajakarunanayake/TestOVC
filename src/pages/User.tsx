import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from "react-redux";
import "../pages/User.css"; 
import {fetchUsers} from "../slices/users"
import { RootState } from '../slices';
import { useHistory } from 'react-router-dom';
import { match } from 'assert/strict';


interface UserProps {}
const User = (props:UserProps) => {
    const [value, setValue] =useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    
    const { lists, status } = useSelector(
        (state: RootState) => state.users
    );

    lists.map(u => {
        console.log(u);
    })

    const handleInput = (e: React.FormEvent<HTMLInputElement>)  =>{
        setValue(e.currentTarget.value);
        e.preventDefault();
    }

    const handleClick = (e:any) => {
        console.log("click")
        history.push("/post/${1}")
    }

    const matchQuery = (user:any) => {
        let match = new RegExp(`${value}`, "i");
            return match.test(user.name)
        
    }

    useEffect(() => {
       dispatch(fetchUsers())
    }, [])

   

    return (
        <>
            <h1>User Item</h1>
            <div className="search-box">
            <label>Search:&nbsp;</label>
            <input type="text" onChange={handleInput} value={value} />
            
            {(status === "loading" && lists.length === 0) ? <p>Loading</p> : (
                <table className="user-list">
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>email</td>
                            <td>city</td>
                            <td>company</td>
                        </tr>
                    </thead>
                    <tbody>
                    {lists.filter(matchQuery).map((user: {name: string, email: string, address: {city: string}, company: { name: string}}) => (
                        <tr 
                        onClick={handleClick}
                        >
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))} 
                    </tbody>
                </table>
            )}
            </div>
        
            
        </>
        
    )
}


export default User;