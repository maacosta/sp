import React, { useEffect } from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import {
  Button, TextField, Typography,
} from "@mui/material";
import { GridContainer, GridItem } from "../common/GridCommon";
import { useParams, useSearchParams } from "react-router-dom";
import { useTipoFactoresFetch } from "../hooks/useTipoFactoresFetch";
import { useProductosFetch } from "../hooks/useProductosFetch";
import { Producto } from "../../types/productos";
import moment from "moment";

export interface ProductoItem {
  nombre: string;
  vigenciaDesde: string;
  vigenciaHasta: string;
}
interface ProductoFormProps {
  producto: Producto;
  onChange: (data: ProductoItem) => void;
}
export function ProductoForm(props: ProductoFormProps) {
  const [p, setP] = React.useState<ProductoItem>({nombre: '', vigenciaDesde: '', vigenciaHasta: ''});

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pp = { ...p, [event.target.name]: event.target.value };
    setP(pp);
    props.onChange(pp);
  }

  useEffect(() => {
    const e = {...p};
    e.nombre = props.producto.nombre;
    e.vigenciaDesde = props.producto.vigenciaDesde;
    e.vigenciaHasta = props.producto.vigenciaHasta;
    setP(e);
  }, [props.producto]);

  return (
    <>
      <GridContainer>
        <GridItem size="full">
          <TextField id="nombre" name="nombre" fullWidth label="Nombre" variant="outlined" value={p.nombre} onChange={handlerOnChange} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem size="small">
          <TextField id="vigenciaDesde" name="vigenciaDesde" fullWidth label="Vigencia Desde" variant="outlined" value={p.vigenciaDesde} onChange={handlerOnChange} />
        </GridItem>
        <GridItem size="small">
          <TextField id="vigenciaHasta" name="vigenciaHasta" fullWidth label="Vigencia Hasta" variant="outlined" value={p.vigenciaHasta} onChange={handlerOnChange} />
        </GridItem>
      </GridContainer>
    </>
  );
}