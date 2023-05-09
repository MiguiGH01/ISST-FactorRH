package es.upm.dit.isst.G06rh.controller;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.Duration;
import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import es.upm.dit.isst.G06rh.model.AUSENCIAS;
import es.upm.dit.isst.G06rh.model.EMPLEADO;
import es.upm.dit.isst.G06rh.model.HORARIOS;
import es.upm.dit.isst.G06rh.model.NOMINA;
import es.upm.dit.isst.G06rh.repository.*;

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
    @GetMapping("/empleadosv2/{empleadoId}/ausencias")
    public List<AUSENCIAS> obtenerAusenciasDeEmpleado(@PathVariable Long empleadoId) {
        EMPLEADO empleado = empleadoRepository.findById(empleadoId).get();
        return empleado.getAusencias();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/empleadosv2/{empleadoId}/horarios")
    public ResponseEntity<HORARIOS> create(@RequestBody HORARIOS newHorarios, @PathVariable Long empleadoId) {
        EMPLEADO empleado = empleadoRepository.findById(empleadoId).get();
    
        // Agregar el nuevo horario al empleado
        newHorarios.setEmpleado(empleado);
        empleado.getHorarios().add(newHorarios);
    
        // Guardar el empleado actualizado en la base de datos
        empleadoRepository.save(empleado);
    
        return ResponseEntity.ok(newHorarios);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/empleadosv2/{empleadoId}/ausencias")
    public ResponseEntity<AUSENCIAS> create(@RequestBody AUSENCIAS newAusencia, @PathVariable Long empleadoId) {
        EMPLEADO empleado = empleadoRepository.findById(empleadoId).get();
    
        // Agregar el nuevo horario al empleado
        newAusencia.setEmpleado(empleado);
        empleado.getAusencias().add(newAusencia);
    
        // Guardar el empleado actualizado en la base de datos
        empleadoRepository.save(empleado);
    
        return ResponseEntity.ok(newAusencia);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/empleadosv2/{empleadoId}/nominas")
    public ResponseEntity<NOMINA> create(@RequestParam("file") MultipartFile file, @PathVariable Long empleadoId) {
        EMPLEADO empleado = empleadoRepository.findById(empleadoId).get();
            
        try {
            NOMINA nomina = new NOMINA();
            nomina.setArchivo(file.getBytes());
            nomina.setEmpleado(empleado);

            empleado.getNominas().add(nomina);
        
            // Guardar el empleado actualizado en la base de datos
            empleadoRepository.save(empleado);
    
            return ResponseEntity.ok(nomina);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(null);
        }   
}
    


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/empleadosv2/{empleadoId}/editarEmpleado")
    public List<HORARIOS> obtenerDatosDeEmpleado(@PathVariable Long empleadoId) {
        EMPLEADO empleado = empleadoRepository.findById(empleadoId).get();
        return empleado.getHorarios();
    }
}