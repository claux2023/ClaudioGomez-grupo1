import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Menu() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
};

    return (
        <div className="w-full h-[90px] bg-black">
        <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center h-full">
            <div>
            <h1 className="text-blue-500 font-bold text-2xl hover:scale-105 duration-400"> CLAX  <span className="text-blue-300 bg-blue-1000 rounded-full">INFORMATIC</span></h1>
            </div>
            <div className="hidden md:flex">
                <ul className="flex text-white items-center gap-10">
                    <li><Link to="/products/Inicio" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">Inicio</Link></li>
                    <li><Link to="/products/Computacion" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">Computacion</Link></li>
                    <li><Link to="/products/VideoJuegos" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">Videojuegos</Link></li>
                    <li><Link to="/products/Seguridad" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">Seguridad</Link></li>
                    <li><Link to="/products/Telefonia" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">Telefonia</Link></li>
                    <li><Link to="/products/Audio" className="hover:scale-105 hover:text-blue-200 duration-700 cursor-pointer hover:text-lg">audio</Link></li>
                    <Link to="/Login" className="bg-blue-700 p-2 rounded-xl hover:scale-105 duration-700">iniciar sesion</Link>
                    <IoIosCart  className="w-8 h-8"/>
                </ul>
            </div>
            {/*clax menu celular*/}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} className="text-white hover:scale-105 hover:text-blue-500 duration-500 cursor-pointer"/> 
                : <AiOutlineMenu size={30} className="text-white hover:scale-105 hover:text-blue-500 duration-500 cursor-pointer" />}
            </div>
            {/*mobile menu*/}
            <div className={nav ? 'w-full h-full bg-black/80 text-white absolute top-[90px] pt-5 left-0 flex justify-center text-center duration-700' :
            'fixed w-full h-full left-[100%] duration-700'}>
                <ul>
                    <li><Link to="/products/Inicio" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">Inicio</Link></li>
                    <li><Link to="/products/Computacion" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">Computacion</Link></li>
                    <li><Link to="/products/VideoJuegos" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">TvyVideo</Link></li>
                    <li><Link to="/products/Seguridad" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">Seguridad</Link></li>
                    <li><Link to="/products/Telefonia" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">Telefonia</Link></li>
                    <li><Link to="/products/Audio" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">audio</Link></li>
                    <Link to="/Login" className="bg-blue-700  rounded-xl text-2xl mb-4 hover:scale-105 duration-500">iniciar sesion</Link>
                    <IoIosCart  className="w-8 h-8"/>
                </ul>
            </div>
        </div>
        </div>
        );
    };