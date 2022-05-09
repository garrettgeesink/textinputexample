import React, { Component } from 'react'

class SearchInput extends Component {

   componentDidUpdate(prevProps) {
    console.log('something in the props has changed');
    console.log("prev" , prevProps);
   }

   render() {
     const { onChange } = this.props
     return (
       <input onChange={onChange} /> 
     )
   }
}

export default SearchInput