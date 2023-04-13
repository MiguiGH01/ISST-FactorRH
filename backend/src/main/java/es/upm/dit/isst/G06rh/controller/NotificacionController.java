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

import es.upm.dit.isst.G06rh.model.NOTIFICACION;
import es.upm.dit.isst.G06rh.repository.NotificacionRepository;

@RestController

public class NotificacionController {
    private final  NotificacionRepository notificacionRepository;
     public NotificacionController(NotificacionRepository n)  {
        this.notificacionRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/notificaciones")
    List<NOTIFICACION> readAll(){
        return (List<NOTIFICACION>) notificacionRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/notificaciones")
    ResponseEntity<NOTIFICACION> create(@RequestBody NOTIFICACION newNotificacion) throws URISyntaxException {
        NOTIFICACION res = notificacionRepository.save(newNotificacion);
        return ResponseEntity.created(new URI("/empleados/" + res.getId())).body(res);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/notificaciones/{id}")
    ResponseEntity<NOTIFICACION> update(@RequestBody NOTIFICACION newNotificacion, @PathVariable long id) {
        return notificacionRepository.findById(id).map(notificacion -> {
            notificacionRepository.save(notificacion);
            return ResponseEntity.ok().body(notificacion);            
        }).orElse(new ResponseEntity<NOTIFICACION>(HttpStatus.NOT_FOUND));
    }
}