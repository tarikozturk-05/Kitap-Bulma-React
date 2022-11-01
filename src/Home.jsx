import React, { useState } from 'react' 
import axios from 'axios'


const Home = () => {
       


    const [bookName, setBookName] = useState("")
    // console.log(bookName)
const [items, setItems] = useState([])
    const url = `https://www.googleapis.com/books/v1/volumes?q=%27${bookName}%27&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=25`

    const ApiGel =async()=>{
      
        // if(e.key === "Enter"){
        //     handleSubmit()
        //     console.log("entercalistii")
        // }   

            try {
              
               const {data} = await axios(url)
                console.log(data.items);
                setItems(data.items)
                
               
            } catch (error) {
                console.log(error);
            }

    }

    const handleSubmit=(e)=>{
e.preventDefault() 
ApiGel()
setBookName("")

        } 

        


 return (
    <div className='formm'>
        <form  action="" onSubmit={handleSubmit}>

            <h1>Kitap Bul</h1> <br />

            <input  type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} placeholder='Kitap Ismi Gir...' />

            <button type='submit'>Ok</button>
            </form>


            <div className='kapsayan'>
                {
                    items.map((item,index)=>{
                        return (
                            item?.volumeInfo?.imageLinks ?
                              (<div key={index} className="cardd">
                                <img
                                  src={
            
                                    item?.volumeInfo.imageLinks?.smallThumbnail
                                  }
                                  alt="empty"
                                />
                                <h4>
                                  {item?.volumeInfo.imageLinks &&
                                    item?.volumeInfo.imageLinks &&
                                    item?.volumeInfo?.title}{" "}
                                </h4>
                              </div>) : ""
                            );
                    })
                }

            </div>

    </div>
  )
}

export default Home