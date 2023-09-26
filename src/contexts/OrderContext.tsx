import { createContext, useState } from "react"

const OrderContext = createContext({})

const OrderContextProvider = ({ children }) => {
  const [pizzaSize, setPizzaSize] = useState()
  const [pizzaFlavour, setPizzaFlavour] = useState()
  const [pizzaOrder, setPizzaOrder] = useState()

  return (
    <OrderContext.Provider
      value={{ 
        pizzaSize, setPizzaSize, 
        pizzaFlavour, setPizzaFlavour, 
        pizzaOrder, setPizzaOrder }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export { OrderContextProvider }
export default OrderContext
