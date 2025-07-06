package com.waitless.benefit.point.domain.repository;

import com.waitless.benefit.point.domain.entity.Point;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;
import java.util.UUID;

public interface PointRepositoryCustom {
    Page<Point> findAllByUserId(Long userId, Pageable pageable);
    Optional<Point> findByReviewId(UUID reviewId);
    int getTotalPointByUserId(Long userId);
    int getUserRanking(Long userId);
}
