package com.example.demo.services;

import com.example.demo.entities.CurrentBid;
import com.example.demo.repositories.BidRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BidService {
}

//        @Autowired
//    AuctionRepo auctionRepo;

        public List<CurrentBid> findAllCurrentBids(){
            return (List<CurrentBid>) bidRepo.findAll();
        }

        public Optional<CurrentBid> findHighestBidByAuctionId(int id) {
            return bidRepo.findById(id);
        }



    }

