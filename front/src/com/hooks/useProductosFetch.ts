import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as productosApi from "../../services/productos-api";
import { Producto } from "../../types/productos";
import { ApiResponse } from "../../types/apiData";
import moment from "moment";

export const useProductosFetch = (id?: number) => {
    const { data, status, error } = useQuery(["producto", id],
        () => id !== undefined ? productosApi.getProductoById(id) : null,
        { enabled: id !== undefined });

    return [data, status, error] as const;
}

export function useProductoFetch(id?: number): ApiResponse<Producto> {
    const [data, setData] = useState<Producto | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (id !== undefined) {
            setIsLoading(true);
            setError(null);
            productosApi.getProductoById(id)
                .then(d => {
                    d.vigenciaDesde = moment(d.vigenciaDesde).format('DD/MM/YYYY');
                    d.vigenciaHasta = moment(d.vigenciaHasta).format('DD/MM/YYYY');
                    setData(d);
                })
                .catch(e => {
                    setError(e);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [id]);

    return { data, isLoading, error };
}
