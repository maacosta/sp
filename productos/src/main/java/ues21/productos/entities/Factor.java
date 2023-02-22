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

    public int getTipoFactor() {
        return idTipoFactor;
    }
    public void setTipoFactor(int idTipoFactor){
        this.idTipoFactor = idTipoFactor;
    }
}
