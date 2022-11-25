import React from 'react'

export default function Alert1(props) {
  return (
  <div>
    {props.alert && <div className="alert alert-info" role="alert">
  {props.alert.message}
</div>}
</div>
  )
}
