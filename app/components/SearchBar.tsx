import { useState, type FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md gap-2"
      role="search"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Keresés..."
        className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        aria-label="Keresés"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Keresés
      </button>
    </form>
  );
}
