import React from 'react'
type HangmanDrawingProps = {
  numberOfGuesses: number
}
const Hungmandruing = ({numberOfGuesses}:HangmanDrawingProps) => {
  const head =(
    <div style={{border:'8px solid black'}} className='absolute w-[50px] h-[50px] rounded-[100%] border 
    
      right-[-20px] top-[50px]' />
  )
  const arm =(
    <div  className='absolute w-[10px] h-[100px]   
    
      right-0 bg-black top-[100px]' />
  )
  const rightArm =(
    <div  className='absolute w-[10px] h-[100px]   
    
      right-[-45px] bg-black top-[80px] rotate-[-120deg] ' />
  )
  const leftArm =(
    <div  className='absolute w-[10px] h-[100px]   
    
      right-[45px] bg-black top-[80px] rotate-[120deg] ' />
  )
  const leftLeg =(
    <div  className='absolute w-[10px] h-[100px]   
    
      right-[25px] bg-black top-[190px] rotate-[30deg] ' />
  )
  const rigthLeg =(
    <div  className='absolute w-[10px] h-[100px]   
    
      right-[-25px] bg-black top-[190px] rotate-[-30deg] ' />
  )
  const BODY_PARTS = [head, arm, rightArm, leftArm, leftLeg, rigthLeg]

  return (
    <>
     <div className='relative '>
     {BODY_PARTS.slice(0, numberOfGuesses)}

     <div  className='h-[50px] w-[10px] bg-black absolute right-0 top-0'/>

     <div  className='h-[10px] w-[200px] bg-black ml-[120px]'/>

     <div  className='h-[400px] w-[10px] bg-black ml-[120px]'/>

      <div  className='h-[10px] w-[250px] bg-black'/>

     </div>
    
    </>
  )
}

export default Hungmandruing