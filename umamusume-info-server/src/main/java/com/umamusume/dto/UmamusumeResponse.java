package com.umamusume.dto;

import com.umamusume.entity.Umamusume;
import lombok.Data;

@Data
public class UmamusumeResponse {

  private long id;
  private String title;
  private String name;
  private boolean isReleased;
  private boolean isDisplayed;
}
