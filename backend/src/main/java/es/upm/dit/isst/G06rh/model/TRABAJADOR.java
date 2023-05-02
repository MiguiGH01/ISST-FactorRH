package es.upm.dit.isst.G06rh.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TRABAJADOR {
    @Id
    private String email; 
    private long contraseña;
    private String nombre; 
    private long ausencias;
    private String hora_entrada;
    private String hora_salida; 
    private boolean rrono; 
    private long telefono;
    private long nomina;
    private long bajas;
    private long vacaciones;

    

    public TRABAJADOR(String email, long contraseña, String nombre, long ausencias, String hora_entrada, String hora_salida,
    boolean rrono, long telefono, long nomina,long bajas, long vacaciones) {
        this.email = email; 
        this.contraseña = contraseña; 
        this.nombre = nombre; 
        this.ausencias = ausencias; 
        this.hora_entrada = hora_entrada; 
        this.hora_salida = hora_salida;
        this.rrono = rrono;  
        this.telefono = telefono; 
        this.nomina = nomina; 
        this.bajas = bajas;
        this.vacaciones = vacaciones; 
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

    public String getHora_entrada() {
        return hora_entrada;
    }

    public void setHora_entrada(String hora_entrada) {
        this.hora_entrada = hora_entrada;
    }

    public String getHora_salida() {
        return hora_salida;
    }

    public void setHora_salida(String hora_salida) {
        this.hora_salida = hora_salida;
    }

    public Boolean getrrono() {
        return rrono;
    }

    public void setRrono(Boolean rrono) {
        this.rrono = rrono;
    }

    public Long getTelefono() {
        return telefono;
    }

    public void setTelefono(Long telefono) {
        this.telefono = telefono;
    }

     public Long getNomina() {
        return nomina;
    }

    public void setNomina(Long nomina) {
        this.nomina = nomina;
    }

     public Long getBajas() {
        return bajas;
    }

    public void setBajas(Long bajas) {
        this.bajas = bajas;
    }

    public Long getVacaciones() {
        return vacaciones;
    }

    public void setVacaciones(Long vacaciones) {
        this.vacaciones = vacaciones;
    }
}
