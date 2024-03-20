import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);   // used in normal react app which we create using create react app but her we using vite so its not working for that use below syantatx

  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1>Blog App with appwrite</h1>
    </>
  )
}

export default App
