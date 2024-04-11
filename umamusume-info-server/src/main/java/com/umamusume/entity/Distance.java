package com.umamusume.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
public class Distance {
  @Id
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "short", nullable = false)
  private String _short;

  @Column(name = "mile", nullable = false)
  private String _mile;

  @Column(name = "medium", nullable = false)
  private String _medium;

  @Column(name = "long", nullable = false)
  private String _long;
}
