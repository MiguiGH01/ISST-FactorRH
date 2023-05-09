package es.upm.dit.isst.G06rh.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity
public class NOMINA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Lob
    byte[] archivo; 

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    @JsonBackReference
    private EMPLEADO empleado;

    public NOMINA(){   
    }

    public NOMINA(byte[] archivo, EMPLEADO empleado){
        this.archivo = archivo; 
        this.empleado = empleado; 
        
        
    }

    public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
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
