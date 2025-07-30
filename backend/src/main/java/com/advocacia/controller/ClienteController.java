package com.advocacia.controller;

import com.advocacia.model.Cliente;
import com.advocacia.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @GetMapping
    public List<Cliente> listarTodos() {
        return repository.findAll();
    }

    @PostMapping
    public Cliente salvar(@RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    @GetMapping("/{id}")
    public Cliente buscarPorId(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Cliente atualizar(@PathVariable Long id, @RequestBody Cliente atualizado) {
        return repository.findById(id).map(cliente -> {
            cliente.setNome(atualizado.getNome());
            cliente.setEmail(atualizado.getEmail());
            cliente.setCpfCnpj(atualizado.getCpfCnpj());
            cliente.setTelefone(atualizado.getTelefone());
            cliente.setEndereco(atualizado.getEndereco());
            cliente.setUsuario(atualizado.getUsuario());
            return repository.save(cliente);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
