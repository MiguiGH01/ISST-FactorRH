package es.upm.dit.isst.G06rh.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.time.*;

@Entity
public class HORARIOS {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate fecha; 
    private LocalTime horaEntrada;
    private LocalTime horaSalida;
    private LocalTime horaDefEntrada;
    private LocalTime horaDefSalida;

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    @JsonBackReference
    private EMPLEADO empleado;

    // Constructor vacío
    public HORARIOS() {
    }

    public HORARIOS(LocalDate fecha, LocalTime horaEntrada, LocalTime horaSalida, LocalTime horaDefEntrada, LocalTime horaDefSalida, EMPLEADO empleado) {
        this.fecha = fecha;
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.horaDefEntrada = horaDefEntrada;
        this.horaDefSalida = horaDefSalida;
        this.empleado = empleado;
    }
    
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getFecha() {
		return this.fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}

	public LocalTime getHoraEntrada() {
		return this.horaEntrada;
	}

	public void setHoraEntrada(LocalTime horaEntrada) {
		this.horaEntrada = horaEntrada;
	}

	public LocalTime getHoraSalida() {
		return this.horaSalida;
	}

	public void setHoraSalida(LocalTime horaSalida) {
		this.horaSalida = horaSalida;
	}

    public LocalTime getHoraDefEntrada() {
        return this.horaDefEntrada;
    }

    public void setHoraDefEntrada(LocalTime horaDefEntrada) {
        this.horaDefEntrada = horaDefEntrada;
    }

    public LocalTime getHoraDefSalida() {
        return this.horaDefSalida;
    }

    public void setHoraDefSalida(LocalTime horaDefSalida) {
        this.horaDefSalida = horaDefSalida;
    };
	public EMPLEADO getEmpleado() {
		return this.empleado;
	}

	public void setEmpleado(EMPLEADO empleado) {
		this.empleado = empleado;
	}




}
