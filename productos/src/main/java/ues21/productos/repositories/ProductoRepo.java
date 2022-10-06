package ues21.productos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ues21.productos.entities.*;

public interface ProductoRepo extends JpaRepository<Producto, Integer> {
    @Query("select distinct p from Producto p join fetch p.factores f where f.id in :idFactores")
    List<Producto> getFiltered(@Param("idFactores") List<Integer> idFactores);
}
