import React from 'react'
import PostUpload from '../PostUpload/PostUpload';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from '../Navbar/Navbar';
import { auth } from '../../firebase/firebaseConfig';
import { useState } from 'react';
import { collection, query, where, getDocs, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
import { useEffect } from 'react';
import intersect from '../../utils/commonInArr';
import ShowPosts from '../showPosts/ShowPosts';
import { userData } from './home';

const Homepage = () => {
  const [user, loading, error] = useAuthState(auth)
  // const [load, setLoad] = useState(true)
  const [userData, setUserData] = useState<any>([]) // why use any ??
  const [allPosts, setAllPosts] = useState<any>([])

  const [upload, setupload] = useState(false) // define type



  useEffect(() => {
    const fetchUserName = async () => {
      
  //Variable Names should make sense.
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data:any= doc.docs[0].data()
      setUserData(data)
    };
    fetchUserName()

  }, [user]);
 
  console.log(user)
  useEffect(() => {
    let give:any=[]
    async function getPostData(){
     try {
      const querySnapshot = query(collection(db, "posts"));
      const snap=onSnapshot(querySnapshot,(q)=>{
        
        q.forEach((doc) => {
          console.log(doc.id);
          // doc.data() is never undefined for query doc snapshots
          
          give.push(doc.data())
          
        });
      })
    
     } catch (error) {
       console.log(error)
     }
  }
       getPostData()   
      setAllPosts(give)
  }, [loading])
  // remove console.log before pushing to github
  console.log(userData)
  console.log(allPosts);
  const thisArr:any=[]
        for(let i=0;i<allPosts.length;i++){
          // intersection was supposed to be done from firebase
          if(intersect(userData.intersets,allPosts[i].genres).length>=2){
            console.log(allPosts[i])
            thisArr.push(allPosts[i])
          }
          else{
            console.log("nothing to show");
          }
        }

        console.log(thisArr);
  //       setFinalShowingArray(thisArr)



  //     setLoad(false)

  // console.log(userData)
  // console.log(FinalShowingArray);
  // console.log(load);
  // console.log(allPosts);
  return loading ? <h1>Loading...</h1> :(
    
    <>
      
      <Navbar name={userData.displayName} imgURL={userData.photoURL} email={userData.email} />
     {/* ClickHandler function can be made seperate */}
      <button onClick={()=>{
       setupload(true)
      }}>Upload</button>
      <PostUpload on={upload} user={userData} setOn={setupload}/>
      {thisArr.map((item:any)=>{
         return <ShowPosts item={item} user={userData.uid}/>
      })}
    </>
  )
}

export default Homepage
