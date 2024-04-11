package com.umamusume.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.umamusume.entity.Distance;
import com.umamusume.entity.Strategy;
import com.umamusume.entity.Surface;
import com.umamusume.entity.Umamusume;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
public class UmamusumeDetailResponse {
  private long id;
  private String title;
  private String name;
  private Surface surface;
  private Distance distance;
  private Strategy strategy;

  public UmamusumeDetailResponse(Umamusume umamusume){
    this.id = umamusume.getId();
    this.title = umamusume.getTitle();
    this.name = umamusume.getName();
    this.surface = umamusume.getSurface();
    this.distance = umamusume.getDistance();
    this.strategy = umamusume.getStrategy();
  }
}
