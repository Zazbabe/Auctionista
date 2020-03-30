package com.example.demo.services;

import com.example.demo.entities.Auction;
import com.example.demo.entities.Bid;
import com.example.demo.entities.User;
import com.example.demo.repositories.AuctionRepo;
import com.example.demo.repositories.BidRepo;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuctionService {
    @Autowired
    AuctionRepo auctionRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired

    BidRepo bidRepo;

    public List<Auction> findAllAuctions() {
        List<Auction> auctions =  (List<Auction>) auctionRepo.findAll();

        for(Auction auction : auctions) {
            auction.setSellerUsername(userRepo.findById(auction.getSeller()).get().getUsername());
            auction.setHighestBid(bidRepo.findMaxBidById(auction.getId()).get().getBid());

        }
        return auctions;
    }





    public Auction findAuction(int id) {
        Auction auction=auctionRepo.findById(id);
        if ( auction == null ) return null;

        auction.setSellerUsername(userRepo.findById(auction.getSeller()).get().getUsername());


        return auction;
    }
    
    public Auction createNewAuction(Auction auction) {
        return auctionRepo.save(auction);
    }

}

