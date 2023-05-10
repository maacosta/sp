package ues21.productos.dtos;

import lombok.Data;

@Data
public class ProductoToUpdateReq {
    private String nombre;
    private String vigenciaDesde;
    private String vigenciaHasta;
}
