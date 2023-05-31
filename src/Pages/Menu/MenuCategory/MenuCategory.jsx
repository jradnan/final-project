import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="mt-10 mb-10">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-4 mt-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><div className="text-center"><button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURETE FOOD</button></div></Link>
        </div>
    );
};

export default MenuCategory;


