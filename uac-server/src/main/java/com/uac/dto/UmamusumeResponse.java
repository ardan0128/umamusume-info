package com.uac.dto;

import com.uac.entity.Umamusume;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

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
