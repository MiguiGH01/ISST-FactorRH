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
    private Long minutosTot;
    private Long minutosExt;
    private Long minutosPau;

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    @JsonBackReference
    private EMPLEADO empleado;

    // Constructor vacío
    public HORARIOS() {
    }

    public HORARIOS(LocalDate fecha, LocalTime horaEntrada, LocalTime horaSalida, Long minutosPau, EMPLEADO empleado) {
        this.fecha = fecha;
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.empleado = empleado;
        this.minutosPau = minutosPau;
        this.minutosTot = Duration.between(horaEntrada, horaSalida).toMinutes()- minutosPau;
        this.minutosExt = minutosTot - 480;
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

    public Long getMinutosTot() {
        return this.minutosTot;
    }

    public void setMinutosTot(Long minutosTot) {
        this.minutosTot = minutosTot;
    }

    public Long getMinutosExt() {
        return this.minutosExt;
    }

    public void setMinutosExt(Long minutosExt) {
        this.minutosExt = minutosExt;
    }

    public Long getMinutosPau() {
        return this.minutosPau;
    }

    public void setMinutosPau(Long minutosPau) {
        this.minutosPau = minutosPau;
    }


	public EMPLEADO getEmpleado() {
		return this.empleado;
	}

	public void setEmpleado(EMPLEADO empleado) {
		this.empleado = empleado;
	}




}
