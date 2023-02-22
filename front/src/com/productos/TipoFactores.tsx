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
import { SelectCommon } from "../common/SelectCommon";
import { Factor, Plataforma, TipoFactor } from "../../types/productos";

interface TipoFactoresProps {
  idPlataforma?: number;
  valuesSelected?: number[];
  onChange: (id: number[]) => void;
}
export function TipoFactores(props: TipoFactoresProps) {
  const { data: tipoFactores, status: tipoFactoresStatus } = useQuery(["tipoFactores", props.idPlataforma],
    () => props.idPlataforma !== undefined ? productosApi.getTipoFactores(props.idPlataforma) : null,
    { enabled: props.idPlataforma !== undefined });

  const handleOnChange = (event: SelectChangeEvent) => {
    if(tipoFactores === undefined || tipoFactores === null)
      return;
    
    const arr = new Array<number>(tipoFactores.length);
    const pos = parseInt(event.target.name.split('_')[1]);
    arr[pos] = parseInt(event.target.value);
    props.onChange(arr);
  };

  return (
    <>
      {tipoFactoresStatus === "error" && <Typography>...error!</Typography>}
      {tipoFactoresStatus === "loading" && <Typography>...loading</Typography>}
      {tipoFactoresStatus === "success" && tipoFactores !== null &&
        tipoFactores.map((e, i) =>
          <SelectCommon<Factor> key={i}
            id={"lblTipoFactor_" + i}
            name={e.nombre}
            items={e.factores}
            valueSelected={props.valuesSelected === undefined ? '' : props.valuesSelected[i] ?? ''}
            onChange={handleOnChange}
            itemValue={(item: Factor) => item.id}
            itemText={(item: Factor) => item.nombre}
          />
        )
      }

    </>
  );
}