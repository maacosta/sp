package ues21.productos.controllers;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ues21.exceptions.FunctionalException;
import ues21.productos.dtos.ProductoToUpdateReq;
import ues21.productos.entities.*;
import ues21.productos.services.*;

@RestController
@RequestMapping("/productos")
public class ProductosController {
    @Autowired
    private ProductoServ productoServ;

    public ProductosController() {
    }

    @GetMapping("{id}")
    public Producto getById(@PathVariable(name = "id") Integer id) throws FunctionalException {
        return productoServ.getById(id);
    }

    @GetMapping("")
    public List<Producto> getByFactores(@RequestParam(name = "idFactor", required = false) List<Integer> idFactores) {
        List<Producto> result = null;
        if(idFactores == null || idFactores.size() == 0) {
            result = productoServ.getAll();
        } else {
            result = productoServ.getFiltered(idFactores);
        }
        return result;
    }

    @PostMapping("{id}")
    public Producto updateById(@PathVariable(name = "id") Integer id, @RequestBody ProductoToUpdateReq producto) throws FunctionalException, ParseException {
        return productoServ.update(id, producto);
    }
}
