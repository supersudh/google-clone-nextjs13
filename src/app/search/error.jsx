"use client";

import { useEffect } from 'react';

export default function Error({error, reset}) {
  
  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-4">Something went wrong</h1>
      <button className="text-blue-500" onClick={reset}>Try again</button>
    </div>
  );
}
