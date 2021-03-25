// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  //const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  // 🐨 add a submit event handler here (`handleSubmit`).
  //const inputEl = React.useRef()
  const handleSubmit = event => {
    event.preventDefault()
    //const userName = event.target.elements.formInput.value
    onSubmitUsername(username)
    // const userName = inputEl.current.value
  }

  const handleChange = event => {
    const {value} = event.target
    //setError(isLowerCase ? null : 'Username must be lower case')
    setUsername(value.toLowerCase())
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="formInput">Username:</label>
        <input
          id="formInput"
          // ref={inputEl}
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      {/* <div role="alert" style={{color: 'red'}}>
        {error}
      </div> */}
      <button
        type="submit"
        // disabled={Boolean(error)}
      >
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
