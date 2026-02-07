import { useLocation, useNavigate } from "react-router"

function Header() {
  const location = useLocation()
  const navigator = useNavigate()

  return (
    <div>
      <h1>Header</h1>
      <p>Current path: {location.pathname}</p>
      <button className="btn bg-blue-200 " onClick={()=>navigator("/")}>Home</button>
    </div>
  )
}

export default Header