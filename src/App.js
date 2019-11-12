import React from 'react';
import {Hamburger,Itemlist,Totalprice} from './Components/index';
import '../src/App.css'
import Allingredients from '../src/Allingredients';


 
  class App extends React.Component {
     constructor(props){
       super(props);
       this.state = {
         ingredients:[],
         totalprice:0,
         ingredientscount:0,
         cıkarbutonu:false,
       };

       this.malzemeEkle=this.malzemeEkle.bind(this);
    

     }
     
      
     malzemeEkle(malzeme){
      this.setState({
        ingredients: [...this.state.ingredients].concat([{...malzeme, displayId: Math.random()}])
      })
    }

    

   render() {
     return (
       <div>
         <Hamburger icindekiler={this.state.ingredients}/>      
         <Totalprice />
         <Itemlist Allingredients={Allingredients} /*bir dizi yollar içeride tek tek yazdırmak için map etmen gerekir */
                   malzemeEkle={this.mazlemeEkle}
         /> 
       </div>
     )
   }
 }
 

export default App;
