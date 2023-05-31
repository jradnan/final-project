import { Link } from 'react-router-dom';
import {  FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/Authprovider';
import useCart from '../../../components/hook/useCart';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <div className="navbar fixed z-10 opacity-80 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className=" text-[24px] nav-logo normal-case text-xl">BISTRO BOSS<br />Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/menu'}>Our Menu</Link></li>
                        <li><Link to={'/order/salad'}>Order Food</Link></li>
                        <li>
                            <Link to={'/dashboard/myCart'}>
                                <button className="btn gap-2">
                                <FaShoppingCart />
                                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </button>
                            </Link>
                        </li>
                        {
                            user ? <>
                                <li> <span>{user?.displayName}</span></li>
                               <div className='flex items-center'>
                               <img className='w-10 h-10' src={user.photoURL} alt="" />
                                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                               </div>
                            </> : <>
                                <li><Link to="/login">Login</Link></li>
                            </>
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;