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
    private Long minutosTot;
    private Long minutosDef;
    private Long minutosExt;

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
        this.minutosDef = Duration.between(horaDefEntrada, horaDefSalida).getSeconds();
        this.minutosTot = Duration.between(horaEntrada, horaSalida).getSeconds();
        this.minutosExt = minutosTot - minutosDef;
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

    public Long getMinutosTot() {
        return this.minutosTot;
    }

    public void setMinutosTot(Long minutosTot) {
        this.minutosTot = minutosTot;
    }

    public Long getMinutosDef() {
        return this.minutosDef;
    }

    public void setMinutosDef(Long minutosDef) {
        this.minutosDef = minutosDef;
    }

    public Long getMinutosExt() {
        return this.minutosExt;
    }

    public void setMinutosExt(Long minutosExt) {
        this.minutosExt = minutosExt;
    }

	public EMPLEADO getEmpleado() {
		return this.empleado;
	}

	public void setEmpleado(EMPLEADO empleado) {
		this.empleado = empleado;
	}




}
