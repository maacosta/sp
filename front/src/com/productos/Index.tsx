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
  Typography
} from "@mui/material";
import { SelectCommon } from "../common/SelectCommon";
import { Plataforma } from "../../types/productos";
import { TipoPlataforma } from "./TipoPlataforma";
import { TipoFactores } from "./TipoFactores";
import { Productos } from "./Productos";
import { GridContainer } from "../common/GridCommon";

export function Index() {
  const [idPlataforma, setIdPlataforma] = React.useState<number>();
  const [idFactores, setIdFactores] = React.useState<(number | undefined)[]>();

  const handlePlataformaOnChange = (id?: number) => {
    setIdPlataforma(id);
  };

  const handleFactoresOnChange = (ids: (number | undefined)[], pos: number) => {
    if (idFactores === undefined) {
      setIdFactores(ids);
    } else {
      const v = [...idFactores];
      v[pos] = ids[pos];
      setIdFactores(v);
    }
  };

  const handleProductoOnSelection = (id: number) => {
    //setIdPlataforma(id);
  };

  return (
    <>
      <GridContainer>
        <TipoPlataforma valueSelected={idPlataforma} onChange={handlePlataformaOnChange} />
      </GridContainer>
      <GridContainer>
        <TipoFactores idPlataforma={idPlataforma} valuesSelected={idFactores} onChange={handleFactoresOnChange} />
      </GridContainer>
      <GridContainer>
          <Productos idFactores={idFactores} onSelection={handleProductoOnSelection} />
      </GridContainer>
    </>
  );
}