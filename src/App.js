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
       };

       this.malzemeEkle=this.malzemeEkle.bind(this);
       this.malzemeCikar=this.malzemeCikar.bind(this);
       this.Hesapla=this.Hesapla.bind(this);
     }
     
     malzemeEkle(malzeme){
      this.setState({
        ingredients: [...this.state.ingredients].concat([{...malzeme, displayId: Math.random()}])
      })
    }

    malzemeCikar(malzeme){
      const secilenUrun=this.state.ingredients.find((ingredient)=>{
        return (
          ingredient.name===malzeme.name
        )
      })
      const secilmisUrunKimligi=secilenUrun.displayId
 
        this.setState({
          ingredients:this.state.ingredients.filter((ingredient)=>{
            return(
              secilmisUrunKimligi!==ingredient.displayId
            )       
        })
      })
}
      
       Hesapla(){  
         let toplam=0;
         this.state.ingredients.forEach((ingredient)=>{
           return(
            toplam+=ingredient.price
           )       
        })
        return(
          ` Toplam Fiyat ${toplam} TL`
        )
      }
         

  render() {
     return (
       <div>
         <Hamburger icindekiler={this.state.ingredients}/>      
         <Totalprice Hesapla={this.Hesapla}/>
         <Itemlist Allingredients={Allingredients} /*bir dizi yollar içeride tek tek yazdırmak için map etmen gerekir */
                   malzemeEkle={this.malzemeEkle}
                   malzemeCikar={this.malzemeCikar}
                   icindekiler={this.state.ingredients}
         /> 
       </div>
     )
   }
 }
 

export default App;
