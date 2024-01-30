import React from 'react';
import VideoPlayer from './videoPlayer.js';

const Live = () => {
  // HLS streaming link
  const hlsStreamUrl = 'https://watchout-usea.streaming.media.azure.net/d2b5323a-aec4-4422-ae01-5552be5e7bbe/e593242e-8f21-4d42-8969-34d74fc6d279.ism/manifest(format=m3u8-cmaf)';

  return (
    <div>
      <VideoPlayer src={hlsStreamUrl} />
    </div>
  );
};

export default Live;

