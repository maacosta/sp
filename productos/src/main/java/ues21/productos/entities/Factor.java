package ues21.productos.entities;

import javax.persistence.*;

@Entity
@Table(name="Factor")
public class Factor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private int idTipoFactor;
    //@ManyToMany(mappedBy = "factores")
    //private Set<Producto> productos;

    public Factor(){
    }
    public Factor(int id, String nombre, int idTipoFactor) {
        this.id = id;
        this.nombre = nombre;
        this.idTipoFactor = idTipoFactor;
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

    public int getIdTipoFactor() {
        return idTipoFactor;
    }
    public void setIdTipoFactor(int idTipoFactor){
        this.idTipoFactor = idTipoFactor;
    }
}
