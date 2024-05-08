package com.umamusume.service;

import com.umamusume.dto.SurfaceRequestDTO;
import com.umamusume.dto.SurfaceResponseDTO;
import com.umamusume.dto.UmamusumeDetailResponse;
import com.umamusume.dto.UmamusumeRequestDTO;
import com.umamusume.dto.UmamusumeResponseDTO;
import com.umamusume.entity.Distance;
import com.umamusume.entity.Strategy;
import com.umamusume.entity.Surface;
import com.umamusume.entity.Umamusume;
import com.umamusume.repository.DistanceRepository;
import com.umamusume.repository.StrategyRepository;
import com.umamusume.repository.SurfaceRepository;
import com.umamusume.repository.UmamusumeRepository;
import com.umamusume.repository.UmamusumeRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UmamusumeService {

  private final UmamusumeRepository umamusumeRepository;
  private final UmamusumeRepositoryImpl umamusumeRepositoryImpl;
  private final SurfaceRepository surfaceRepository;
  private final DistanceRepository distanceRepository;
  private final StrategyRepository strategyRepository;

  public UmamusumeDetailResponse findOneUmamusumeById(long id) {
    Umamusume umamusume = umamusumeRepositoryImpl.findById(id);
    UmamusumeDetailResponse umamusumeDetailResponse = new UmamusumeDetailResponse(umamusume);

    return umamusumeDetailResponse;
  }

  @Transactional
  public UmamusumeResponseDTO create(UmamusumeRequestDTO umamusumeRequestDTO) {

    Surface surface = new Surface(umamusumeRequestDTO.getId(), umamusumeRequestDTO.getSurface());
    surfaceRepository.save(surface);
    Distance distance = new Distance(umamusumeRequestDTO.getId(), umamusumeRequestDTO.getDistance());
    distanceRepository.save(distance);
    Strategy strategy = new Strategy(umamusumeRequestDTO.getId(), umamusumeRequestDTO.getStrategy());
    strategyRepository.save(strategy);


    Umamusume umamusume = new Umamusume(umamusumeRequestDTO.getId(), umamusumeRequestDTO.getTitle(),
        umamusumeRequestDTO.getName(), umamusumeRequestDTO.getReleasedDate(),
        umamusumeRequestDTO.isDisplayed(), surface, distance, strategy);

    Umamusume newUmamusume = umamusumeRepository.save(umamusume);

    UmamusumeResponseDTO umamusumeResponseDTO = new UmamusumeResponseDTO(newUmamusume.getId(),
        newUmamusume.getTitle(), newUmamusume.getName(), newUmamusume.getReleasedDate(),
        newUmamusume.isDisplayed(), surface, distance, strategy);

    return umamusumeResponseDTO;
  }
}
