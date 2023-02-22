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

interface GridContainerProps {
  children?: React.ReactNode;
} 
function GridContainer(props: GridContainerProps) {
  return (
    <Grid container direction="row" alignItems="start" justifyContent="flex-start" spacing={2}>
      {props.children}
    </Grid>
  );
}

interface GridItemProps {
  children?: React.ReactNode;
} 
function GridItem(props: GridItemProps) {
  return (
    <Grid item sm={12} md={6} lg={4}>
      {props.children}
    </Grid>
  );
}

export function Index() {
  const [idPlataforma, setIdPlataforma] = React.useState<number>();
  const [idFactores, setIdFactores] = React.useState<number[]>();

  const handlePlataformaOnChange = (id: number) => {
    setIdPlataforma(id);
  };

  const handleFactoresOnChange = (ids: number[]) => {
    if(idFactores === undefined) {
      setIdFactores(ids);
    } else {
      const v = [...idFactores];
      const pos = ids.findIndex(e => e !== undefined);
      v[pos] = ids[pos];
      setIdFactores(v);  
    }
  };

  const handleProductoOnChange = (id: number) => {
    //setIdPlataforma(id);
  };

  return (
    <>
      <GridContainer>
        <GridItem>
          <TipoPlataforma valueSelected={idPlataforma} onChange={handlePlataformaOnChange} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <TipoFactores idPlataforma={idPlataforma} valuesSelected={idFactores} onChange={handleFactoresOnChange} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <Productos idFactores={idFactores} onChange={handleProductoOnChange} />
        </GridItem>
      </GridContainer>
    </>
  );
}