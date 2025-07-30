package com.advocacia.controller;

import com.advocacia.model.Processo;
import com.advocacia.repository.ProcessoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/processos")
@CrossOrigin(origins = "*")
public class ProcessoController {

    @Autowired
    private ProcessoRepository repository;

    @GetMapping
    public List<Processo> listarTodos() {
        return repository.findAll();
    }

    @PostMapping
    public Processo salvar(@RequestBody Processo processo) {
        return repository.save(processo);
    }

    @GetMapping("/{numero}")
    public Processo buscarPorNumero(@PathVariable String numero) {
        return repository.findById(numero).orElse(null);
    }

    @PutMapping("/{numero}")
    public Processo atualizar(@PathVariable String numero, @RequestBody Processo atualizado) {
        return repository.findById(numero).map(processo -> {
            processo.setTipo(atualizado.getTipo());
            processo.setEstagio(atualizado.getEstagio());
            processo.setDataEntrada(atualizado.getDataEntrada());
            processo.setDescricao(atualizado.getDescricao());
            processo.setCliente(atualizado.getCliente());
            return repository.save(processo);
        }).orElse(null);
    }

    @DeleteMapping("/{numero}")
    public void excluir(@PathVariable String numero) {
        repository.deleteById(numero);
    }
}
