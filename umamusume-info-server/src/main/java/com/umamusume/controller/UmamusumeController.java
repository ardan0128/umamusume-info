package com.umamusume.controller;

import com.umamusume.dto.UmamusumeDetailResponse;
import com.umamusume.dto.UmamusumeRequest;
import com.umamusume.dto.UmamusumeResponse;
import com.umamusume.service.UmamusumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class UmamusumeController {

  private final UmamusumeService umamusumeService;

//  @RequestMapping(method = RequestMethod.POST, value = "/umamusume")
//  public ResponseEntity<UmamusumeResponse> postUmamusume(UmamusumeRequest umamusumeRequest) {
//    UmamusumeResponse umamusumeResponse = umamusumeService.create(umamusumeRequest);
//    return ResponseEntity.status(HttpStatus.CREATED).body(umamusumeResponse);
//  }


  @GetMapping(path = "/umamusume/{id}")
  public UmamusumeDetailResponse getOneUmamusume(@PathVariable(name = "id") long id) {
    return umamusumeService.findOneUmamusumeById(id);
  }

  @RequestMapping(method = RequestMethod.POST, value = "/umamusume")
  public ResponseEntity<UmamusumeRequest> postUmamusume(@RequestBody UmamusumeRequest umamusumeRequest) {
    System.out.println(umamusumeRequest);
    return ResponseEntity.status(HttpStatus.CREATED).body(umamusumeRequest);
  }
}
