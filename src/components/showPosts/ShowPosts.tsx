import React from 'react'
import { likeUpdater } from '../../firebase/getData'
import { dislikeUpdater } from '../../firebase/getData'
import { useState } from 'react'
import './Showposts.css'
const ShowPosts = ({ item, user }:any) => {
  const [lik, setlike] = useState(parseInt(item.likes))
  const [dislik, setdislik] = useState(parseInt(item.dislikes))

  console.log(user);
  return (
    <>
      <div className="post-card">
        <div className="post-img"><img src={item.reference} alt="there was a problem in loading the img" /></div>
        <div className="poster-name">{item.name}</div>
        <div className="noOfLikeDislike">
          <div className="noOfLikes">❤️{lik}</div>
          <div className="noOfDislikes">❌{dislik}</div>
        </div>
        <div className="times">
          Uploaded on:{item.time}
        </div>
        <div className="btns">
          <button className="like-btn" onClick={(e) => {
            likeUpdater(item.itselfId, user,e)

            setlike(lik + 1)
          }}>Like</button>
          <button className="dislike-btn" onClick={(e) => {
            dislikeUpdater(item.itselfId, user,e)
            setdislik(dislik + 1)

          }}>Dislike</button>
        </div>

      </div>

    </>
  )
}

export default ShowPosts
