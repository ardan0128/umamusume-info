package com.umamusume.repository;

import com.umamusume.entity.Strategy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface StrategyRepository extends JpaRepository<Strategy, Long> {
}
