package com.umamusume.dto;

import com.umamusume.entity.Distance;
import com.umamusume.entity.Strategy;
import com.umamusume.entity.Surface;
import java.time.LocalDate;
import lombok.Data;

@Data
public class UmamusumeResponseDTO {

  private long id;
  private String title;
  private String name;
  private LocalDate releasedDate;
  private boolean displayed;
  private SurfaceResponseDTO surface;
  private DistanceResponseDTO distance;
  private StrategyResponseDTO strategy;

  public UmamusumeResponseDTO(long id, String title, String name, LocalDate releasedDate, boolean displayed, Surface surface, Distance distance, Strategy strategy){
    this.id = id;
    this.title = title;
    this.name = name;
    this.releasedDate = releasedDate;
    this.displayed = displayed;
    this.surface = new SurfaceResponseDTO(surface);
    this.distance = new DistanceResponseDTO(distance);
    this.strategy = new StrategyResponseDTO(strategy);
  }
}
