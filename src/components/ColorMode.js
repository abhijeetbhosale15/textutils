import React, { useState } from 'react'

export default function ColorMode(props) {
    
    function handleOnChange(){
        let btns=document.getElementsByName("colorOptions");
        let i = 0;
        for(i = 0; i < btns.length; i++){
            if(btns[i].checked===true){
                document.body.style.backgroundColor=btns[i].value;
            }
        } 
    }
    
  return (
  <>
    <div className="form-check form-check-inline" >
        <input name="colorOptions" type="radio" id="1" value="lightgreen" onChange={handleOnChange}/>
        <label className="form-check-label" htmlFor="1"></label>
    
        <input name="colorOptions" type="radio" id="2" value="darkcyan" onChange={handleOnChange}/>
        <label className="form-check-label" htmlFor="2"></label>
   
        <input name="colorOptions" type="radio" id="3" value="coral" onChange={handleOnChange}/>
        <label className="form-check-label" htmlFor="3"></label>

        <input name="colorOptions" type="radio" id="4" value="#874657" onChange={handleOnChange}/>
        <label className="form-check-label" htmlFor="4"></label>
    </div>
    
</>
  )
}
