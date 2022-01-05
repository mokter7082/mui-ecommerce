import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    navbar:{
        backgroundColor: "#203040",
        "& a":{
            color:"#fff",
            marginLeft:10,
        },
    },
    main:{
        minHeight:"80vh"
    }
})
export default useStyle;