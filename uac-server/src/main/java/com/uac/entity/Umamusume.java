package com.uac.entity;

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

  @OneToOne(fetch = FetchType.LAZY)
  Surface surface;

  @OneToOne(fetch = FetchType.LAZY)
  Distance distance;

  @OneToOne(fetch = FetchType.LAZY)
  Strategy strategy;
}
