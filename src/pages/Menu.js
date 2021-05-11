import React, { Component } from 'react'

class Menu extends Component {
    

        state = {
           categories: []
        }

        async componentDidMount(){
      const response = await fetch('http://localhost:8081/api/categories');
    const body = await response.json();
    this.setState({ categories: body});
    }
    render() {
      const categories = this.state.categories
        return (
            <H1>Menu categories goes here</H1>
        );
    }
        
    }
    export default Menu