import { Link } from "react-router-dom";
import CartIcon from "../Components/CartWidget"
import { NavLink } from "react-router-dom";
import React from "../Assets/react.svg"
import Javascript from "../Assets/square-js.svg"

function NavBar() {
  return (
    <div className="bg-red-500 shadow text-white">
      <nav className='md:flex md:items-center md:justify-between'>
        <Link to={`/`} >
          <div className="flex justify-between items-center">
            <span className="text-xl font-mono mx-6 p-5 font-['courier'] hover:text-red-800 duration-500 cursor-pointer">
              El Club de la Alpargata
            </span>
          </div>
        </Link>
        <ul className='md:flex flex items-center   z-[-1] bg-black-500 md:bg-red-500 md:z-auto md:static absolute w-full left-0 md:w-auto py-5  pl-7'>
          <li className="text-xl hover:text-red-800 duration-500 my-4 mx-4 md:my-0 ">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="collapse md:visible text-white font-['courier'] text-l hover:text-red-800 duration-500 px-4 py-2.5 text-center inline-flex items-center " type="button">Categoría <svg className="ml-2 w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" className="hidden  z-10 w-44 bg-white rounded divide-y divide-red-100 shadow dark:bg-red-700">
              <ul className="py-1 text-sm text-red-700 dark:text-red-200" aria-labelledby="dropdownDefault">
                <li>
                  <NavLink to={`/categoria/Libros`} className="block py-2 px-4 hover:bg-red-100 dark:hover:bg-red-600 dark:hover:text-white">Libros</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/Música`} className="block py-2 px-4 hover:bg-red-100 dark:hover:bg-red-600 dark:hover:text-white">Música</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="text-xl md:visible collapse hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0 ">
            <CartIcon />
          </li>
        </ul>
        <div className="flex justify-center md:hidden">
          <NavLink to={`/categoria/Libros`} className="md:invisible block py-2 px-4 ">
            <img src={React} alt="Libros" className="h-10"></img>
          </NavLink>
          <NavLink to={`/categoria/Música`} className="md:invisible block py-2 px-4 ">
            <img src={Javascript} alt="Música" className="h-10"></img>
          </NavLink>
        </div>
      </nav>
      <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-red-700">
            <button type="button" className="absolute top-3 right-2.5 text-red-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only"></span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-red-900 dark:text-white"></h3>
              <form className="space-y-6" action="#">
                <div>
                  <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-red-900 dark:text-red-300"></label>
                  <input type="email" name="email" id="email" className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-600 dark:border-red-500 dark:placeholder-red-400 dark:text-white" placeholder="name@company.com" required></input>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-red-900 dark:text-red-300"></label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-600 dark:border-red-500 dark:placeholder-red-400 dark:text-white" required></input>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-red-50 rounded border border-red-300 focus:ring-3 focus:ring-blue-300 dark:bg-red-600 dark:border-red-500 dark:focus:ring-blue-600 dark:ring-offset-red-800" required></input>
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-red-900 dark:text-red-300"></label>
                  </div>
                  <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500"></a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></button>
                <div className="text-sm font-medium text-red-500 dark:text-red-300">
                   <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NavBar;
