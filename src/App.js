import React, { Component, useState, useEffect } from 'react'

import Title from './Title'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import emojiList from './emojiList.json'

const App = () => {
  const [textInput, setTextInput] = useState('') // hook 
  return (
    <center>
      <Title />
      <SearchInput onChange={
        function(event) {
          setTextInput(event.target.value)
        }
      } /> 
      <SearchResults emojis={emojiList} textInput={textInput} />
    </center>
  )
}

export default App
