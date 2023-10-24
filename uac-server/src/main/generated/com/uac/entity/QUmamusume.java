package com.uac.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUmamusume is a Querydsl query type for Umamusume
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUmamusume extends EntityPathBase<Umamusume> {

    private static final long serialVersionUID = 1112934084L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUmamusume umamusume = new QUmamusume("umamusume");

    public final QDistance distance;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath image = createString("image");

    public final StringPath name = createString("name");

    public final QStrategy strategy;

    public final QSurface surface;

    public final StringPath title = createString("title");

    public QUmamusume(String variable) {
        this(Umamusume.class, forVariable(variable), INITS);
    }

    public QUmamusume(Path<? extends Umamusume> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUmamusume(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUmamusume(PathMetadata metadata, PathInits inits) {
        this(Umamusume.class, metadata, inits);
    }

    public QUmamusume(Class<? extends Umamusume> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.distance = inits.isInitialized("distance") ? new QDistance(forProperty("distance")) : null;
        this.strategy = inits.isInitialized("strategy") ? new QStrategy(forProperty("strategy")) : null;
        this.surface = inits.isInitialized("surface") ? new QSurface(forProperty("surface")) : null;
    }

}

