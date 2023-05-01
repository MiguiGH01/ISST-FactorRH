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
				LocalDate.of(2023, 5, 4), LocalTime.of(7, 57, 0), LocalTime.of(17, 2, 0), 20L , empleadoRepository.findById(1L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 5, 5), LocalTime.of(8, 05, 0), LocalTime.of(17, 1, 0), 45L , empleadoRepository.findById(1L).get()
			));	
			horarioRepository.save(new HORARIOS(
				LocalDate.of(2023, 5, 8), LocalTime.of(8, 14, 0), LocalTime.of(17, 56, 0), 30L , empleadoRepository.findById(1L).get()
			));	
		};
	}

}
