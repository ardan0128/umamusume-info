package com.uac.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSurface is a Querydsl query type for Surface
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSurface extends EntityPathBase<Surface> {

    private static final long serialVersionUID = 1684059782L;

    public static final QSurface surface = new QSurface("surface");

    public final StringPath dirt = createString("dirt");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath turf = createString("turf");

    public QSurface(String variable) {
        super(Surface.class, forVariable(variable));
    }

    public QSurface(Path<? extends Surface> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSurface(PathMetadata metadata) {
        super(Surface.class, metadata);
    }

}

