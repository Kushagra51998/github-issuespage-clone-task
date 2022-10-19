import * as React from "react";
import Popover from "@mui/material/Popover";

import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

export default function BasicPopover(props: any) {

    const buttonDesing:React.CSSProperties={
    border:"none",
    outline:'none',
    background:"none"
    }

  const { content } = props;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button style={buttonDesing} onClick={handleClick}>
        <MoreHorizOutlinedIcon />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {content}
      </Popover>
    </div>
  );
}
