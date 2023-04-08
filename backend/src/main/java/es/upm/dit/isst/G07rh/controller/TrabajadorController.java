package es.upm.dit.isst.G07rh.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.G07rh.model.TRABAJADOR;
import es.upm.dit.isst.G07rh.repository.TrabajadorRepository;

@RestController
public class TrabajadorController {
    private final TrabajadorRepository trabajadorRepository;
    public TrabajadorController(TrabajadorRepository n)  {
        this.trabajadorRepository = n;
    }

    @GetMapping("/empleados")
    List<TRABAJADOR> readAll(){
        return (List<TRABAJADOR>) trabajadorRepository.findAll();
    }

    @PostMapping("/empleados")
    ResponseEntity<TRABAJADOR> create(@RequestBody TRABAJADOR newTrabajador) throws URISyntaxException {
        TRABAJADOR res = trabajadorRepository.save(newTrabajador);
        return ResponseEntity.created(new URI("/empleados/" + res.getEmail())).body(res);
    }

}
