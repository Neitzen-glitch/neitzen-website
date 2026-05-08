'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  type: 'page' | 'section' | 'feature';
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search when query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setNotFound(false);
      return;
    }

    const search = async () => {
      setIsLoading(true);
      setNotFound(false);

      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setResults(data.results);
        } else {
          setResults([]);
          setNotFound(true);
        }
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };

    const debounce = setTimeout(search, 100);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleResultClick = (path: string) => {
    setIsOpen(false);
    setQuery('');
    setResults([]);

    // Handle hash links
    if (path.startsWith('/#')) {
      const elementId = path.substring(2); // Remove /#
      // Use a direct approach to navigate hash links
      window.location.hash = elementId;
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      // Regular navigation
      router.push(path);
    }
  };

  // Helper function to highlight matching text
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query.split('').join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, idx) =>
          regex.test(part) ? (
            <mark key={idx} className="bg-yellow-200 font-semibold">
              {part}
            </mark>
          ) : (
            <span key={idx}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Button */}
      <button
        onClick={handleOpen}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Search"
        title="Search"
      >
        <Search size={20} className="text-gray-700" />
      </button>

      {/* Search Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
          {/* Search Input */}
          <div className="p-4 border-b border-gray-200 bg-gray-">
            <div className="flex items-center gap-2">
              <Search size={20} className="text-gray-400"/>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search pages, features, products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery('');
                    setResults([]);
                    setNotFound(false);
                  }}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                  aria-label="Clear search"
                >
                  <X size={16} className="text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading && query && (
              <div className="p-4 text-center text-sm text-gray-500">
                Searching...
              </div>
            )}

            {!isLoading && notFound && query && (
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Cannot be found</p>
                <p className="text-xs text-gray-400">No results for &quot;{query}&quot;</p>
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="divide-y divide-gray-200">
                {results.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleResultClick(result.path)}
                    className="w-full text-left p-4 hover:bg-blue-50 transition-colors text-decoration-none"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {highlightText(result.title, query)}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                          {highlightText(result.description, query)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">
                            {result.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {!isLoading && !query && !notFound && (
              <div className="p-4 text-center text-sm text-gray-500">
                Start typing to search...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
