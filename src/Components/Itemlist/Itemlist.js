import React from 'react';
import {Item} from '../index';

function Itemlist(props){
    return(
        <div style={{backgroundColor:"#fc915d",width:"70%",marginLeft:"15%"}}> 
            {
              props.Allingredients.map((oneingredients)=>{

                  const sectigimIcindeVarmi=props.icindekiler.find((icindeki)=>{
                    return(
                            oneingredients.name===icindeki.name
                    )
                  })  
                  
                  const sectigimUrununTamami=props.icindekiler.filter((icindeki)=>{
                    return(
                           oneingredients.name===icindeki.name
                    )

                  })

                return (
                <Item  key={oneingredients.id} {...oneingredients}
                           malzemeEkle={props.malzemeEkle}
                           malzemeCikar={props.malzemeCikar}
                           sectigimUrununTamami={sectigimUrununTamami}
                           sectigimIcindeVarmi={sectigimIcindeVarmi}
                       
                       />  
                )   
              })
            }
        </div>
    )

}

export default Itemlist;