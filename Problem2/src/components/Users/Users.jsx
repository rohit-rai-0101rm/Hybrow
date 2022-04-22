import axios from 'axios'
import React, { useState } from 'react'
import UserDetails from './UserDetails/UserDetails'
import './Users.css'
const Users = () => {
    const [users, setUsers] = useState([])
   
    const addUser = async () => {
        const randomNumber = Math.floor((Math.random() * 10) + 1);
        //console.log(randomNumber)
        const newUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
        console.log(newUser)
        setUsers([...users, newUser.data])
    }
  
    //console.log(users)
    return (
        <div className='Users'>
            <button className='addBtn' onClick={addUser}>Add User</button>
            <div className='userDetails'>
                {
                    users.map((user) => (
                        <div key={user.id}>
                            <p>{user.name}{user.id}</p>
                            <button onClick={(id)=>{
                                console.log(user.id)
                                setUsers(users.filter(user => user.id !== id))
                                console.log(users.length)
                                }} >delete</button>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default Users