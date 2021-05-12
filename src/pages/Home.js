import React, { Component } from 'react'

class Home extends Component {
    

        state = {
           categories: []
        }
         render() {
      const categories = this.state.categories
        return (
            <h1>Home goes here</h1>
        );
    }
        
    }
    export default Home