package com.umamusume.entity;

import com.umamusume.dto.SurfaceRequestDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Surface {

  @Id
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "turf", nullable = false)
  private String turf;

  @Column(name = "dirt", nullable = false)
  private String dirt;

  public Surface(Long id, SurfaceRequestDTO surfaceRequestDTO) {
    this.id = id;
    this.turf = surfaceRequestDTO.getTurf();
    this.dirt = surfaceRequestDTO.getDirt();
  }
}
