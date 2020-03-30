package com.example.demo.controllers;

import com.example.demo.entities.CurrentBid;
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

    @GetMapping("/current_bid")
    public List<CurrentBid> getAllCurrentBids() {
        return bidService.findAllCurrentBids();
    }

    @GetMapping("/current_bid/{id}")
    public Optional<CurrentBid> getCurrentBid(@PathVariable int id) {
        return bidService.findHighestBidByAuctionId (id);
    }

}