import React from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import WorkIcon from '@mui/icons-material/Work';
import ErrorIcon from '@mui/icons-material/Error';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import moment from "moment";
import { Link } from "react-router-dom";

interface ProductosProps {
  idPlataforma?: number;
  idFactores?: (number | undefined)[];
  onChange: (count: number) => void;
}
export function Productos(props: ProductosProps) {
  const { data: productos, status: productosStatus } = useQuery(["productos", props.idFactores],
    async () => {
      let r = null;
      if (props.idFactores !== undefined && props.idFactores.some(i => i !== undefined)) {
        r = await productosApi.getProductosByFactores(props.idFactores);
        props.onChange(r.length);
      }
      return r;
    },
    { enabled: props.idFactores !== undefined });

  return (
    <>
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
              <IconButton component={Link} to={"/productos/edition/" + e.id + '?idPlataforma=' + props.idPlataforma} edge="end" aria-label="Modificar">
                <EditIcon />
              </IconButton>
            }>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={e.nombre} secondary={moment(e.vigenciaDesde).format('DD/MM/YY') + '-' + moment(e.vigenciaHasta).format('DD/MM/YY') + ' | ' + e.factores.map(i => i.nombre).join(', ')} />
            </ListItem>
          )}
      </List>
    </>
  );
}