package ues21.productos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ues21.productos.entities.*;

public interface PlataformaRepo extends JpaRepository<Plataforma, Integer> {
    
}
