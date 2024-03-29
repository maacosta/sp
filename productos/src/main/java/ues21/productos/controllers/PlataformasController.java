package ues21.productos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ues21.productos.entities.*;
import ues21.productos.services.*;

@RestController
@RequestMapping("/plataformas")
public class PlataformasController {
    @Autowired
    private PlataformaServ plataformaServ;

    public PlataformasController() {
    }
    
    @GetMapping("")
    public List<Plataforma> getAll() {
        return plataformaServ.getAll();
    }
}
