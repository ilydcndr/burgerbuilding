import React from 'react';

function Totalprice(props){
    return(
        <div style={{marginLeft:"45%",backgroundColor:"#ff6114",width:"10%",textAlign:"center"}}>
         {props.Hesapla()}
        </div>
    )
}

export default Totalprice; 