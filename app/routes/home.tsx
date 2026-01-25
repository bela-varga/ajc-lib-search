import { SearchBar } from "~/components/SearchBar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "A.J. Christian \"Könyvtár\" Kereső" },
    { name: "description", content: "Keress A.J. Christian youtube videóiban" },
  ];
}

export default function Home() {
  return (  
    <div>
      <SearchBar onSearch={(query) => { console.log("Search", query); }} />
      <h1>A.J. Christian "Könyvtár" Kereső</h1>
      <p>Fejlesztés alatt</p>
    </div>
  );
}
