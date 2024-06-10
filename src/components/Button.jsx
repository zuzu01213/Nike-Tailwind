export const Button = ({ label, borderColor, backgroundColor, iconURL, textColor }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 group border font-montserrat text-lg leading-none
            ${backgroundColor ? backgroundColor : 'bg-coral-red'} ${textColor ? textColor : 'text-white'} ${borderColor ? borderColor : 'border-coral-red'}
            bg-coral-red rounded-full text-white border-coral-red
            hover:scale-110 hover:shadow-md hover:shadow-amber-500 duration-300`}>
            {label}
            {iconURL && <img src={iconURL} className="group-hover:translate-x-1/4 group-hover:-rotate-45 duration-300 rounded-full ml-2 w-6 h-5" alt="arrow right icon" />}
        </button>
    );
};
