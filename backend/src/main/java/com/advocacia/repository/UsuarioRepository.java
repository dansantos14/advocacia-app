package com.advocacia.repository;

import com.advocacia.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByLoginAndSenha(String login, String senha);

    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByLogin(String login); // ✅ Adicionado aqui
}
