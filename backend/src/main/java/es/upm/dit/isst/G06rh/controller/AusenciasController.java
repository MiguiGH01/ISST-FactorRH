package es.upm.dit.isst.G06rh.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.G06rh.model.*;
import es.upm.dit.isst.G06rh.repository.*;

@RestController
public class AusenciasController {

    @Autowired
    private final  AusenciasRepository ausenciasRepository;

    public AusenciasController(AusenciasRepository n)  {
        this.ausenciasRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/ausencias")
    List<AUSENCIAS> readAll(){
        return (List<AUSENCIAS>) ausenciasRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/ausencias")
    ResponseEntity<AUSENCIAS> create(@RequestBody AUSENCIAS newAusencias) throws URISyntaxException {
        AUSENCIAS res = ausenciasRepository.save(newAusencias);
        return ResponseEntity.created(new URI("/ausencias/" + res.getId())).body(res);
    }
    

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/ausencias/{id}")
    ResponseEntity<AUSENCIAS> update(@RequestBody AUSENCIAS newAusencias, @PathVariable long id) {
        return ausenciasRepository.findById(id).map(ausencia -> {
            ausenciasRepository.save(ausencia);
            return ResponseEntity.ok().body(ausencia);            
        }).orElse(new ResponseEntity<AUSENCIAS>(HttpStatus.NOT_FOUND));
    }


}