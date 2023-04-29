package es.upm.dit.isst.G06rh.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.time.*;


@Entity
public class NOMINA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double salario; 
    private LocalDateTime fechaEmision; 
    @Lob
    byte[] archivo; 

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    @JsonBackReference
    private EMPLEADO empleado;

    public NOMINA(){   
    }

    public NOMINA(Double salario, LocalDateTime fechaEmision,byte[] archivo, EMPLEADO empleado){
        this.salario = salario; 
        this.fechaEmision = fechaEmision; 
        this.archivo = archivo; 
        this.empleado = empleado; 
        
    }

    public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Double getSalario(){
        return this.salario;
    }

    public void setSalario(Double salario){
        this.salario = salario; 
    }

    public LocalDateTime getFechaEmision(){
        return this.fechaEmision; 
    }

    public void setFechaEmision(LocalDateTime fechaEmision){
        this.fechaEmision = fechaEmision; 
    }

    public byte[] getArchivo(){
        return this.archivo;
    }

    public void setArchivo(byte[] archivo){
        this.archivo = archivo; 
    }
    
    public EMPLEADO getEmpleado() {
		return this.empleado;
	}

	public void setEmpleado(EMPLEADO empleado) {
		this.empleado = empleado;
	}
    
}
