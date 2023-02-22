package ues21.productos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ues21.productos.entities.*;
import ues21.productos.repositories.*;

@Service
@Transactional
public class FactorServ {
    @Autowired
    private FactorRepo factorRepo;

    public FactorServ() {
    }
    
    public List<Factor> getFiltered(List<Integer> idTipoFactores) {
        return factorRepo.getFiltered(idTipoFactores);
    }
}
