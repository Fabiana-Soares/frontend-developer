'use client'
import React from 'react';
import Link from 'next/link';


interface StateProps {
  youtubeVideos: any[];
}

const SearchReturn: React.FunctionComponent<StateProps> = ({ youtubeVideos}) => {

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center text-stone-50">Aqui está sua banda</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {youtubeVideos.map((video) => (
          <div key={video.id} className=" bg-gradient-to-r from-slate-200 to-slate-000 m-5 p-4 rounded">
            <Link 
              href={`https://www.youtube.com/embed/${video.id.videoId}`} 
              target="_blank" 
              passHref 
            >
              <img 
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
                className="w-60 flex justify-center mb-3 cursor-pointer"
              />
            </Link>

            <div>
              <p className="text-slate-600 font-bold video-card__content p-2 ">
                {video.snippet.title}
              </p>
            </div>

            <p className="text-slate-500 justify-center">{video.snippet.description}</p>
            <div className="text-slate-600 font-bold justify-center">
              <p >Autor: {video.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchReturn;