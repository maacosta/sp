package ues21.productos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ues21.productos.entities.Plataforma;
import ues21.productos.repositories.PlataformaRepo;

@Service
@Transactional
public class PlataformaServ {
    @Autowired
    private PlataformaRepo plataformaRepo;

    public PlataformaServ() {
        super();
    }
    
    public List<Plataforma> getAll() {
        return plataformaRepo.findAll();
    }
}
