import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const DescriptionPage = ({ email, firstName, lastName, avatar }) => {
  return (
    <>
      <Box display='flex' justifyContent={"center"}>
        <Card
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <CardMedia
            component='img'
            sx={{ width: 380 }}
            image={`${avatar}`}
            alt='Live from space album cover'
          />
          <Box
            sx={{
              bgcolor: "#b7dde5",
              width: 380,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "#b7dde5",
              }}
            >
              <CardContent>
                <Box display='flex' sx={{ mt: 2 }}>
                  <Typography sx={{ pr: 1 }} component='div' variant='h5'>
                    First Name:
                  </Typography>
                  <Typography component='div' variant='h5'>
                    {firstName}
                  </Typography>
                </Box>
                <Box display='flex' sx={{ mt: 2 }}>
                  <Typography sx={{ pr: 1 }} component='div' variant='h5'>
                    Last Name:
                  </Typography>
                  <Typography component='div' variant='h5'>
                    {lastName}
                  </Typography>
                </Box>
                <Box display='flex' sx={{ mt: 2 }}>
                  <Typography sx={{ pr: 1 }} component='div' variant='h5'>
                    Email:
                  </Typography>
                  <Typography component='div' variant='h5'>
                    {email}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Box>
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
