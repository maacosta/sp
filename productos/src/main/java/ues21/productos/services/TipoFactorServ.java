package ues21.productos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ues21.productos.entities.TipoFactor;
import ues21.productos.repositories.TipoFactorRepo;

@Service
@Transactional
public class TipoFactorServ {
    @Autowired
    private TipoFactorRepo tipoFactorRepo;

    public TipoFactorServ() {
    }
    
    public List<TipoFactor> getFiltered(Integer idPlataforma) {
        return tipoFactorRepo.getFiltered(idPlataforma);
    }
}
