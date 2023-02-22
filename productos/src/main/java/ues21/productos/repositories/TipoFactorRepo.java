package ues21.productos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ues21.productos.entities.*;

public interface TipoFactorRepo extends JpaRepository<TipoFactor, Integer> {
  @Query("select tf from TipoFactor tf where tf.idPlataforma = :idPlataforma")
  List<TipoFactor> getFiltered(@Param("idPlataforma") Integer idPlataforma);
}
