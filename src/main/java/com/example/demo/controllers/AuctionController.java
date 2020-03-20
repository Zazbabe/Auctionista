package com.example.demo.controllers;

import com.example.demo.entities.Auction;
import com.example.demo.services.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest")
public class AuctionController {
    @Autowired
    AuctionService auctionService;

    @GetMapping("/auctions")
    public List<Auction> getAllAuctions(){
        return auctionService.findAllAuctions();
    }


}
