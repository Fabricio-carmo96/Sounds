import { Box, Button, Grid, Tooltip } from "@mui/material";
import Rain from '../assets/rain.mp3'
import Nature from '../assets/nature.mp3.mp3'

export const SoundBoard = () => {

function PlayPauseSound(sound){
  
}



  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="bottom">
            <Button onClick={PlayPauseSound(Rain)}>Chuva</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button>Natureza</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};
