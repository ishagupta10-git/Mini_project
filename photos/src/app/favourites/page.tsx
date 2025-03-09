
import cloudinary from "cloudinary";
import { ForceRefresh } from "@/components/ui/force-refresh";
import FavouritesList from "./favourites-list";
import { SearchResult } from "../gallery/page";

export default async function FavouritesPage() {

  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at","desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as{resources :SearchResult[]};


  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favourite Images</h1>
        </div>

        <FavouritesList initialResources={results.resources} />
          

      </div>
    </section>
  );
}
