package es.upm.dit.isst.G06rh.controller;

import java.io.IOException;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.*;

import es.upm.dit.isst.G06rh.model.*;
import es.upm.dit.isst.G06rh.repository.*;

@RestController
public class NominaController {

    @Autowired
    private final  NominaRepository nominaRepository;

    public NominaController(NominaRepository n)  {
        this.nominaRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/nominas")
    List<NOMINA> readAll(){
        return (List<NOMINA>) nominaRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/nominas")
    ResponseEntity<NOMINA> create(@RequestBody NOMINA newNomina) throws URISyntaxException {
        NOMINA res = nominaRepository.save(newNomina);
        return ResponseEntity.created(new URI("/nominas/" + res.getId())).body(res);
    }
    

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/nominas/{id}")
    ResponseEntity<NOMINA> update(@RequestBody NOMINA newNomina, @PathVariable long id) {
        return nominaRepository.findById(id).map(nomina -> {
            nominaRepository.save(nomina);
            return ResponseEntity.ok().body(nomina);            
        }).orElse(new ResponseEntity<NOMINA>(HttpStatus.NOT_FOUND));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/nominas/upload-pdf/{idEmpleado}", method = RequestMethod.OPTIONS)
    public ResponseEntity handleOptions() {
        return ResponseEntity.ok()
            .header("Access-Control-Allow-Origin", "http://localhost:3000")
            .header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
            .header("Access-Control-Allow-Headers", "Content-Type")
            .build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/nominas/upload-pdf/{idEmpleado}")
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
    }
    
}

