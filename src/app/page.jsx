import Banner from "./components/Banner";
import FoodCategory from "./components/FoodCategory";
import FeaturedItems from "./components/FeaturedItems";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-16">
      
      <Banner />
      <FoodCategory />
      <FeaturedItems />
    </main>
  );
}