import React, { Component } from 'react'

class Locations extends Component {
    

        state = {
           locations: []
        }

        async componentDidMount(){
      const response = await fetch('http://localhost:8081/api/locations');
    const body = await response.json();
    this.setState({ locations: body});
    }
    render() {
      const categories = this.state.locations
        return (
            <H1>Locations  goes here</H1>
        );
    }
        
    }
    export default Locations