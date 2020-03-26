package com.example.demo.repositories;

import com.example.demo.entities.CurrentBid;
import org.springframework.data.repository.CrudRepository;

public interface BidRepo  extends CrudRepository<CurrentBid, Integer> {
    public CurrentBid findById(int id);



}
