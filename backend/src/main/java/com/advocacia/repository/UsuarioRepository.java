package com.advocacia.repository;

import com.advocacia.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByLogin(String login);

    Usuario findByEmail(String email);
}
