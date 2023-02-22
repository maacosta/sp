import {
  Factor,
  Plataforma,
  Producto,
  TipoFactor,
} from "../types/productos";

const baseApi = process.env.REACT_APP_API;

export async function getPlataformas() {
  const res = await fetch(baseApi + `/plataformas`);
  return res.json() as Promise<Plataforma[]>;
}

export async function getTipoFactores(idPlataforma: number) {
  const res = await fetch(baseApi + `/tipofactores/${idPlataforma}`);
  return res.json() as Promise<TipoFactor[]>;
}

export async function getProductos(idFactores: number[]) {
  let params = '';
  idFactores.forEach(e => {
    if(e !== undefined)
      params += `idFactor=${e}&`;
  });
  const res = await fetch(baseApi + `/productos?${params}`);
  return res.json() as Promise<Producto[]>;
}

export async function getFactores(idTipoFactores: number[]) {
  let params = '';
  idTipoFactores.forEach(e => params += `idTipoFactor=${e}&`);
  const res = await fetch(baseApi + `/factores?${params}`);
  return res.json() as Promise<Factor[]>;
}