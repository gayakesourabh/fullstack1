import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import base_url from './../api/baseurl'
import EmployeeDisplay from './EmployeeDisplay'

export default function Allemployees(props) {

    const [alldata, setalldata] = useState([]);

    const getData = () =>{
        axios.get(`${base_url}/get`).then(
            (response) => {
                setalldata(response.data);
            },
            (error) => {
                console.log(error);
            }
            
        )
    }

    useEffect(() =>{
        getData();
    },[])


    return (
      <div style={{marginTop:'80px'}}>
        <p className='h1' style={{textAlign:'center', marginBottom:'25px', fontFamily:'New Tegomin'}}>LIST OF EMPLOYEES</p>
          <table className="container table table-bordered">
              <thead style={{backgroundColor:'greenyellow'}}>
                  <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Type</th>
                      <th scope="col">Action</th>
                  </tr>
              </thead>
              {alldata.map(item => <EmployeeDisplay key={item.id} item={item} showAlert={props.showAlert}/>)}
              
          </table>

      </div>
  )
}
