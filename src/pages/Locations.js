import React, { Component } from 'react'
import Restaurant from '../components/Restaurant'

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
      const locations = this.state.locations
        return (
             <section className='section' >

      <h2 className='section-title'>Locations</h2>
       <div className='section-title'>
      <div className='cocktails-center'>
       {locations.map((category)=>{
         return <Restaurant key={category.id}{...category}/>
       })}
      </div>
      </div>
    </section>
        );
    }
        
    }
    export default Locations