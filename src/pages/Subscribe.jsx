import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Subscribe() {
  // ------ JS area ------
  const navigate = useNavigate();
  // State
  const [inpEmail, setInpEmail] = useState("");

  // Function
  const hdlChange = (e) => {
    setInpEmail(e.target.value);
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    if (!inpEmail) {
      alert("Please input email address");
    } else {
      navigate("/success");
    }
  };

  // ------ JSX area ------
  return (
    <div className="max-w-md bg-white p-8 round-2xl shadow-xl mt-10 mx-auto border border-sky-100 ">
      <form onSubmit={hdlSubmit} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-sky-800 mb-2">Subscription From</h1>
        <p className="text-gray-500 text-sm mb-6">Please input email to subscribe and recive sensor-news from us</p>
        <div>
          <label>Email Adress</label>
          <input
            type="text"
            name="email"
            value={inpEmail}
            onChange={hdlChange}
            placeholder="example@email.com"
            className="input input-primary w-full "
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Scribe Now!
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
