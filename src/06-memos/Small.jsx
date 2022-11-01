import { memo } from "react"


export const Small = memo(({value}) => {
    
    console.log('Volviendo a generar')
  return (
    <small>{value}</small>
  )
})
