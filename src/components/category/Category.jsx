import "./Category.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// IMAGES
import Pizza from '../../assets/Images/pizza.png'
import Pasta from '../../assets/Images/pasta.png'
import Shakes from '../../assets/Images/shake.png'
import Burger from '../../assets/Images/burger.png'
import { useGetCategoryFoodsQuery } from "../../api/apiSlice";

const Category = () => {

    const { data } = useGetCategoryFoodsQuery()
    console.log(data);
    return (
        <div className="category-wrapper">
            <p className='categ-top'>TOP FOODS</p>
            <h2 className='category-title'>Our Categories</h2>
            <div className="category__card-container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        data?.map(food =>
                            <SwiperSlide className="swiper-slide">
                                <img src={food.image} alt="Food" />
                                <p>{food.name}</p>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

                {/* <div className="category-card">
                    <img src={Pasta} alt="Pizza" width={250} height={390} />
                    <h5>Pasta</h5>
                    <p>15 Restaurants Foods</p>
                </div>
                <div className="category-card">
                    <img src={Shakes} alt="Pizza" width={250} height={390} />
                    <h5>Shakes</h5>
                    <p>20 Restaurants Foods</p>
                </div>
                <div className="category-card">
                    <img src={Burger} alt="Pizza" width={250} height={390} />
                    <h5>Burger</h5>
                    <p>25 Restaurants Foods</p>
                </div> */}
            </div>

        </div>
    )
}

export default Category