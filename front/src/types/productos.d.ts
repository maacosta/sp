export interface Plataforma {
  id: number;
  nombre: string;
}

export interface TipoFactor {
  id: number;
  nombre: string;
  idPlataforma: number;
  factores: Factor[];
}

export interface Factor {
  id: number;
  nombre: string;
  idTipoFactor: number;
}

export interface Producto {
  id: number;
  nombre: string;
  factores: Factor[];
}