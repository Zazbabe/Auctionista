package com.example.demo.repositories;

import com.example.demo.entities.Bid;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BidRepo  extends CrudRepository<Bid, Integer> {

    Optional<Bid> findFirstByAuctionIdOrderByBidDesc(int auctionId);

    Bid findBidById(int id);
}
