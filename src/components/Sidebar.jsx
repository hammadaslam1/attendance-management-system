import {
  Box,
  Tabs,
  Typography,
  Tab,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const tabStyle = {
    m: 1,
    borderRadius: "10px",
    transition: "all 0.3s ease-in-out",
    textTransform: "capitalize",
    textAlign: "left",
    fontSize: "1rem",
    cursor: "pointer",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#222831",
    },
  };
  return (
    <div className="w-full" style={{zIndex: 1}}>
      <Box
        sx={{
          width: "250px",
          backgroundColor: "darkslategray",
          color: "#fff",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
        }}
      >
        <Tabs orientation="vertical" variant="standard" sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              p: 2,
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "2rem",
            }}
          >
            EZITECH
          </Typography>
          <Tab label="tab" sx={tabStyle} />
          <Tab label="tab" sx={tabStyle} />
          <Tab label="tab" sx={tabStyle} />
          <Tab label="tab" sx={tabStyle} />
        </Tabs>
        <Button
          variant="contained"
          sx={[
            tabStyle,
            {
              backgroundColor: "#fff",
              color: "darkslategray",
              width: "90%",
            },
          ]}
          disableElevation
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Sidebar;
