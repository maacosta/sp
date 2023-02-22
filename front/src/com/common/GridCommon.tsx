import React from "react";
import {
    Grid,
} from "@mui/material";

interface GridContainerProps {
    children?: React.ReactNode;
}
export function GridContainer(props: GridContainerProps) {
    return (
        <Grid container direction="row" alignItems="start" justifyContent="flex-start" spacing={2}>
            {props.children}
        </Grid>
    );
}

interface GridItemProps {
    children?: React.ReactNode;
}
export function GridItem(props: GridItemProps) {
    return (
        <Grid item sm={12} md={6} lg={4}>
            {props.children}
        </Grid>
    );
}