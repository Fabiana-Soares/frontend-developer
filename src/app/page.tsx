'use client'

import React, { useState } from 'react';
import Search from '../components/Search';
import SearchReturn from '../components/SearchReturn';
import { CgSearchLoading } from "react-icons/cg";

export default function Page() {
  const [results, setResults] = useState<any>("");
  const [loading, setLoading] = useState(true);

  const handleSearchResults = async (results: any) => {
    try {
      await setResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <Search onSearchResults={handleSearchResults} />

      {
        loading ? 
        (<div className="text-2xl text-slate-300 p-9 mb-9">
          <CgSearchLoading/>
        </div>)
        : (<SearchReturn
          ticketMaster={results.ticketMaster}
          youtubeVideos={results.youtubeVideos}
        />)
      }

    </div>
  );
}
