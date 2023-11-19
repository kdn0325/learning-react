import React, { useState } from 'react'
import { Star } from './Star';

const createArray = length => [...Array(length)];


export const StarRating = ({totalStars = 5}) => {
  const [selectedStars] = useState(3);
  return (
    <>
    {
      createArray(totalStars).map((v,i)=>(
        <Star key={i} selected={selectedStars > i}/>
      ))
    }
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  )
}
