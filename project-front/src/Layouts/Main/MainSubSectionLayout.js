import React from "react";
import { Grid } from "@material-ui/core";

const MainSubSectionLayout = (props) => {
    return (
        <Grid xs={12} style={{ backgroundColor: "purple" }}>
            {props.children}
        </Grid>
    );
};

export default MainSubSectionLayout;
