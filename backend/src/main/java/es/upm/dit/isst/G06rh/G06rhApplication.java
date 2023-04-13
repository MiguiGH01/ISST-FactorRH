package es.upm.dit.isst.G06rh;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import es.upm.dit.isst.G06rh.model.*;
import es.upm.dit.isst.G06rh.repository.*;

@SpringBootApplication
public class G06rhApplication {

	public static void main(String[] args) {
		SpringApplication.run(G06rhApplication.class, args);
	}

	@Bean
	public CommandLineRunner initialTrabajadorData(TrabajadorRepository trabajadorRepository) {
		return (args) -> {
			trabajadorRepository.save(new TRABAJADOR(
				"admin@gmail.com", 0, "Admin", 0, "9:00", "15:00", true,0,0,15,12));
			trabajadorRepository.save(new TRABAJADOR(
				"trabajador1@gmail.com", 0, "Trabajador1", 0, "9:00", "14:00", false,0,0,15,12));	
			trabajadorRepository.save(new TRABAJADOR(
				"trabajador2@gmail.com", 0, "Trabajador2", 0, "9:00", "14:00", false,0,0,15,12));	
			trabajadorRepository.save(new TRABAJADOR(
				"usuario@gmail.com", 0, "Usuario 1", 0, "8:30", "15:30", true,0,0,15,12));
			trabajadorRepository.save(new TRABAJADOR(
				"usuario2@gmail.com", 0, "Usuario 2", 0, "8:30", "14:00", true,0,0,15,12));
				trabajadorRepository.save(new TRABAJADOR(
					"pepos@gmail.com", 0, "Pepos", 0, "9:00", "16:00", true,0,0,15,12));			
		};
	}

	@Bean 
	public CommandLineRunner initialNotificacionData(NotificacionRepository notificacionRepository) {
		return (args) ->{
			notificacionRepository.save(new NOTIFICACION(
					null,"Reducción de horario ","A partir del día 1 de junio, el horario pasará a ser reducido. Permanecerá así hasta el día 1 de septiembre"
			));
			notificacionRepository.save(new NOTIFICACION(
					null,"Recordatorio de días festivo ","Los días 1, 2 y 15 de mayo la oficina estará cerrada por ser festivo. "
			));
		};
	}

	@Bean
	public CommandLineRunner initialEmpleadoData(EmpleadoRepository empleadoRepository) {
		return (args) -> {
			empleadoRepository.save(new EMPLEADO(
				null, "Empleado1", "000000001", "empleado1@gmail.com", "0", "Ventas", "Ejecutivo", true
			));
			empleadoRepository.save(new EMPLEADO(
				null, "Empleado2", "000000002", "empleado2@gmail.com", "0", "Ventas", "Experto", false
			));
			empleadoRepository.save(new EMPLEADO(
				null, "Empleado3", "000000003", "empleado3@gmail.com", "0", "Data", "Experto", false
			));			
		};
	}

	@Bean
	public CommandLineRunner initialHoraiosData(HorariosRepository horarioRepository, EmpleadoRepository empleadoRepository) {
		return (args) -> {	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 10), LocalTime.of(9, 2, 22), LocalTime.of(13, 2, 12), LocalTime.of(9, 0, 0), LocalTime.of(13, 0, 0), empleadoRepository.findById(1L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 11), LocalTime.of(9, 1, 13), LocalTime.of(12, 56, 43), LocalTime.of(9, 0, 0), LocalTime.of(13, 0, 0), empleadoRepository.findById(1L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 12), LocalTime.of(9, 0, 23), LocalTime.of(13, 0, 21), LocalTime.of(9, 0, 0), LocalTime.of(13, 0, 0), empleadoRepository.findById(1L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 13), LocalTime.of(9, 3, 43), LocalTime.of(13, 4, 1), LocalTime.of(9, 0, 0), LocalTime.of(13, 0, 0), empleadoRepository.findById(1L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 14), LocalTime.of(9, 0, 45), LocalTime.of(13, 12, 19), LocalTime.of(9, 0, 0), LocalTime.of(13, 0, 0), empleadoRepository.findById(1L).get()
			));
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 12), LocalTime.of(9, 5, 12), LocalTime.of(12, 0, 12), LocalTime.of(9, 0, 0), LocalTime.of(12, 0, 0), empleadoRepository.findById(2L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 13), LocalTime.of(9, 1, 22), LocalTime.of(12, 4, 1), LocalTime.of(9, 0, 0), LocalTime.of(12, 0, 0), empleadoRepository.findById(2L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 12), LocalTime.of(10, 0, 12), LocalTime.of(14, 0, 12), LocalTime.of(10, 0, 0), LocalTime.of(14, 0, 0), empleadoRepository.findById(3L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 13), LocalTime.of(10, 1, 22), LocalTime.of(14, 4, 1), LocalTime.of(10, 0, 0), LocalTime.of(14, 0, 0), empleadoRepository.findById(3L).get()
			));	
		};
	}

}
