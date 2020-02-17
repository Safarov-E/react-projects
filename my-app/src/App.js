import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    fetch('/users')
    .then((response) => response.json())
    .then((myJson) =>  console.log(myJson))
  }
  
  render(){
    return (
      <div>
        
      </div>
    )
  }
}

export default App;
