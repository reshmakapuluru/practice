import React from "react";
import axios from 'axios';
function Gallery(){
    var[photos,setPhotos]=React.useState([])
    React.useEffect(function(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
          var photos = res.data
          console.log(photos)
          setPhotos([...photos])
        })
      },[])
      function addtogallery(b){

      }
    return(
        <div className="d-flex flex-wrap">
          <div style={{width:'55%'}}>
            <ul className="d-flex flex-wrap">
            {
              photos.map((a)=>{
                return <div className="card shadow-lg p-3 mb-5 bg-white rounded m-4 bg-info-subtle text-emphasis-info" style={{width: '14rem'}}>
                  <img src={a.thumbnailUrl} style={{height:'160px',width:'160px'}} alt="Card image cap"></img>
                  <div>
                      <button  className="btn btn-info" onClick={()=>{addtogallery()}}  disabled={a.IsProductInCart?true:false}>Add to cart</button>
                  </div>
                </div>
              })
            }
            </ul>
          </div>
        </div>
    )
}
export default Gallery