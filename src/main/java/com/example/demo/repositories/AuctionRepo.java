package com.example.demo.repositories;

import com.example.demo.entities.Auction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuctionRepo extends CrudRepository<Auction, Integer> {
    public Auction findById(int id);
    public  Auction findByTitle(String title);
}
