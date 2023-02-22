package ues21.productos.entities;

import javax.persistence.*;

@Entity
@Table(name="Plataforma")
public class Plataforma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;

    public Plataforma(){
    }

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
}
