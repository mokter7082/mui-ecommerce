import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    textDecoration: "none",
  },
  main: {
    minHeight: "80vh",
  },
  grow: {
    flexGrow: 1,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    textAlign: "center",
  },
});
export default useStyle;
