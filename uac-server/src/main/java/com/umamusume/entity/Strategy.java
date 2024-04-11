package com.uac.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
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
}
