package ues21.productos.entities;

import java.util.List;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="TipoFactor")
public class TipoFactor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private int idPlataforma;
    @OneToMany(mappedBy = "tipoFactor")
    private List<FactorWithParent> factores;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String name){
        this.nombre = name;
    }

    public int getIdPlataforma() {
        return idPlataforma;
    }
    public void setIdPlataforma(int idPlataforma) {
        this.idPlataforma = idPlataforma;
    }
    public List<FactorWithParent> getFactores() {
        return factores;
    }
    public void setFactores(List<FactorWithParent> factores) {
        this.factores = factores;
    }

    
}
