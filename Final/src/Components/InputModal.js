
import React, { useContext } from "react";
import { useState } from 'react'
import Notiflix from 'notiflix'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import CartContext from "../Context/CartContext"

export default function InputModal({ cart, valorTotal }) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [mailConfirmacion, setMailConfirmacion] = useState("")
  const {clear} = useContext(CartContext)

  function handleSubmit(event) {
    event.preventDefault()
    const date = new Date();
    const order = {
      buyer: {
        "Nombre": name,
        "Mail": mail,
      },
      "Artículos": cart,
      "Valor Total": valorTotal,
      "Fecha": date
    }
    console.log(order)
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) =>
        Notiflix.Report.success(
          'Tu orden está siendo procesada, en minutos te enviaremos un correo a ' + {mail} + ' con los datos de tu compra',
          `Orden Nº: ${id}`,
          'Lis3',
          {
            width: '360px',
            svgSize: '120px',
          },
        ),
        setShowModal(false),
        clear()
      ) 
  }
  return (
    <>
      <button
        className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => cart.length > 0 ? setShowModal(true) : Notiflix.Report.failure(
          'Ups!',
          'El carro esta vacio!',
          'Entendido!'
        )}
      >
        Enviar Orden
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">

            <div className="relative my-6 mx-auto max-w-3xl w-96  ">
              <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-black">
                  <button onClick={() => setShowModal(false)} type="button" className="absolute top-3 right-2.5 text-red-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal-2">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                  <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">A continuación te pediremos tus datos.</h3>
                    <form onSubmit={handleSubmit} className="space-y-6" action="#">
                      <div>
                        <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre y Apellido</label>
                        <input onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" className="bg-red-800 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="adefesio" required></input>
                      </div>
                      <div>
                        <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input onChange={(e) => setMail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border--300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="sebaenbolas@gmail.com" required></input>
                      </div>
                      <div>
                        <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verifique su mail</label>
                        <input onChange={(e) => setMailConfirmacion(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="sebaenbolas@gmail.com" required></input>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-start">
                        </div>
                      </div>
                      <button type="submit"  className={`w-full text-white ${mail !== mailConfirmacion ? "invisible " : "visible"}  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}>¡Listo!</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}














