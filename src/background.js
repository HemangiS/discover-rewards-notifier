// When the extension is installed or upgraded
chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {

    loadJSON(function(response) {
      // Parse JSON string into object
      let data = response;

      chrome.declarativeContent.onPageChanged.addRules([
        formatDataIntoRule(data)
      ]);

    });

  });

});


function formatDataIntoRule(deals) {
  let rule = {
    conditions: [],
    actions: [
      new chrome.declarativeContent.ShowPageAction()
    ]
  };

  deals.forEach(deal => {
    let condition = makeCondition(deal.site_url);
    rule.conditions.push(condition);
  });

  return rule;
}

function makeCondition(site_url) {
  console.log('condition for', site_url);
  return new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {
      hostEquals: site_url.toLowerCase()
    }
  });
}

function loadJSON(callback) {

  callback([
      {
        "title": "Get 25% off regular menu price online orders, Papa John's",
        "site_name": "Papa John's",
        "site_url": "www.papajohns.com",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10653",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9804_big_11102016.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "20% off one regularly priced small appliance, BestBuy.com®",
        "site_name": "BestBuy.com®",
        "site_url": "www.bestbuy.com",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10552",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9145_big_01272016.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Macy's",
        "site_name": "Macy's",
        "site_url": "https://www.macys.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10437",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3601_big_06092014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, J.Crew Factory",
        "site_name": "J.Crew Factory",
        "site_url": "https://factory.jcrew.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9845",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3748_big_06102014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get a wall calendar, Shutterfly",
        "site_name": "Shutterfly",
        "site_url": "https://www.shutterfly.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10678",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5995_big_12042014.jpg",
        "expiry_date": "Expires 03/31/2018"
      },
      {
        "title": "Get up to 25% off plus $5 off a day on weekend rentals, Hertz",
        "site_name": "Hertz",
        "site_url": "https://www.hertz.com/rentacar/reservation/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10648",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10257_big_07252017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Hard Rock Resorts Caribbean",
        "site_name": "Hard Rock Resorts Caribbean",
        "site_url": "https://www.hardrockhotels.com/all-inclusive-resorts.htm",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10641",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10641_big_12072017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get up to 25% off base rates, Budget",
        "site_name": "Budget",
        "site_url": "https://www.budget.com/en/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10665",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10024_big_08292017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "10% off select services, PODS",
        "site_name": "PODS",
        "site_url": "https://www.pods.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10310",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9618_big_07222016.jpg",
        "expiry_date": "Expires 07/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus, Groupon online",
        "site_name": "Groupon online",
        "site_url": "https://www.groupon.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10171",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_4794_big_08202014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get up to 25% off select PCs, Lenovo",
        "site_name": "Lenovo",
        "site_url": "https://www3.lenovo.com/us/en/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10600",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10600_big_11292017.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "$50 off your move, North American Van Lines",
        "site_name": "North American Van Lines",
        "site_url": "https://www.northamerican.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10254",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9537_big_07082016.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "$50 off your move, Allied Van Lines",
        "site_name": "Allied Van Lines",
        "site_url": "https://www.allied.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10237",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9536_big_07082016.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus, Bloomingdale's online",
        "site_name": "Bloomingdale's online",
        "site_url": "https://www.bloomingdales.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10146",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3615_big_06062014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Ulta Beauty",
        "site_name": "Ulta Beauty",
        "site_url": "https://www.ulta.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10592",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3965_big_06132014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Neiman Marcus",
        "site_name": "Neiman Marcus",
        "site_url": "https://www.neimanmarcus.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9836",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3610_big_06092014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Uniworld River Cruises",
        "site_name": "Uniworld River Cruises",
        "site_url": "https://www.uniworld.com/en/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10646",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10275_big_06262017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Saks Off 5TH",
        "site_name": "Saks Off 5TH",
        "site_url": "https://www.saksoff5th.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10694",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_4435_big_07182014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Sephora",
        "site_name": "Sephora",
        "site_url": "https://www.sephora.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9915",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9915_big_11152017.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Saks Fifth Avenue",
        "site_name": "Saks Fifth Avenue",
        "site_url": "https://www.saksfifthavenue.com/Entry.jsp",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10693",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3619_big_06092014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Take 15% off your entire purchase, Sally Beauty",
        "site_name": "Sally Beauty",
        "site_url": "http://www.sallybeauty.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10253",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10253_big_06192017.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Get $20 off a mattress purchase of $200 or more online, Wayfair",
        "site_name": "Wayfair",
        "site_url": "https://www.wayfair.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10677",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10040_big_03152017.jpg",
        "expiry_date": "Expires 04/01/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus, Gap.com",
        "site_name": "Gap.com",
        "site_url": "http://www.gap.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9718",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3978_big_06132014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get 12% off a purchase online, Cost Plus World Market",
        "site_name": "Cost Plus World Market",
        "site_url": "https://www.worldmarket.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10696",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10301_big_07192017.jpg",
        "expiry_date": "Expires 02/28/2019"
      },
      {
        "title": "Earn 5% Cashback Bonus online, LOFT",
        "site_name": "LOFT",
        "site_url": "https://www.loft.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9780",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3990_big_06172014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 10% Cashback Bonus online, Under Armour",
        "site_name": "Under Armour",
        "site_url": "https://www.underarmour.com/en-us/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10446",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3637_big_06092014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get 15% off an online purchase, Hollister",
        "site_name": "Hollister",
        "site_url": "https://www.hollisterco.com/shop/us",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10605",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9732_big_10102016.jpg",
        "expiry_date": "Expires 04/01/2018"
      },
      {
        "title": "20% off purchase of $40 or more, Gymboree",
        "site_name": "Gymboree",
        "site_url": "http://www.gymboree.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10221",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9766_big_11022016.jpg",
        "expiry_date": "Expires 05/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Lord & Taylor",
        "site_name": "Lord & Taylor",
        "site_url": "http://www.lordandtaylor.com/Entry.jsp",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10692",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9571_big_08122016.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get $5 off a purchase of $25 or more online, Books-A-Million",
        "site_name": "Books-A-Million",
        "site_url": "http://www.booksamillion.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10200",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9469_big_06092016.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Get 20% off a purchase of $35 or more, Claire's",
        "site_name": "Claire's",
        "site_url": "http://www.claires.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10654",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_7122_big_03182015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 40% off regular priced items, Men's Wearhouse",
        "site_name": "Men's Wearhouse",
        "site_url": "https://www.menswearhouse.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10652",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9888_big_12152016.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 15% off an online purchase, Abercrombie & Fitch",
        "site_name": "Abercrombie & Fitch",
        "site_url": "https://www.abercrombie.com/shop/us",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10525",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9731_big_10102016.jpg",
        "expiry_date": "Expires 04/01/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Fairmont Hotels & Resorts",
        "site_name": "Fairmont Hotels & Resorts",
        "site_url": "http://www.fairmont.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10638",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6905_big_02262015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get $40 off your first purchase of $100 or more, Peapod",
        "site_name": "Peapod",
        "site_url": "https://www.peapod.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10687",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9467_big_06082016.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get $15 off an online purchase of $75+, Foot Locker",
        "site_name": "Foot Locker",
        "site_url": "https://www.footlocker.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10579",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10360_big_08312017.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Atlantis Resorts",
        "site_name": "Atlantis Resorts",
        "site_url": "http://www.atlantisbahamas.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10632",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5007_big_09122014.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus, Athleta online",
        "site_name": "Athleta online",
        "site_url": "http://www.athleta.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10168",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3720_big_06062014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Palace Resorts",
        "site_name": "Palace Resorts",
        "site_url": "https://www.palaceresorts.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10642",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6908_big_02262015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus, Crate & Barrel online",
        "site_name": "Crate & Barrel online",
        "site_url": "https://www.crateandbarrel.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9986",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3641_big_06062014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Dell Home online",
        "site_name": "Dell Home online",
        "site_url": "http://www.dell.com/en-us/shop",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10008",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5134_big_12222014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 10% Cashback Bonus online, The North Face",
        "site_name": "The North Face",
        "site_url": "https://www.thenorthface.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9736",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3731_big_06092014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Ann Taylor online",
        "site_name": "Ann Taylor online",
        "site_url": "https://www.anntaylor.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9779",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3638_big_08182015.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Ralph Lauren",
        "site_name": "Ralph Lauren",
        "site_url": "https://www.ralphlauren.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10608",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10536_big_10272017.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get 20% off an online purchase, Cheryl's",
        "site_name": "Cheryl's",
        "site_url": "https://www.cheryls.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10603",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9241_big_04202016.jpg",
        "expiry_date": "Expires 02/15/2018"
      },
      {
        "title": "20% off purchase of $40 or more, Crazy 8",
        "site_name": "Crazy 8",
        "site_url": "http://www.crazy8.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10222",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9783_big_11072016.jpg",
        "expiry_date": "Expires 05/31/2018"
      },
      {
        "title": "Get 20% off a purchase, FragranceNet.com",
        "site_name": "FragranceNet.com",
        "site_url": "https://www.fragrancenet.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10695",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9532_big_07082016.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Enjoy $15 and Free Shipping on orders over $100, New Balance",
        "site_name": "New Balance",
        "site_url": "http://www.newbalance.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10353",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9521_big_06302016.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Get a 5x8 notebook, Shutterfly",
        "site_name": "Shutterfly",
        "site_url": "https://www.shutterfly.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10709",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5995_big_12042014.jpg",
        "expiry_date": "Expires 03/31/2018"
      },
      {
        "title": "Get up to 25% off base rates + $10 to $25 off your rental, Avis",
        "site_name": "Avis",
        "site_url": "https://www.avis.com/en/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10658",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3590_big_05282014.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Get up to 25% off base rates + a bonus weekend day, Avis",
        "site_name": "Avis",
        "site_url": "https://www.avis.com/en/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10659",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3590_big_05282014.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Get up to 25% off base rates + $10 to $25 off your rental, Budget",
        "site_name": "Budget",
        "site_url": "https://www.budget.com/en/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10662",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10023_big_07312017.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Get $15 off your $100 purchase online, Wayfair",
        "site_name": "Wayfair",
        "site_url": "https://www.wayfair.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10676",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10040_big_03152017.jpg",
        "expiry_date": "Expires 04/01/2018"
      },
      {
        "title": "Get up to 25% off base rates + a bonus weekend day, Budget",
        "site_name": "Budget",
        "site_url": "https://www.budget.com/en/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10663",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10184_big_08282017.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Get up to 25% off base rates + a complimentary upgrade, Avis",
        "site_name": "Avis",
        "site_url": "https://www.avis.com/en/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10660",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3590_big_05282014.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get up to 25% off base rates + a free upgrade, Budget",
        "site_name": "Budget",
        "site_url": "https://www.budget.com/en/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10664",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10184_big_08282017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get up to 25% off plus $25 off weekly rentals, Hertz",
        "site_name": "Hertz",
        "site_url": "https://www.hertz.com/rentacar/reservation/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10647",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10317_big_07252017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get up to 25% off plus a 7th day free when you rent for 6 days, Hertz",
        "site_name": "Hertz",
        "site_url": "https://www.hertz.com/rentacar/reservation/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10624",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10461_big_09202017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Hard Rock Resorts Mexico",
        "site_name": "Hard Rock Resorts Mexico",
        "site_url": "https://www.hardrockhotels.com/destinations.htm",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10640",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10640_big_12072017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get $15 off a purchase of $75+ online, Champs Sports",
        "site_name": "Champs Sports",
        "site_url": "https://www.champssports.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10580",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10410_big_08312017.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Neiman Marcus Last Call",
        "site_name": "Neiman Marcus Last Call",
        "site_url": "https://www.lastcall.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9834",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3976_big_06132014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "30% off contacts + free shipping, Walgreens.com",
        "site_name": "Walgreens.com",
        "site_url": "https://www.walgreens.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9856",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5552_big_10282014.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus, Dell Small Business online",
        "site_name": "Dell Small Business online",
        "site_url": "http://www.dell.com/smallbusinesssolutions",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9399",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_4664_big_08222014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Kiehl's online",
        "site_name": "Kiehl's online",
        "site_url": "https://www.kiehls.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9165",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3743_big_06102014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Lancome online",
        "site_name": "Lancome online",
        "site_url": "https://www.lancome-usa.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9166",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3746_big_06102014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Microsoft Store online",
        "site_name": "Microsoft Store online",
        "site_url": "https://www.microsoft.com/en-us/store/b/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9151",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6580_big_01272015.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Banana Republic online",
        "site_name": "Banana Republic online",
        "site_url": "http://www.bananarepublic.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9148",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3718_big_08212014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 10% Cashback Bonus, Finish Line online",
        "site_name": "Finish Line online",
        "site_url": "https://www.finishline.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/8990",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3624_big_06062014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, J.Crew",
        "site_name": "J.Crew",
        "site_url": "https://www.jcrew.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/8995",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_8995_big_11202017.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, JCPenney",
        "site_name": "JCPenney",
        "site_url": "https://www.jcpenney.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/8997",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3620_big_06062014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, OLD NAVY online",
        "site_name": "OLD NAVY online",
        "site_url": "http://www.oldnavy.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9014",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_7497_big_08032015.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Tory Burch online",
        "site_name": "Tory Burch online",
        "site_url": "https://www.toryburch.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9034",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3724_big_06092014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Sam's Club online",
        "site_name": "Sam's Club online",
        "site_url": "https://www.samsclub.com/sams/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/6826",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6826_big_08292017.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Walmart online",
        "site_name": "Walmart online",
        "site_url": "https://www.walmart.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/6363",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6363_big_10172016.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Apple",
        "site_name": "Apple",
        "site_url": "https://www.apple.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/5842",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5842_big_11172015.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, LEGO online",
        "site_name": "LEGO online",
        "site_url": "https://shop.lego.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/5633",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3953_big_06122014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, L.L.Bean",
        "site_name": "L.L.Bean",
        "site_url": "https://www.llbean.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/3626",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3626_big_06092014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Bed Bath & Beyond online",
        "site_name": "Bed Bath & Beyond online",
        "site_url": "https://www.bedbathandbeyond.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/3643",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3643_big_06062014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Abt",
        "site_name": "Abt",
        "site_url": "http://www.abt.org/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9716",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3625_big_09192016.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get $15 off an online purchase of $75+, Kids Foot Locker",
        "site_name": "Kids Foot Locker",
        "site_url": "https://www.kidsfootlocker.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10582",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10418_big_09192017.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Get $15 off an online purchase of $75+, Footaction",
        "site_name": "Footaction",
        "site_url": "https://www.footaction.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10581",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10434_big_09132017.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Save $15 off your purchase of $75 or more online, Naturalizer.com",
        "site_name": "Naturalizer.com",
        "site_url": "http://www.naturalizer.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10181",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9528_big_07072016.jpg",
        "expiry_date": "Expires 05/31/2018"
      },
      {
        "title": "Get $15 off of an online purchase of $75+, Lady Foot Locker",
        "site_name": "Lady Foot Locker",
        "site_url": "https://www.ladyfootlocker.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10583",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10359_big_09212017.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "30% off, Budget Blinds",
        "site_name": "Budget Blinds",
        "site_url": "https://www.budgetblinds.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10030",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9773_big_11042016.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus, CB2 online",
        "site_name": "CB2 online",
        "site_url": "https://www.cb2.com/catalog/view-online.aspx",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/9987",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3696_big_06062014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Samsung",
        "site_name": "Samsung",
        "site_url": "https://www.samsung.com/us/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10585",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10585_big_11292017.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get up to $20 off, TurboTax",
        "site_name": "TurboTax",
        "site_url": "https://turbotax.intuit.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10607",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10607_big_12122017.jpg",
        "expiry_date": "Expires 10/31/2018"
      },
      {
        "title": "Get 5% off a rental plus a free upgrade, Enterprise",
        "site_name": "Enterprise",
        "site_url": "https://www.enterprise.com/en/home.html",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10631",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_7133_big_03182015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus online, QVC",
        "site_name": "QVC",
        "site_url": "http://www.qvc.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10563",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10349_big_08252017.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus, Nike.com",
        "site_name": "Nike.com",
        "site_url": "https://www.nike.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10474",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_4277_big_08272014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Get up to 25% off base rates, Avis",
        "site_name": "Avis",
        "site_url": "https://www.avis.com/en/home",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10661",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3590_big_05282014.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get $75 off on select hotel+flight packages, Travelocity",
        "site_name": "Travelocity",
        "site_url": "https://www.travelocity.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10587",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6822_big_02192015.jpg",
        "expiry_date": "Expires 03/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Carnival Cruise Line",
        "site_name": "Carnival Cruise Line",
        "site_url": "https://www.carnival.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10635",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10635_big_12072017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 5% off select hotels, Hotels.com",
        "site_name": "Hotels.com",
        "site_url": "https://www.hotels.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10680",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6577_big_01272015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 10% off a purchase, Overstock",
        "site_name": "Overstock",
        "site_url": "https://www.overstock.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10685",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10685_big_01032018.jpg",
        "expiry_date": "Expires 03/31/2018"
      },
      {
        "title": "Get $40 off $400 2+ nights hotel stay, Expedia",
        "site_name": "Expedia",
        "site_url": "https://www.expedia.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10675",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9052_big_01062016.jpg",
        "expiry_date": "Expires 03/31/2018"
      },
      {
        "title": "Earn 10% Cashback Bonus through Cruise & Vacation Desk, Royal Caribbean International",
        "site_name": "Royal Caribbean International",
        "site_url": "https://www.royalcaribbean.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10621",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6004_big_12042014.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Get 5% off a rental plus a free upgrade, Alamo",
        "site_name": "Alamo",
        "site_url": "https://www.alamo.com/en_US/car-rental/home.html",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10629",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6957_big_03092015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 10% Cashback Bonus, GNC online",
        "site_name": "GNC online",
        "site_url": "http://www.gnc.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10242",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3608_big_06182014.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 5% Cashback Bonus online, Coach",
        "site_name": "Coach",
        "site_url": "https://www.coach.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10610",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10549_big_11142017.jpg",
        "expiry_date": "Ongoing"
      },
      {
        "title": "Earn 10% Cashback Bonus through Cruise and Vacation Desk, Norwegian Cruise Line",
        "site_name": "Norwegian Cruise Line",
        "site_url": "https://www.ncl.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10618",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10406_big_08312017.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Get 10% off qualifying weekend or weekly rentals, Thrifty Rental Car",
        "site_name": "Thrifty Rental Car",
        "site_url": "https://www.thrifty.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10612",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10612_big_12042017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 20% off bouquets, Teleflora",
        "site_name": "Teleflora",
        "site_url": "https://www.teleflora.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10614",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10577_big_11162017.jpg",
        "expiry_date": "Expires 07/31/2018"
      },
      {
        "title": "Get 10% off qualifying weekend or weekly rentals, Dollar Rent A Car",
        "site_name": "Dollar Rent A Car",
        "site_url": "https://www.dollar.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10613",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10613_big_12052017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get a free Hopper Whole-Home HD DVR + free HBO with activation, Dish Network",
        "site_name": "Dish Network",
        "site_url": "https://www.dish.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10404",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5468_big_10232014.jpg",
        "expiry_date": "Expires 10/01/2018"
      },
      {
        "title": "Get $10 off Hot Rate® Hotel booking of $100 or more, Hotwire",
        "site_name": "Hotwire",
        "site_url": "https://www.hotwire.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10681",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_8926_big_12082015.jpg",
        "expiry_date": "Expires 02/25/2018"
      },
      {
        "title": "Earn 10% Cashback Bonus through Cruise & Vacation Desk, Princess Cruises",
        "site_name": "Princess Cruises",
        "site_url": "https://www.princess.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10620",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6560_big_05042015.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Get up to $500 in onboard credits through Cruise & Vacation Desk, Viking Cruises",
        "site_name": "Viking Cruises",
        "site_url": "https://www.vikingcruises.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10622",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10622_big_12062017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 10% off live event tickets, Premium Seats USA",
        "site_name": "Premium Seats USA",
        "site_url": "https://www.premiumseatsusa.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10591",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9535_big_07082016.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 20% off a purchase, 1800Flowers.com",
        "site_name": "1800Flowers.com",
        "site_url": "https://www.1800flowers.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10602",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6115_big_12112014.jpg",
        "expiry_date": "Expires 02/15/2018"
      },
      {
        "title": "15% off your purchase, Sweet Factory",
        "site_name": "Sweet Factory",
        "site_url": "https://www.yelp.com/biz/sweet-factory-bellevue",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10238",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9448_big_05242016.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Get $30 off your first order, Blue Apron",
        "site_name": "Blue Apron",
        "site_url": "https://www.blueapron.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10697",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10697_big_01162018.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Receive $25 service credit, Ting",
        "site_name": "Ting",
        "site_url": "https://ting.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10232",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10232_big_06192017.jpg",
        "expiry_date": "Expires 05/31/2018"
      },
      {
        "title": "Get up to 20% off a rental, National Car Rental",
        "site_name": "National Car Rental",
        "site_url": "https://www.nationalcar.com/en_US/car-rental/home.html",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10691",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6736_big_02132015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 10% Cashback Bonus through Cruise and Vacation Desk, Celebrity Cruises",
        "site_name": "Celebrity Cruises",
        "site_url": "https://www.celebritycruises.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10616",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10405_big_08312017.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Earn 10% Cashback Bonus through Cruise & Vacation Desk, Holland America Line",
        "site_name": "Holland America Line",
        "site_url": "https://www.hollandamerica.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10617",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6557_big_05042015.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "$10 off $200 purchase plus free shipping, 1-800 Contacts",
        "site_name": "1-800 Contacts",
        "site_url": "https://www.1800contacts.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10299",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10299_big_07202017.jpg",
        "expiry_date": "Expires 03/31/2018"
      },
      {
        "title": "Get 15% off a purchase of $35+, JellyBelly.com",
        "site_name": "JellyBelly.com",
        "site_url": "https://www.jellybelly.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10447",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10447_big_09172017.jpg",
        "expiry_date": "Expires 03/31/2018"
      },
      {
        "title": "Save 12%, Penske Truck Rental",
        "site_name": "Penske Truck Rental",
        "site_url": "https://www.pensketruckrental.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10162",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9533_big_07082016.jpg",
        "expiry_date": "Expires 06/30/2018"
      },
      {
        "title": "Get $15 off a purchase of $75+ online, SIX:02",
        "site_name": "SIX:02",
        "site_url": "https://www.six02.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10584",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10412_big_08312017.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Abercrombie & Kent",
        "site_name": "Abercrombie & Kent",
        "site_url": "https://www.abercrombiekent.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10623",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10623_big_12062017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 20% off a purchase, 1800Baskets.com",
        "site_name": "1800Baskets.com",
        "site_url": "https://www.1800baskets.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10601",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9832_big_11162016.jpg",
        "expiry_date": "Expires 02/15/2018"
      },
      {
        "title": "Get 20% off an online purchase, Popcorn Factory",
        "site_name": "Popcorn Factory",
        "site_url": "https://www.thepopcornfactory.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10604",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_8688_big_10092015.jpg",
        "expiry_date": "Expires 02/15/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Trafalgar Tours",
        "site_name": "Trafalgar Tours",
        "site_url": "https://www.trafalgar.com/usa",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10644",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_3388_big_05192014.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Globus",
        "site_name": "Globus",
        "site_url": "https://www.globusjourneys.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10639",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5008_big_09122014.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 10% Cashback Bonus through Cruise & Vacation Desk, Oceania Cruises",
        "site_name": "Oceania Cruises",
        "site_url": "https://www.oceaniacruises.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10619",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_4731_big_08192014.jpg",
        "expiry_date": "Expires 02/28/2018"
      },
      {
        "title": "Get 20% off a purchase, Fruitbouquets.com",
        "site_name": "Fruitbouquets.com",
        "site_url": "https://www.fruitbouquets.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10599",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_8690_big_10092015.jpg",
        "expiry_date": "Expires 02/15/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Cunard Line",
        "site_name": "Cunard Line",
        "site_url": "http://www.cunard.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10637",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_8915_big_12072015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Crystal Cruises",
        "site_name": "Crystal Cruises",
        "site_url": "https://www.crystalcruises.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10636",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_10452_big_09192017.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Avalon Waterways",
        "site_name": "Avalon Waterways",
        "site_url": "https://www.avalonwaterways.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10633",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_6904_big_02262015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Azamara Club Cruises",
        "site_name": "Azamara Club Cruises",
        "site_url": "https://www.azamaraclubcruises.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10634",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_8909_big_12072015.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Earn 5% Cashback Bonus through Cruise & Vacation Desk, Regent Seven Seas Cruises",
        "site_name": "Regent Seven Seas Cruises",
        "site_url": "https://www.rssc.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10643",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_5009_big_09122014.jpg",
        "expiry_date": "Expires 12/31/2018"
      },
      {
        "title": "Get 20% off a regularly priced online purchase, Harry & David",
        "site_name": "Harry & David",
        "site_url": "https://www.harryanddavid.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10626",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9393_big_04292016.jpg",
        "expiry_date": "Expires 02/15/2018"
      },
      {
        "title": "Get 20% off a regularly priced purchase, Wolferman's",
        "site_name": "Wolferman's",
        "site_url": "https://www.wolfermans.com/",
        "deal_url": "https://card.discover.com/cardmembersvcs/deals/app/home#/deal/10627",
        "img_src_url": "https://www.discovercard.com/extras/logo/large/offer_9392_big_05022016.jpg",
        "expiry_date": "Expires 12/31/2018"
      }
    ]
  );
}
