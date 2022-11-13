import { 
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AccountCircle, PersonAdd, Settings, PowerSettingsNew } from "@mui/icons-material";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount('');
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 3, width: "100px", cursor: "pointer" }}>
          My Account
        </Typography>
      </Box>

      <Components
        anchorEl={open}
        id="account-menu"
        open={Boolean(open)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircle fontSize="16px" />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="16px" />
          </ListItemIcon>
          Orders
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="16px" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />

        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <ListItemIcon>
            <PowerSettingsNew fontSize="16px" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Components>
    </>
  );
};

const Components = styled(Menu)`
margin-top: 1px;
padding: 5px;
`;

export default Profile;
