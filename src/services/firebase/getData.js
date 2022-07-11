import { updateDoc,doc, getDoc, addDoc, getDocs, collectionGroup } from "firebase/firestore"
 import {db} from '../firebase/firebaseConfig'
import { collection } from "firebase/firestore"
import { query,where } from "firebase/firestore"
export async function likeUpdater(id,user,e){
  e.target.innerHTML="❤️"
  try{
    const likeExists= query(collectionGroup(db,"likePeople"), where("people","==",user))
    const response=await getDocs(likeExists)
  let arr=[]
    response.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arr.push(doc.data())
    });
  if(arr.length===0){

      const postRef=doc(db,"posts",id)
      
      const subpostRef=collection(postRef,"likePeople")
      await addDoc(subpostRef,{
          people:user
        }) 
    const postRefResponse=await getDoc(postRef)
    const prevlike=postRefResponse.data().likes
    await updateDoc(postRef,{
        likes:prevlike+1,
        
    })
  }    
  else{
      alert("You Have already liked this post")
  }
} catch (error) {
    console.log(error)
}

}

export async function dislikeUpdater(id,user,e){
    
    e.target.innerHTML="🤢"
    try{
        const dislikeExists= query(collectionGroup(db,"likePeople"), where("people","==",user))
        const response=await getDocs(dislikeExists)
      let arr=[]
        response.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          arr.push(doc.data())
        });
        const postRef=doc(db,"posts",id)
        const subpostRef=collection(postRef,"dislikePeople")
        await addDoc(subpostRef,{
            people:user
        })
        
        const postRefResponse=await getDoc(postRef)
    const prevlike=postRefResponse.data().dislikes
     await updateDoc(postRef,{
     dislikes:prevlike+1,
})
 
} catch (error) {
   console.log(error);
}

    }