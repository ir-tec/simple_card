import {
  ExpandCircleDown,
  Favorite,
  MoreHoriz,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import React from "react";
import { Result } from "../models/data_model";
import { get_time } from "../utils/utilities";
import { IconButtonProps } from "@mui/material/IconButton";
import CustomExpandMore from "./ExpandMore";
interface Res {
  item: Result;
  expanded: number | null;
  setExpanded: (val: any) => void;
  set_data: (val: any) => void;
}
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomCard: React.FC<Res> = ({
  item,
  expanded,
  setExpanded,
  set_data,
}) => {
  const [favorate, set_favorate] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(item.id);
  };
  const handleExpandClose = () => {
    setExpanded(null);
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <CustomExpandMore
            fn={() =>
              set_data((pre: any) => pre.filter((p: any) => p.id !== item.id))
            }
          />
        }
        titleTypographyProps={{
          style: { fontFamily: "dana" },
        }}
        subheaderTypographyProps={{
          style: { fontFamily: "dana" },
        }}
        title={item.title_fa}
        subheader={get_time(new Date(item.created))}
      />
      <CardMedia
        component="img"
        height="194"
        image={
          Boolean(item.image)
            ? item.image
            : "https://pagepipe-ebooks.com/wp-content/uploads/2021/12/webp-header-v3-2000x1200.jpg"
        }
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.primary"
          style={{ fontFamily: "dana" }}
        >
          {item.body_fa}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => set_favorate((pre) => !pre)}>
          <Favorite color={favorate ? "success" : "disabled"} />
        </IconButton>

        <ExpandMore
          expand={Boolean(expanded === item.id)}
          onClick={expanded !== item.id ? handleExpandClick : handleExpandClose}
        >
          <ExpandCircleDown />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded === item.id} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ fontFamily: "dana" }} paragraph>
            {item.title_en}
          </Typography>
          <Typography style={{ fontFamily: "dana" }} paragraph>
            {item.body_en}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default CustomCard;
