import React, { Component, useState, useEffect } from 'react'

import Title from './Title'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import emojiList from './emojiList.json'

const App = () => {
  const [textInput, setTextInput] = useState('') // hook 
  const [filterInput, setFilterEmoji] = useState('')
  return (
    <center>
      <Title />
      <div>
        <SearchInput onChange={function(event) {setTextInput(event.target.value)}} />  {/* Updates textInput every time you type a character */}
        <button onClick={function() {setFilterEmoji(textInput)}}>submit</button> {/* uses textInput to call setFilterEmoji, which updates filter input */}
      </div>
      <SearchResults emojis={emojiList} textInput={filterInput} /> {/* filters the emojis using filterInput */}
    </center>
  )
}

export default App
