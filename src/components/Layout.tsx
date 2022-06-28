import { Grid, Zoom } from "@mui/material";
import React from "react";
import { styles } from "../styles/main_style";
import { get_data } from "../services/services";
import { Result } from "../models/data_model";
import Card from "./Card";
const Layout: React.FC = () => {
  const [data, set_data] = React.useState<Result[]>([]);
  const [expanded, setExpanded] = React.useState(null);

  const style = styles();
  React.useEffect(() => {
    get_data().then((res) => {
      set_data(res);
    });
  }, []);

  return (
    <Grid container className={style.root}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        {data.map((item: Result, i) => {
          return (
            <Zoom key={i} in timeout={i * 150}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                  item={item}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  set_data={set_data}
                />
              </Grid>
            </Zoom>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Layout;
