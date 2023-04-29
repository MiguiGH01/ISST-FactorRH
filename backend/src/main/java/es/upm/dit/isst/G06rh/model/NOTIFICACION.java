package es.upm.dit.isst.G06rh.model;

import javax.persistence.*;


@Entity

public class NOTIFICACION {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String titulo; 
        private String descripcion; 

    public NOTIFICACION(Long id, String titulo, String descripcion){
        this.id = id;
        this.titulo = titulo; 
        this.descripcion = descripcion; 
    }

     public NOTIFICACION() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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