import Slider from "react-slick";
import {Image} from 'antd'
const SliderComponent = ({arr})=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
    
      };
    return(
        <Slider {...settings}>
           {
                arr.map((image)=>{
                    return(
                        <Image src={image} alt="slider" height="250px" width="100%"/>
                    )
                })
           }
        </Slider>
       
    )
}
export default SliderComponent