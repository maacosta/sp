import React from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import {
  SelectChangeEvent,
} from "@mui/material";
import { SelectCommon } from "../common/SelectCommon";
import { Plataforma } from "../../types/productos";
import { GridItem } from "../common/GridCommon";

interface TipoPlataformaProps {
  valueSelected?: number;
  onChange: (id?: number) => void;
}
export function TipoPlataforma(props: TipoPlataformaProps) {
  const { data: plataformas, status: plataformasStatus } = useQuery(["plataformas"], productosApi.getPlataformas);

  const handleOnChange = (event: SelectChangeEvent) => {
    if (event.target.value === '')
      props.onChange(undefined);
    else
      props.onChange(parseInt(event.target.value));
  };

  return (
    <GridItem>
      <SelectCommon<Plataforma>
        id={"lblTipoPlataforma"}
        name={"Tipo Plataforma"}
        items={plataformas}
        valueSelected={props.valueSelected ?? ''}
        error={plataformasStatus === "error"}
        loading={plataformasStatus === "loading"}
        onChange={handleOnChange}
        itemValue={(item: Plataforma) => item.id}
        itemText={(item: Plataforma) => item.nombre}
        emptyItem={true}
      />
    </GridItem>
  );
}