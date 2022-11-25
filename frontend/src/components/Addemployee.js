import React from 'react'
import {useState } from "react"
import axios from 'axios'
import base_url from './../api/baseurl'

export default function Addemployee(props) {

  const [newemployee, addnewemployee] = useState({});

  const postData = (data) => {
    axios.post(`${base_url}/post`, data).then(
      (response) => {
        console.log('added');
      },
      (error) => {
        console.log(error);
      }

    )
  }

  const handleClick = () => {
    postData(newemployee);
    props.showAlert('Employee has been added successfully');
    addnewemployee({id:' ',name:' ',email:' ',mobno:' ',type:' '})
  }

  return (
    <div style={{ marginTop: '80px' }}>
      <h2 className="m-4" style={{fontFamily:'New Tegomin'}}>ADD DETAILS OF NEW EMPLOYEE</h2>
      <div className="m-4">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Id</label>
          <textarea className="form-control" id="id" value={newemployee.id} onChange={(event) => { addnewemployee({ ...newemployee, id: event.target.value }) }} rows="1" placeholder="Must be number" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Name</label>
          <textarea className="form-control" id="name" value={newemployee.name} onChange={(event) => { addnewemployee({ ...newemployee, name: event.target.value }) }} rows="1" placeholder="Enter Full Name"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
          <textarea className="form-control" id="email" value={newemployee.email} onChange={(event) => { addnewemployee({ ...newemployee, email: event.target.value }) }} rows="1" placeholder="Must contain @gmail.com"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Mobile</label>
          <textarea className="form-control" id="mobile" value={newemployee.mobno} onChange={(event) => { addnewemployee({ ...newemployee, mobno: event.target.value }) }} rows="1" placeholder="Must be 10 digit number"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Type</label>
          <textarea className="form-control" id="type" value={newemployee.type} onChange={(event) => { addnewemployee({ ...newemployee, type: event.target.value }) }} rows="1" placeholder="Temporary or Permanent"></textarea>
        </div>
        <button className='btn btn-info' onClick={handleClick}>Save</button>
      </div>
    </div>
  )
}
