import React from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps,
    Typography
} from "@mui/material";

interface SelectCommonProps<T> {
    id: string;
    name: string;
    items?: T[];
    valueSelected?: any;
    error?: boolean;
    loading?: boolean;
    onChange: (event: SelectChangeEvent<string>) => void;
    itemValue: (item: T) => any;
    itemText: (item: T) => any;
}
export function SelectCommon<T>(props: SelectCommonProps<T>) {
    return (
        <FormControl fullWidth sx={{my:2}}>
            <InputLabel id={'lbl' + props.id}>{props.name}</InputLabel>
            <Select id={props.id} name={props.id}
                label={props.name} labelId={'lbl' + props.id}
                value={props.valueSelected}
                onChange={props.onChange}>
                {props.error && <MenuItem disabled={true}>...error!</MenuItem>}
                {props.loading && <MenuItem disabled={true}>...loading</MenuItem>}
                {props.items && props.items.map(e => <MenuItem key={props.itemValue(e)} value={props.itemValue(e)}>{props.itemText(e)}</MenuItem>)}
            </Select>
        </FormControl>
    );
}