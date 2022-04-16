import {useState,useEffect} from "react" ; 
import axios from "axios" ; 
import "./table.css" 
import {v4 as uuid} from "uuid" ; 
export const Table = ()=>{
    const [data , setData]  = useState([]) ; 
      //console.log(data)

      useEffect(() => {
        axios.get(" http://localhost:3001/country").then((res)=>{
        //   console.log(res.data)
          setData(res.data)
        }).catch((e)=>{
            console.log(e)
        })    
        
      }, []);

      const myfun= (asd)=>{
        console.log(asd);
         data.sort((a,b)=>{
             if(a.population>b.population) return asd ?1 : -1
              else 
               return !asd ?1 : -1
               
         })
         setData([... data])
        
     } 
        
     
    //  const deleteId = (id) =>{
    //     for(var i = 0 ; i<data.length ; i++){
    //         if(data[i].id === id){ 
    //            data.splice(i, 1)  
    //            setData([...data]) ;
    //        }
    //     }
    //  } 
    return (
        <div> 
    <button onClick={()=>myfun(true)} >sort by population asc</button>
   <button onClick={()=>myfun(false)} >sort by population dc</button>
            <table className="table">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Country</td>
                        <td>City</td>
                        <td>Population</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead> 
                {data.map((e)=>
        <tbody key = {e.id} className="houseDetails">
            <tr>
            <td >{e.id}</td>
             <td >{e.country}</td>
             <td >{e.city}Year</td>
             <td>{e.population}</td>
             <td><button>edit</button></td>
             <td><button onClick = {()=>{
            // deleteId(id) ; 
        }}>Delete</button></td>
            
          </tr>
             </tbody>
            )}
            </table>
        </div>
    )
}