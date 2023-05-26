import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Entryy = (props) => {

  var [pn,setpn]=useState(props.data)

  const inputhan=(e)=>{
    const{name,value}=e.target
    setpn((pn)=>({...pn,[name]:value}))
  }

  const changee=()=>{
    if(props.method==="post"){
      axios.post("http://localhost:3030/create",pn)
      .then((response)=>{
      console.log("data",response.data)
    })
    .catch(err=>console.log(err))
  }

    if(props.method==="put"){
    axios.put("http://localhost:3030/upd/" +pn._id,pn )
    .then((response)=>{
      console.log("put data"+response.data)
      window.location.reload(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  }}

  return (
    <div style={{paddingTop:'100px'}}>
        <TextField placeholder='First Name' name ="sname" value={pn.sname} onChange={inputhan}> </TextField>
        <TextField placeholder='Grade' name="sgrade" value={pn.sgrade} onChange={inputhan}> </TextField>
        <br></br>
        <Button variant='contained' onClick={changee}> Submit</Button>
    </div>
  )
}

export default Entryy