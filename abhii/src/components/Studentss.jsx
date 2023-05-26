import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Entryy from './Entryy';

const Studentss = () => {
    var [update,setupdate]=useState(false)
    var [Singlevalue,setSinglevalue]=useState([])
    var[namess,setnamess]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3030/see")
        .then((response)=>{
            setnamess(response.data)
            console.log(response.data)
        })
        .catch()
    },[])

    const Ihandle = (id)=>{
        axios.delete("http://localhost:3030/delete/" +id)
        .then((response)=>{
            console.log(response)
        })
        .catch(err=>console.log(err))
    }
    
    const Ihandlee = (value)=>{
        console.log("clicked",value)
        setSinglevalue(value)
        setupdate(true)
    }

    var finalJSX= <div style={{paddingTop:'100px'}}>
    <TableContainer>
        <Table aria-aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell>Name </TableCell>
                    <TableCell>Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {namess.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.sname}</TableCell>
                            <TableCell>{value.sgrade}</TableCell>
                            <TableCell><Button onClick={()=>Ihandle(value._id)}> Delete </Button></TableCell>
                            <TableCell><Button onClick={()=>Ihandlee(value)}> Update </Button></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
</div>

if(update)
{
    finalJSX=<Entryy data={Singlevalue} method="put"/>
}


  return (
    finalJSX
    
  )
}

export default Studentss