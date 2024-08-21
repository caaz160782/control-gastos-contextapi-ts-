import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import CircularBar from "./CircularBar"



const BudgetTracker = () => {
  
  const{state,totalExpenses,remainingBudget,dispatch}=useBudget()
    
  const percentage = useMemo(
    () => (totalExpenses / state.budget) * 100,
    [totalExpenses, state.budget] 
  );

  const restearApp=()=>{
      dispatch({type:'reset-app'})
  }
  
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
     <div className=" flex justify-center">      
        <CircularBar
        percentage={percentage.toFixed(2)}
        />
     </div>
     <div className=" flex flex-col justify-center items-center gap-8">
        <button
            type="button"
            className="bg-pink-600 w-full p-1 text-white uppercase font-bold rounded-lg"
            onClick={restearApp}
        >
            Resetaer APP
        </button>

        <AmountDisplay
         label={"Presupuesto"}
         amount={state.budget}
        />
        <AmountDisplay
         label={"Disponible"}
         amount={remainingBudget}
        />
        <AmountDisplay
         label={"Gastado"}
         amount={totalExpenses}
        />
       
     </div>
    </div>
  )
}

export default BudgetTracker