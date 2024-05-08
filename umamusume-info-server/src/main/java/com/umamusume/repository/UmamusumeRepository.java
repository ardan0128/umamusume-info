package com.umamusume.repository;

import com.umamusume.entity.Umamusume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UmamusumeRepository extends JpaRepository<Umamusume, Long> {
}
