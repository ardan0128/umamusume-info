package com.uac.service;

import com.uac.dto.UmamusumeDetailResponse;
import com.uac.dto.UmamusumeResponse;
import com.uac.entity.Umamusume;
import com.uac.repository.UmamusumeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UmamusumeService {
  private final UmamusumeRepository umamusumeRepository;

  public List<UmamusumeResponse> findAllUmamusume(){
    List<Umamusume> listUmamusume = umamusumeRepository.findAll();
    List<UmamusumeResponse> listUmamusumeResponse = listUmamusume.stream()
        .map(umamusume -> new UmamusumeResponse(umamusume))
        .collect(Collectors.toList());

    return listUmamusumeResponse;
  }

  public UmamusumeDetailResponse findOneUmamusumeById(long id){
    Umamusume umamusume = umamusumeRepository.findById(id);
    UmamusumeDetailResponse umamusumeDetailResponse = new UmamusumeDetailResponse(umamusume);

    return umamusumeDetailResponse;
  }
}
