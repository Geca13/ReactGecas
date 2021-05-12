import React, { Component } from 'react'

class Reservation extends Component {
    

        state = {
           categories: []
        }
         render() {
      const categories = this.state.categories
        return (
            <h1>Reservation categories goes here</h1>
        );
    }
        
    }
    export default Reservation