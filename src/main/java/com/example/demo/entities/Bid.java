package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "bids")
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double bid;
    private int bidder;
    private String bid_time;

    @Column(name="auction_id")
    private int auctionId;

    public Bid() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getBid() {
        return bid;
    }

    public void setBid(double bid) {
        this.bid = bid;
    }

    public int getBidder() {
        return bidder;
    }

    public void setBidder(int bidder) {
        this.bidder = bidder;
    }

    public String getBid_time() {
        return bid_time;
    }

    public void setBid_time(String bid_time) {
        this.bid_time = bid_time;
    }

    public int getAuction_id() {
        return auctionId;
    }

    public void setAuction_id(int auctionId) {
        this.auctionId = auctionId;
    }
}
