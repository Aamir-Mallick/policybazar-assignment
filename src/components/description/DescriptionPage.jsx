import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const DescriptionPage = ({ email, firstName, lastName, avatar }) => {
  return (
    <>
      <div
        style={{ width: "700px", margin: "2px auto", border: "1px solid red" }}
      >
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component='img'
            sx={{ width: 370 }}
            md={{ width: 600 }}
            image={`${avatar}`}
            alt='Live from space album cover'
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                pl: 2,
                pr: 2,
                pb: 1,
                pt: 2,
              }}
            >
              <CardContent>
                <Typography sx={{ pt: 2 }} component='div' variant='h4'>
                  {firstName}
                </Typography>
                <Typography sx={{ pt: 2 }} component='div' variant='h4'>
                  {lastName}
                </Typography>
                <Typography sx={{ pt: 2 }} component='div' variant='h5'>
                  {email}
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </div>
    </>
  );
};
DescriptionPage.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  lastName: PropTypes.string,
};
export { DescriptionPage };
