package es.upm.dit.isst.G07rh;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



import es.upm.dit.isst.G07rh.model.*;
import es.upm.dit.isst.G07rh.repository.*;



@SpringBootApplication
public class G07rhApplication {

	public static void main(String[] args) {
		SpringApplication.run(G07rhApplication.class, args);
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
				"usuario@gmail.com", 0, "1234", 0, "8:30", "15:30", true,0,0,15,12));
			trabajadorRepository.save(new TRABAJADOR(
				"usuario2@gmail.com", 0, "2131", 0, "8:30", "14:00", true,0,0,15,12));
				trabajadorRepository.save(new TRABAJADOR(
					"2222@gmail.com", 0, "3333", 0, "9:00", "16:00", true,0,0,15,12));			
		};
	}

	@Bean 
	public CommandLineRunner initialNotificacionData(NotificacionRepository notificacionRepository) {
		return (args) ->{
			notificacionRepository.save(new NOTIFICACION(
					1,"Reducción de horario ","A partir del día 1 de junio, el horario pasará a ser reducido. Permanecerá así hasta el día 1 de septiembre"
			));
			notificacionRepository.save(new NOTIFICACION(
					2,"Recordatorio de días festivo ","Los días 1, 2 y 15 de mayo la oficina estará cerrada por ser festivo. "
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

}
