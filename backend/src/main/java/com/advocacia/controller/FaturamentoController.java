package com.advocacia.controller;

import com.advocacia.model.Faturamento;
import com.advocacia.repository.FaturamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/faturamentos")
@CrossOrigin(origins = "*")
public class FaturamentoController {

    @Autowired
    private FaturamentoRepository repository;

    @GetMapping
    public List<Faturamento> listarTodos() {
        return repository.findAll();
    }

    @PostMapping
    public Faturamento salvar(@RequestBody Faturamento faturamento) {
        return repository.save(faturamento);
    }

    @GetMapping("/{id}")
    public Faturamento buscarPorId(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Faturamento atualizar(@PathVariable Long id, @RequestBody Faturamento atualizado) {
        return repository.findById(id).map(f -> {
            f.setDescricao(atualizado.getDescricao());
            f.setValor(atualizado.getValor());
            return repository.save(f);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
