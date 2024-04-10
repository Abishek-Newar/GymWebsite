import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from "./pages/Main"
import BookTrial from "./pages/BookTrial"
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="bookTrial" element={<BookTrial />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
