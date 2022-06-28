import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "100vh",
    padding: 24,
  },

  card: {
    boxShadow: "0px 6px 6px rgba(0,0,0,0.08)",
    color: "black",
    borderRadius: 6,
    padding: "24px 16px",
  },
}));
