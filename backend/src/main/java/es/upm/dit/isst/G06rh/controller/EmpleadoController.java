package es.upm.dit.isst.G06rh.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.G06rh.model.EMPLEADO;
import es.upm.dit.isst.G06rh.model.HORARIOS;
import es.upm.dit.isst.G06rh.repository.EmpleadoRepository;

@RestController
public class EmpleadoController {

    @Autowired
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
            empleado.setNombreCompleto(newEmpleado.getNombreCompleto());
            empleado.setNumeroTelefono(newEmpleado.getNumeroTelefono());
            empleado.setCorreoElectronico(newEmpleado.getCorreoElectronico());
            empleado.setPassword(newEmpleado.getPassword());
            empleado.setRec(newEmpleado.getRec());
            empleado.setDepartamento(newEmpleado.getDepartamento());
            empleado.setPuesto(newEmpleado.getPuesto());
            empleadoRepository.save(empleado);
            return ResponseEntity.ok().body(empleado);            
        }).orElse(new ResponseEntity<EMPLEADO>(HttpStatus.NOT_FOUND));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/empleadosv2/{id}")
    ResponseEntity<?> delete(@PathVariable Long id) {
    return empleadoRepository.findById(id).map(empleado -> {
        empleadoRepository.delete(empleado);
        return ResponseEntity.ok().build();
    }).orElse(ResponseEntity.notFound().build());
}

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/empleadosv2/{empleadoId}/horarios")
    public List<HORARIOS> obtenerHorariosDeEmpleado(@PathVariable Long empleadoId) {
        EMPLEADO empleado = empleadoRepository.findById(empleadoId).get();
        return empleado.getHorarios();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/empleadosv2/{empleadoId}/editarEmpleado")
    public List<HORARIOS> obtenerDatosDeEmpleado(@PathVariable Long empleadoId) {
        EMPLEADO empleado = empleadoRepository.findById(empleadoId).get();
        return empleado.getHorarios();
    }
}