"use client"

import { PexelsPhoto, searchPexelsPhotos } from "@/services/pexels"
import { useEffect, useState } from "react"

export const usePexels = () => {

    const [photos, setPhotos] = useState<PexelsPhoto[]>([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        handleSearch("nature")
    }, [])


    const handleSearch = async (query: string) => {
        try {
            setLoading(true)
            const response = await searchPexelsPhotos(query)
            setPhotos(response.photos)

        }catch(error){

        }

        setLoading(false)

    }

    return {
        setSearchQuery,
        searchQuery,
        photos,
        loading,
        handleSearch,
    }

}