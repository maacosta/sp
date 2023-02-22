package ues21.productos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ues21.productos.entities.*;
import ues21.productos.services.*;

@RestController
@RequestMapping("/tipofactores")
public class TipoFactoresController {
    @Autowired
    private TipoFactorServ tipoFactorServ;

    public TipoFactoresController() {
    }
    
    @GetMapping("{idPlataforma}")
    public List<TipoFactor> getFiltered(@PathVariable Integer idPlataforma) {
        return tipoFactorServ.getFiltered(idPlataforma);
    }
}
