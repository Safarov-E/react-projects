import React, { Component } from 'react';
import {CatalogTitle, CatalogItemContent} from './AppStyled'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      img: null
    }
  }

  componentDidMount() {
    fetch('/users')
    .then((response) => response.json())
    .then((jsonData) => jsonData )
    .then((jsonStr) => {
        this.setState({ img: jsonStr });
    });
  }

  render(){
    if(this.state.img === null) {
      return <p>Loading...</p>
    }
    const {bestsellers, coffee, goods} = this.state.img
    return (
      <>
      <CatalogTitle>
        <h1 className="catalogHeaderTitle">bestsellers</h1>
      </CatalogTitle>
        <CatalogItemContent>
        {
          bestsellers.map((item, index) => {
            return( 
            <div className="cardBox" key={index}>
              <div>
                <img src={item.url} width="219px"/>
                <p className="catalogItemName">{item.name}</p> 
                <p className="catalogItemPrice">Цена: {item.price}</p>
                <div className="ItemButton">
                  <button className="catalogItemButton">Купить</button>
                </div>
              </div>
            </div>)
          })
        }
      </CatalogItemContent>
      <CatalogTitle>
        <h1 className="catalogHeaderTitle">coffee</h1>
      </CatalogTitle>
      <CatalogItemContent>
        {
          coffee.map((item, index) => {
            return( 
            <div className="cardBox" key={index}>
              <div>
                <p className="catalogItemName">{item.name}</p>
                <p className="catalogItemCountry">Страна производитель: {item.country}</p>
                <img src={item.url} width="219px"/>
                <p className="catalogItemPrice">Цена: {item.price}</p>
                <p className="catalogItemDescription">{item.description}</p>
                <div className="ItemButton">
                  <button className="catalogItemButton">Купить</button>
                </div>
              </div>
            </div>)
          })
        }
      </CatalogItemContent>
      <CatalogTitle>
        <h1 className="catalogHeaderTitle">goods</h1>
      </CatalogTitle>
      <CatalogItemContent>
        {
          goods.map((item, index) => {
            return( 
            <div className="cardBox" key={index}>
              <div>
                <p className="catalogItemName">{item.name}</p> 
                <img src={item.url} className="catalogItemImages" width="219px"/>
                <p className="catalogItemPrice">Цена: {item.price}</p>
                <div className="ItemButton">
                  <button className="catalogItemButton">Купить</button>
                </div>
              </div>
            </div>)
          })
        }
      </CatalogItemContent>
      </>
    )
  }
}

export default App;
