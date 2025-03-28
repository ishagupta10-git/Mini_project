"use client";

import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { SearchResult } from "@/app/gallery/page";


export default  function AlbumGrid({ images }: {images: SearchResult[]}) {
  return (
      <ImageGrid
        images={images}
        getImage={(imagedata: SearchResult) => {
          return (
            <CloudinaryImage
              key={imagedata.public_id}
              imagedata={imagedata}
              width="400"
              height="300"
              alt="an image"
            />
        
          )
        }}
      />

        
      
  );
}
