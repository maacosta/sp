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
import { Plataforma } from "../../types/productos";

interface TipoPlataformaProps {
  valueSelected?: number;
  onChange: (id: number) => void;
}
export function TipoPlataforma(props: TipoPlataformaProps) {
  const { data: plataformas, status: plataformasStatus } = useQuery(["plataformas"], productosApi.getPlataformas);

  const handleOnChange = (event: SelectChangeEvent) => {
    props.onChange(parseInt(event.target.value));
  };

  return (
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
    />
  );
}