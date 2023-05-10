import React from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";

export const useTipoFactoresFetch = (idPlataforma?: number) => {
    const { data, status, error } = useQuery(["tipoFactores", idPlataforma],
        () => idPlataforma !== undefined ? productosApi.getTipoFactores(idPlataforma) : null,
        { enabled: idPlataforma !== undefined });

    return [data, status, error] as const;
}