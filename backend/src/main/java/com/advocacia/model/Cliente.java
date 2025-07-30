package com.advocacia.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties; // Importação necessária
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "clientes")
// Adicionada para resolver o erro de lazy loading na serialização JSON.
// Ignora as propriedades internas do Hibernate que o Jackson não consegue
// processar.
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String email;

    private String cpfCnpj;

    private String telefone;

    private String endereco;

    @OneToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
