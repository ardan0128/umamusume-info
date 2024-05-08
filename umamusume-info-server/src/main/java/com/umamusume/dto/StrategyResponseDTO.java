package com.umamusume.dto;

import com.umamusume.entity.Strategy;
import lombok.Data;

@Data
public class StrategyResponseDTO {

  private String runner;
  private String leader;
  private String betweener;
  private String chaser;

  public StrategyResponseDTO(Strategy strategy) {
    this.runner = strategy.getRunner();
    this.leader = strategy.getLeader();
    this.betweener = strategy.getBetweener();
    this.chaser = strategy.getChaser();
  }
}
