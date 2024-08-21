import { ChangeEvent } from 'react';
import { categories } from '../data/categories'
import { useBudget } from '../hooks/useBudget'

const FilterByCategory = () => {
const {dispatch}=useBudget();
const handleChange=(e: ChangeEvent<HTMLSelectElement>)=>{
    dispatch({type:'filter-category', payload:{id:e.target.value}})
}

  return (
    <div className=' bg-white shadow-lg rounded-lg p-10'>
        <form>
            <div className='flex flex-row md:flex md:items-center gap-5'>
                <label htmlFor='category'>Filtrar Gastos</label>
                <select 
                 className='bg-slate-100 p-3 flex-1 rounded'
                 id="category"
                 onChange={handleChange}
                >
                    <option value="">-- Todas las Categorias</option>
                    {
                     categories.map(category =>(
                        <option 
                         key={category.id}
                         value={category.id}
                        >
                            {category.name}
                        </option>
                     ))
                    }
                </select>
            </div>
        </form>
    </div>
  )
}

export default FilterByCategory