package ues21.productos.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
    }
    
    public List<Producto> getAll() {
        return productoRepo.findAll();
    }

    public List<Producto> getFiltered(List<Integer> idFactores) {
        List<Producto> res = new ArrayList<>();
        
        List<Producto> all = productoRepo.findAll();
        for (Producto p : all) {
            if (p.getFactores().stream().map(i -> i.getId()).toList().containsAll(idFactores))
                res.add(p);
        }    
        
        return res;
    }
}
