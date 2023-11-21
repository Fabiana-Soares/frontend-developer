'use client'
import React from 'react';
import Link from 'next/link';

interface SocialMedialLinks {
  url: string;
  key: string;
}

interface StateProps {
  ticketMaster: any[];
  youtubeVideos: any[];
};


const SearchReturn: React.FunctionComponent<StateProps> = ({ youtubeVideos, ticketMaster }) => {

  return (
    <div>
      <h2 className="text-2xl text-slate-300 p-4 font-semibold mb-4 text-center">Aqui está sua banda</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ticketMaster && ticketMaster.length > 0 && (
        <div>
          <h3 className=" text-2xl text-slate-300 p-4 font-semibold mb-4">Saiba mais sobre a banda</h3>
          <div className="bg-gradient-to-r from-slate-200 to-slate-000 m-5 p-4 rounded">
            {ticketMaster.map((attraction) => (
              <div key={attraction.id} className='justify-center'>
                <h4 className="text-slate-600 font-bold p-5 font-semibold mb-2 text-center">Atração: {attraction.name}</h4>

                {attraction.externalLinks && (
                  <div>
                    <h5 className="text-slate-600 font-semibold mb-2 text-center">Redes Sociais</h5>
                    <ul>
                      {Object.entries(attraction.externalLinks as SocialMedialLinks).map(([socialMedia, link]) => (
                        <div key={socialMedia} className="mb-2">
                          <a
                            href={link[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {socialMedia}
                          </a>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

        {youtubeVideos.map((video) => (
          <div key={video.id} className="bg-gradient-to-r from-slate-200 to-slate-000 m-5 p-4 rounded">
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
              <p>Autor: {video.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>     
    </div>
  );
};

export default SearchReturn;