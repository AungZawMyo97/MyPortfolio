import React, { useState, useEffect, useMemo } from 'react';
import YouTubeApi from '../api/youtubeApi';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = 'AIzaSyDwGhq4VNsq5PVp18MB_khMavxRsPALbTM';
  const channelId = 'UCMtwJ3kiqBMxXSAlwmkEkIw';

  const youtubeApi = useMemo(() => new YouTubeApi(apiKey), [apiKey]); // Memoize the API instance

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await youtubeApi.getVideosByChannelId(channelId);
      setVideos(fetchedVideos);
    };

    fetchVideos();
  }, [channelId, youtubeApi]); // Add youtubeApi as a dependency if created inside the component

  return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
            <strong className="block text-center text-4xl">MY GAMING CONTENTS</strong>
            <div className="flex flex-row mx-auto max-w-5xl justify-center mt-6">
            {videos.map((video) => (
                <div key={video.id.videoId} className="video-item">
                    <iframe
                    width="70%"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                    title={video.snippet.title}
                    ></iframe>
                    <h3>{video.snippet.title}</h3>
                </div>
            ))}
            </div>
        </div>
  );
};

export default YouTubeVideos;