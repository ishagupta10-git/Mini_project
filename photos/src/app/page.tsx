"use client";
import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { CloudinaryUploadWidgetResults, CloudinaryUploadWidgetInfo } from 'next-cloudinary';

export default function Home() {
  const [imageId, setImageId] = useState("");

  const handleUpload = (results: CloudinaryUploadWidgetResults) => {
    const info = results.info as CloudinaryUploadWidgetInfo;
    if (results.event === 'success' && info.public_id) {
      setImageId(info.public_id);
    } else {
      console.error("Upload failed or no public_id found.");
    }
  };

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <CldUploadButton
        onUpload={handleUpload}
        uploadPreset='bhvdva9u'
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId} // Use the dynamic imageId here
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
