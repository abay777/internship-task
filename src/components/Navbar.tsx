import React, { useState } from "react";
import { IoPersonOutline ,IoSearchOutline} from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
function Navbar({color }) {
  const [mobmenu,setMobMenu] = useState(false)
  
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className={` ${color?` bg-[#c5b9ab]` : `bg-[#e2535300]`} hover:bg-[#c5b9ab] z-[1000] fixed left-0 right-0 text-[.6rem] top-0 pt-4  hidden xl:flex flex-col `}>
        <section className="flex justify-between items-center pb-5 w-full">
          {/* Centered Image */}
          <div className=" flex justify-end items-center w-3/5 pr-12">
            <img src="/Logo_White_200x.avif" className="" alt="" />
          </div>
          
          {/* Logo at the End */}
          <div className="mr-12 flex gap-5  ">
            <IoPersonOutline size={22} color={`${color?'#000':'#fff'}`}/>
            <IoSearchOutline size={22} color={`${color?'#000':'#fff'}`}/>
            <HiOutlineShoppingBag size={22} color={`${color?'#000':'#fff'}`}/>

          </div>
        </section>
        <section className="  px-20">
          <div>
            <ul className="flex justify-between  font-semibold  ">
              <li className={`linen hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                linen
                <section className="linendrop flex justify-between items-start max-h-[100vh] overflow-y-auto  gap-16 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem]  absolute py-8 font-medium text-left">
                  <div className="px-10">
                    <ul className="flex flex-col justify-start items-start gap-6">
                      <li className=" text-[.7rem] font-semibold ">Catogory</li>
                      <li className="text-nowrap">bedspread + Euro</li>
                      <li>View All</li>
                    </ul>
                  </div>
                  <div className="overflow-auto w-2/12">
                    <ul className="flex flex-col justify-start items-start gap-5 h-[32rem] w-full ">
                      <li className=" text-[.7rem] font-semibold text-nowrap w-fit">
                        collection
                      </li>
                      <li>Tajik</li>
                      <li>Songbird</li>
                      <li>Ikat</li>
                      <li>Maxim</li>
                      <li>Granara</li>
                      <li>Slate</li>
                      <li>Inaya</li>
                      <li>Ajnur</li>
                      <li>Noelle</li>
                      <li className="text-black font-semibold">Maavi</li>
                      <li>Alizee</li>
                    </ul>
                  </div>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/linen1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                      <h2 className="text-center">bedspread </h2>
                    </div>
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/linen2.webp"
                        className="  w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                      <h2 className="text-center">bedspread </h2>
                    </div>
                  </section>
                </section>
              </li>
              <li className={`tableware hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                Tableware
                <section className="tablewaredrop flex justify-between items-start h-[100vh] overflow-y-auto  gap-16 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8 font-medium text-left">
                  <section className="flex justify-between items-start gap-16">
                    <div className="px-10">
                      <ul className="flex flex-col justify-start items-start gap-5">
                        <li className="text-[.7rem] font-semibold block">DINING</li>
                        <li>Dinner Sets</li>
                        <li>Dinnerware</li>
                        <li>View All</li>
                      </ul>
                    </div>
                    <div className="overflow-auto w-full">
                      <ul className="flex flex-col justify-start items-start gap-5 h-[32rem] w-full ">
                        <li className="text-[.7rem] font-semibold block">SERVING</li>
                        <li className="text-nowrap text-left">Tea Service</li>
                        <li className="text-nowrap text-left">
                          Mugs & Cup Saucers
                        </li>
                        <li className="text-nowrap text-left">Serving Trays</li>
                        <li className="text-nowrap text-left">
                          Platters & Dessert Stands
                        </li>
                        <li className="text-nowrap text-left">Cutlery</li>
                        <li className="text-nowrap text-left">
                          Napkins & Napkin Rings
                        </li>
                        <li className="text-nowrap text-left">
                          Table Runners & Placemats
                        </li>
                        <li className="text-nowrap text-left">Coasters</li>
                        <li className="text-nowrap text-left">View All</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col justify-start items-start gap-5">
                        <li className="text-[.7rem] font-semibold block text-nowrap">
                          BAR & GLASSWARE
                        </li>
                        <li>Whiskey Glasses</li>
                        <li>Wine Glasses</li>
                        <li>Drinking Glasses</li>
                        <li>Bar Accessories</li>
                        <li>View All</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col justify-start items-start gap-5">
                        <li className="text-[.7rem] font-semibold block">
                          COLLECTIONS
                        </li>
                        <li>Cammille</li>
                        <li>Magnolia</li>
                        <li>Azellia</li>
                        <li>Spring</li>
                        <li>Nur</li>
                        <li>Alessi</li>
                        <li>Le Jardin</li>
                        <li>Naqashi</li>
                        <li>Miran</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/tableware1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                      <h2 className="text-center uppercase">Dinner Set </h2>
                    </div>
                  </section>
                </section>
              </li>
              <li className={`decor hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                Decor
                <section className="decordrop flex justify-between items-start  overflow-y-auto  gap-14 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8 font-medium text-left">
                  <section className="flex justify-between items-start gap-16 w-full">
                    <div className="px-10 ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">
                          HOME DÉCOR
                        </li>
                        <li>Décor Objects</li>
                        <li>Statues & Sculptures</li>
                        <li>Platters & Bowls</li>
                        <li>Photo Frames</li>
                        <li>Bath Accessories</li>
                        <li>View All</li>
                      </ul>
                    </div>
                    <div className="overflow-auto w-full">
                      <ul className="flex flex-col justify-start items-start gap-5 h-[32rem] w-full ">
                        <li className="text-[.7rem] font-semibold block text-nowrap">
                          OFFICE & DEN DECOR
                        </li>
                        <li>Book Boxes</li>
                        <li>Bookends</li>
                        <li>Tissue Boxes</li>
                        <li>Dustbins</li>
                        <li>Desk Accessories</li>
                        <li>View All</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">
                          WALL DECOR
                        </li>
                        <li>Wall Art & Decor</li>
                        <li>Wall Clocks</li>
                        <li>Wall Mirrors</li>
                        <li>View All</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col justify-start items-start gap-5">
                        <li className="text-[.7rem] font-semibold block">
                          COLLECTIONS
                        </li>
                        <li>Horn</li>
                        <li>Crystal</li>
                        <li>Marble</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/decor1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                    </div>
                  </section>
                </section>
              </li>
              <li className={`vases hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                Vases & flowers
                <section className="vasesdrop flex justify-between items-start max-h-screen overflow-y-auto  gap-14 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8 px-20 font-medium text-left">
                  <section className="flex justify-between items-start gap-16">
                    <div className="px-10 ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">CATEGORIES</li>
                        <li>Vases & Planters</li>
                        <li>Flowers</li>
                        <li>Potted Plants + Greens</li>
                        <li>View All</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/vases1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />            
                    </div>
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/vases2.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                    </div>
                  </section>
                </section>
              </li>
              <li className={`leather hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                Leather
                <section className="leatherdrop vasesdrop flex justify-between items-start max-h-screen overflow-y-auto  gap-12 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8  font-medium text-left">
                  <section className="flex justify-between items-start gap-16 w-6/12 pl-10">
                    <div className=" ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">CATEGORIES</li>
                        <li>Table Runners & Placemats</li>
                        <li>Tissue Boxes & Dustbins</li>
                        <li>Coasters & Serving Trays</li>
                        <li>Desk Accessories</li>
                        <li>View All</li>
                      </ul>
                    </div>
                    <div className=" ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">COLLECTIONS</li>
                        <li>Glam Gecko</li>
                        <li>Zensar</li>
                        <li>Pixel</li>
                        <li>Monarch</li>
                        <li>Feizy</li>
                        <li>Seer</li>
                        <li>Galaxy</li>
                        <li>Ikigai</li>
                        <li>Cordia</li>
                        <li className="font-semibold">Zahavi</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-end w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/leather1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />            
                    </div>
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/leather2.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                    </div>
                  </section>
                </section>
              </li>
              <li className={`candleware hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                Candleware
                <section className="candlewaredrop flex justify-between items-start max-h-screen overflow-y-auto  gap-14 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8 px-20 font-medium text-left">
                  <section className="flex justify-between items-start gap-16">
                    <div className="px-10 ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">CATEGORIES</li>
                        <li>Candles & Scents</li>
                        <li>Candle Holders</li>
                        <li>Hurricanes</li>
                        <li>Lanterns</li>
                        <li>Votives</li>
                        <li>Candelabra</li>
                        <li>View All</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/candleware1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />            
                    </div>
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/candleware2.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                    </div>
                  </section>
                </section>
              </li>
              <li className={`lighting hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                lingting
                <section className="lightingdrop flex justify-between items-start max-h-screen overflow-y-auto  gap-14 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8 px-20 font-medium text-left">
                  <section className="flex justify-between items-start gap-16">
                    <div className="px-10 ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">CATEGORIES</li>
                        <li>Chandeliers & Ceiling Lights</li>
                        <li>Table Lamps</li>
                        <li>Floor Lamps</li>
                        <li>View All</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/lighting1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />            
                    </div>
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/lighting2.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                    </div>
                  </section>
                </section>
              </li>
              <li className={`furniture hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
              furniture
              <section className="furnituredrop flex justify-between items-start max-h-screen overflow-y-auto  gap-14 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8 px-20 font-medium text-left">
                  <section className="flex justify-between items-start gap-16">
                    <div className="px-10 ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">CATEGORIES</li>
                        <li>Console Tables</li>
                        <li>Coffee Tables</li>
                        <li>Side Tables</li>
                        <li>Nest of Tables</li>
                        <li>Benches & Pouffes</li>
                        <li>Trolley & Butler Trays</li>
                        <li>View All</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/furniture1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />            
                    </div>
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/furniture2.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                    </div>
                  </section>
                </section>
              
              </li>
              <li className={`gifts hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                gifting
                <section className="giftsdrop flex justify-between items-start max-h-screen overflow-y-auto  gap-14 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8 px-20 font-medium text-left">
                  <section className="flex justify-between items-start gap-16">
                    <div className="px-10 ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem] font-semibold block">BY OCCASION</li>
                        <li>Father's Day Gifting</li>
                        <li>Gifts For Her</li>
                        <li>E-Gift Cards</li>
                        <li>View All</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/gifts1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />            
                    </div>
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/gifts2.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                    </div>
                  </section>
                </section>
              </li>
              <li className={`inspiration hover:text-[#393938] pl-5 uppercase hover:border-b hover:border-amber-950 hover:border-b2 mb-2   text-[.75rem] ${color?'text-[#393938]':'text-gray-500'}  `}>
                inspiration
                <section className="inspirationdrop flex justify-between items-start max-h-screen overflow-y-auto  gap-14 bg-[#c5b9ab] w-[100vw] left-0 right-0 text-[.6rem] top-[5.9rem] absolute py-8 px-20 font-medium text-left">
                  <section className="flex justify-between items-start gap-16">
                    <div className="px-10 ">
                      <ul className="flex flex-col justify-start items-start gap-5 text-nowrap">
                        <li className="text-[.7rem]  block">EDITS</li>
                        <li className="font-semibold">The Organic Edit</li>
                        <li className="font-semibold">The Wedding Edit</li>
                        <li className="font-semibold">The Festive Edit</li>
                        <li className="font-semibold">The Print Edit</li>
                        <li className="font-semibold">The Vintage Den</li>
                        <li className="font-semibold">The Blush Story</li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex justify-center w-full  gap-20 px-20 items-start  ">
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/inspiration1.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />            
                    </div>
                    <div className="w-[100%]  overflow-hidden align-top">
                      <img
                        src="/inspiration2.webp"
                        className=" w-[100%] align-top max-h-[15rem] h-[15rem] object-contain image overflow-hidden"
                        alt=""
                      />
                    </div>
                  </section>
                </section>
              </li>
            </ul>
          </div>
        </section>
      </nav>

{/* moblie navbar */}
      <nav className={` ${color?` bg-[#c5b9ab]` : `bg-[#c5b9ab00]`}  z-[1000]  fixed left-0 right-0 text-[.6rem] top-0 pt-4  flex xl:hidden flex-col `}>
      <section className="flex justify-between items-center pb-3 w-full">
        <div className="ml-4">
          {
            mobmenu ? (
            <IoMdClose size={24} color={color ? '#fff' : '#393938'} onClick={()=>setMobMenu(false)} />
          ) : (
            <RxHamburgerMenu onClick={()=>setMobMenu(true)} size={24} color={color ?'#393938' : '#fff'}/>
          )
          }

        </div>
          {/* Centered Image */}
          <div className=" flex justify-end items-center ">
            <img src="/Logo_White_200x.avif" className="w-[8rem]" alt="" />
          </div>
          
          {/* Logo at the End */}
          <div className="mr-5 flex gap-5  ">
            <IoSearchOutline size={22} color={`${color?'#000':'#fff'}`}/>
            <HiOutlineShoppingBag size={22} color={`${color?'#000':'#fff'}`}/>

          </div>
        </section>
        {mobmenu ?(
           <section className="fixed bg-[#c5b9ab] top-0 left-0 right-1/2 bottom-0">
            <IoMdClose className="block mt-3 ml-5" size={30} color={'#000'} onClick={()=>setMobMenu(false)}/>
            <section>
              <ul className="list-none p-0 m-0">
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  <div className="uppercase">decor</div>
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                  </div>

                </li>
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  VASES & FLOWERS
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                   
                  </div>
                </li>
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  LEATHER
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                    
                  </div>
                </li>
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  CANDLEWARE
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                    
                  </div>
                </li>
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  LIGHTING
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                    
                  </div>
                </li>
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  FURNITURE
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                    
                  </div>
                </li>
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  GIFTING
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                    
                  </div>
                </li>
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  INSPIRATION
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                    
                  </div>
                </li>
                <li className="flex justify-between items-center p-4  border-b-[1px] border-gray-900 mb-2">
                  ACCOUNT
                  <div>
                    {isActive ? (
                      <AiOutlineMinus size={20}/>
                    ) : (

                      <GoPlus size={20}/>
                    )}
                    
                  </div>
                </li>
              </ul>
             
            </section>

           </section>
        ):null}
       

      </nav>
    </>
  );
}

export default Navbar;
