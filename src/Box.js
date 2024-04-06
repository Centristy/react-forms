
import React from 'react'
import {v4 as uuid} from 'uuid'


const Box= ({height, width, color}) => {
    return(
    <div className='box m-2' key={uuid()} style= {{backgroundColor: color, height: `${height}px`, width: `${width}px`}}>
    
    </div>
    )
}


export default Box;