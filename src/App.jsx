import { useState,useEffect } from "react"
import axios from 'axios'
const App = ()=>{

 const [photos,setPhotos] = useState([])
 const [loading,setLoading] = useState(false)
 useEffect(()=>test,[])

 
const test = async ()=>{
   
   try{
    setLoading(true)
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = response.data
    setPhotos(data)
    setLoading(false)

   }catch(error){
      console.log(error)

   }
   finally{
    setLoading(false)

   }
  


  }

 
 
 //  console.log(data)
  // setPhotos(data)
  return(
    <div>
      <h1>Http Request</h1>
      <button onClick={test}>Click Me</button>
      {loading && <h1>Loading....</h1> }
     <div style={
      {marginTop:100,
      width:'100%',
      display:'flex',
      gap:32,
      flexWrap:'wrap'
      }}>
      {
        photos.map((item,index)=>(
          <div key={index} style={{width:"calc(25% - 32px)",
            padding:16,
            boxSizing:'border-box',
            boxShadow:'0 0 8px #ddd',
            borderRadius:8,
            textAlign:'center'
          }}>
               <img src={item.image} style={{height:180}} />
            <h4>{item.title}</h4>
            <p>{item.description.slice(0,80)}</p>
            <p style={{textTransform:'capitalize'}}>{item.category}</p>
         
          </div>
        ))
      }
     </div>
    </div>
  )
}
export default App