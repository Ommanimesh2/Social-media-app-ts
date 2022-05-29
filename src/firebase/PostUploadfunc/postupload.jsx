import { db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import {collection, addDoc } from "firebase/firestore";
import { getFormattedDateTime } from "../../utils/dateTimeFormat";


async function postUpload(name,reference,genres){
   try {
       
       const doing =await addDoc(collection(db, "posts"), {
        name:name,
        time:getFormattedDateTime(new Date()),
        likes:0,
        dislikes:0,
        reference:reference,
        genres:genres,
        itselfId:"",
 

        
    });
 const ref=doc(db,"posts",doing.id)
 await updateDoc(ref,{
     itselfId:doing.id
    })
    console.log(ref);
  alert("post created")
} catch (error) {
    console.log("cannot add that")
}
}

export default postUpload