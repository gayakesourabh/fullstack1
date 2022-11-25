import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from 'axios'
import base_url from './../api/baseurl'

export default function Updateemployee(props) {

  const{id} = useParams();

  const [empbyid, setempbyid] = useState([]);

    const getData = () =>{
        axios.get(`${base_url}/getbyid/${id}`).then(
            (response) => {
                setempbyid(response.data);
            },
            (error) => {
                console.log(error);
            }
            
        )
    }

    useEffect(() =>{
        getData();
    },[])

    const putData = (data) => {
      axios.put(`${base_url}/put`, data).then(
        (response) => {
          console.log('updated');
        },
        (error) => {
          console.log(error);
        }
  
      )
    }

    const handleClick = () => {
      putData(empbyid);
      props.showAlert('Employee has been updated successfully');
    }

  return (
    <>
      <div style={{ marginTop: '80px' }}>
      <h2 className="m-4" style={{fontFamily:'New Tegomin'}}>UPDATE DETAILS OF THIS EMPLOYEE</h2>
      <div className="m-4">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Id</label>
          <textarea className="form-control" id="id" value={empbyid.id} onChange={(event) => { setempbyid({ ...empbyid, id: event.target.value }) }} rows="1" placeholder="Must be number" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Name</label>
          <textarea className="form-control" id="name" value={empbyid.name} onChange={(event) => { setempbyid({ ...empbyid, name: event.target.value }) }} rows="1" placeholder="Enter Full Name"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
          <textarea className="form-control" id="email" value={empbyid.email} onChange={(event) => { setempbyid({ ...empbyid, email: event.target.value }) }} rows="1" placeholder="Must contain @gmail.com"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Mobile</label>
          <textarea className="form-control" id="mobile" value={empbyid.mobno} onChange={(event) => { setempbyid({ ...empbyid, mobno: event.target.value }) }} rows="1" placeholder="Must be 10 digit number"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Type</label>
          <textarea className="form-control" id="type" value={empbyid.type} onChange={(event) => { setempbyid({ ...empbyid, type: event.target.value }) }} rows="1" placeholder="Temporary or Permanent"></textarea>
        </div>
        <button className='btn btn-info' onClick={handleClick}>Save</button>
      </div>
    </div>
    </>
  )
}
