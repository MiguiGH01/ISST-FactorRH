package es.upm.dit.isst.G07rh;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import es.upm.dit.isst.G07rh.model.TRABAJADOR;
import es.upm.dit.isst.G07rh.repository.TrabajadorRepository;



@SpringBootApplication
public class G07rhApplication {

	public static void main(String[] args) {
		SpringApplication.run(G07rhApplication.class, args);
	}

	@Bean
	public CommandLineRunner initialTrabajadorData(TrabajadorRepository trabajadorRepository) {
		return (args) -> {
			trabajadorRepository.save(new TRABAJADOR(
				"admin@gmail.com", 0, "Admin", 0, 0, 0, true,0,0,15,12));
				trabajadorRepository.save(new TRABAJADOR(
				"trabajador1@gmail.com", 0, "Trabajador1", 0, 0, 0, false,0,0,15,12));	
				trabajadorRepository.save(new TRABAJADOR(
				"trabajador2@gmail.com", 0, "Trabajador2", 0, 0, 0, false,0,0,15,12));	
					trabajadorRepository.save(new TRABAJADOR(
				"usuario", 0, "1234", 0, 0, 0, true,0,0,15,12));		
		};
	}

}
