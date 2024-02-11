import React, { useEffect, useState } from "react";

function getVideoIdFromUrl(url: string): string | void {
  if (!url) {
    //colocar toast
    alert('URL vazia');
    return;
  }
  const urlObj = new URL(url);
  if (!urlObj.searchParams.has('v')) {
    alert('Digite um URL válid')
  } else {
    return urlObj.searchParams.get("v") as string;
  }
}

const YTVideo: React.FC = () => {
  const [player, setPlayer] = useState(null);
  const [url, setUrl] = useState("");
  useEffect(() => {
    // 1. Load the IFrame Player API code asynchronously.
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    // 2. This function creates an <iframe> (and YouTube player)
    window.onYouTubeIframeAPIReady = () => {
      setPlayer(
        new window.YT.Player("player", {
          height: "360",
          width: "640",
          videoId: "dQw4w9WgXcQ",
          // resolver autoplay
          playerVars: { 'autoplay': 1, 'controls': 0, 'disablekb': 1 },
          events: {
            onReady: onPlayerReady,
          },
        })
      );
    };

    // 3. This function starts the video when the player is ready.
    const onPlayerReady = (event: any) => {
      event.target.playVideo();
    };

    // Cleanup function to remove the global functions when the component unmounts
    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  const handleClick = () => {
    const State = player.getPlayerState();
    if (State == 2 || State == -1) {
      player.playVideo();
    } else if (State == 1) {
      player.pauseVideo();
    }
  };

  return (
    <>
      <div id="player"></div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <button onClick={() => player.loadVideoById(getVideoIdFromUrl(url))}>
        Trocar video
      </button>
      <button onClick={handleClick}>Play/Pause</button>
    </>
  );
};

export default YTVideo;
