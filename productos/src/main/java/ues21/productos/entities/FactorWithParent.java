package ues21.productos.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="Factor")
public class FactorWithParent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    @JsonBackReference
    @ManyToOne //(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "IdTipoFactor")
    private TipoFactor tipoFactor;

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

    public TipoFactor getTipoFactor() {
        return tipoFactor;
    }
    public void setTipoFactor(TipoFactor tipoFactor){
        this.tipoFactor = tipoFactor;
    }
}
