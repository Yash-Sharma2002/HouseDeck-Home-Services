
export const CitiesImg = [
  { id: "new_york", url: require("../assets/cities/new-york.png"), name: "New York", },
  { id: "california", url: require("../assets/cities/california.png"), name: "California", },
  { id: "chicago", url: require("../assets/cities/chicago.png"), name: "Chicago", },
];

export const mainPageMiddleWidth = {
  width: "80%",
  margin: "0px auto",
};

export const mainPageBottomWidth = {
  width: "95%",
  margin: "0px auto",
};

export const GlobalServicesBottomListAvailable = [
  { name: "Interiors", url: '#' },
  { name: "Business Inspection", url: '#' },
  { name: "Services", url: '/' },
  { name: "Services questions", url: '/faqs' },

];
export const GlobalServicesBottomListNotAvailable = [
  // { name: "Vapormop for NRIs", url: '' },
  // { name: "Property Management", url: '' },
  // { name: "Packers and movers", url: '' },
  // { name: "Rent services questions", url: '' },
  // { name: "Home Loan ELigiblity Check", url: '' },
]

export const IconHeaderImage = {
  width: "15px",
  marginRight: 8,
  marginLeft: -8,
};

export const isLogin = false;

export const CustomerRatings = [
  {
    key: "E",
    name: "Emily Davis",
    rating:5,
    text: `"I've never cleaned a house  before and these guys did a dream job. Came home and was amazed at how perfect everything was. The whole process was so easy and really helpful when I needed it. good value for money!"`,
  },
  // { key: 'R', name: 'Raj', text:`"I have never experienced a better company's full reliability and professional service  than Vapormop lite. They have characterized the company to provide effective products that are clean, effective, eco friendly and meet the needs of our families. As an organization, they are completely reliable and  always confident that they will provide exactly what we need in the most economical, environmentally friendly and safe way even in our absence. I highly recommend  their service-oriented approach to professionalism, communication and meeting  deadlines."`},
  {
    key: "Z",
    name: "Zoey Reed",
    rating:5,
    text: `"Affordable price and great service. We booked an after party cleaning for the house and garden and the team did an amazing job of getting everything back to normal. They do our hectic work into just few time."`,
  },
  {
    key: "H",
    name: "Hannah Bennett",
    text: `"We ordered carpet cleaning for each room and got a good discount. Carpets clean very well and dry quickly with eco friendly products. Overall good service, punctuality  and well trained professionals are there.."`,
    rating:4,
  },
];

export const RecommendedServicesData = [
  {
    key: "painting",
    img: require("../assets/services/painting.jpg"),
    title: "Home Painting Service",
    subText: "Book your free consultation to get accurate quote.",
    colorText: "Book Consultation",
    url: '/service=Painting'
  },
  {
    key: "cleaning",
    img: require("../assets/services/cleaning.jpg"),
    title: "Cleaning Service",
    subText:
      "Make your house look like new. Spot free cleaning at lowest prices",
    colorText: "Book Now",
    url: '/service=Cleaning'
  },
  // {
  //   key: "pnm",
  //   img: require("../assets/services/pnm.jpg"),
  //   title: "Packer and Movers",
  //   subText: "Guaranteed On-time | Safe Delivery",
  //   colorText: "Estimate Moving Cost",
  //   url: ''
  // },
];
export const FooterLink = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Return Exchange & Refund", url: "/return-exchange-and-refund", },
  { name: "FAQs", url: "/faqs" },
  { name: "Vapormop Partner (Services)", url: "/Vapormop-partner-(Terms-of-Use)" },
];

export const TopCarouselData = [
  { url: require("../assets/topCarousel/banner1.png") },
  { url: require("../assets/topCarousel/banner2.png") },
  { url: require("../assets/topCarousel/banner3.png") },
];

export const OtherPageTopCarouselData = [
  { url: require("../assets/otherPageBanner/1.png") },
  { url: require("../assets/otherPageBanner/2.png") },
  { url: require("../assets/otherPageBanner/3.png") },
  { url: require("../assets/otherPageBanner/4.png") },
  { url: require("../assets/otherPageBanner/5.png") },
  { url: require("../assets/otherPageBanner/6.png") },
  { url: require("../assets/otherPageBanner/7.png") },
];


export const DrawerData = [
  { url: 'https://designelementary.com/', name: "Home Interior", tag: true },
  { url: '', name: "Busniness Inspection", tag: true },
  { url: '/service=Painting', name: "Painting", tag: true },
  { url: '/service=False Ceiling', name: 'False Ceiling', tag: true },
  // { url: '', name: 'Pay Utility bills', tag: false },
  // { url: '', name: 'Rent Furniture', tag: false },
  // { url: '', name: 'Buy Furniture', tag: false },
  // { url: '', name: 'Storage Solution', tag: false },
  // { url: '', name: 'Packers & Movers', tag: false },
  { url: '', name: 'Vapormop Ideas', tag: true },
]



export const SearchBar = {
  'new_york': [
    { value: "Home Cleaning", url: "/service=Cleaning" },
    { value: "Home Sanitization", url: '/service=Home Sanitization' },
    { value: "Pest Control", url: '/service=Pest Control' },
    { value: "Home Painting", url: "/service=Painting" },
    { value: "False Ceiling", url: "/service=False Ceiling" },
    { value: "AC Repair", url: '/service=AC Repair' },
    { value: "Electrician", url: '/service=Electrician' },
    { value: "Carpentry", url: '/service=Carpentry' },
    { value: "Plumbing", url: '/service=Plumbing' },
  ],
  'chicago': [
    { value: "Home Cleaning", url: "/service=Cleaning" },
    { value: "Home Sanitization", url: '/service=Home Sanitization' },
    { value: "Pest Control", url: '/service=Pest Control' },
    { value: "Home Painting", url: "/service=Painting" },
    { value: "False Ceiling", url: "/service=False Ceiling" },
    { value: "AC Repair", url: '/service=AC Repair' },
  ],
  'california': [
    { value: "Home Cleaning", url: "/service=Cleaning" },
    { value: "Home Sanitization", url: '/service=Home Sanitization' },
    { value: "Pest Control", url: '/service=Pest Control' },
    { value: "Home Painting", url: "/service=Painting" },
    { value: "False Ceiling", url: "/service=False Ceiling" },
    { value: "AC Repair", url: '/service=AC Repair' },
    { value: "Electrician", url: '/service=Electrician' },
    { value: "Carpentry", url: '/service=Carpentry' },
    { value: "Plumbing", url: '/service=Plumbing' },
  ],
  '': [
    { value: "No Service Available", url: "" },
  ],
}

export const ServiceWithImage = {
  'new_york': [

    // fixed data
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Cleaning',
    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Pest Control',
    },
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Painting',

    },
    {
      id: "False Ceiling",
      src: require("../assets/imageService/false_ceiling.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=False Ceiling',

    },

    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=AC Repair',
    },

    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Electrician',

    },
    {
      id: "Carpentry",
      src: require("../assets/imageService/carpentry.png"),
      offer: "",
      takeToPath: '/service=Carpentry',
      tag: true,
    },
    {
      id: "Plumbing", src: require("../assets/imageService/plumbing.png"), offer: "", tag: true, takeToPath: '/service=Plumbing',
    },
  ],
  'chicago': [

    // fixed data

    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Cleaning',
    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Pest Control',
    },
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Painting',
    },
    {
      id: "False Ceiling",
      src: require("../assets/imageService/false_ceiling.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=False Ceiling',

    },

    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=AC Repair',

    },

    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Electrician',

    },
    {
      id: "Carpentry",
      src: require("../assets/imageService/carpentry.png"),
      offer: "",
      takeToPath: '/service=Carpentry',
      tag: true,
    },
    { id: "Plumbing", src: require("../assets/imageService/plumbing.png"), offer: "", tag: true, takeToPath: '/service=Plumbing', },
  ],
  'california': [
    // fixed data

    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Cleaning',
    },

    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Pest Control',
    },
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Painting',

    },
    {
      id: "False Ceiling",
      src: require("../assets/imageService/false_ceiling.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=False Ceiling',

    },
    
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "",
      tag: true,
      takeToPath: '/service=Electrician',

    },
    {
      id: "Carpentry",
      src: require("../assets/imageService/carpentry.png"),
      offer: "",
      takeToPath: '/service=Carpentry',
      tag: true,
    },
    { id: "Plumbing", src: require("../assets/imageService/plumbing.png"), offer: "", tag: true, takeToPath: '/service=Plumbing', },
  ],
  '': [
    {
      id: "Not Available",
      src: '',
      offer: "",
      tag: true,
      takeToPath: '',

    }
  ]

}
export const FAQData = [
  {
    ques: "What do full house cleaning services involve?",
    ans: (
      <div>
        When you hire a professional cleaning services, you can expect your home to be spotless upon completion. Cleaning professionals will use detergents, tools, and cleaning supplies designed for the particular surface being cleaned or stain is removed.

      </div>
    ),
    panel: "panel1",
  },
  {
    ques: "What is the cancellation policy for Vapormop Professional Home Cleaning Services?",
    ans: ["You can reschedule your appointment for apartment/home cleaning services at any time, and you can cancel your appointment with Vapormop's Complete House Cleaning at no cost. You can trust Vapormop to provide you with the most thorough house cleaning services at prices that are significantly lower than those offered by competitors."],
    panel: "panel2",
  },
  {
    ques: "What is the average Home cleaning price?",
    ans: "The cost of cleaning your home will depend on numerous variables. A 1 BHK cleaning will typically cost between INR 2,500 and INR 3,000 (India) & starting from $49 in USA. Get the lowest prices in your city for house cleaning services as well as commercial cleaning services in your city with the help of the Vapormop.",
    panel: "panel3",
  },
  {
    ques: "How should I clean my empty house?",
    ans: "An empty house may have accumulated a lot of dust and cobwebs, so cleaning and organizing it is an important part of housekeeping. It's best practice to wash cleaning rags and masks before moving in any furniture and to wear masks while cleaning an empty home. Instead, you can use the Vapormop to schedule a professional cleaning crew to come in while you're out of town.    ",
    panel: "panel4",
  },
  {
    ques: "What is the first thing to do when you are cleaning your house?",
    ans: "Taking care of the dust is the first step in a thorough house cleaning. The sweeping can be done manually with a broom or mechanically with a vacuum cleaner. You can use the NoBroker app to arrange a home care cleaning service for your home.",
    panel: "panel5",
  },
  {
    ques: "Do you run background checks on employees / Partners?",
    ans: "Background checks on potential employees/partners are the responsibility of the cleaning firm you are considering hiring. However Vapormop has exclusive tie-ups with the best rated & insured partners to serve its customers in the operating cities. Vapormop works closely with the partners to be on top of the verification & only the best get to serve our customers.",
    panel: "panel6",
  },
  {
    ques: "Do you have cleaning supplies and equipment?",
    ans: "The last thing you want to happen is to engage a cleaning service or housekeeper, only for them to arrive to clean without any cleaning supplies in their possession or in view. Some cleaning services want you to supply their products, while others supply their own. Make sure to provide your cleaner the particular product and instructions you want them to use at the beginning of the cleaning if there is one.",
    panel: "panel7",
  },
  {
    ques: "What is included in house cleaning services ?",
    ans: "Various people have different expectations of their housekeepers. Some individuals prefer to manage the everyday cleaning themselves and save the housekeeper for bigger tasks like deep cleaning bathrooms or cleaning baseboards, while others prefer to hire someone to come in and conduct the daily cleaning. Make sure the services you desire are truly covered by asking the housekeeper about their rates before hiring them.",
    panel: "panel8",
  },
  {
    ques: "What must I do with my pets?",
    ans: "Even if your housekeeper prefers that you keep animals apart in a room or crate, you should still make sure they get a chance to interact and get to know one another. This will give them time to get to know one another.",
    panel: "panel9",
  },
  {
    ques: "What cleaning supplies and equipment do you employ?",
    ans: "Most cleaning businesses have a particular brand of cleaning supplies. If you don't use the same brand, don't be hesitant to request that they use your preferred product. Or, even better, offer the ones you already have at home. You can politely inquire with the company if they use brand new cleaning tools for every assignment to prevent germs from entering your home through shared cleaning gear. If not, you can give them the equipment you already have or let them use it.",
    panel: "panel10",
  },
  {
    ques: "Can I postpone or cancel my project?",
    ans: (
      <div>
        Obviously, price is a major concern. The cost of improving your property can be directly impacted by a number of factors, including:
        <br />
        <ul>
          <li> During the initial appointment, an hourly charge is typically provided.</li>
          <li>  Whatever specialty cleaning service you want to hire</li>
          <li>  How many cleaners they'll send</li>
          <li>   The home's dimensions</li>
        </ul>
      </div>
    ),
    panel: "panel22",
  },

];


// Painting Data
export const HomePainting = {
  imgUrl: require('../assets/other/painting.jpg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}


export const InteriorPainting = {
  imgUrl: require('../assets/other/painting.jpg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}

export const ExteriorPainitng = {
  imgUrl: require('../assets/other/out_painting.jpg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}


export const WaterProofing = {
  imgUrl: require('../assets/other/painting.jpg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}

export const WallsWallPapers = {
  imgUrl: require('../assets/other/wallpapers.jpg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}

export const FalseCeiling = {
  imgUrl: require('../assets/other/false_ceiling.jpg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}

export const EnamelPolish = {
  imgUrl: require('../assets/other/painting.jpg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}


//disinfection data
export const DisinfectionService = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: 'Apartment 1 Bhk', price: '' },
    { type: 'Apartment 2 Bhk', price: '' },
    { type: 'Apartment 3 Bhk', price: '' },
    { type: 'Apartment 4 Bhk', price: '' },
    { type: 'Apartment 5 Bhk', price: '' },
    { type: 'Bunglow (2000/3000 sq ft)', price: '' },
    { type: 'Car Hatchback', price: '' },
    { type: 'Car Sedan', price: '' },
    { type: 'Premium Sedan', price: '' },
    { type: 'Sub-Compact SUV', price: '' },
    { type: 'SUV/MUV', price: '' },
    { type: 'Luxury ', price: '' },
  ],
  quotes: [{ text: 'Floor Scubbing machine' }, { text: 'Government approved chemicals' }, { text: 'Hard water stains can be removed upto 75%' }, { text: 'Also includes balcony and utility areas' }]
}


//cleaning data
export const MoveInReadyHomeServices = [
  { type: '1 Bhk', price: '' },
  { type: '2 Bhk', price: '' },
  { type: '3 Bhk', price: '' },
  { type: '4 Bhk', price: '' },
]

export const FullHouseDeepCleaning = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: '1 RK Full House Deep Cleaning', price: '3349' },
    { type: '1 BHK Full House Deep Cleaning', price: '3999' },
    { type: '2 BHK Full House Deep Cleaning', price: '4399' },
    { type: '3 BHK Full House Deep Cleaning', price: '5349' },
    { type: '4 BHK Full House Deep Cleaning', price: '7349' },
    { type: '5 BHK Full House Deep Cleaning', price: '8599' },
    { type: '1 BHK Full House Deep Cleaning (Duplex)', price: '4499' },
    { type: '2 BHK Full House Deep Cleaning (Duplex)', price: '5349' },
    { type: '3 BHK Full House Deep Cleaning (Duplex)', price: '7449' },
    { type: '4 BHK Full House Deep Cleaning (Duplex)', price: '8499' },
    { type: '5 BHK Full House Deep Cleaning (Duplex)', price: '9549' },
  ],
  quotes: [{ text: 'Floor Scubbing machine' }, { text: 'Government approved chemicals' }, { text: 'Hard water stains can be removed upto 75%' }, { text: 'Also includes balcony and utility areas' }]
}

export const FullHouseBasicCleaning = {
  imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'),
  innerData: [
    { type: '1 BHK Full House Deep Cleaning', price: '1899' },
    { type: '2 BHK Full House Deep Cleaning', price: '2299' },
    { type: '3 BHK Full House Deep Cleaning', price: '2599' },
    { type: '4 BHK Full House Deep Cleaning', price: '3549' },
  ],
  quotes: [{ text: 'Government approved chemicals' }, { text: 'Descaling of floors, tiles, WC, Wash Basin, taps, fixtures' }, { text: ' Hard water stains can be removed upto 75%' }]
}

export const BathroomCleaning = {
  imgUrl: require('../assets/other/bathroomCleaning.jpg'),
  innerData: [
    { type: 'Bathroom Cleaning (1 No.)', price: '448' },
    { type: 'Bathroom Cleaning (2 No.)', price: '898' },
    { type: 'Bathroom Cleaning (3 No.)', price: '1399' },
    { type: 'Bathroom Cleaning (4 No.)', price: '1798' },
    { type: 'Bathroom Cleaning (5 No.)', price: '2249' },
  ],
  quotes: [{ text: 'Government approved chemicals' }, { text: 'Descaling of floors, tiles, WC, Wash Basin, taps, fixtures' }, { text: ' Hard water stains can be removed upto 75%' }]
}

export const SofaCleaning = {
  imgUrl: require('../assets/other/sofaCleaning.jpg'),
  innerData: [
    { type: 'Sofa Cleaning (2 No.)', price: '318' },
    { type: 'Sofa Cleaning (3 No.)', price: '398' },
    { type: 'Sofa Cleaning (4 No.)', price: '649' },
    { type: 'Sofa Cleaning (5 No.)', price: '748' },
    { type: 'Sofa Cleaning (6 No.)', price: '898' },
    { type: 'Sofa Cleaning (7 No.)', price: '1098' },
    { type: 'Sofa Cleaning (8 No.)', price: '1199' },
    { type: 'Sofa Cleaning (9 No.)', price: '1298' },
    { type: 'Sofa Cleaning (10 No.)', price: '1598' },
    { type: 'Cushion Cleaning (6-10 No.)', price: '219' },
    { type: 'Cushion Cleaning (1-5 No.)', price: '158' },
  ],
  quotes: [{ text: 'Shampooing of sofa seats' }, { text: 'Dry and wet vacuuming' }, { text: 'Cushions not included' }]
}

export const KitchenCleaning = {
  imgUrl: require('../assets/other/kitchenCleaning.jpg'),
  innerData: [
    { type: 'Full Kitchen with Chimney', price: '1498' },
    { type: 'Full Kitchen without Chimney', price: '1298' },
    { type: 'Chimney', price: '959' },
    { type: 'Trolley & Shelf', price: '999' },
  ],
  quotes: [{ text: 'Floor Scubbing machine' }, { text: 'Cleaning of gas stoves, tiles, slabs' }, { text: 'Exterior Degreasing of chimney and exhaust fan' }, { text: 'Chimney filter cleaning' }]
}

export const MiniServices = {
  imgUrl: require('../assets/other/miniServices.jpeg'),
  innerData: [
    { type: 'Mirror Cleaning', price: '29' },
    { type: 'Ceiling Fan Cleaning', price: '39' },
    { type: 'Window Cleaning', price: '139' },
    { type: 'Toilet Seat Stain Removal', price: '109' },
    { type: 'Wash Basin Cleaning', price: '49' },
    { type: 'Exhaust Fan Cleaning', price: '79' },
    { type: 'Kitchen Sink Cleaning', price: '79' },
    { type: 'Gas Stove (HOB) Cleaning', price: '89' },
    { type: 'Microwave Cleaning', price: '139' },
    { type: 'Dining Table Cleaning', price: '249' },
    { type: 'Trolley & Shelves cleaning', price: '749' },
    { type: 'Balcony Cleaning', price: '179' },
    { type: 'Fridge Cleaning', price: '89' },
    { type: 'Carpet Wet Shampooing & Vacumming (25 sq ft)', price: '349' },
    { type: 'Cushion Cleaning (Set of 5)', price: '139' },
    { type: 'Mattress Cleaning', price: '349' },
    { type: 'Curtains Cleaning (Set of 2)', price: '89' }
  ],
  quotes: [{ text: 'Floor Scubbing machine' }, { text: 'Government approved chemicals' }, { text: 'Hard water stains can be removed upto 75%' }, { text: 'Also includes balcony and utility areas' }]
}

export const ServiceDialogData = {
  'cleaning': [
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'House Basic Cleaning', options: FullHouseBasicCleaning },
    { imgUrl: require('../assets/other/deepHomeCleaning.jpeg'), type: 'Full House Deep Cleaning', options: FullHouseDeepCleaning },
    { imgUrl: require('../assets/other/kitchenCleaning.jpg'), type: 'Kitchen Cleaning', options: KitchenCleaning },
    { imgUrl: require('../assets/other/bathroomCleaning.jpg'), type: 'Bathroom Cleaning', options: BathroomCleaning },
    { imgUrl: require('../assets/other/sofaCleaning.jpg'), type: 'Sofa Cleaning', options: SofaCleaning },
    { imgUrl: require('../assets/other/miniServices.jpeg'), type: 'Mini Services', options: MiniServices },
  ],
  'painting': [
    { imgUrl: require('../assets/other/out_painting.jpg'), type: 'Painting Consultation', options: HomePainting },
    { imgUrl: require('../assets/other/out_painting.jpg'), type: 'Interior Painting', options: InteriorPainting },
    { imgUrl: require('../assets/other/painting.jpg'), type: 'Exterior Painting', options: ExteriorPainitng },
    { imgUrl: require('../assets/other/painting.jpg'), type: 'WaterProofing', options: WaterProofing },
    { imgUrl: require('../assets/other/wallpapers.jpg'), type: 'Textured Walls & Wallpapers', options: WallsWallPapers },
    { imgUrl: require('../assets/other/painting.jpg'), type: 'Wood & Enamel Polish', options: EnamelPolish },
  ],
  'false_ceiling': [
    { imgUrl: require('../assets/other/out_false_ceiling.jpg'), type: 'False Ceiling (POP)', options: FalseCeiling },
  ],
  'home_sanitization': [
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'Disinfection Service', options: DisinfectionService },
  ],
  'pest_control': [
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'It is not forwarded to me yet', options: FullHouseBasicCleaning },
  ],
  '': [
    { imgUrl: '', type: 'House Basic Cleaning', options: null },
  ],
}
