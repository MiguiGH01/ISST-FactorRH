package es.upm.dit.isst.G07rh.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TRABAJADOR {
    @Id
    private String email; 
    private long contraseña;
    private String nombre; 
    private long ausencias;
    private long hora_entrada;
    private long hora_salida; 
    private boolean rrono; 

    public TRABAJADOR(String email, long contraseña, String nombre, long ausencias, long hora_entrada, long hora_salida,
    boolean rrono) {
        this.email = email; 
        this.contraseña = contraseña; 
        this.nombre = nombre; 
        this.ausencias = ausencias; 
        this.hora_entrada = hora_entrada; 
        this.hora_salida = hora_salida;
        this.rrono = rrono;  
    }

    public TRABAJADOR() {
        
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getContraseña() {
        return contraseña;
    }

    public void setContraseña(Long contraseña) {
        this.contraseña = contraseña;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Long getAusencias() {
        return ausencias;
    }

    public void setAusencias(Long ausencias) {
        this.ausencias = ausencias;
    }

    public Long getHora_entrada() {
        return hora_entrada;
    }

    public void setHora_entrada(Long hora_entrada) {
        this.hora_entrada = hora_entrada;
    }

    public Long getHora_salida() {
        return hora_salida;
    }

    public void setHora_salida(Long hora_salida) {
        this.hora_salida = hora_salida;
    }

    public Boolean getrrono() {
        return rrono;
    }

    public void setRrono(Boolean rrono) {
        this.rrono = rrono;
    }

}
