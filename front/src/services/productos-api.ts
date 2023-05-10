import {
  Factor,
  Plataforma,
  Producto,
  TipoFactor,
} from "../types/productos";

const baseApi = process.env.REACT_APP_API;

/*
Plataforma
*/


export async function getPlataformas() {
  const res = await fetch(baseApi + `/plataformas`);
  return res.json() as Promise<Plataforma[]>;
}

/*
Tipo Factores
*/

export async function getTipoFactores(idPlataforma: number) {
  const res = await fetch(baseApi + `/tipofactores/${idPlataforma}`);
  return res.json() as Promise<TipoFactor[]>;
}

/*
Factores
*/

export async function getFactores(idTipoFactores: number[]) {
  let params = '';
  idTipoFactores.forEach(e => params += `idTipoFactor=${e}&`);
  const res = await fetch(baseApi + `/factores?${params}`);
  return res.json() as Promise<Factor[]>;
}

/*
Productos
*/

export async function getProductoById(id: number) {
  const res = await fetch(baseApi + `/productos/${id}`);
  return res.json() as Promise<Producto>;
}

export async function getProductosByFactores(idFactores: (number | undefined)[]) {
  let params = '';
  idFactores.forEach(e => {
    if(e !== undefined)
      params += `idFactor=${e}&`;
  });
  const res = await fetch(baseApi + `/productos?${params}`);
  return res.json() as Promise<Producto[]>;
}

export async function updateProductoById(id: number, producto: Producto) {
  const res = await fetch(baseApi + `/productos/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(producto)
  });
  return res.json() as Promise<Producto>;
}