package com.umamusume.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.umamusume.entity.Distance;
import lombok.Data;

@Data
public class DistanceResponseDTO {

  private String _short;
  private String _mile;
  private String _medium;
  private String _long;

  public DistanceResponseDTO(Distance distance) {
    this._short = distance.get_short();
    this._mile = distance.get_mile();
    this._medium = distance.get_medium();
    this._long = distance.get_long();
  }
}
