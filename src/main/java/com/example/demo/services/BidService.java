package com.example.demo.services;

import com.example.demo.entities.Bid;
import com.example.demo.repositories.BidRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BidService {
        @Autowired
        BidRepo bidRepo;

//        @Autowired
//    AuctionRepo auctionRepo;

        public List<Bid> findAllCurrentBids(){
            return (List<Bid>) bidRepo.findAll();
        }

        public Bid findHighestBidByAuctionId(int id) {
            return bidRepo.findById(id);
        }



    }

