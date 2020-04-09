package com.example.demo.services;

import com.example.demo.entities.Auction;
import com.example.demo.repositories.AuctionRepo;
import com.example.demo.repositories.BidRepo;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class AuctionService {
    @Autowired
    AuctionRepo auctionRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    BidRepo bidRepo;

    public List<Auction> findAllAuctions() {
        List<Auction> auctions =  (List<Auction>) auctionRepo.findAllByOrderByIdDesc();

        for(Auction auction : auctions) {
            auction.setSellerUsername(userRepo.findById(auction.getSeller()).get().getUsername());
            bidRepo.findFirstByAuctionIdOrderByBidDesc(auction.getId()).ifPresent(bid -> auction.setHighestBid(bid.getBid()));
        }
        return auctions;
    }





    public Auction findAuction(int id) {
        Auction auction=auctionRepo.findById(id);
        if ( auction == null ) return null;

        auction.setSellerUsername(userRepo.findById(auction.getSeller()).get().getUsername());
        bidRepo.findFirstByAuctionIdOrderByBidDesc(auction.getId()).ifPresent(bid -> auction.setHighestBid(bid.getBid()));

        return auction;
    }
    
    public Auction createNewAuction(Auction auction) {
        Date nowDate = Date.valueOf(LocalDate.now());
        Date startDate = Date.valueOf(auction.getStart_time());
        Date endDate = Date.valueOf(auction.getEnd_time());

        if(nowDate.after(startDate) || startDate.after(endDate) || startDate.equals(endDate)) {
            return null;
        }

        return auctionRepo.save(auction);
    }

}

