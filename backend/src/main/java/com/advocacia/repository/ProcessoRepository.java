package com.advocacia.repository;

import com.advocacia.model.Processo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProcessoRepository extends JpaRepository<Processo, String> {
}
