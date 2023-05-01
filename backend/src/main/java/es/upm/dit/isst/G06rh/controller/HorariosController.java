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
public class HorariosController {

    @Autowired
    private final  HorariosRepository horariosRepository;

    public HorariosController(HorariosRepository n)  {
        this.horariosRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/horarios")
    List<HORARIOS> readAll(){
        return (List<HORARIOS>) horariosRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/horarios")
    ResponseEntity<HORARIOS> create(@RequestBody HORARIOS newHorarios) throws URISyntaxException {
        HORARIOS res = horariosRepository.save(newHorarios);
        return ResponseEntity.created(new URI("/horarios/" + res.getId())).body(res);
    }
    

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/horarios/{id}")
    ResponseEntity<HORARIOS> update(@RequestBody HORARIOS newHorarios, @PathVariable long id) {
        return horariosRepository.findById(id).map(horario -> {
            horariosRepository.save(horario);
            return ResponseEntity.ok().body(horario);            
        }).orElse(new ResponseEntity<HORARIOS>(HttpStatus.NOT_FOUND));
    }


}