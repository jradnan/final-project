import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div>
            <Carousel className="text-center">
                <div>
                    <img src="https://i.ibb.co/MkNTrqC/01.jpg" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/DMrqQ5s/02.jpg" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/JKC4GF4/03.png" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/zNg1Hqp/04.jpg" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/N3SG9ch/05.png" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/Dgbysy6/06.png" />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;