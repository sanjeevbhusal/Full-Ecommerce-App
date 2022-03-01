import { Link } from "react-router-dom";
import { authInstance } from "../../firebase/fireabase.utils";
import { ReactComponent as Logo } from "../assets/header.logo.svg";
import "./header.styles.scss";
const Header = ({ currentUser }) => {
   return (
      <div className="header">
         <Link className="logo-container" to="/">
            <Logo />
         </Link>
         <div className="options">
            <Link className="option" to="/shop">
               Shop
            </Link>
            <Link className="option" to="/contact">
               Contact
            </Link>
            {currentUser ? (
               <div className="option" onClick={() => authInstance.signOut()}>
                  Signout
               </div>
            ) : (
               <Link className="option" to="/signin">
                  Signin
               </Link>
            )}
         </div>
      </div>
   );
};

export default Header;