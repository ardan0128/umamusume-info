package com.umamusume.service;

import com.umamusume.dto.UmamusumeDetailResponse;
import com.umamusume.dto.UmamusumeRequest;
import com.umamusume.dto.UmamusumeResponse;
import com.umamusume.entity.Umamusume;
import com.umamusume.repository.UmamusumeRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UmamusumeService {

  private final UmamusumeRepositoryImpl umamusumeRepositoryImpl;

  public UmamusumeDetailResponse findOneUmamusumeById(long id) {
    Umamusume umamusume = umamusumeRepositoryImpl.findById(id);
    UmamusumeDetailResponse umamusumeDetailResponse = new UmamusumeDetailResponse(umamusume);

    return umamusumeDetailResponse;
  }

}
