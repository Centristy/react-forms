
import React, {useState} from 'react'
import NewBoxForm from './ NewBoxForm.js'
import {v4 as uuid} from 'uuid'
import Box from './Box.js'

const BoxList = () => {

    const INITAL_STATE = [
        {key:uuid(), height:'0', width: '0', color: 'blue'}
    ]

    const [colorBox, setColorBox] = useState(INITAL_STATE)

    const addBox = (height, width, color) => {
        setColorBox(colorBox => [...colorBox, { height, width, color }])
    }

    return(
    <div>

        <p> Box Generator </p>
        <hr></hr>

        <p style= {{fontSize:"15px"}} > Do not include units: the default unit is pixels</p>
        
        <NewBoxForm key="form" addBox= {addBox}/>

        <div>
            {colorBox.map(({ height, width, color }) => <Box height={height} width={width} color={color} />)}
        </div>
    
    
    </div>
    )
}



export default BoxList;