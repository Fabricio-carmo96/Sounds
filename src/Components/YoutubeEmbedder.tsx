import { useState } from "react";

const YouTubeEmbedder: React.FC = () => {
  const [videoLink, setVideoLink] = useState<string>('');
  const [embedCode, setEmbedCode] = useState<string>('');

  const embedVideo = () => {
      const embedUrl = videoLink.replace("watch?v=", "embed/");
      const newEmbedCode = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
      setEmbedCode(newEmbedCode);
  };

  return (
      <div>
          <input type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} placeholder="Cole o link do vídeo do YouTube aqui" />
          <button onClick={embedVideo}>enviar</button>
          <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </div>
  );
};

export default YouTubeEmbedder;