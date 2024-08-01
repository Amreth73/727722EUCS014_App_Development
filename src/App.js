import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/Loginpage";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/HomePage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./day3/Home";
import About from "./day3/About";
import Contact from "./day3/Contact";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Service from "./day3/service";
import Blog from "./day3/Blog";
import Birthday from "./services/Birthday";
import Charity from "./services/Charity";
import Corporate from "./services/Corporate";
import Cultural from "./services/Cultural";
import Education from "./services/Education";
import PublicEvents from "./services/PublicEvents";
import Sports from "./services/Sports";
import Wedding from "./services/Wedding";
import React, { useState } from "react";
import Payments from "./Payment/Payments";
import { PriceProvider } from "./day3/PriceProvider";
import Statistics from "./day3/Statistics";
import Receipt from "./Payment/Receipt";
import AdminDashboard from "./components/AdminDashboard";
import LoginAdmin from "./components/LoginAdmin";
import Venue from "./components/Venue";
import Homes from "./components/Homes";
import TestAdmin from "./components/TestAdmin";
import Ordercontent from "./Admin/Ordercontent";
import Dashboardcontent from "./Admin/Dashboardcontent";
import Venuecontent from "./Admin/Venuecontent";
import Revenuecontent from "./Admin/RevenuContent";
import Eventcontent from "./Admin/Eventcontent";
import ManageDates from "./components/ManageDates";

import Lottie from "lottie-react";
function App() {
  const venues = [
    {
      id: "1",
      name: "Grand Ballroom",
      location: "123 Celebration Ave, Party City",
      capacity: "500 guests",
      charges: "5000",
      amenities: [
        "Free Wi-Fi",
        "Catering services",
        "Audio/Visual equipment",
        "Valet parking",
      ],
      images: [
        "./venue.png",
        "https://res.cloudinary.com/simplotel/image/upload/x_0,y_63,w_1200,h_674,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-grand-new-delhi/banquet_halls,_the_grand_hotel_new_delhi,_Party_halls_in_Delhi_-11",
        "https://res.cloudinary.com/simplotel/image/upload/x_0,y_81,w_1440,h_810,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-grand-new-delhi/banquet_halls,_the_grand_hotel_new_delhi,_Party_halls_in_Delhi_-9",
        "https://res.cloudinary.com/simplotel/image/upload/x_0,y_62,w_1200,h_676,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-grand-new-delhi/The_Grand_Banquet_Hall_u8za8u",
      ],
      description:
        "The Grand Ballroom is a luxurious venue perfect for weddings, corporate events, and large celebrations. With its elegant decor and state-of-the-art facilities, it offers an unforgettable experience.Exuding sheer luxury, the 6,500 square feet pillar-less ballroom in Vasant Kunj is known to host a diverse range of functions from corporate events, product launches, conferences, seminars to private parties, weddings, fashion shows, exhibitions and more and can easily host over 2000 guests. The ballroom, having a spacious pre-function area and an expansive outdoor garden area adjacent to it, can be further partitioned into separate halls for smaller meetings and conferences. Space extends professional event planner, specialized menus and exotic décor and wired audio-visual technology.",
      contact: "123-456-7890",
      website:
        "https://www.thegrandnewdelhi.com/events-weddings/the-grand-ballroom.html",
    },
    {
      id: "2",
      name: "Elegant Hall",
      location: "456 Party Blvd, Fun City",
      capacity: "300 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "4500",
      images: [
        "https://png.pngtree.com/thumb_back/fw800/background/20230720/pngtree-luxurious-and-elegant-hall-brought-to-life-with-3d-rendering-image_3665452.jpg",
        "https://bookwedgo-prod.s3.amazonaws.com/Mandapam%20Images/NSK%20The%20Grand%20Space/Interior/temp_maTCdaq.jpg",
        "https://bookwedgo-prod.s3.amazonaws.com/Mandapam%20Images/Elegant%20Hall/Interior/temp.jpg",
      ],
      description:
        "Elegant Hall offers a perfect setting for medium-sized gatherings, equipped with modern amenities to ensure a memorable event.",
      contact: "987-654-3210",
      website:
        "https://www.bookwedgo.com/wedding/coimbatore/banquet-hall/elegant-hall-in-telugupalayam/1332",
    },
    {
      id: "3",
      name: "Anugraha Party Hall",
      location: "Kovaipudur, Tamil Nadu 641042",
      capacity: "200 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "3000",
      images: [
        "https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.210319134121.n5u7/catalogue/anugraha-party-hall-gandhi-bazar-bangalore-banquet-halls-07w91n7sh3.jpg",
        "https://content.jdmagicbox.com/comp/coimbatore/w3/0422px422.x422.200315115526.d9w3/catalogue/anugraha-party-hall-kovaipudur-coimbatore-wcqpo75avy.jpg",
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/378/993/new_medium/ss20230328-19331-1vlf7xn.jpg?1679993634",
      ],
      description:
        "Elegant Hall offers a perfect setting for medium-sized gatherings, equipped with modern amenities to ensure a memorable event.Anugraha Party Hall, Coimbatore, lets you host all kinds of intimate affairs as per your convenience. The venue has a banquet hall that would be perfect for hosting small indoor events that you have been planning to host for a very long time. Anugraha Party Hall, Coimbatore, Kovai Pudur has an in-house team of extremely talented and hardworking chefs that can cook food from any cuisine and from any menu from the vegetarian variant.Decorate the whole venue as per the theme of the event with the help of the competent decor team of Anugraha Party Hall, Kovai Pudur, Coimbatore. Being the host of one of the best events ever celebrated is a big deal, and the venue staff looks after all your necessities for your event and makes it look like the perfect event you always wanted to host. At Anugraha Party Hall, Coimbatore, Tamil Nadu, you won`t need to hustle to find the venue because of its location near Priya Hospital, a very well known are among the locals.Make your event one memorable affair by hosting an all-nighter at Anugraha Party Hall, Coimbatore.",
      contact: "987-654-3210",
      website:
        "https://weddingz.in/coimbatore/anugraha-party-hall-kovai-pudur/",
    },
    {
      id: "4",
      name: "Flame Party Halls",
      location: "Saravanampatti, Coimbatore",
      capacity: "250 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "5000",
      images: [
        "https://content.jdmagicbox.com/comp/coimbatore/s5/0422px422.x422.190526190541.u6s5/catalogue/flames-party-halls-saravanampatti-coimbatore-banquet-halls-10xzl8rux4.jpg",
        "https://lh3.googleusercontent.com/pUxdVStZmbN0-xq4x0XWwIQNlErrow4BA1M21jxzNr664ugj_qLy1rNt9Q-6WEcbKbi4XKgx2lHTcxapPV_jn1su=w1082-h971-n-l80-e31",
        "https://cdn0.weddingwire.in/vendor/9433/3_2/960/jpg/1284-554873754551864-452177974-n_15_49433.jpeg",
      ],
      description:
        "Elegant Hall offers a perfect setting for medium-sized gatherings, equipped with modern amenities to ensure a memorable event.",
      contact: "987-654-3210",
      website:
        "https://www.justdial.com/Coimbatore/Flames-Party-Halls-Opposite-to-Kumara-Guru-College-Saravanampatti/0422PX422-X422-190526190541-U6S5_BZDET",
    },
    {
      id: "5",
      name: "Tango ",
      location: "Gopalapuram, Coimbatore",
      capacity: "100 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "2500",
      images: [
        "https://thevendry.com/cdn-cgi/image/width=3840,quality=75,fit=contain,metadata=none,format=auto/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fuploads.thevendry.co%2F24986%2F1668696870511_66407258_2745314985485818_1243513626283737088_n.jpg",
        "https://www.goaweddingvenues.com/uploads/venue/venue_pic/58_234_venue_Taj_Vivanta_Panaji-_Tango.jpg",
        "https://www.venuehub.hk/media/www.venuehub.hk/venue-img/tango/cache/cover-800x600,c,q=75.jpg",
      ],
      description:
        "We are an information based place for venues offering a wide array of choices based on a specific need, be it weddings, social get together, events, conferences, meetings, brand launches. Venue.Events is well equipped to serve individuals, corporates as well as entities engaged in organising events. We facilitate a process of connecting relevant partners with a prospect searching for a right venue. Our mission is to serve as an enabler to a customer for finding the right venue with a selection of attributes at the click of mouse.",
      contact: "987-654-3210",
      website:
        "https://www.bookwedgo.com/wedding/coimbatore/banquet-hall/taj-vivanta-tango/310",
    },
    {
      id: "6",
      name: "The Monarch Hotel",
      location: "Havelock Road, Ooty",
      capacity: "350 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "5500",
      images: [
        "https://media.licdn.com/dms/image/C561BAQGSmQTKy0-rqA/company-background_10000/0/1585483902872/the_monarch_hospitality_cover?e=2147483647&v=beta&t=KRxq5ApzUnQ33Zlf3oUZBrSStABsMcd6Jmek2Lxwzjc",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/365228334.jpg?k=86cf85f794a243b0fcd1b54d0b198659dfebe5c97912807ea370a7d0c0aa0140&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/286294762.jpg?k=a0e73635cffecd480ac3efec7cd0755b4cc3d0585409fabda7074525af0be4ba&o=&hp=1",
      ],
      description:
        '"The Queen of Hill Stations", Ootacamund, popularly know as Ooty was discovered by Britisher, Mr. John Sullivan in 1821. Ooty is located at 7620 feet above sea level, nestled in the Nilgris. The sheer splendor of this romantic hill town is enough to have uninterrupted miles of scenic beauty which would embrace any visitor. One can see the best profiles of nature, each embedded with a distinctive grandeur – its beautiful tea gardens, majestic waterfalls, never – ending forests, lush green meadows, placid lakes, and manicured golf courses.',
      contact: "987-654-3210",
      website: "https://www.monarchooty.in/",
    },
    {
      id: "7",
      name: "Rathneswari Residency",
      location: "Sathyamangal Road Chamarajanag, Chamarajanagar",
      capacity: "200 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "3000",
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178807920.jpg?k=e083af767aab298ef022884eb1a1ea0ff21442a2b952fce21a653411fbe476e9&o=&hp=1",
        "https://content.jdmagicbox.com/comp/def_content_category/oyo/325483467-711062344081841-6825451248260770675-n-oyo-8-h1pbf.jpg",
        "https://srirathneshwariresidency.in/wp-content/uploads/2022/11/rr7.jpg",
      ],
      description:
        "Elegant Hall offers a perfect setting for medium-sized gatherings, equipped with modern amenities to ensure a memorable event.",
      contact: "987-654-3210",
      website:
        "https://www.justdial.com/Chamarajanagar/Rathneshwari-Residency-Somvarpet/9999P8226-8226-170928163102-Y7M4_BZDET",
    },
    {
      id: "8",
      name: "Cumberland Banquet Hall (The Carlton)",
      location: "Kodaikanal",
      capacity: "300 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "4900",
      images: [
        "https://www.venuescanner.com/_next/image?url=https%3A%2F%2Fcdn.venuescanner.com%2Fphotos%2FlVOgL%2Fb04ca62ff0d23620005ffcd302f00e1c.jpg&w=3840&q=75",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/379468731.jpg?k=20f9e7b22c15cb3de72e28c46125d2fa88f633dcbc7b6908b5ddf316a54aa1c3&o=&hp=1",
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/036/977/new_large/ss20230611-21770-319xlg.jpg",
      ],
      description:
        "Wellington is our well-facilitated conference room in Kodaikanal. It is ideal for hosting small-scale formal events like meetings, seminars, presentations and sales pitches, among others. It comes fitted with technical amenities like audio-visual equipment, a projector, Wi-Fi and more, to ensure a successful event.",
      contact: "987-654-3210",
      website: "https://www.carlton-kodaikanal.com/meetings-events.html",
    },
    {
      id: "9",
      name: "Sheffield Hall (The Carlton)",
      location: "Kodaikanal",
      capacity: "400 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "3900",
      images: [
        "https://www.tierneyphotography.co.uk/cache/uploads/blog/2498/1-100_1180_831_90.jpg",
        "https://carlton-park-sheffield.yorkshire-hotel.com/data/Pics/OriginalPhoto/14090/1409021/1409021039/carlton-park-hotel-sheffield-rotherham-pic-37.JPEG",
        "https://carlton-park-sheffield.yorkshire-hotel.com/data/Pics/OriginalPhoto/7088/708859/708859141/carlton-park-hotel-sheffield-rotherham-pic-53.JPEG",
      ],
      description:
        "Elegant Hall offers a perfect setting for medium-sized gatherings, equipped with modern amenities to ensure a memorable event.",
      contact: "987-654-3210",
      website:
        "https://www.crm-students.com/sheffield/bailey-street?gad_source=1&gclid=Cj0KCQjw-5y1BhC-ARIsAAM_oKnRkyi7Ooi43l6j5_ehucp5QFXZYvEhcj8cO17ljZdGjP3YZPn_ncAaAsOxEALw_wcB",
    },
    {
      id: "10",
      name: "Spezia (The Leaf Munnar)",
      location: "Anachal, Idukki",
      capacity: "500 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "5000",
      images: [
        "https://cdn0.weddingwire.in/vendor/6315/3_2/1280/jpg/resorts-destination-weddings-the-lead-munnar-swimming-pool-14_15_366315-162127396148579.jpeg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277578161.jpg?k=0a592d1fade6ed7e529faccb2df736016d438a41515dce6b8763df0bf4c05c76&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277581749.jpg?k=9e6f0d5c33edae7583227953f648327f4e25750efe8b61d553fdae353027c25a&o=&hp=1",
      ],
      description:
        "We specialize in arranging business-events. We can help you to dive into your work without a care. Your meeting should be successful, no matter what you aim for.Our big conference Hall is outfitted with state-of-the-art technical facilities. It is perfect for top level negotiations or board of directors meetings and is best among resorts in Munnar.",
      contact: "987-654-3210",
      website: "https://www.theleafmunnar.com/",
    },
    {
      id: "11",
      name: "The Amphi Theatre (The Raviz Kadavu)",
      location: "Azhinjilam, Kozhikode",
      capacity: "300 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "5500",
      images: [
        "https://www.keralatourism.org/uploads/destination-wedding/images/large/raviz-kadavu-10000-20230601052613499600.jpg",
        "https://www.keralatourism.org/uploads/destination-wedding/banquet_hall/large/rcc-kadavu-20230601053325201842.jpeg",
        "https://cdn0.weddingwire.in/vendor/9125/3_2/960/jpg/kadavu-2_15_359125-160775200310920.webp",
      ],
      description:
        "The location was by the backwaters and quite a wonderful view . The resort itself was inviting and the smiles all around made it more beautiful !! The rooms were quite spacious and comfortable ,The food was not all that great considering that Kozhikode is the Mecca of North Malabar food !! Guess the over dependence on the airline crew who stay there in quite huge numbers make the food too very North Indian -would rather have a good spread of north malabar cuisine what with the best fresh fish/sea food available in plenty !!! beats me why they do this . The people and the resort in itself makes up for the slight let down in the kitchen. The Ayurveda spa is a treat and a great experience - a must try.Overall a wonderful experience.",
      contact: "987-654-3210",
      website:
        "https://www.tripadvisor.in/LocationPhotoDirectLink-g297635-d498672-i356900138-The_Raviz_Kadavu_Kozhikode-Kozhikode_Kozhikode_District_Kerala.html",
    },
    {
      id: "12",
      name: "Arabica (Great Trails Wayanad By GRT Hotels)",
      location: "Pinangode, Wayanad",
      capacity: "200 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "4800",
      images: [
        "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202201191646049062-a31787a2c16611ec93720a58a9feac02.jpg",
        "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202201191646049062-9a0e67a0c16811ecb3f40a58a9feac02.jpg",
        "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202201191646049062-2cca612c698711edb79c0a58a9feac02.jpg",
      ],
      description:
        "The beautiful district of Wayanad is situated in the midst of the rainforests of the majestic Western Ghats. Pristine, rejuvenating and hypnotizing all at the same time, this land is a rich embodiment of adventure, history and culture. Thick green forests, lush wildlife, exciting caves, refreshing waterfalls and a lot more await you in Wayanad. GReaT trails Wayanad by GRT Hotels is now Pet Friendly from 1st June 2023. We are ready to welcome all guests with pets (dogs and cats only). We have all the necessary arrangements, provisions, and policies in place to ensure you and your pets enjoy a comfortable stay.",
      contact: "987-654-3210",
      website: "https://grthotels.com/wayanad",
    },
    {
      id: "13",
      name: "Eden Convention Centre",
      location: "Kadamattam, Ernakulam",
      capacity: "300 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "5100",
      images: [
        "https://edenweddingplanner.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-12-at-12.02.21.jpeg",
        "https://edenconventioncentre.com/images/8.jpg",
        "https://content.jdmagicbox.com/comp/ernakulam/r6/0484px484.x484.190802151530.w4r6/catalogue/eden-convention-centre-kadamattam-ernakulam-banquet-halls-q8199234t8.jpg",
      ],
      description:
        "Elegant Hall offers a perfect setting for medium-sized gatherings, equipped with modern amenities to ensure a memorable event.",
      contact: "987-654-3210",
      website: "https://edenconventioncentre.com/",
    },
    {
      id: "14",
      name: "Champagne (Novotel)",
      location: "Kakkanad, Ernakulam",
      capacity: "350 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "6000",
      images: [
        "https://content3.jdmagicbox.com/comp/def_content/banquet-halls/banquet-halls-2-banquet-halls-15-iuu57.jpg",
        "https://hirespace.imgix.net/spaces/165018/h10553thi5l.jpg?q=20&auto=format",
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/75/2023/10/05085509/2823-59.jpg",
      ],
      description:
        "Whether in city center or near to the station or airport, Novotel hotels are ideally situated in Champagne-Ardenne. Novotel offers a 24-hour reception with a buffet breakfast, Wi-Fi, a large room with a bathtub and a sofa bed for children, who stay for free in their parents room if they are under 16. With its extensive experience, Novotel has developed real expertise in organizing meetings and hiring meeting rooms in Champagne-Ardenne: High-speed wireless Internet, presentation equipment, coordination of breaks, fully-equipped room.",
      contact: "987-654-3210",
      website:
        "https://novotel.accor.com/gb/region/hotels-champagne-ardenne-r0338.shtml",
    },
    {
      id: "15",
      name: "Taj Wayanad Resort & Spa Kerala Ballroom",
      location: "Manjoora, Wayanad",
      capacity: "300 guests",
      amenities: ["DJ Services", "Lighting", "Dance Floor"],
      charges: "3000",
      images: [
        "https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/taj-wayanad-qkgiactm35qmz7y75mia2x1edqri72ugbj5oxzferg.jpg",
        "https://cdn.sanity.io/images/ocl5w36p/production/9edb96c20ad68fa3211944f1b19ccefdcb8833e0-640x880.jpg?w=480&auto=format&dpr=2",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403894544.jpg?k=bf8165ed81a0a16bb1dc711a85fd4dc4e163914f66f2d0f68ee127b75fd9a58e&o=&hp=1",
      ],
      description:
        "From a luxury urban sanctum to the halls of royalty, an idyllic resort to a jungle clearing, our 5-star hotels and luxury resorts bring your imagination to life.",
      contact: "987-654-3210",
      website:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403894544.jpg?k=bf8165ed81a0a16bb1dc711a85fd4dc4e163914f66f2d0f68ee127b75fd9a58e&o=&hp=1",
    },
  ];

  return (
    <PriceProvider>
      <div className="App">
        <div id="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/cultural" element={<Cultural />} />
            <Route path="/education" element={<Education />} />
            <Route path="/publicevents" element={<PublicEvents />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/payment" element={<Payments />} />
            <Route path="/reciept" element={<Receipt />} />
            <Route path="/admin-page" element={<AdminDashboard />} />
            <Route path="/admin-login" element={<LoginAdmin />} />
            <Route path="/venue" element={<Homes venues={venues} />} />
            <Route path="/venue/:id" element={<Venue venues={venues} />} />
            <Route path="/admin" element={<TestAdmin />} />

            <Route path="/venue/:id" element={<Venue venues={venues} />} />
            <Route path="/date-management/:id" element={<ManageDates />} />

            <Route path="/orders" element={<Ordercontent />} />
            <Route path="/dashboard" element={<Dashboardcontent />} />
            <Route path="/venuelist" element={<Venuecontent />} />
            <Route path="/revenue" element={<Revenuecontent />} />
            <Route path="/events" element={<Eventcontent />} />
          </Routes>

          {/* <Statistics /> */}
        </div>
      </div>
    </PriceProvider>
  );
}

export default App;
