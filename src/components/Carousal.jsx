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
                        <p className="legend mb-5 opacity-100 text-white ">
                            <div className="ml-12 text-2xl opacity-100 text-white hover:text-white uppercase">
                                bespoken
                            </div>
                            <div className=" text-xl uppercase border-2 p-0 w-fit ml-28 py-1 px-2 mt-1 ">
                                cusion cover
                            </div>
                        </p>
                    </div>
                    <div className="w-full">
                        <img src="/carousal4.webp"  />
                        <p className="legend mb-5 opacity-100 text-white ">
                            <div className="ml-12 text-2xl opacity-100 text-white hover:text-white uppercase">
                                bespoken
                            </div>
                            <div className=" text-xl uppercase border-2 p-0 w-fit ml-28 py-1 px-2 mt-1 ">
                                cusion cover
                            </div>
                        </p>
                       
                    </div>
                    <div className="w-full">
                        <img src="/carousal3.webp"   />
                        <p className="legend mb-5 opacity-100 text-white ">
                            <div className="ml-12 text-2xl opacity-100 text-white hover:text-white uppercase">
                                bespoken
                            </div>
                            <div className=" text-xl uppercase border-2 p-0 w-fit ml-28 py-1 px-2 mt-1 ">
                                cusion cover
                            </div>
                        </p>
                    </div>
                    <div className="w-full"> 
                        <img src="/carousal4.webp"   />
                        <p className="legend mb-5 opacity-100 text-white ">
                            <div className="ml-12 text-2xl opacity-100 text-white hover:text-white uppercase">
                                bespoken
                            </div>
                            <div className=" text-xl uppercase border-2 p-0 w-fit ml-28 py-1 px-2 mt-1 ">
                                cusion cover
                            </div>
                        </p>
                    </div>
                </Carousel>
    </main>
      );
};

export default Carousels;
