package com.uac.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QStrategy is a Querydsl query type for Strategy
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QStrategy extends EntityPathBase<Strategy> {

    private static final long serialVersionUID = -225307462L;

    public static final QStrategy strategy = new QStrategy("strategy");

    public final StringPath betweener = createString("betweener");

    public final StringPath chaser = createString("chaser");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath leader = createString("leader");

    public final StringPath runner = createString("runner");

    public QStrategy(String variable) {
        super(Strategy.class, forVariable(variable));
    }

    public QStrategy(Path<? extends Strategy> path) {
        super(path.getType(), path.getMetadata());
    }

    public QStrategy(PathMetadata metadata) {
        super(Strategy.class, metadata);
    }

}

