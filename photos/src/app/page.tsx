"use client";
import { CldUploadButton } from 'next-cloudinary';
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <CldUploadButton uploadPreset='bhvdva9u'/>
       </main>
    
  );
}
