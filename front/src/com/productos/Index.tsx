import React from "react";
import {
  Button,
} from "@mui/material";
import { TipoPlataforma } from "./TipoPlataforma";
import { TipoFactores } from "./TipoFactores";
import { Productos } from "./Productos";
import { GridContainer, GridItem } from "../common/GridCommon";

export function Index() {
  const [idPlataforma, setIdPlataforma] = React.useState<number>();
  const [idFactores, setIdFactores] = React.useState<(number | undefined)[]>();
  const [deshabilitarNuevo, setDeshabilitarNuevo] = React.useState<boolean>(true);

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

  const handleProductoOnChange = (count: number) => {
    setDeshabilitarNuevo(count !== 0 || idPlataforma === undefined);
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
        <GridItem size="full">
          <Button variant="contained" disabled={deshabilitarNuevo}>Crear nuevo</Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem size="full">
          <Productos idPlataforma={idPlataforma} idFactores={idFactores} onChange={handleProductoOnChange} />
        </GridItem>
      </GridContainer>
    </>
  );
}