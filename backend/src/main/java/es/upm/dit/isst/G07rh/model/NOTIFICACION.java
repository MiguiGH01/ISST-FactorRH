package es.upm.dit.isst.G07rh.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity

public class NOTIFICACION {
        @Id
        private long id; 
        private String titulo; 
        private String descripcion; 

    public NOTIFICACION(long id, String titulo, String descripcion){
        this.id = id; 
        this.titulo = titulo; 
        this.descripcion = descripcion; 
    }

     public NOTIFICACION() {
        
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
   
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


}