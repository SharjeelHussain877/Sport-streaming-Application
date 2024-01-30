import React from 'react';
import VideoPlayer from './videoPlayer.js';

const Live = () => {
  // HLS streaming link
  const hlsStreamUrl = 'https://watchout-usea.streaming.media.azure.net/b91816e0-8efe-49c0-8283-ac0075cb936e/80e25ad6-6b86-4e20-a66e-d394267977f5.ism/manifest(format=m3u8-cmaf)';

  return (
    <div>
      <VideoPlayer src={hlsStreamUrl} />
    </div>
  );
};

export default Live;

