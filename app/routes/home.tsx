import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Audio Library Search" },
    { name: "description", content: "Search your audio library" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Audio Library Search</h1>
      <p>Application ready for development</p>
    </div>
  );
}
