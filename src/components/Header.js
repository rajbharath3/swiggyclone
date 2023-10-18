import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        alt="Logo"
        className="h-28"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LfRCU4zMm67EbTXfbX0994SOPdqJUHg4Z1gtsz2EyJzbuGsc7rhZ18H0owBOyRF1eUM&usqp=CAU"
      ></img>
    </a>
  );
};
const Header = () => {
  const [isloggedin, setisloggedin] = useState(false);

  const { user } = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items);


  return (
    <div className="flex justify-between bg-gray-200">
      <Title />
      <div className="flex">
        <ul className="flex mt-2">
          <Link to="/">
            <li className="p-2 m-5">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-2 m-5">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="p-2 m-5">Contact Us</li>
          </Link>

          <Link to="/instamart">
            <li className="p-2 m-5">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="p-2 m-5">Cart-{cartItems.length}</li>
          </Link>
          <h1 className="p-2 m-5 font-semibold underline ">{user.name}</h1>
          {isloggedin ? (
            <button
              className="p-2 m-5 bg-blue-500 rounded-md w-20 h-10"
              onClick={() => setisloggedin(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="p-2 m-5 bg-blue-500 rounded-md w-20 h-10"
              onClick={() => setisloggedin(true)}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
