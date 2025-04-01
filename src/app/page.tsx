"use client";

import { BlurFadeDemo } from "@/components/magicui/blur-fade-demo";
import { GridPhoto } from "@/components/ui/grid-photo";
import { SearchForm } from "@/components/ui/searchForm";
import SkeletonGrid from "@/components/ui/sekeleton-grid";
import { Separator } from "@/components/ui/separator";
import { usePexels } from "@/hooks/usePexels";
import Image from "next/image";

export default function Home() {
  
  const { photos,
    loading,
    searchQuery,
    setSearchQuery,
    handleSearch } = usePexels();

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <h1 className="text-2xl">
        Search Image Photos with Pexels API
      </h1>
      <Separator className="my-4"/>

      {/* Search */}

      <SearchForm loading={false} searchQuery="" onSearchSubmit={(value: string) => handleSearch(value)}/>

      {/* Photos Grid */}
      {loading ? 
        <SkeletonGrid count={6}/> : 
      <GridPhoto
        photos={photos}
        searchQuery={searchQuery}
      />
      }

    </div>
  );
}
