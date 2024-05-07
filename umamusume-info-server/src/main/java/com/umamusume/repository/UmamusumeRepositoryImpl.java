package com.umamusume.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.umamusume.entity.Umamusume;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.umamusume.entity.QDistance.distance;
import static com.umamusume.entity.QStrategy.strategy;
import static com.umamusume.entity.QSurface.surface;
import static com.umamusume.entity.QUmamusume.umamusume;

@Repository
@RequiredArgsConstructor
public class UmamusumeRepositoryImpl {

  private JPAQueryFactory query;

  public Umamusume findById(long id) {
    return query
        .select(umamusume)
        .from(umamusume)
        .where(umamusume.id.eq(id))
        .join(umamusume.surface, surface).fetchJoin()
        .join(umamusume.distance, distance).fetchJoin()
        .join(umamusume.strategy, strategy).fetchJoin()
        .fetchOne();
  }

  public List<Umamusume> findAll() {
    return query
        .selectFrom(umamusume)
        .orderBy(umamusume.id.asc())
        .fetch();
  }

  public List<Umamusume> findByIsDisplayed() {
    return query
        .selectFrom(umamusume)
        .where(umamusume.isDisplayed.eq(true))
        .orderBy(umamusume.id.asc())
        .fetch();
  }
}
