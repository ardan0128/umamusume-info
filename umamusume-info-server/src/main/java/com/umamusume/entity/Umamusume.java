package com.umamusume.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "title", "name" })
public class Umamusume {
  @Id
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "title", nullable = false)
  private String title;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "image", nullable = false)
  private String image;

  @Column(name = "is_released", nullable = false)
  private boolean isReleased;

  @Column(name = "is_displayed", nullable = false)
  private boolean isDisplayed;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "surface_id", referencedColumnName = "id")
  Surface surface;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "distance_id", referencedColumnName = "id")
  Distance distance;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "strategy_id", referencedColumnName = "id")
  Strategy strategy;
}
