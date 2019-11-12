import React from 'react';

function Item(props){
    return(
        <div className="BuildControl">
            <div className="Label">{props.name}</div>
            <div>
                adedi
            </div>
            
            <button> Cıkar</button>

            <button className="more" onClick={() => {
                props.malzemeEkle(props);     
            }}>Ekle</button>   
        </div>
    )
}

export default Item;



