import {Button} from "../components/Button.jsx";

import {shoe8} from "../assets/images/index.js";
import {arrowRight} from "../assets/icons/index.js";

export const SuperQuality = () => {
    return (
        <section id={"about-us"} className={"flex justify-between " +
            "items-center mx-lg:flex-col gap-10 w-fuull max-container"}>
            <div className={"flex flex-1 flex-col"}>

                <h2 className={" font-palanquin capitalize text-4xl " +
                    "lg:max-w-lg  font-bold"}>We Provide You&nbsp;
                    <span className={"text-coral-red"}>
                        Super&nbsp;</span>
                    <span className={"text-coral-red "}> Quality&nbsp;</span>Shoes
                </h2>
                <p className={"mt-4 lg:max-w-lg info-text"}>
                    Ensuring premium comfort and style, our meticulously crafted
                    footwear is designed to elevate your experience, proviiding
                    you with unmatched quality, innovation and a touch of
                    elegance.
                </p>
                <p className={"info-text lg:max-w-lg mt-6"}>
                    Our dedication to detail and excellence ensures
                    your satisfaction
                </p>
                <div className={"mt-11 "}>
                <Button label={"Shop now"} iconURL={arrowRight}  />

                </div>
            </div>

            <div className={"flex-1 flex justify-center items-center"}>
                <img
                src={shoe8}
                alt={"shoe8"}
                width={570}
                height={522}
                className={"object-contain  cursor-pointer duration-700 "}
                />
            </div>
        </section>
    )
}