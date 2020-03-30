package com.example.demo.controllers;

import com.example.demo.entities.Auction;
import com.example.demo.entities.Bid;
import com.example.demo.entities.User;
import com.example.demo.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest")
public class BidController {

    @Autowired
    BidService bidService;

    @GetMapping("/bids")
    public List<Bid> getAllBids(){
        return bidService.findAllBids();
    }

    @GetMapping("/bids/{auction_id}")
    public Optional<Bid> getHighest(@PathVariable int auction_id) {
        return bidService.findHighestBid(auction_id);
    }

}