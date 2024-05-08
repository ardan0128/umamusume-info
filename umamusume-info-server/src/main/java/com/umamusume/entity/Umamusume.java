package com.umamusume.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "title", "name"})
public class Umamusume {

  @Id
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "title", nullable = false)
  private String title;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "released_date")
  private LocalDate releasedDate;

  @Column(name = "displayed", nullable = false)
  private boolean displayed;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "surface_id", referencedColumnName = "id")
  Surface surface;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "distance_id", referencedColumnName = "id")
  Distance distance;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "strategy_id", referencedColumnName = "id")
  Strategy strategy;

  public Umamusume(Long id, String title, String name, LocalDate releasedDate, boolean displayed, Surface surface, Distance distance, Strategy strategy){
    this.id = id;
    this.title = title;
    this.name = name;
    this.releasedDate = releasedDate;
    this.displayed = displayed;
    this.surface = surface;
    this.distance = distance;
    this.strategy = strategy;
  }
}
