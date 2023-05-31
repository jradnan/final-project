import FoodCard from "../../../components/FoodCatrd/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 flex justify-center">
                        {
                            items.map(item => <FoodCard
                                key={item._id} item={item}
                            ></FoodCard>)
                        }
                    </div>
        </div>
    );
};

export default OrderTab;