export interface PexelsPhoto {
    id: number;
    width: number,
    height: number,
    url: string,
    photographer: string,
    photographer_url: string,
    photographer_id: number,
    avg_color: string,
    src: {
        medium: string,
    },
    liked: boolean,
    alt: string
}

export interface PexelsResponse {
    page: number,
    per_page: number,
    total_results: number,
    photos: PexelsPhoto[],
}


export const searchPexelsPhotos = async (query: string): Promise<PexelsResponse> => {
    const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY
    if (!apiKey) throw new Error('Pexels API key not configured')

    const response = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15`,
        { headers: { Authorization: apiKey } }
    )

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to fetch images')
    }

    return response.json()
}