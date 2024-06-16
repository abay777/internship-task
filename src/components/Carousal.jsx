import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Carousels = () => {
  return (
    <Carousel className=" main-slide" 
    infiniteLoop={true} 
     width={'100%'} autoPlay={true} showArrows={false} 
     showThumbs={false}
     showIndicators={false}>
                <div className=" w-full h-[500px] ">
                    <img src="/carousal1.webp" height={'00px'} width={'100%'} />
                </div>
                <div className="w-full">
                    <img src="/carousal4.webp" height={'400px'} width={'100%'}  />
                   
                </div>
                <div className="w-full">
                    <img src="/carousal3.webp"  height={'400px'} width={'100%'} />
                </div>
                <div className="w-full"> 
                    <img src="/carousal4.webp"  height={'400px'} width={'100%'} />
                </div>
            </Carousel>
  );
};

export default Carousels;
