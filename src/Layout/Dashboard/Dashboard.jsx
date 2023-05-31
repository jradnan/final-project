import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaHamburger, FaShoppingBag } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import useCart from "../../components/hook/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    return (

        <div className="drawer drawer-mobile">
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to={'/dashboard/home'}><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/reservations'}><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                    <li><NavLink to={'/dashboard/history'}><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to={'/dashboard/myCart'}><FaShoppingCart></FaShoppingCart>My Cart
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/menu'}><FaHamburger></FaHamburger>Our Menu</NavLink></li>
                    <li><NavLink to={'/order/salad'}><FaShoppingBag></FaShoppingBag>Order</NavLink></li>
                </ul>
               
            </div>
        </div>
    );
};

export default Dashboard;