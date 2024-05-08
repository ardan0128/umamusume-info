package com.umamusume.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class DistanceRequestDTO {

  @JsonProperty("short")
  private String _short;

  @JsonProperty("mile")
  private String _mile;

  @JsonProperty("medium")
  private String _medium;

  @JsonProperty("long")
  private String _long;
}
