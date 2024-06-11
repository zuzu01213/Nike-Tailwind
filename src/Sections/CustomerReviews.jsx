import {ReviewCard} from "../components/ReviewCard.jsx";
import {reviews} from "../Constants/index.js";


export const CustomerReviews = () => {
    return (
        <section className={"max-container "}>
            <h3 className={"font-palanquin font-bold text-center text-4xl"}>What Our
            <span className={"text-coral-red "}> Customers </span> Say?</h3>
            <p className={"info-text mt-4 text-center max-w-lg m-auto"}>Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.</p>
            <div className={"flex mt-24 flex-1 justify-evenly items-center " +
                "max-lg:flex-col gap-14"}>
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                    ))}
            </div>
        </section>
    )
}
export default  CustomerReviews