package com.example.demo.services;

import com.example.demo.entities.Auction;
import com.example.demo.repositories.AuctionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AuctionService {
    @Autowired
    AuctionRepo auctionRepo;

    public List<Auction> findAllAuctions() {
        return (List<Auction>) auctionRepo.findAll();
    }
}
