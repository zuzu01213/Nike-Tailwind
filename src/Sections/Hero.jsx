import {Button} from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoes, statistics} from "../Constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import {ShoeCard} from "../components/ShoeCard.jsx";
import {useState} from "react";

export const Hero = () => {
     const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section className={"w-full flex xl:flex-row " +
            "flex-col gap-10 justify-center min-h-screen max-container"} id="home">
            <div className={"relative xl:w-2/5 flex flex-col " +
                "justify-center items-start w-full max-xl:padding-x pt-28"}>

                <p className={"text-xl font-montserrat text-coral-red"}>Our Summer Collection</p>
                <h1 className={"mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"}>
                    <span className={"xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"}>The New Arrival</span>
                    <br/>
                    <span className={"text-coral-red mt-3 inline-block"}>Nike</span> Shoes
                </h1>
                <p className={"font-montserrat text-slate-gray text-lg leading-8 mb-14 mt-6 sm:max-w-sm"}>
                    Discover Stylish Nike arrivals, quality comfort, and innovation for your active life
                </p>
                <Button label={"Shop now"} iconURL={arrowRight} />

                <div className={"flex justify-start flex-wrap w-full mt-20 items-start gap-16"}>
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className={"text-4xl font-palanquin font-bold"}>{stat.value}</p>
                            <p className={"leading-7 font-montserrat text-slate-900"}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={"justify-center relative flex-1 flex items-center " +
                "xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"}>

                <img src={bigShoeImg} alt={"shoe collection"} width={610} height={500}
                className={"relative object-contain z-10"}/>
                <div className={"flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 "}>
                    {shoes.map((shoe ) => (
                        <div key={shoe}>
                            <ShoeCard imgURL={shoe} changeBigShoeImage=
                                {(shoe) => setBigShoeImg (shoe)}
                            bigShoeImg={bigShoeImg}/>
                        </div>
                        ))}

                </div>
            </div>
        </section>
    )
}