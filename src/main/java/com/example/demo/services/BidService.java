package com.example.demo.services;

import com.example.demo.entities.Bid;
import com.example.demo.repositories.BidRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BidService {
        @Autowired
        BidRepo bidRepo;

//        @Autowired
//    AuctionRepo auctionRepo;

    public List<Bid> findAllBids(){
        return (List<Bid>) bidRepo.findAll();
    }

    public Optional<Bid> findHighestBid(int auction_id) {
        return bidRepo.findFirstByAuctionIdOrderByBidDesc(auction_id);
    }

}

