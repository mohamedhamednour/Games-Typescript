import React from 'react';

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  const head = (
    <div
      style={{ border: '8px solid black' }}
      className='absolute w-[50px] h-[50px] rounded-[100%] border right-[-20px] top-[50px]'
    />
  );
  const arm = (
    <div
      className='absolute w-[10px] h-[100px] bg-black right-0 top-[100px]'
    />
  );
  const rightArm = (
    <div
      className='absolute w-[10px] h-[100px] bg-black right-[-45px] top-[80px] rotate-[-120deg]'
    />
  );
  const leftArm = (
    <div
      className='absolute w-[10px] h-[100px] bg-black right-[45px] top-[80px] rotate-[120deg]'
    />
  );
  const leftLeg = (
    <div
      className='absolute w-[10px] h-[100px] bg-black right-[25px] top-[190px] rotate-[30deg]'
    />
  );
  const rightLeg = (
    <div
      className='absolute w-[10px] h-[100px] bg-black right-[-25px] top-[190px] rotate-[-30deg]'
    />
  );
  const BODY_PARTS = [head, arm, rightArm, leftArm, leftLeg, rightLeg];

  return (
    <div className='relative'>
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div className='h-[50px] w-[10px] bg-black absolute right-0 top-0' />

      <div className='h-[10px] w-[200px] bg-black ml-[120px]' />

      <div className='h-[400px] w-[10px] bg-black ml-[120px]' />

      <div className='h-[10px] w-[250px] bg-black' />
    </div>
  );
};

export default HangmanDrawing;
