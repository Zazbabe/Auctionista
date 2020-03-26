package com.example.demo.repositories;

import com.example.demo.entities.CurrentBid;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BidRepo  extends CrudRepository<CurrentBid, Integer> {
}
