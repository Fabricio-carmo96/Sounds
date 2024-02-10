import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineMusicVideo } from "react-icons/md";
import { Button, IconButton, Modal } from "@mui/material";
import { HiMiniPlayPause } from "react-icons/hi2";
import { FaVolumeUp } from "react-icons/fa";
import { SlEqualizer } from "react-icons/sl";
import React, { useState } from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

// function handleClick(){
//   console.log('modal')
// }

const PositionedTooltips: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [videoLink, setVideoLink] = useState<string>('');
  const [embedCode, setEmbedCode] = useState<string>('');

  const embedVideo = () => {
    const embedUrl = videoLink.replace("watch?v=", "embed/");
    const newEmbedCode = `<iframe width="560" height="315" src="${embedUrl}?controls=0&amp;showinfo=0&amp;modestbranding=1&amp;loop=1&disablekb=1&amp;fs=0&amp;cc_load_policy=0&amp;iv_load_policy=3&amp;autohide=0&amp;autoplay=1;enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    setEmbedCode(newEmbedCode);
};
const handleClick = () => {
  embedVideo();
  handleClose();
};

  return (
    <>
    <Box sx={{ width: 500 }}>
      <Grid container justifyContent="center">
        <Grid display="flex">
          <Tooltip title="Embed" placement="bottom">
            <Grid>
              <IconButton onClick={handleOpen}>
                <MdOutlineMusicVideo />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <input
                    type="text"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                    placeholder="Cole o link do vídeo do YouTube aqui"
                  />
                  <Button onClick={handleClick}>enviar</Button>
                </Box>
              </Modal>
            </Grid>
          </Tooltip>
          <Tooltip title="PlayPause" placement="bottom">
            <IconButton>
              <HiMiniPlayPause />
            </IconButton>
          </Tooltip>
          <Tooltip title="Volume" placement="bottom">
            <IconButton>
              <FaVolumeUp />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <IconButton>
              <SlEqualizer />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
    <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    </>
  );
}

export default PositionedTooltips
