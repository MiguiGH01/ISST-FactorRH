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
				"migui", 0, "sad", 0, 0, 0, false));		
		};
	}

}
