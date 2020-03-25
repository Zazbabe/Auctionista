package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;

@Entity
@Table (name = "current_bid")
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private  int auction_id;
    private int bidder;
    private  double max_bid;

    public Bid() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAuction_id() {
        return auction_id;
    }

    public void setAuction_id(int auction_id) {
        this.auction_id = auction_id;
    }

    public int getBidder() {
        return bidder;
    }

    public void setBidder(int bidder) {
        this.bidder = bidder;
    }

    public double getMax_bid() {
        return max_bid;
    }

    public void setMax_bid(double max_bid) {
        this.max_bid = max_bid;
    }
}