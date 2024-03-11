import React from "react";
import { Box, IconButton, CardActions } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";

export default function CardActionBar({
  handleCardDelete,
  handleCardLike,
  handleCardEdit,
}) {
  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton>
          <DeleteIcon onClick={() => handleCardDelete()} />
        </IconButton>
        <IconButton>
          <ModeEditIcon onClick={() => handleCardEdit()} />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton>
          <Favorite onClick={() => handleCardLike()} />
        </IconButton>
      </Box>
    </CardActions>
  );
}
