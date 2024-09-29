import { Swiper, SwiperSlide } from "swiper/react";
import RecipeCard from "../components/Recipecard";
import { Recipe } from "../types/type";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RecipeWrapper() {
  // memanggil API
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipes")
      .then((response) => {
        setRecipes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error Loading Data {error}</p>;
  }

  return (
    <section id="MadeByPeople">
      <div className="flex items-center justify-between px-5">
        <h2 className="font-bold">Made by People</h2>
        <a
          href="#"
          className="font-semibold text-sm leading-[21px] text-[#FF4C1C]"
        >
          Explore All
        </a>
      </div>
      <div className="swiper w-full mt-3">
        <Swiper
          className="w-full mt-2"
          direction="horizontal"
          spaceBetween={26}
          slidesPerView="auto"
          slidesOffsetBefore={27}
          slidesOffsetAfter={27}
        >
             {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id} className="!w-fit">
            <RecipeCard recipe={recipe}/>
          </SwiperSlide>
             ))}
        </Swiper>
      </div>
    </section>
  );
}
