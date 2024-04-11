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

  public UmamusumeResponse(Umamusume umamusume){
    this.id = umamusume.getId();
    this.title = umamusume.getTitle();
    this.name = umamusume.getName();
    this.isReleased = umamusume.isReleased();
    this.isDisplayed = umamusume.isDisplayed();
  }
}
