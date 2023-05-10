import React from "react";
import {
    Grid,
} from "@mui/material";

interface GridContainerProps {
    children?: React.ReactNode;
}
export function GridContainer(props: GridContainerProps) {
    return (
        <Grid container direction="row" alignItems="start" justifyContent="flex-start" spacing={2} sx={{ p: 2 }}>
            {props.children}
        </Grid>
    );
}

interface GridItemProps {
    size: "small" | "full";
    children?: React.ReactNode;
}
export function GridItem(props: GridItemProps) {
    const ssm = props.size === "small" ? 12 : (props.size === "full" ? 12 : undefined);
    const smd = props.size === "small" ? 6 : (props.size === "full" ? 12 : undefined);
    const slg = props.size === "small" ? 4 : (props.size === "full" ? 6 : undefined);
    return (
        <Grid item sm={ssm} md={smd} lg={slg}>
            {props.children}
        </Grid>
    );
}