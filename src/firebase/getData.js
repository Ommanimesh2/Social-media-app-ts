import { updateDoc,doc, getDoc, addDoc, getDocs, collectionGroup } from "firebase/firestore"
 import {db} from '../firebase/firebaseConfig'
import { collection } from "firebase/firestore"
import { query,where } from "firebase/firestore"
export async function likeUpdater(id,user,e){
  e.target.innerHTML="❤️"
  try{
    const likeExists= query(collectionGroup(db,"likePeople"), where("people","==",user))
    const thing=await getDocs(likeExists)
  let arr=[]
    thing.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arr.push(doc.data())
    });
  if(arr.length===0){

      const ref=doc(db,"posts",id)
      
      const subref=collection(ref,"likePeople")
      await addDoc(subref,{
          people:user
        }) 
    const hut=await getDoc(ref)
    const prevlike=hut.data().likes
    await updateDoc(ref,{
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
        const thing=await getDocs(dislikeExists)
      let arr=[]
        thing.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          arr.push(doc.data())
        });
        const ref=doc(db,"posts",id)
        const subref=collection(ref,"dislikePeople")
        await addDoc(subref,{
            people:user
        })
        
        const hut=await getDoc(ref)
    const prevlike=hut.data().dislikes
     await updateDoc(ref,{
     dislikes:prevlike+1,
})
 
} catch (error) {
   console.log(error);
}

    }