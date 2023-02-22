import React from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
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
    emptyItem?: boolean;
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
                {props.emptyItem && props.emptyItem === true && <MenuItem key={0} value={""}> - </MenuItem>}
                {props.items && props.items.map(e => <MenuItem key={props.itemValue(e)} value={props.itemValue(e)}>{props.itemText(e)}</MenuItem>)}
            </Select>
        </FormControl>
    );
}