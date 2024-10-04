import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../FireBaseProvider/FireBaseProvider";

const Header = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      console.log('user log out success fully');
      
    })
    .catch(error =>console.error(error))
  }

    const links =<>
    <li><NavLink to='/' className='text-xl'>Home</NavLink></li>
    <li><NavLink to='/login' className='text-xl'>LogIn</NavLink></li>
    <li><NavLink to='/register' className='text-xl'>Register</NavLink></li>
    </>

    return (
        <div className="container mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           {
            links
           }
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">Form</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            links
           }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? <>
            <span className="pr-2">{user.email || user.displayName}</span>
            <a onClick={handleLogOut} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-bold">Sign Out</a>
            </>:
          <a className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-bold">Button</a>
          }
        </div>
      </div>
    );
};

export default Header;