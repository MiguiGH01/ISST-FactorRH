package es.upm.dit.isst.G07rh.controller;

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

import es.upm.dit.isst.G07rh.model.EMPLEADO;
import es.upm.dit.isst.G07rh.repository.EmpleadoRepository;

@RestController
public class EmpleadoController {
    private final  EmpleadoRepository empleadoRepository;
     public EmpleadoController(EmpleadoRepository n)  {
        this.empleadoRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/empleadosv2")
    List<EMPLEADO> readAll(){
        return (List<EMPLEADO>) empleadoRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/empleadosv2")
    ResponseEntity<EMPLEADO> create(@RequestBody EMPLEADO newEmpleado) throws URISyntaxException {
        EMPLEADO res = empleadoRepository.save(newEmpleado);
        return ResponseEntity.created(new URI("/empleadosv2/" + res.getId())).body(res);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/empleadosv2/{id}")
    ResponseEntity<EMPLEADO> update(@RequestBody EMPLEADO newEmpleado, @PathVariable long id) {
        return empleadoRepository.findById(id).map(empleado -> {
            empleadoRepository.save(empleado);
            return ResponseEntity.ok().body(empleado);            
        }).orElse(new ResponseEntity<EMPLEADO>(HttpStatus.NOT_FOUND));
    }
}