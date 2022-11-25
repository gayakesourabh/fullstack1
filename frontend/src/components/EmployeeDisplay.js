import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import base_url from './../api/baseurl'


export default function EmployeeDisplay(props) {

    const handleClick = (item) => {
        
        axios.delete(`${base_url}/delete/${item}`).then(
            (response) => {
              props.showAlert('Employee has been deleted successfully');
              
              setTimeout(() =>{
                window.location.reload(true);
              }, 1500)
            },
            (error) => {
              console.log(error);
            }
        )
    }

  return (
    <>
            {
                props.item.type === 'Permanent' ?
                (<tbody>
                    <tr>
                        <th scope="row">{props.item.id}</th>
                        <td><button type="button" className="btn btn-link" style={{paddingTop:'0px'}}>{props.item.name}</button></td>
                        <td>{props.item.email}</td>
                        <td>{props.item.mobno}</td>
                        <td><button type="button" className="btn btn-info">Permanent</button></td>
                        <td><Link className="nav-link" to={`updateemployee/${props.item.id}`} style={{display:'inline'}}><button type="button" className="btn btn-success">Update</button></Link>
                        <button type="button" className="btn btn-danger" onClick={()=>{handleClick(props.item.id)}}>Delete</button></td>
                    </tr>
                </tbody>):
                (<tbody>
                    <tr>
                        <th scope="row">{props.item.id}</th>
                        <td><button type="button" className="btn btn-link" style={{paddingTop:'0px'}}>{props.item.name}</button></td>
                        <td>{props.item.email}</td>
                        <td>{props.item.mobno}</td>
                        <td><button type="button" className="btn btn-warning">Temporary</button></td>
                        <td><Link className="nav-link" to={`updateemployee/${props.item.id}`} style={{display:'inline'}}><button type="button" className="btn btn-success">Update</button></Link>
                        <button type="button" className="btn btn-danger"onClick={()=>{handleClick(props.item.id)}}>Delete</button></td>
                    </tr>
                </tbody>)
            }
          
    </>
  )
}
