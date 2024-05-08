package com.umamusume.entity;

import com.umamusume.dto.StrategyRequestDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Strategy {

  @Id
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "runner", nullable = false)
  private String runner;

  @Column(name = "leader", nullable = false)
  private String leader;

  @Column(name = "betweener", nullable = false)
  private String betweener;

  @Column(name = "chaser", nullable = false)
  private String chaser;

  public Strategy(Long id, StrategyRequestDTO strategyRequestDTO) {
    this.id = id;
    this.runner = strategyRequestDTO.getRunner();
    this.leader = strategyRequestDTO.getLeader();
    this.betweener = strategyRequestDTO.getBetweener();
    this.chaser = strategyRequestDTO.getChaser();
  }
}
