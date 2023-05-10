import React from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import {
  SelectChangeEvent,
  Typography
} from "@mui/material";
import { SelectCommon } from "../common/SelectCommon";
import { Factor, Plataforma, TipoFactor } from "../../types/productos";
import { GridItem } from "../common/GridCommon";
import { useTipoFactoresFetch } from "../hooks/useTipoFactoresFetch";

interface TipoFactoresProps {
  idPlataforma?: number;
  valuesSelected?: (number | undefined)[];
  onChange: (ids: (number | undefined)[], pos: number) => void;
}
export function TipoFactores(props: TipoFactoresProps) {
  const [ data, status, error ] = useTipoFactoresFetch(props.idPlataforma);

  const handleOnChange = (event: SelectChangeEvent) => {
    if (data === undefined || data === null)
      return;

    const arr = new Array<number | undefined>(data.length);
    const pos = parseInt(event.target.name.split('_')[1]);
    arr[pos] = event.target.value === '' ? undefined : parseInt(event.target.value);
    props.onChange(arr, pos);
  };

  return (
    <>
      {status === "error" && <Typography>{'ERROR: ' + error}</Typography>}
      {status === "loading" && <Typography>...loading</Typography>}
      {status === "success" &&
        data?.map((e, i) =>
          <GridItem size="small" key={i}>
            <SelectCommon<Factor> 
              id={"lblTipoFactor_" + i}
              name={e.nombre}
              items={e.factores}
              valueSelected={props.valuesSelected === undefined ? '' : props.valuesSelected[i] ?? ''}
              onChange={handleOnChange}
              itemValue={(item: Factor) => item.id}
              itemText={(item: Factor) => item.nombre}
              emptyItem={true}
            />
          </GridItem>
        )
      }

    </>
  );
}