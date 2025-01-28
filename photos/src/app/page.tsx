"use client";

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

type UploadResult = {
  info:{
    public_id: string;

  },
  event:'success',
}

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CldUploadButton
        onSuccess={(results: any) =>{
          if (results.event === "success") {
            setImageId(results.info.public_id);
          }
         

        }}
        
        uploadPreset="upload" />

        {imageId && (
          <CldImage
            width="400"
            height="300"
            src={imageId}
            sizes="100vw"
            blurFaces
            
            alt="Description of my image"
            priority
          />
        )}

       
    </main>
  );
}


