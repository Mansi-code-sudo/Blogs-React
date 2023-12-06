import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"

export default function App() {

  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}
