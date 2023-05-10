package ues21.productos.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ues21.exceptions.FunctionalException;
import ues21.productos.dtos.ProductoToUpdateReq;
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

    public Producto getById(Integer id) throws FunctionalException {
        Optional<Producto> p = productoRepo.findById(id);
        if (!p.isPresent()) {
            throw new FunctionalException(String.format("No existe el producto con el id: '%d'", id));
        }
        return p.get();
    }

    public Producto update(Integer id, ProductoToUpdateReq producto) throws FunctionalException, ParseException {
        Optional<Producto> p = productoRepo.findById(id);
        if (!p.isPresent()) {
            throw new FunctionalException(String.format("No existe el producto con el id: '%d'", id));
        }

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Date vd = sdf.parse(producto.getVigenciaDesde());
        Date vh = sdf.parse(producto.getVigenciaHasta());

        Producto pp = p.get();

        pp.setNombre(producto.getNombre());
        pp.setVigenciaDesde(vd);
        pp.setVigenciaHasta(vh);

        return pp;
    }
}
