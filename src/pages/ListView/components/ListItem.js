import React from 'react';

// Style 
import '../style/style.css'

// Teste image
import caixaTeste from '../../../img/caixa-1-1.jpg'
import tick from '../../../img/tick.svg'


const ListItem = ({nomeCesta, categoria, qtd, img, cliente}) => {
    return(
        <div className='containerItem'>
            <img src={caixaTeste} alt='caixateste'/>
            <h1><span>Cliente : </span> {cliente}</h1>
            <h1><span>Cesta :</span> {nomeCesta}</h1>
            <h1><span>Categoria :</span> {categoria}</h1>
            <h1><span>Qtd.:</span>  {qtd}</h1>
            <button className="completeBtt"> <img src={tick} alt="tick"/> </button>

        </div>
    )
}


export default ListItem;