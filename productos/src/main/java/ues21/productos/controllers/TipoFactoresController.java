package ues21.productos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ues21.productos.entities.*;
import ues21.productos.services.*;

@RestController
@RequestMapping("/tipofactores")
public class TipoFactoresController {
    
    private TipoFactorServ tipoFactorServ;

    @Autowired
    public TipoFactoresController(TipoFactorServ tipoFactorServ) {
        this.tipoFactorServ = tipoFactorServ;
    }
    
    @GetMapping("")
    public List<TipoFactor> getAll() {
        return tipoFactorServ.getAll();
    }

    @GetMapping("{idPlataforma}")
    public List<TipoFactor> getByPlataforma(@PathVariable Integer idPlataforma) {
        return tipoFactorServ.getByPlataforma(idPlataforma);
    }
}
