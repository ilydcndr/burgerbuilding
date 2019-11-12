import React from 'react';

function Hamburger(props){
    return(
        <div style={{width:"50%",marginLeft:"25%"}}>
            <div className="BreadTop" style={{ height:"100px"}}></div>

            <div>
                   {
                       props.icindekiler.map((icindekiurun)=>{
                           return(         
                               <div key={icindekiurun.displayId} style={
                                {backgroundColor:icindekiurun.color,
                                width: "80%",
                                margin: "0 auto",
                                marginTop: "10px",
                                height: "20px",
                               }
                            }></div>
                           )
                       })
                   }
                 
            </div>
                
            <div className="BreadBottom" style={{height:"50px"}}>

            </div>
        </div>
    )
}


export default Hamburger;