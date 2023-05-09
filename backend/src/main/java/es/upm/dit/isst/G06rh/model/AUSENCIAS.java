package es.upm.dit.isst.G06rh.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.time.*;

@Entity
public class AUSENCIAS {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private String titulo;
    private String descripcion;
    private Boolean aus;
    private Boolean vac;
    private Boolean baj;
    
    @ManyToOne
    @JoinColumn(name = "empleado_id")
    @JsonBackReference
    private EMPLEADO empleado;

    // Constructor vacío
    public AUSENCIAS() {
    }

    public AUSENCIAS(LocalDate fechaInicio, LocalDate fechaFin, String titulo, String descripcion, Boolean aus, Boolean baj, Boolean vac, Long naus, Long nbaj, Long nvac){

        this.fechaInicio = fechaInicio; 
        this.fechaFin = fechaFin;  
        this.titulo = titulo; 
        this.descripcion = descripcion; 
        this.aus = aus; 
        this.vac = vac; 
        this.baj = baj; 
    }






    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFechaInicio() {
        return this.fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaFin() {
        return this.fechaFin;
    }

    public void setFechaFin(LocalDate fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Boolean getAus() {
        return this.aus;
    }

    public void setAus(Boolean aus) {
        this.aus = aus;
    }

    public Boolean getVac() {
        return this.vac;
    }

    public void setVac(Boolean vac) {
        this.vac = vac;
    }

    public Boolean getBaj() {
        return this.baj;
    }

    public void setBaj(Boolean baj) {
        this.baj = baj;
    }

   
	public EMPLEADO getEmpleado() {
		return this.empleado;
	}

	public void setEmpleado(EMPLEADO empleado) {
		this.empleado = empleado;
	}

}
