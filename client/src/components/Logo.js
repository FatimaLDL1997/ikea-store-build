import logo from "../assets/images/logo.svg";
import {  useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate()
  return <img src={logo} alt='ikea' onClick={()=>navigate('/main')} className='logo' />;
};
export default Logo;
