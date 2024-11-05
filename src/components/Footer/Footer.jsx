import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="w-full bg-black text-white py-5 flex justify-center text-center absolute">
            <ul className="flex flex-col items-center"> 
                <Link to="/Login" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">inisiar sesion</Link>
                <li className="text-lg mb-2 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">terminos y condiciones</li>
                <li className="text-lg mb-2 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">politicas de devoluciones</li>
                <li className="text-lg mb-2 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">horario de atencion</li>
                <div className="mt-2 text-sm text-white-400">© 2024 todos los derechos reservados a claxinformatic</div>
            </ul>
        </div>
    )
}