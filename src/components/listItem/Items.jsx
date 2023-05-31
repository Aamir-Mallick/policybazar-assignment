import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

const Items = ({ id, firstName, avatar }) => {
  return (
    <Box>
      <Link to={`details/${id}`}>
        <List
          sx={{ width: 360, bgcolor: "#b7dde5", borderRadius: "5px", m: 1 }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemAvatar sx={{ width: 200 }}>
                <Avatar alt={`Avatar n°${id}`} src={`${avatar}`} />
              </ListItemAvatar>
              <ListItemText primary={`${firstName}`} />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
    </Box>
  );
};

Items.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  avatar: PropTypes.string,
};

export { Items };
