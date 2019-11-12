import React from 'react';
import {Item} from '../index';

function Itemlist(props){
    return(
        <div style={{backgroundColor:"#fc915d",width:"70%",marginLeft:"15%"}}> 
            {
              props.Allingredients.map((oneingredients)=>{
                return <Item  key={oneingredients.id} {...oneingredients}
                           malzemeEkle={props.malzemeEkle}
                           
                    />
                
              })
            }
        </div>
    )

}

export default Itemlist;