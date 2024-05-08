package com.umamusume.dto;

import java.time.LocalDate;
import lombok.Data;

@Data
public class UmamusumeRequestDTO {

  Long id;
  String title;
  String name;
  LocalDate releasedDate;
  boolean displayed;
  SurfaceRequestDTO surface;
  DistanceRequestDTO distance;
  StrategyRequestDTO strategy;
}
