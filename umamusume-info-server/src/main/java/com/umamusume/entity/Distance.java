package com.umamusume.entity;

import com.umamusume.dto.DistanceRequestDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
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

  public Distance(Long id, DistanceRequestDTO distanceRequestDTO){
    this.id = id;
    this._short = distanceRequestDTO.get_short();
    this._mile = distanceRequestDTO.get_mile();
    this._medium = distanceRequestDTO.get_medium();
    this._long = distanceRequestDTO.get_long();
  }
}
