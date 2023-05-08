package es.upm.dit.isst.G06rh;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.Optional;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import es.upm.dit.isst.G06rh.model.*;
import es.upm.dit.isst.G06rh.repository.*;

@SpringBootTest

    public class G06rhApplicationTest{

        @Autowired
        private EmpleadoRepository repo;
        
        @Test
        final void testEmpleado() {

            EMPLEADO empleado = new EMPLEADO();
            empleado.setId(1L);
            empleado.setCorreoElectronico("alumno@alumnos.upm.es");
            empleado.setRec(false);
            empleado.setPassword("password");
            empleado.setNumeroTelefono("999999999");
        
            repo.save(empleado);

            Optional<EMPLEADO> empleados = repo.findById(1L);
            assertEquals(empleados.get().getCorreoElectronico(), empleado.getCorreoElectronico());
            assertEquals(empleados.get().getNumeroTelefono(), "999999999");

            empleado.setNombreCompleto("Pedro Lópexx");

            repo.save(empleado);

            assertNotEquals(empleados.get().getRec(), false);

            repo.delete(empleado);

            empleados = repo.findById(1L);

            assertFalse(empleados.isPresent());


    }

    }

    


