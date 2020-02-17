import React, { Component } from 'react';
import './App.css'

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
      <div class="catalogTitle">
        <h1 className="catalogHeaderTitle">bestsellers</h1>
      </div>
        <div className="catalogItemContent">
        {
          bestsellers.map((item, index) => {
            return( 
            <div className="cardBox" key={index}>
              <div className="noteBox-for-open">
                <img src={item.url} className="catalogItemImages" width="219px"/>
                <p className="catalogItemName">{item.name}</p> 
                <p className="catalogItemPrice">Цена: {item.price}</p>
                <div className="ItemButton">
                  <button className="catalogItemButton">Купить</button>
                </div>
              </div>
            </div>)
          })
        }
      </div>
      <div class="catalogTitle">
        <h1 className="catalogHeaderTitle">coffee</h1>
      </div>
      <div className="catalogItemContent">
        {
          coffee.map((item, index) => {
            return( 
            <div className="cardBox" key={index}>
              <div className="noteBox-for-open">
                <p className="catalogItemName">{item.name}</p>
                <p className="catalogItemCountry">Страна производитель: {item.country}</p>
                <img src={item.url} className="catalogItemImages" width="219px"/>
                <p className="catalogItemPrice">Цена: {item.price}</p>
                <p className="catalogItemDescription">{item.description}</p>
                <div className="ItemButton">
                  <button className="catalogItemButton">Купить</button>
                </div>
              </div>
            </div>)
          })
        }
      </div>
      <div class="catalogTitle">
        <h1 className="catalogHeaderTitle">goods</h1>
      </div>
      <div className="catalogItemContent">
        {
          goods.map((item, index) => {
            return( 
            <div className="cardBox" key={index}>
              <div className="noteBox-for-open">
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
      </div>
      </>
    )
  }
}

export default App;
