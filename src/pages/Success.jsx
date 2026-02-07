import { useLocation, useNavigate, useParams } from "react-router"

function Success() {
  const navigate = useNavigate()
  const {_inpEmail} =useParams()
  const location = useLocation()
  const email = location.state?.email || "Guest"
  return (
    <div className="max-w-md mx-auto flex flex-col bg-gray-100 p-8 rounded-2xl shadow-xl mt-10 border border-sky-100">
      <h1 className="text-2xl text-center text-blue-600">Thank you for subscribing: {email}</h1>
      <button onClick={()=>navigate("/")} className="btn btn-primary btn-sm w-1/2 mt-4 mx-auto">Home</button>
    </div>
  )
}

export default Success