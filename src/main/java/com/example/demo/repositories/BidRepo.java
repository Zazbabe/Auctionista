package com.example.demo.repositories;

import com.example.demo.entities.Auction;
import com.example.demo.entities.Bid;
import org.springframework.data.repository.CrudRepository;

public interface BidRepo  extends CrudRepository<Bid, Integer> {
    public Bid findById(int id);



}
