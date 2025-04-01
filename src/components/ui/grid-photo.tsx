import { PexelsPhoto } from "@/services/pexels";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "./card";

interface GridPhotoProps {
    photos: PexelsPhoto[];
    searchQuery: string;
}

export const GridPhoto = ({photos, searchQuery} : GridPhotoProps) => {
    return (
        <div className="columns-2 gap-4 sm:columns-3">
            {photos.length === 0 ? <p>No photos found for {searchQuery}</p> :
                photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo}/>
            ))}
        </div>
    )
}

export const PhotoCard = ({photo}: {photo: PexelsPhoto}) => {
    return (
        <Card className="mb-4 size-full rounded-lg object-contain p-4">
            <div className="cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted">
                <Image
                    alt={photo.alt}
                    src={photo.src.medium}
                    width={photo.width}
                    height={photo.height}
                    className="rounded-2xl"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white">
                    {photo.photographer}
                </div>
            </div>
        </Card>
    )
}