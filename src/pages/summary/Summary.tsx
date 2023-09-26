import { Layout } from "../../components/layout/Layout";
import { convertToCurrency } from "../../helpers/convertToCurrency";
import { Button } from "../../components/button/Button";
import OrderContext from "../../contexts/OrderContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { routes } from "../../routes";
export default function Summary() {
  const navigate = useNavigate()

  const { pizzaSize, pizzaFlavour, setPizzaOrder } = useContext(OrderContext)
  const [ summaryData, setSummaryData ] = useState({})
  const [ summaryAmount, setSummaryAmount] = useState(0)
  /**
   * Puxado o pizzaSize e pizzaFlavour do context geral
   */

  const handleBack = () => {
    navigate(routes.pizzaFlavour)
  }
  const handleNext = () => {
    const pizzaOrder = {
      detalhes: summaryData,
      total: summaryAmount
    }
    setPizzaOrder(pizzaOrder)
    console.log(pizzaOrder)
    navigate(routes.home)
  }

  useEffect(() =>{
    /**
     *  Se tentarem entrar no /pedido/resumo
     * é verificado se o pizzaFlavour existe
     * Se ele não existe, redirecionada pro pizzaSize/pizzaFlavour
     * 
     * Isso so é possivel por o hook(useContext) é feito antes de tudo ao carregar da pagina
     */
    if(!pizzaFlavour){
      return navigate(routes.pizzaSize)
    }

    if(!pizzaSize){
      return navigate(routes.home)
    }

    /**
     * Obteve
     */
    setSummaryData({
      text: pizzaSize[0].text,
      slices: pizzaSize[0].slices,
      name: pizzaFlavour[0].name,
      price: pizzaFlavour[0].price[pizzaSize[0].slices],
      image: pizzaFlavour[0],

    })
  }, [])
/**
* useEffect são executados na ordem do codigo
*
* a Responsabilidade do primeiro useEffect foi:
* Verificar se esses valores existiam, e tornalos um summarydata
* O uso desse effect é 
**/
  useEffect(() => {
    setSummaryAmount(summaryData.price)
  }, [summaryAmount])
  return (
  <Layout>
    <h1 tabIndex={0}> Resumo do Pedido</h1>
    <section>
      <div>
        <img src={summaryData.image} alt=""/>
        <p>{summaryData.name}</p>
        <p>
          {summaryData.text} {`(${summaryData.slices}) pedaços`}
        </p>
          <p>{convertToCurrency(summaryData.price)}</p>
      </div>
      <div>
        <p>{convertToCurrency(summaryAmount)}</p>
      </div>
    </section>
    <div>
      <Button inverse="inverse" onClick={handleBack}>
        Voltar
      </Button>
      <Button onClick={handleNext}>
        Ir para o Pagamento
      </Button>
    </div>
  </Layout>
  )
}
