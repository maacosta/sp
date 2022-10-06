package ues21.productos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ues21.productos.entities.*;
import ues21.productos.services.*;

@RestController
@RequestMapping("/plataformas")
public class PlataformaController {
    @Autowired
    private PlataformaServ plataformaServ;

    public PlataformaController() {
        super();
    }
    
    @GetMapping("")
    public List<Plataforma> getAll() {
        return plataformaServ.getAll();
    }
}
