 
import { useEffect,useState } from "react"
export const Message = () => {
  const [coords, setcoords] = useState( {x:0,y:0})

    useEffect(() => { 
      const onMouseMove = ({x,y})=> {
      
        setcoords({x,y})
      }
      //  console.log('message mounted')
     window.addEventListener('mousemove', onMouseMove)
      return () => {
       window.removeEventListener( 'mousemove',onMouseMove )
      }
    }, [])
    

  return (
    <>
    <h3> Usuario ya existe</h3>
    {JSON.stringify(coords)}
    </>
  )
}
