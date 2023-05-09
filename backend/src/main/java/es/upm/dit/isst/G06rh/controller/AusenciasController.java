package es.upm.dit.isst.G06rh.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;

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
    @RequestMapping(value = "/bajasyausencias/{id}", method = RequestMethod.OPTIONS)
    public ResponseEntity handleOptions() {
        return ResponseEntity.ok()
            .header("Access-Control-Allow-Origin", "http://localhost:3000")
            .header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
            .header("Access-Control-Allow-Headers", "Content-Type")
            .build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/bajasyausencias/{id}")
    ResponseEntity<AUSENCIAS> create(@PathVariable Long id, @RequestBody AUSENCIAS newAusencias) throws URISyntaxException {
      newAusencias.setId(id);
        AUSENCIAS res = ausenciasRepository.save(newAusencias);
        return ResponseEntity.created(new URI("/ausencias/" + res.getId())).body(res);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/ausencias/{id}")
    ResponseEntity<AUSENCIAS> read(@PathVariable long id) {
        Optional<AUSENCIAS> ausencia = ausenciasRepository.findById(id);
        return ausencia.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
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

/*
public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file, @PathVariable EMPLEADO idNomina) {
 try {
        //    byte[] pdfContent = file.getBytes();
          //  String base64PdfContent = Base64.getEncoder().encodeToString(pdfContent);
            NOMINA nomina = new NOMINA();
            nomina.setArchivo(file.getBytes());
            nomina.setEmpleado(idNomina);
            nominaRepository.save(nomina);
            return ResponseEntity.ok("PDF uploaded successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload PDF");
        }
    } */