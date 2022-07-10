import React from 'react'
import { useState, useEffect } from "react";
import ReactDom from 'react-dom'
import './PostUpload.css'
import { UploadProps } from '../../types/postUploadtype';
import CSS from 'csstype';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,

} from "firebase/storage";
import { getStorage } from 'firebase/storage';
import { v4 } from "uuid";
import postUpload from '../../firebase/PostUploadfunc/postupload.jsx';
import uniqarr from '../../utils/uniquearr';

const PostUpload = ({ user,on,setOn }:{user:any,
  on:boolean,setOn:any}) => {
  const storage = getStorage()
  const [PostUpload, setPostUpload] = useState<any>(null);
  const [PostUrls, setPostUrls] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([])
  const postListRef = ref(storage, "posts/");
  const uploadFile = () => {
    if (PostUpload == null) { alert("please choose a file") }
    else if (PostUpload != null && genres.length === 0) {
      alert("please select a few genres!!")
    }
    else {

      const postRef = ref(storage, `posts/${PostUpload.name + v4()}`);
      uploadBytes(postRef, PostUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setPostUrls((prev) => [...prev, url]);
          postUpload(user.displayName, url, uniqarr(genres))

        });
      });
    }
  };
  // why use css in tsx file
  const otherThanTheModel:CSS.Properties= {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }
  return on ?  ReactDom.createPortal(
    <div className="model" style={otherThanTheModel}>
    <div className='uploadingPost' >
  <button onClick={()=>{

    setOn(false)
  }}>Close</button>
      <input
        type="file"
        onChange={(event:any) => {
          setPostUpload(event.target.files[0]);
        }}
      
      />
      {/* WHY SO MUCH REPETITION OF CODE ?? create ClickHandler seperately and use everywhere and map can be used to to just iterate over the map to render */ }
      Select Genres: <br />
      Anime<input type="checkbox" className="Anime" onClick={(e:any) => {
        e.preventDefault()
        const genres:string = e.target.className
        console.log(genres)
        setGenres(e => [...e, genres])
      }} />
      Fashion<input type="checkbox" className="Fashion" onClick={(e:any) => {
        e.preventDefault()
        const genres = e.target.className
        console.log(genres)
        setGenres(e => [...e, genres])
      }} />
      Technology<input type="checkbox" className="Technology" onClick={(e:any) => {
        e.preventDefault()
        const genres = e.target.className 
        console.log(genres)
        setGenres(e => [...e, genres])
      }} />
      Movies<input type="checkbox" className="Movies" onClick={(e:any) => {
        e.preventDefault()
        const genres = e.target.className
        console.log(genres)
        setGenres(e => [...e, genres])
      }} />
     Space <input type="checkbox" className="Space" onClick={(e:any) => {
        e.preventDefault()
        const genres = e.target.className
        console.log(genres)
        setGenres(e => [...e, genres])
      }} />
      Gaming<input type="checkbox" className="Gaming" onClick={(e:any) => {
        e.preventDefault()
        const genres = e.target.className
        console.log(genres)
        setGenres(e => [...e, genres])
      }} />
      Food<input type="checkbox" className="Food" onClick={(e:any) => {
        e.target.style.color="red"
        e.preventDefault()
        const genres = e.target.className
        console.log(genres)
      setGenres(e => [...e, genres])
      }} />
      <button onClick={uploadFile}> Upload Image</button>
      {/* {PostUrls.map((url) => {

          return <img src={url} />;
        

      })} */}
      </div>
    </div>,
    document.getElementById("model") as HTMLInputElement

  ):<></>
    // modal can be created in a easier way
}

export default PostUpload
