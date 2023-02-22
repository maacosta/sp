import React from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import WorkIcon from '@mui/icons-material/Work';
import ErrorIcon from '@mui/icons-material/Error';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import {
  Avatar,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  Typography
} from "@mui/material";
import { SelectCommon } from "../common/SelectCommon";
import { Plataforma } from "../../types/productos";

interface ProductosProps {
  idFactores?: number[];
  valueSelected?: number;
  onChange: (id: number) => void;
}
export function Productos(props: ProductosProps) {
  const { data: productos, status: productosStatus } = useQuery(["productos", props.idFactores],
    () => props.idFactores !== undefined ? productosApi.getProductos(props.idFactores) : null,
    { enabled: props.idFactores !== undefined });

  const handleOnChange = (event: SelectChangeEvent) => {
    props.onChange(parseInt(event.target.value));
  };

  return (
    <List sx={{ width: '100%' }}>
      {productosStatus === "error" &&
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ErrorIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="...error!" />
        </ListItem>}
      {productosStatus === "loading" &&
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FindReplaceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="...loading" />
        </ListItem>
      }
      {productosStatus === "success" && productos !== null &&
        productos.map((e, i) =>
          <ListItem key={e.id}>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={e.nombre} secondary={e.factores.map(i => i.nombre).join(', ')} />
          </ListItem>
        )}
    </List>
  );
}