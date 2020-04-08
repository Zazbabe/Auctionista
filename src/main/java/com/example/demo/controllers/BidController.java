package com.example.demo.controllers;

import com.example.demo.entities.Bid;
import com.example.demo.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rest")
public class BidController {

    @Autowired
    BidService bidService;

    @GetMapping("/bids")
    public List<Bid> getAllBids(){
        return bidService.findAllBids();
    }

    @GetMapping("/bids/{id}")
    public Bid getBid(@PathVariable int id) {
        return bidService.findBid(id);
    }

    @GetMapping("/bids/highest")
    public List<Bid> findHighestByAuctions(@RequestParam List<Integer> auctions) {
        List<Bid> highestBids = new ArrayList<Bid>();

        for(Integer auctionId : auctions) {
            bidService.findHighestBid(auctionId).ifPresent(bid -> highestBids.add(bid));
        }

        return highestBids;
    }

    @PostMapping("/bids")
    public Bid addBid(@RequestBody Bid bid) {
        return bidService.addNewBid(bid);
    }

}