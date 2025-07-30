package com.advocacia.repository;

import com.advocacia.model.Faturamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FaturamentoRepository extends JpaRepository<Faturamento, Long> {
}
