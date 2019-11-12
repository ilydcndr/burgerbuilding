import React from 'react';

function Item(props){
    return(
        <div className="BuildControl">
            <div className="Label">{props.name}</div>
            <div>
              {props.sectigimUrununTamami.length}
            </div>   
                 {
                   props.sectigimIcindeVarmi ? <button className="Less" onClick={()=>{
                    props.malzemeCikar(props);
                }}> Cıkar </button> : <button className="Less disabled" onClick={()=>{
                    props.malzemeCikar(props);
                }}> Cıkar </button>
                 }       
                 <button className="more" onClick={() => {
                props.malzemeEkle(props);     
               }}> Ekle</button>   
               
        </div>
    )
}

export default Item;



