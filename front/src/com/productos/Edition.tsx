import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import {
  Button, TextField, Typography,
} from "@mui/material";
import { GridContainer, GridItem } from "../common/GridCommon";
import { useParams, useSearchParams } from "react-router-dom";
import { useTipoFactoresFetch } from "../hooks/useTipoFactoresFetch";
import { useProductoFetch } from "../hooks/useProductosFetch";
import { ProductoForm, ProductoItem } from "./ProductoForm";
import { Producto } from "../../types/productos";
import { ApiResponse } from "../../types/apiData";

export function Edition() {
  let { id } = useParams();
  const idHasValue = id !== undefined;
  const idValue = id !== undefined ? parseInt(id) : 0;

  const [searchParams] = useSearchParams();
  const idPlataforma = searchParams.get('idPlataforma');

  const {data, isLoading, error} = useProductoFetch(idValue);
  const [tipofactores] = useTipoFactoresFetch(idPlataforma !== null ? parseInt(idPlataforma) : undefined);

  const [producto, setProducto] = useState<Producto | null>(null);

  const productoOnChangeHandler = (data: ProductoItem) => {
    if (producto) {
      const p = { ...producto, nombre: data.nombre, vigenciaDesde: data.vigenciaDesde, vigenciaHasta: data.vigenciaHasta };
      setProducto(p);
    }
  }

  const handlerOnClick = () => {
    if (idHasValue && producto) {
      productosApi.updateProductoById(idValue, producto);
    }
  }

  const getFactores = () => {
    if (producto?.factores !== undefined && producto?.factores !== null) {
      let ff: { id: number, nombreTipofactor?: string, nombre: string }[] = [];
      producto.factores.forEach(f => {
        const tf = tipofactores?.find(tf => tf.id === f.tipoFactor);
        const ntf = tf?.nombre;
        ff.push({ id: f.id, nombreTipofactor: ntf, nombre: f.nombre });
      });
      return ff;
    }
    return undefined;
  }

  const factores = getFactores();

  useEffect(() => {
    setProducto(data);
  }, [data]);

  return (
    <>
      {error && <Typography>{'ERROR: ' + error}</Typography>}
      {isLoading && <Typography>...loading</Typography>}
      {producto && <ProductoForm producto={producto} onChange={productoOnChangeHandler} />}
      <GridContainer>
        <>
          {factores !== undefined &&
            factores.map(e => (
              <GridItem size="small" key={e.id}>
                <TextField id={"txt" + e.id} fullWidth disabled label={e.nombreTipofactor} variant="outlined" value={e.nombre}></TextField>
              </GridItem>
            ))
          }
        </>
      </GridContainer>
      <GridContainer>
        <GridItem size="full">
          <Button variant="contained" onClick={handlerOnClick}>Aceptar</Button>
        </GridItem>
      </GridContainer>
    </>
  );
}