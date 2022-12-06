import { useContext,  useState } from "react"
import CartContext from "../Context/CartContext"
import CartItemCount from "../Components/CartItemCount"
import trash from "../Assets/trash-fill.svg"
import InputModal from '../Components/InputModal'

function Cart() {

  const { addItem, removeItem, clear, cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  function agregarACarrito(cantidad, libro) {

    addItem(libro, cantidad)
    resumenPrecio()
  }

  function resumenPrecio() {
    const subtotal = cart.reduce((previus, current) => previus + (current.valor * current.cantidad), 0)
    const iva = (subtotal * 0.21).toFixed(0)
    const total = Number(subtotal * 1.21).toFixed(0);
    const valores = [subtotal, iva, total]
    setTotal(valores)

  }


  


  return (

    <div className=" h-[30rem] w-[90%] ml-20 bg-red-500 my-9 static overflow-auto rounded-xl text-white">

      <table className="table-auto border-none border-spacing-1 w-full border pt-1 overflow-scroll text-white">
        <thead>
          <tr >
            <th>Artículos</th>
            <th>Precio</th>
            <th>Cantidad</th>

          </tr>
        </thead>
        <tbody className="text-center bg-red-500">
          {cart
            .map((libro) =>
              <tr key={libro.id}>
                <td>{libro.nombre}</td>
                <td>$ {libro.valor} ARS </td>
                <td><CartItemCount stock={libro.stock} libro={libro} funcion={agregarACarrito} initial={libro.cantidad} /></td>
                <td><img src={trash} onClick={() => removeItem(libro)} className="ml-20 h-5 cursor-pointer"></img></td>
              </tr>
            )}


        </tbody>

      </table>


      <div className="flex items-center justify-around bg-black  flex-grow h-16  w-[90%] absolute bottom-0 mb-10">

        <button onClick={clear}>
          <img src={trash} className="h-8 fill-slate-200"></img>
        </button>


        <div className="flex items-center">
          <h2 className="text-white text-2xl font-sans mx-10">Subtotal: </h2>
          <h1 className="text-2xl ml-2 text-white  hover:animate-pulse cursor-default">$ {total[0]} ARS</h1>
          <h2 className="text-white text-2xl font-sans mx-10">Total (IVA añadido): </h2>
          <h1 className="text-2xl ml-2 text-white  hover:animate-pulse cursor-default">$ {total[2]} ARS</h1>
        </div>
          <InputModal cart={cart} valorTotal={total[2]}/> 
      </div>
      
    </div>
  )



}


export default Cart
