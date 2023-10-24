package com.uac.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDistance is a Querydsl query type for Distance
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDistance extends EntityPathBase<Distance> {

    private static final long serialVersionUID = -1724646084L;

    public static final QDistance distance = new QDistance("distance");

    public final StringPath _long = createString("_long");

    public final StringPath _medium = createString("_medium");

    public final StringPath _mile = createString("_mile");

    public final StringPath _short = createString("_short");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public QDistance(String variable) {
        super(Distance.class, forVariable(variable));
    }

    public QDistance(Path<? extends Distance> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDistance(PathMetadata metadata) {
        super(Distance.class, metadata);
    }

}

