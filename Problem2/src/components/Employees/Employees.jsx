import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Employees.css'
const Employees = () => {
    const [employees, setEmployees] = useState([])
  
    const addUser = async () => {
        const randomNumber = Math.floor((Math.random() * 10) + 1);
        //console.log(randomNumber)
        const newUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
        console.log(newUser)
        setEmployees([...employees, newUser.data])
    }
    const renderHeader = () => {
        let headerElement = ['id','name','operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    const renderBody = () => {
        return employees && employees.map(({ id, name }) => {
            return (
                <tr key={id}>
                                        <td>{id}</td>

                    <td>{name}</td>
                  
                    <td className='opration'>
                        <button className='delButton' onClick={() => removeUser(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    const removeUser = (id) => {

            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        
    }
    


    //console.log(users)
   
        return (
            <>
            <button className='addBtn' onClick={addUser}>Add User</button>
                <h1 id='title'></h1>
                <table id='employee'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </>
        )
}

export default Employees