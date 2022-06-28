import { Delete, MoreHoriz } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";

interface Prop {
  fn: () => void;
}

const CustomExpandMore: React.FC<Prop> = ({ fn }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="settings" onClick={handleClick}>
        <MoreHoriz />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
          style: {
            padding: 0,
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            fn();
            handleClose();
          }}
        >
          <Button startIcon={<Delete />} style={{ fontFamily: "dana" }}>
            حذف
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default CustomExpandMore;
