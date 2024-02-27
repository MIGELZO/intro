import { Box, Checkbox, Typography, IconButton } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Divider from "@mui/material/Divider";
import "./cardComponent.css";
import React from "react";

const card = {
  _id: "63765801e20ed868a69a62c4",
  title: "first",
  subtitle: "subtitle",
  description: "testing 123",
  phone: "050-0000000",
  email: "test@gmail.com",
  web: "https://www.test.co.il",
  image: {
    url: "https://picsum.photos/300/200",
    alt: "Business card image",
  },
  address: {
    state: "",
    country: "country",
    city: "tel-aviv",
    street: "Shinkin",
    houseNumber: 3,
    zip: 1234,
  },
  bizNumber: 1000000,
  user_id: "63765801e20ed868a69a62c2",
};

function CardComponent() {
  return (
    <Box>
      <div className="card-container">
        <img src={card.image.url} alt={card.image.alt} className="card-img" />
        <div className="form-container">
          <Typography sx={{color: "black"}} variant="h3" component="h1" className="card-title">
            {card.title}
          </Typography>
          <Typography variant="h6" component="h2" >
            {card.subtitle}
          </Typography>
          <Divider variant="middle" />
          <div className="card-content">
            <p><span className="user-details">Phone:</span> {card.phone}</p>
            <p>
              <span className="user-details">Address:</span> {card.address.street} {card.address.houseNumber}{" "}
              {card.address.city}
            </p>
            <p><span className="user-details">Card Number:</span> {card.bizNumber}</p>
          </div>
          <footer className="card-btn-box">
            <div className="btn-box1">
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <EditIcon />
              </IconButton>
            </div>
            <div className="btn-box2">
              <IconButton>
                <LocalPhoneIcon />
              </IconButton>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                Checked
                color="error"
              />
            </div>
          </footer>
        </div>
      </div>
    </Box>
  );
}

export default CardComponent;
