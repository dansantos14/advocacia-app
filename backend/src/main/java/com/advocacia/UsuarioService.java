package com.advocacia;

import com.advocacia.model.Usuario;
import com.advocacia.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario buscarPorEmail(String email) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findByEmail(email);
        return optionalUsuario.orElse(null);
    }

    public Usuario autenticar(String login, String senha) {
        return usuarioRepository.findByLoginAndSenha(login, senha).orElse(null);
    }

}
