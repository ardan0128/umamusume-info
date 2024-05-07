package com.umamusume.repository;

import com.umamusume.entity.Surface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface SurfaceRepository extends JpaRepository<Surface, Long> {
}
