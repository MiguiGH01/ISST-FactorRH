package es.upm.dit.isst.G06rh;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import es.upm.dit.isst.G06rh.model.*;
import es.upm.dit.isst.G06rh.repository.*;

@SpringBootApplication
public class G06rhApplication {

	public static void main(String[] args) {
		SpringApplication.run(G06rhApplication.class, args);
	}

	@Bean
	public CommandLineRunner initialHoraiosData(HorariosRepository horarioRepository, EmpleadoRepository empleadoRepository) {
		return (args) -> {	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 4, 10), LocalTime.of(8, 57, 42), LocalTime.of(13, 2, 12), LocalTime.of(9, 0, 0), LocalTime.of(13, 0, 0), empleadoRepository.findById(1L).get()
			));	
		};
	}

}
