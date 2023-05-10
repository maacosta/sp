package ues21.productos.entities;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="Producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private Date vigenciaDesde;
    private Date vigenciaHasta;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "ProductoFactor", 
        joinColumns = @JoinColumn(name = "IdProducto"),
        inverseJoinColumns = @JoinColumn(name = "IdFactor"))
    private Set<Factor> factores;
}
