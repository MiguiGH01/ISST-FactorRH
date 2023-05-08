package es.upm.dit.isst.G06rh.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.G06rh.model.TRABAJADOR;
import es.upm.dit.isst.G06rh.repository.TrabajadorRepository;

@RestController
public class TrabajadorController {
    private final TrabajadorRepository trabajadorRepository;
    public TrabajadorController(TrabajadorRepository n)  {
        this.trabajadorRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/empleados")
    List<TRABAJADOR> readAll(){
        return (List<TRABAJADOR>) trabajadorRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/empleados")
    ResponseEntity<TRABAJADOR> create(@RequestBody TRABAJADOR newTrabajador) throws URISyntaxException {
        TRABAJADOR res = trabajadorRepository.save(newTrabajador);
        return ResponseEntity.created(new URI("/empleados/" + res.getEmail())).body(res);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/empleados/{email}")
    ResponseEntity<TRABAJADOR> update(@RequestBody TRABAJADOR newTrabajador, @PathVariable String email) {
        return trabajadorRepository.findById(email).map(trabajador -> {
            trabajadorRepository.save(trabajador);
            return ResponseEntity.ok().body(trabajador);            
        }).orElse(new ResponseEntity<TRABAJADOR>(HttpStatus.NOT_FOUND));
    }

}
