import { headerLogo } from "../assets/images/index.js";
import { hamburger } from "../assets/icons/index.js";
import { navLinks } from "../Constants/index.js";

export const Nav = () => {
    return (
        <header className={"padding-x py-8 absolute z-10 w-full"}>
            <nav className={"flex justify-between items-center max-container"}>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29}/>
                </a>
                <ul className={"flex justify-center flex-1 gap-16 max-lg:hidden"}>
                    {navLinks.map(item => (
                        <li key={item.label}>
                            <a href={item.href}
                               className={"font-montserrat leading-normal text-lg text-slate-gray hover:text-red-500 duration-300"}>
                                {item.label}
                            </a>

                        </li>
                    ))}

                </ul>
                <ul className={"flex gap-5 text-lg  "}>
                    <li className={"text-hover"}>Sign up</li>
                    <li className={"text-hover"}>Log in</li>
                </ul>
                <div>
                    <img src={hamburger} alt="Menu" className={"max-lg:block hidden"} width={25} height={25}/>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
