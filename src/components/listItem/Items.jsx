import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Items = ({ id, firstName, avatar }) => {
  return (
    <div>
      <Link to={`details/${id}`}>
        <List
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${id}`} src={`${avatar}`} />
              </ListItemAvatar>
              <ListItemText primary={`${firstName}`} />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
    </div>
  );
};

Items.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  avatar: PropTypes.string,
};

export { Items };
