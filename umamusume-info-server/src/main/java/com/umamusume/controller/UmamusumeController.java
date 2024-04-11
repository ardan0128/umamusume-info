package com.umamusume.controller;

import com.umamusume.dto.UmamusumeDetailResponse;
import com.umamusume.dto.UmamusumeResponse;
import com.umamusume.service.UmamusumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
