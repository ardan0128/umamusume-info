package com.umamusume.dto;

import com.umamusume.entity.Distance;
import com.umamusume.entity.Strategy;
import com.umamusume.entity.Surface;
import java.time.LocalDate;
import lombok.Data;

@Data
public class UmamusumeRequest {

  String title;
  String name;
  LocalDate releasedDate;
  boolean isDisplayed;
  Surface surface;
  Distance distance;
  Strategy strategy;
}
