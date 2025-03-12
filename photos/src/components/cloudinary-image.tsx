"use client";

import { Heart } from "@/components/ui/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { useState, useTransition } from "react";
import { FullHeart } from "@/components/ui/icons/full-heart";
import { SearchResult } from "@/app/gallery/page";
import { setAsFavouriteAction } from "@/app/gallery/actions";
import { ImageMenu } from "./image-menu";

export function CloudinaryImage (props:{ imagedata: SearchResult; onUnheart?: (unheartedResource: SearchResult) => void; } & Omit<CldImageProps, "src">  ){
    const [transition, startTransition] = useTransition()
    const {imagedata, onUnheart} = props
    const [isFavourited, setIsFavourited] = useState(imagedata.tags.includes('favourite'))


    return (
        <div className="relative">
            <CldImage {...props} src={imagedata.public_id} />
            {isFavourited ?
                <FullHeart
                onClick={() =>{
                    onUnheart?.(imagedata)
                    setIsFavourited(false);
                    startTransition(() => {
                        setAsFavouriteAction(imagedata.public_id, false )

                    })
                }} 
                className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
                />
            :

            
                <Heart
                    onClick={() =>{
                        setIsFavourited(true);
                        startTransition(() => {
                            setAsFavouriteAction(imagedata.public_id, true)

                        })
                    }} 
                    className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
                />

            
        }

          <ImageMenu image={imagedata} />  
        </div>
    );
        
}
