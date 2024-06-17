import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Carousels = () => {
  return (
    <main className="slider-container">
        <Carousel className=" main-slide" 
        infiniteLoop={true} 
         width={'100%'} autoPlay={true} showArrows={false} 
         showThumbs={false}
         showIndicators={false}>
                    <div className=" w-full h-[500px] ">
                        <img src="/carousal1.webp"  />
                    </div>
                    <div className="w-full">
                        <img src="/carousal4.webp"  />
                       
                    </div>
                    <div className="w-full">
                        <img src="/carousal3.webp"   />
                    </div>
                    <div className="w-full"> 
                        <img src="/carousal4.webp"   />
                    </div>
                </Carousel>
    </main>
      );
};

export default Carousels;
