package ues21.productos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ues21.productos.entities.*;
import ues21.productos.services.*;

@RestController
@RequestMapping("/productos")
public class ProductosController {
    @Autowired
    private ProductoServ plataformaServ;

    public ProductosController() {
        super();
    }
    
    @GetMapping("")
    public List<Producto> getFiltered(@RequestParam(name = "idFactor", required = false) List<Integer> idFactores) {
        List<Producto> result = null;
        if(idFactores == null || idFactores.size() == 0) {
            result = plataformaServ.getAll();
        } else {
            result = plataformaServ.getFiltered(idFactores);
        }
        return result;
    }
}
