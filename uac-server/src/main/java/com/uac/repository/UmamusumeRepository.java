package com.uac.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.uac.entity.Umamusume;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.uac.entity.QDistance.distance;
import static com.uac.entity.QStrategy.strategy;
import static com.uac.entity.QSurface.surface;
import static com.uac.entity.QUmamusume.umamusume;

@Repository
@RequiredArgsConstructor
public class UmamusumeRepository {
  private final JPAQueryFactory query;

  public Umamusume findById(long id){
    return query
        .select(umamusume)
        .from(umamusume)
        .where(umamusume.id.eq(id))
        .join(umamusume.surface, surface).fetchJoin()
        .join(umamusume.distance, distance).fetchJoin()
        .join(umamusume.strategy, strategy).fetchJoin()
        .fetchOne();
  }

  public List<Umamusume> findAll(){
    return query
        .selectFrom(umamusume)
        .orderBy(umamusume.id.asc())
        .fetch();
  }
}
