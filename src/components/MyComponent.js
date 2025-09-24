"use client";
import { lazy, Suspense, useEffect, useState } from "react";

const ChatBot = lazy(() => import("react-chatbotify"));

export default function Home() {


    
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
}, [])



  return (
    <>
    {isLoaded && (
      <Suspense fallback={<div  className="fixed bottom-4 group transition-all duration-500 hover:-translate-y-2 right-4 z-100 text-red-500 text-2xl">Loading...</div>}>
        <ChatBot />
      </Suspense>
    )}
    </>
  );
}