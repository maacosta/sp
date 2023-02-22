package ues21.productos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ues21.productos.entities.*;
import ues21.productos.services.*;

@RestController
@RequestMapping("/factores")
public class FactoresController {
    @Autowired
    private FactorServ factorServ;

    public FactoresController() {
    }
    
    @GetMapping("")
    public List<Factor> getFiltered(@RequestParam(name = "idTipoFactor") List<Integer> idTipoFactores) {
        return factorServ.getFiltered(idTipoFactores);
    }
}
