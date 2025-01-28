"use client";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
    return (
        <section>
            <div className="flex h-16 items-center px-4">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <Button asChild>
                    <CldUploadButton
                        className="ml-auto"
                        onSuccess={(results: any) => {
                            if (results.event === "success" && results.info) {
                                const publicId = results.info.public_id;
                            }
                        }}
                        uploadPreset="bhvdva9u"
                    />
                </Button>
            </div>
        </section>
    );
}
