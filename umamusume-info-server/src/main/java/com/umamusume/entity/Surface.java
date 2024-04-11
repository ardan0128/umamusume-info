package com.umamusume.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
public class Surface {
  @Id
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "turf", nullable = false)
  private String turf;

  @Column(name = "dirt", nullable = false)
  private String dirt;
}
