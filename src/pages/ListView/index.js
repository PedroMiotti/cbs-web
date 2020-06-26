
import React, {useEffect, useState} from 'react';

// Style 
import './style/style.css'

// Components
import ListItem from './components/ListItem'

// API
import getPedido from '../../api/getPedido';

const ListView = () => {

    const [ pedido, setPedido ] = useState([]);

    let pedidoVazio;

    (Object.keys(pedido).length === 0 || typeof pedido === undefined ? pedidoVazio = true : pedidoVazio = false)
  
    useEffect(() => {
  
      let mounted = true;
  
      if(mounted){
        getPedido().then(res => {
            setPedido(res)
        })
      }

      // const novoPedido = setInterval( () => {
      //   getPedido().then(res => {
      //       setPedido(res)
      //   }, 2000)
      // })
  
      return () => mounted = false;
    // return () => clearInterval(novoPedido)
      
    }, [])

  

    return(
        <div className='container'>

            {pedidoVazio ? <h1 style={{alignSelf: 'center', marginTop: 30, color: '#8f8f92', fontSize:25, fontFamily: 'Monospace'}}>Nenhum pedido novo !</h1> : pedido.map(ped => 
                <ListItem key={ped.ped_item_id} cliente={ped.ped_cliente} nomeCesta={ped.cesta_nome} categoria={ped.cat_nome} qtd={ped.ped_item_qtd} />
              )}
        </div>
    )
}


export default ListView;