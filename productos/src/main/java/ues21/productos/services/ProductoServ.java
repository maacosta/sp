package ues21.productos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ues21.productos.entities.*;
import ues21.productos.repositories.*;

@Service
@Transactional
public class ProductoServ {
    @Autowired
    private ProductoRepo productoRepo;

    public ProductoServ() {
        super();
    }
    
    public List<Producto> getAll() {
        return productoRepo.findAll();
    }

    public List<Producto> getFiltered(List<Integer> idFactores) {
        return productoRepo.getFiltered(idFactores);
    }
}
