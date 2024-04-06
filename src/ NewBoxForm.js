import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

const NewBoxForm = ({addBox}) => {    
    
    
    const[formData, setFormData] = useState({
        height: "",
        width: "",
        color: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox(formData.height, formData.width, formData.color)

        return

    }

    function handleChange(e){
        setFormData(data => ({
        ...data,
        [e.target.name]: e.target.value
        })
        
        )

    }


    return(
    <form onSubmit={handleSubmit}>

        <label htmlFor='height'className='mx-2'>Height: </label>
        <input name= "height" id="height" type="text" value={formData.height} onChange={handleChange}></input>

        <br></br>
        <br></br>

        <label htmlFor='width'className='mx-2'>Width: </label>
        <input name= "width" id="width" type="text" value={formData.width} onChange={handleChange}></input>

        <br></br>
        <br></br>
    
        <label htmlFor='color'className='mx-2'>Color: </label>
        <input name= "color" id="color" type="text" value={formData.color} onChange={handleChange}></input>

        <br></br>
        <br></br>
    
        <button>Submit</button>
    
    </form>
    )
}






export default NewBoxForm;