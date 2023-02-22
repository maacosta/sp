import React from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import WorkIcon from '@mui/icons-material/Work';
import ErrorIcon from '@mui/icons-material/Error';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import EditIcon from '@mui/icons-material/Edit';
import {
  Avatar,
  FormControl,
  Grid,
  IconButton,
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
import { GridItem } from "../common/GridCommon";

interface ProductosProps {
  idFactores?: (number | undefined)[];
  onChange: (count: number) => void;
}
export function Productos(props: ProductosProps) {
  const { data: productos, status: productosStatus } = useQuery(["productos", props.idFactores],
    async () => {
      let r = null;
      if(props.idFactores !== undefined && props.idFactores.some(i => i !== undefined)) {
        r = await productosApi.getProductos(props.idFactores);
        props.onChange(r.length);
      }
      return r;
    },
    { enabled: props.idFactores !== undefined });

  return (
    <>
      <GridItem>
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
              <ListItem key={e.id} secondaryAction={
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
              }>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={e.nombre} secondary={e.factores.map(i => i.nombre).join(', ')} />
              </ListItem>
            )}
        </List>
      </GridItem>
    </>
  );
}