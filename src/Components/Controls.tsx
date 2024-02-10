import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import YouTubeEmbedder from "./YoutubeEmbedder";
const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LabelBottomNavigation() {
  const [value, setValue] = useState("recents");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "recents") {
      setIsModalOpen(true); // Abre o modal quando "Recents" é selecionado
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <BottomNavigation
        sx={{ width: 500, bgcolor: "gray", borderRadius: 4, opacity: 0.5 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          sx={{
            color: "white",
            "&.Mui-selected": {
              color: "black",
            },
          }}
          icon={<MusicVideoIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          sx={{
            color: "white",
            "&.Mui-selected": {
              color: "black",
            },
          }}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          sx={{
            color: "white",
            "&.Mui-selected": {
              color: "black",
            },
          }}
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          sx={{
            color: "white",
            "&.Mui-selected": {
              color: "black",
            },
          }}
          icon={<FolderIcon />}
        />
      </BottomNavigation>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <div>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <YouTubeEmbedder/>
          </Box>
          <Button onClick={handleModalClose}>Fechar Modal</Button>
        </div>
      </Modal>
    </div>
  );
}
