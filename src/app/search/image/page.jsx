import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";


export default async function ImageSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`
  );
  
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  
  const data = await response.json();

  const results = data.items;
  
  if (!results) {
    return <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">No results found</h1>
      <p className="text-lg">
        Try searching for something else or go back to the homepage.
        <Link href="/" className="text-blue-500 ml-2">Home</Link>
      </p>
    </div>;
  }

  return (
    <>
      {results && <ImageSearchResults results={data} />}
    </>
  );
}
