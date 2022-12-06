import { NavLink } from 'react-router-dom'
import "../Assets/Item.css"

export default function item(props) {
    return (
        <div className='card md:mx-5 my-5'>
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-black dark:border-gray-700 ">
                    <img className="p-8 rounded-t-lg" src={props.img} alt="Imagen no encontrada" />
                <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.nombre}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 dark:bg-red-200 dark:text-red-800 ">Calificación: {props.calificacion}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-1xl font-bold text-gray-900 dark:text-white">{props.autor}</span>
                            <NavLink to = {`/${props.categoria}/${props.id}`} className="text-white bg-red-700 transition ease-in-out  hover:-translate-y-2  hover:scale-110 hover:bg-indigo-500 duration-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Añadir</NavLink> 
                    </div>
                </div>
            </div>

        </div>
    )
}
