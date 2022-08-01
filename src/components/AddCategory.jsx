import { useState } from "react"

export const AddCategory = ( { onNewValue } ) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = ( { target } ) => {
        setInputValue( target.value );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewValue( inputValue.trim() )
        setInputValue('');
        
    }

  return (
    <form onSubmit={ onSubmit } className=' d-flex '>
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
        className='col-8 col-lg-10'
        />
        <input type="submit" className="btn btn-success col-4 col-lg-2" value='Buscar' />
    </form>
  )
}
