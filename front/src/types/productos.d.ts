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
  tipoFactor: number;
}

export interface Producto {
  id: number;
  nombre: string;
  vigenciaDesde: string;
  vigenciaHasta: string;
  factores: Factor[];
}