package com.uac.controller;

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
@RequiredArgsConstructor
public class UmamusumeController {
  private final UmamusumeService umamusumeService;
  @GetMapping()
  public List<UmamusumeResponse> findAll(){
    return umamusumeService.ListUmamusume();
  }
}
