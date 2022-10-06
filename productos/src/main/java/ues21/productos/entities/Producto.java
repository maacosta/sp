package ues21.productos.entities;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="Producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    @ManyToMany
    @JoinTable(
        name = "ProductoFactor", 
        joinColumns = @JoinColumn(name = "IdProducto"),
        inverseJoinColumns = @JoinColumn(name = "IdFactor"))
    private Set<Factor> factores;

    public Producto(){
    }
    public Producto(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public int getId() {
        return id;
    }
    public void setId(int id){
        this.id = id;
    }

    public String getNombre(){
        return nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public Set<Factor> getFactores(){
        return factores;
    }
}
