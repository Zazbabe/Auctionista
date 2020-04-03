package com.example.demo.controllers;

import com.example.demo.entities.Bid;
import com.example.demo.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/bids")
    public Bid addBid(@RequestBody Bid bid) {
        return bidService.addNewBid(bid);
    }

}