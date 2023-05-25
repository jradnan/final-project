import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item pt-8 my-16 bg-fixed">
            <SectionTitle
                subHeading={'---Check it out---'}
                mainHeading={'FROM OUR MENU'}>
            </SectionTitle>
            <div className="md:flex items-center justify-center text-white p-16 py-16">
                <div>
                    <div><img src={featuredImg} alt="" /></div>
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline uppercase mt-5 border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;