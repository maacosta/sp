package ues21.productos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ues21.productos.entities.*;

public interface ProductoRepo extends JpaRepository<Producto, Integer> {

    @Query("select p from Producto p join fetch p.factores f where p.id = :id")
    Producto getById(@Param("id") Integer id);

    @Query("select distinct p from Producto p join fetch p.factores f where f.id in :idFactores")
    List<Producto> getByIdFactores(@Param("idFactores") List<Integer> idFactores);

    @Query("select distinct p from Producto p join fetch p.factores where p.id in :idProductos")
    List<Producto> getByIds(@Param("idProductos") List<Integer> idProductos);
}
