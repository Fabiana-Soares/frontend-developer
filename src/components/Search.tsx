import React, { useState } from 'react';
import { TbMusicSearch } from "react-icons/tb";
import api from '../services/api';

interface SearchProps {
  onSearchResults: (results: any) => void;
}

function Search({ onSearchResults }: SearchProps) {
  const [inputSearch, setInputSearch] = useState('');
  const [search, setSearch] = useState(false);

  async function handleSearch() {
    setSearch(true);

    if(inputSearch === ''){
      alert("Preencha o nome da banda ou artista")
      return;
    }

    try {
      const youtubeVideos = await api.getYouTube(inputSearch);
      //console.log(youtubeVideos);
      const responseTicketmaster = await api.getTicketmaster(inputSearch);
      //console.log(youtubeVideos);
      
      if (responseTicketmaster._embedded) {
          const ticketMaster = await responseTicketmaster._embedded.attractions;
          const results = await { youtubeVideos, ticketMaster };
          console.log(results);
        
  
        await onSearchResults(results);
      }
      else {
        const results = await { youtubeVideos };
        console.log(results);
  
        await onSearchResults(results);
      }


      setSearch(true);
    } catch  {
      alert('Opsss aconteceu um erro...');
      setSearch(true);
    }
  }

  return (
    <div>
      <div className={`flex flex-col justify-center items-center columns-1 ${search ? '' : 'h-screen'}`}>
        <h1 className="text-4xl font-bold text-center text-stone-50 animate-bounce">Dolado Music</h1>
        <div className='relative'>
          <input
            type="text"
            value={inputSearch}
            onChange={(event) => setInputSearch(event.target.value)}
            className='text-slate-300 p-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500'
            placeholder="Pesquisar"
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" 
            type="submit"
            onClick={handleSearch}
          >
            <TbMusicSearch  className='text-slate-400'/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;