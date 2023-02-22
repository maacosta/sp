package ues21.productos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ues21.productos.entities.*;

public interface FactorRepo extends JpaRepository<Factor, Integer> {
    @Query("select f from Factor f where f.idTipoFactor in :idTipoFactores")
    List<Factor> getFiltered(@Param("idTipoFactores") List<Integer> idTipoFactores);
}
