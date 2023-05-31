import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import Desert from '../../../assets/menu/dessert-bg.jpeg';
import Pizza from '../../../assets/menu/pizza-bg.jpg';
import Salads from '../../../assets/menu/salad-bg.jpg';
import Soups from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../components/hook/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'} subTitle={'would you like to try a dish?'}></Cover>
            <SectionTitle subHeading={`---Don't miss---`} mainHeading={`TODAY'S OFFER`}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            
            {/* dessert menu items */}
            <MenuCategory
            items={desserts} title={"dessert"}
            coverImg={Desert}
            ></MenuCategory>
             
            {/* pizza items */}
            <MenuCategory items={pizza} coverImg={Pizza} title={"pizza"}></MenuCategory>
            
            {/* salads items*/}
            <MenuCategory items={salad} coverImg={Salads} title={"salad"}></MenuCategory>
            
            {/* soups items */}
            <MenuCategory items={soup} coverImg={Soups} title={"soup"}></MenuCategory>
            

        </div>
    );
};

export default Menu;