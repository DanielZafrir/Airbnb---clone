import React from "react";

import "./SearchPage.css";
import { Button } from "@material-ui/core";

import SearchResults from "./SearchResults/SearchResults";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays • 26 august to 30 august • 2 guest</p>
        <h1>Stays neawrby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More fillters</Button>
      </div>
      <SearchResults
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • kitchen • Free parking • Washing Machine"
        star={4.73}
        price="$30/night"
        total="$117 total"
      />
      <SearchResults
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Independant luxury studio apartment"
        description="2 guest • 3 bedroom • 1 bed • 1.5 shared bthrooms • wifi • kitchen • Free parking • Washing Machine"
        star={4.3}
        price="$40/night"
        total="$157 total"
      />
      <SearchResults
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest • 4 bedroom • 4 bed • 2 bathrooms • kitchen • Free parking • Washing Machine"
        star={3.8}
        price="$35/night"
        total="$207 total"
      />
      <SearchResults
        img="https://miro.medium.com/max/4000/1*tkDMxVXLmvtFXspLqdViDQ.png"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • kitchen • Free parking • Washing Machine"
        star={4.1}
        price="$55/night"
        total="$320 total"
      />
      <SearchResults
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1550,c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • kitchen • Free parking • Dry Cleaning"
        star={5}
        price="$60/night"
        total="$450 total"
      />
      <SearchResults
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • kitchen • Free parking • Washing Machine"
        star={4.23}
        price="$65/night"
        total="$480 total"
      />
      <SearchResults
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • kitchen • Free parking • Washing Machine"
        star={3.85}
        price="$90/night"
        total="$650 total"
      />
    </div>
  );
};

export default SearchPage;
