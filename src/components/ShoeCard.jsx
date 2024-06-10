import React, { useEffect, useState } from "react";

export const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const [loaded, setLoaded] = useState(false); // State untuk menandai apakah gambar telah dimuat

    useEffect(() => {
        const interval = setInterval(() => {
            if (bigShoeImg !== imgURL.bigShoe) {
                changeBigShoeImage(imgURL.bigShoe);
            }
        }, 4000); // Mengubah gambar setiap 4 detik

        return () => clearInterval(interval);
    }, [bigShoeImg, imgURL.bigShoe, changeBigShoeImage]);

    // Fungsi yang dipanggil ketika gambar selesai dimuat
    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <div
            className={`border-[3px] rounded-xl shoe-card 
            ${bigShoeImg === imgURL.bigShoe 
                ? 'border-coral-red'
                : 'border-transparent'
            } cursor-pointer max-sm:flex-1`}
            onClick={() => changeBigShoeImage(imgURL.bigShoe)}
            style={{ transition: "border-color 0.3s ease-in-out" }} // Transisi untuk efek smooth saat mengubah border color
        >
            <div className={`flex -4 justify-center items-center bg-card bg-center bg-cover 
                rounded-xl sm:h-40 sm:w-40 max-sm:p-4 ${loaded ? 'loaded' : ''}`}
            >
                <img
                    src={imgURL.thumbnail}
                    alt={"Shoe Collection"}
                    width={127}
                    height={103}
                    className={`hover-rotate object-contain transition-all duration-300 ${loaded ? 'loaded' : ''}`} // Mengubah rotasi menjadi 12 dan durasi transisi menjadi 300ms
                    onLoad={handleImageLoad} // Memanggil fungsi ketika gambar selesai dimuat
                    style={{transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)"}} // Menggunakan cubic-bezier untuk transisi opacity
                />
            </div>
        </div>
    );
};
