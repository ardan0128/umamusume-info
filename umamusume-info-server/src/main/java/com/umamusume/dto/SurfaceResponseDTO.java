package com.umamusume.dto;

import com.umamusume.entity.Surface;
import lombok.Data;

@Data
public class SurfaceResponseDTO {

  private String turf;
  private String dirt;

  public SurfaceResponseDTO(Surface surface) {
    this.turf = surface.getTurf();
    this.dirt = surface.getDirt();
  }
}
