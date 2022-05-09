import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const PurchaseConfirm = () => {
  const ca = useSelector(state => state.shopping)
  return (<>
  Redirect to MercadoPago
    <div>
      { setTimeout(function(){
       window.location.href = ca.toString()
  },4000)}
    </div>
  </>
  )
}
