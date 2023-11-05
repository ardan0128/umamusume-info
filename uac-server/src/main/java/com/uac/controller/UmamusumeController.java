package com.uac.controller;

import com.uac.dto.UmamusumeDetailResponse;
import com.uac.dto.UmamusumeRequest;
import com.uac.dto.UmamusumeResponse;
import com.uac.entity.Umamusume;
import com.uac.service.UmamusumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/umamusume")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class UmamusumeController {
  private final UmamusumeService umamusumeService;

  @GetMapping()
  public List<UmamusumeResponse> getAllUmamusume(){
    return umamusumeService.findAllUmamusume();
  }

  @GetMapping(path = "/{id}")
  public UmamusumeDetailResponse getOneUmamusume(@PathVariable(name = "id") long id){
    return umamusumeService.findOneUmamusumeById(id);
  }
}
