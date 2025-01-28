"use client";

import { Heart } from "@/components/ui/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavouriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/ui/icons/full-heart";

export function CloudinaryImage (props: any & {imageData: SearchResult; path: string}){
    const [transiton, startTransition] = useTransition()
    const {imageData} = props
    const isFavourited = imageData.tags.includes('favourite')


    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {isFavourited ?
                <FullHeart
                onClick={() =>{
                    startTransition(() => {
                        setAsFavouriteAction(imageData.public_id, false, props.path)

                    })
                }} 
                className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
                />

            :
                <Heart
                onClick={() =>{
                    startTransition(() => {
                        setAsFavouriteAction(imageData.public_id, true, props.path)

                    })
                }} 
                className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
                />

            
        
        }
            
            
        </div>
    );
        
}