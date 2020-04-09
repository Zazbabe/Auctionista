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

        @Autowired
        UserService userService;

//        @Autowired
//    AuctionRepo auctionRepo;

    public List<Bid> findAllBids(){
        return (List<Bid>) bidRepo.findAll();
    }

    public Optional<Bid> findHighestBid(int auction_id) {
        return bidRepo.findFirstByAuctionIdOrderByBidDesc(auction_id);
    }

    public Bid findBid(int id) {
        return bidRepo.findBidById(id);
    }

    public Bid addNewBid(Bid bid) {
        /* Make sure bidder is same as current user, and bid is higher than current highest bid... */

        if(bid.getBidder() != userService.findCurrentUser().getId()) {
            return null;
        }

        Optional<Bid> highestBid = findHighestBid(bid.getAuction_id());

        if(highestBid.isPresent() && bid.getBid() <= highestBid.get().getBid()) {
            return null;
        }

        return bidRepo.save(bid);
    }


}

