
export const CitiesImg = [
  { id: "bangalore", url: require("../assets/cities/bangalore.png"), name: "Bangalore", type: 1, },
  { id: "hyderabad", url: require("../assets/cities/hyderabad.png"), name: "Hyderabad", type: 1 },
  { id: "chennai", url: require("../assets/cities/chennai.png"), name: "Chennai", type: 0 },
  { id: "delhi", url: require("../assets/cities/delhi.png"), name: "Delhi", type: 0 },
  { id: "faridabad", url: require("../assets/cities/faridabad.png"), name: "Faridabad", type: 0 },
  { id: "ghaziabad", url: require("../assets/cities/ghaziabad.png"), name: "Ghaziabad", type: 0 },
  {
    id: "greater_noida",
    url: require("../assets/cities/greater_noida.png"),
    name: "Greater Noida",
    type: 0,
  },
  { id: "gurgaon", url: require("../assets/cities/gurgaon.png"), name: "Gurgaon", type: 0 },
  { id: "mumbai", url: require("../assets/cities/mumbai.png"), name: "Mumbai", type: 0 },
  { id: "noida", url: require("../assets/cities/noida.png"), name: "Noida", type: 0 },
  { id: "pune", url: require("../assets/cities/pune.png"), name: "Pune", type: 0 },
];

export const mainPageMiddleWidth = {
  width: "80%",
  margin: "0px auto",
};

export const mainPageBottomWidth = {
  width: "95%",
  margin: "0px auto",
};

export const PaintingData = {
  id: "Painting",
  src: require("../assets/imageService/painting.png"),
  takeToPath: '/service=Painting',

}

export const CleaningData = {
  id: "Cleaning",
  src: require("../assets/imageService/cleaning.png"),
  takeToPath: '/service=Cleaning',
}

export const HomeSanitization = {
  id: "Home Sanitization",
  src: require("../assets/imageService/home-sanitization.png"),
  takeToPath: '/service=Home Sanitization',
}

export const PestControl = {
  id: "Pest Control",
  src: require("../assets/imageService/pest_control.png"),
  takeToPath: '/service=Pest Control',
}

export const FalseCeilingData = {
  id: "False Ceiling",
  src: require("../assets/imageService/false_ceiling.png"),
  takeToPath: '/service=False Ceiling',
}

export const ACRepair = {
  id: "AC Repair",
  src: require("../assets/imageService/ac_repair.png"),
  takeToPath: '/service=AC Repair',
}

export const Electrician = {
  id: "Electrician",
  src: require("../assets/imageService/electricity.png"),
  takeToPath: '/service=Electrician',
}

export const Carpentry = {
  id: "Carpentry",
  src: require("../assets/imageService/carpentry.png"),
  takeToPath: '/service=Carpentry',
}

export const Plumbing = {
  id: "Plumbing",
  src: require("../assets/imageService/plumbing.png"),
  takeToPath: '/service=Plumbing',
}

export const GlobalServicesBottomListAvailable = [
  { name: "Interiors", url: 'https://www.designelementary.com/' },
  { name: "Property Inspection", url: '#' },
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
    rating: 5,
    text: `"I've never cleaned a house  before and these guys did a dream job. Came home and was amazed at how perfect everything was. The whole process was so easy and really helpful when I needed it. good value for money!"`,
  },
  // { key: 'R', name: 'Raj', text:`"I have never experienced a better company's full reliability and professional service  than Vapormop lite. They have characterized the company to provide effective products that are clean, effective, eco friendly and meet the needs of our families. As an organization, they are completely reliable and  always confident that they will provide exactly what we need in the most economical, environmentally friendly and safe way even in our absence. I highly recommend  their service-oriented approach to professionalism, communication and meeting  deadlines."`},
  {
    key: "Z",
    name: "Zoey Reed",
    rating: 5,
    text: `"Affordable actual and great service. We booked an after party cleaning for the house and garden and the team did an amazing job of getting everything back to normal. They do our hectic work into just few time."`,
  },
  {
    key: "H",
    name: "Hannah Bennett",
    text: `"We ordered carpet cleaning for each room and got a good discount. Carpets clean very well and dry quickly with eco friendly products. Overall good service, punctuality  and well trained professionals are there.."`,
    rating: 4,
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
      "Make your house look like new. Spot free cleaning at lowest actuals",
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
  { name: "Terms & Conditions", url: "/terms-and-conditions" },
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
  { url: '', name: "Property Inspection", tag: true },
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
  'bangalore': [
    { value: "Home Cleaning", url: "/service=Cleaning" },
    // { value: "Home Sanitization", url: '/service=Home Sanitization' },
    // { value: "Pest Control", url: '/service=Pest Control' },
    // { value: "Home Painting", url: "/service=Painting" },
    // { value: "False Ceiling", url: "/service=False Ceiling" },
    // { value: "AC Repair", url: '/service=AC Repair' },
    // { value: "Electrician", url: '/service=Electrician' },
    // { value: "Carpentry", url: '/service=Carpentry' },
    // { value: "Plumbing", url: '/service=Plumbing' },
  ],
  'hyderabad': [
    { value: "Home Cleaning", url: "/service=Cleaning" },
    // { value: "Home Sanitization", url: '/service=Home Sanitization' },
    // { value: "Pest Control", url: '/service=Pest Control' },
    // { value: "Home Painting", url: "/service=Painting" },
    // { value: "False Ceiling", url: "/service=False Ceiling" },
    // { value: "AC Repair", url: '/service=AC Repair' },
    // { value: "Electrician", url: '/service=Electrician' },
    // { value: "Carpentry", url: '/service=Carpentry' },
    // { value: "Plumbing", url: '/service=Plumbing' },
  ],

  '': [
    { value: "No Service Available", url: "" },
  ],
}

export const ServiceWithImage = {
  'bangalore': [

    // fixed data
    { ...CleaningData, offer: "", tag: true, },
    { ...HomeSanitization, offer: "", tag: false, },
    { ...PestControl, offer: "", tag: false, },
    { ...PaintingData, offer: "", tag: false, },
    { ...FalseCeilingData, offer: "", tag: false, },

    // variable data
    { ...ACRepair, offer: "", tag: false, },

    { ...Electrician, offer: "", tag: false, },
    { ...Carpentry, offer: "", tag: false, },
    { ...Plumbing, offer: "", tag: false, },
  ],
  'hyderabad': [

    // fixed data
    { ...CleaningData, offer: "", tag: true, },
    { ...HomeSanitization, offer: "", tag: false, },
    { ...PestControl, offer: "", tag: false, },
    { ...PaintingData, offer: "", tag: false, },
    { ...FalseCeilingData, offer: "", tag: false, },

    // variable data
    { ...ACRepair, offer: "", tag: false, },

    { ...Electrician, offer: "", tag: false, },
    { ...Carpentry, offer: "", tag: false, },
    { ...Plumbing, offer: "", tag: false, },
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
    ans: ["You can reschedule your appointment for apartment/home cleaning services at any time, and you can cancel your appointment with Vapormop's Complete House Cleaning at no cost. You can trust Vapormop to provide you with the most thorough house cleaning services at actuals that are significantly lower than those offered by competitors."],
    panel: "panel2",
  },
  {
    ques: "What is the average Home cleaning actual?",
    ans: "The cost of cleaning your home will depend on numerous variables. A 1 BHK cleaning will typically cost between INR 2,500 and INR 3,000 (India) & starting from $49 in USA. Get the lowest actuals in your city for house cleaning services as well as commercial cleaning services in your city with the help of the Vapormop.",
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
        Obviously, actual is a major concern. The cost of improving your property can be directly impacted by a number of factors, including:
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
    { type: 'Consulation', actual: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'actual quotation(s) customized to your needs' },]
}


export const InteriorPainting = {
  imgUrl: require('../assets/other/painting.jpg'),
  innerData: [
    { type: 'Consulation', actual: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'actual quotation(s) customized to your needs' },]
}

export const ExteriorPainitng = {
  imgUrl: require('../assets/other/out_painting.jpg'),
  innerData: [
    { type: 'Consulation', actual: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'actual quotation(s) customized to your needs' },]
}


export const WaterProofing = {
  imgUrl: require('../assets/other/painting.jpg'),
  innerData: [
    { type: 'Consulation', actual: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'actual quotation(s) customized to your needs' },]
}

export const WallsWallPapers = {
  imgUrl: require('../assets/other/wallpapers.jpg'),
  innerData: [
    { type: 'Consulation', actual: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'actual quotation(s) customized to your needs' },]
}

export const FalseCeiling = {
  imgUrl: require('../assets/other/false_ceiling.jpg'),
  innerData: [
    { type: 'Consulation', actual: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'actual quotation(s) customized to your needs' },]
}

export const EnamelPolish = {
  imgUrl: require('../assets/other/painting.jpg'),
  innerData: [
    { type: 'Consulation', actual: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'actual quotation(s) customized to your needs' },]
}


//disinfection data
export const DisinfectionService = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: 'Apartment 1 Bhk', actual: '' },
    { type: 'Apartment 2 Bhk', actual: '' },
    { type: 'Apartment 3 Bhk', actual: '' },
    { type: 'Apartment 4 Bhk', actual: '' },
    { type: 'Apartment 5 Bhk', actual: '' },
    { type: 'Bunglow (2000/3000 sq ft)', actual: '' },
    { type: 'Car Hatchback', actual: '' },
    { type: 'Car Sedan', actual: '' },
    { type: 'Premium Sedan', actual: '' },
    { type: 'Sub-Compact SUV', actual: '' },
    { type: 'SUV/MUV', actual: '' },
    { type: 'Luxury ', actual: '' },
  ],
  quotes: [{ text: 'Floor Scubbing machine' }, { text: 'Government approved chemicals' }, { text: 'Hard water stains can be removed upto 75%' }, { text: 'Also includes balcony and utility areas' }]
}


//cleaning data
export const MoveInReadyHomeServices = [
  { type: '1 Bhk', actual: '' },
  { type: '2 Bhk', actual: '' },
  { type: '3 Bhk', actual: '' },
  { type: '4 Bhk', actual: '' },
]



export const FullHouseDeepCleaning = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: "Classic Full Home Cleaning (Furnished)", actual: '2999', discount: '2999' },
    { type: "Premium Full Home Cleaning (Furnished)", actual: '4499', discount: '4499' },
    { type: "Platinum Full Home Cleaning (Furnished)", actual: '5499', discount: '5499' },
    { type: "Classic Full Home Cleaning (UnFurnished)", actual: '2699', discount: '2699' },
    { type: "Premium Full Home Cleaning (UnFurnished)", actual: '4049', discount: '4049' },
    { type: "Classic Full Bungalow Cleaning (Furnished)", actual: '4799', discount: '4799' },
    { type: "Premium Full Bungalow Cleaning (Furnished)", actual: '7299', discount: '7299' },
    { type: "Classic Full Bungalow Cleaning (UnFurnished)", actual: '4899', discount: '4899' },
    { type: "Premium Full Bungalow Cleaning (UnFurnished)", actual: '6249', discount: '6249' },
  ],
  quotes: [{ text: 'Floor Scubbing machine' }, { text: 'Government approved chemicals' }, { text: 'Hard water stains can be removed upto 75%' }, { text: 'Also includes balcony and utility areas' }]
}

export const FullHouseBasicCleaning = {
  imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'),
  innerData: [
    { type: 'Furnished Bedroom', actual: '799', discount: '799' },
    { type: 'Unfurnished Bedroom', actual: '799', discount: '799' },
    { type: 'Furnished Living Room', actual: '949', discount: '949' },
    { type: 'Unfurnished Living Room', actual: '899', discount: '899' },
    { type: 'Occupied Kitchen Cleaning', actual: '1548', discount: '1548' },
    { type: 'Occupied Kitchen Cleaning with Chimney', actual: '1947', discount: '1947' },
    { type: 'Occupied Kitchen Cleaning with Appliances', actual: '1897', discount: '1897' },
    { type: 'Occupied Kitchen Cleaning with Appliances & Chimney', actual: '2296', discount: '2296' },
    { type: 'Empty Kitchen Clean', actual: '1099', discount: '1099' },
    { type: 'Empty Kitchen Clean with Chiemney', actual: '1499', discount: '1499' },
    { type: 'Balcony', actual: '249', discount: '249' },
    { type: 'Complete Bathroom Cleaning', actual: '499', discount: '499' },
  ],
  quotes: [{ text: 'Government approved chemicals' }, { text: 'Descaling of floors, tiles, WC, Wash Basin, taps, fixtures' }, { text: ' Hard water stains can be removed upto 75%' }]
}


export const AddonServices = {
  imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'),
  innerData: [
    { type: '2 cupbards\' wet wiping (except kitchen)', actual: '299', discount: '299' },
    { type: 'Refrigerator cleaning', actual: '349', discount: '349' },
    { type: 'Carpet shampooing (up to 25 sq ft)', actual: '399', discount: '399' },
    { type: 'Sofa & cushions\' shampooing (up to 5)', actual: '699', discount: '699' },
    { type: 'Sticker, glue & rigid paint mark removal', actual: '599', discount: '599' },
    { type: 'Furniture wet wiping', actual: '499', discount: '499' },
    { type: 'Home renovation waste disposal', actual: '299', discount: '299' },
  ],
  quotes: [{ text: 'Government approved chemicals' }, { text: 'Descaling of floors, tiles, WC, Wash Basin, taps, fixtures' }, { text: ' Hard water stains can be removed upto 75%' }]
}


export const BathroomCleaning = {
  imgUrl: require('../assets/other/bathroomCleaning.jpg'),
  innerData: [
    { type: 'Classic Cleaning - 2 Bathroom', actual: '718', discount: '798' },
    { type: 'Intense Cleaning - 2 Bathroom', actual: '898', discount: '998' },
    { type: 'Classic Cleaning - 3 Bathroom', actual: '1037', discount: '1197' },
    { type: 'Intense Cleaning - 3 Bathroom', actual: '1297', discount: '1497' },
    { type: 'Classic Bathroom Cleaning', actual: '399', discount: '399' },
    { type: 'Intense Bathroom Cleaning', actual: '499', discount: '499' },
    { type: 'Move in Bathroom Cleaning', actual: '549', discount: '549' },
  ],
  quotes: [{ text: 'Government approved chemicals' }, { text: 'Descaling of floors, tiles, WC, Wash Basin, taps, fixtures' }, { text: ' Hard water stains can be removed upto 75%' }]
}


export const SofaCleaning = {
  imgUrl: require('../assets/other/sofaCleaning.jpg'),
  innerData: [
    { type: 'Sofa Cleaning', actual: '499', discount: '499' },
    { type: 'Cushions', actual: '149', discount: '149' },
    { type: 'Carpet Cleaning', actual: '399', discount: '399' },
  ],
  quotes: [{ text: 'Shampooing of sofa seats' }, { text: 'Dry and wet vacuuming' }, { text: 'Cushions not included' }]
}

export const KitchenCleaning = {
  imgUrl: require('../assets/other/kitchenCleaning.jpg'),
  innerData: [
    { type: 'Move in - Kitchen Cleaning', actual: '1059', discount: '1059' },
    { type: 'Complete Kitchen Cleaning', actual: '1779', discount: '1779' },
    { type: 'Chimney Cleaning', actual: '599', discount: '599' },
    { type: 'Fridge Deep Cleaning', actual: '349', discount: '349' },
  ],
  quotes: [{ text: 'Floor Scubbing machine' }, { text: 'Cleaning of gas stoves, tiles, slabs' }, { text: 'Exterior Degreasing of chimney and exhaust fan' }, { text: 'Chimney filter cleaning' }]
}

export const MiniServices = {
  imgUrl: require('../assets/other/miniServices.jpeg'),
  innerData: [
    { type: '2 Ceiling fan cleaning', actual: '98', discount: '98' },
    { type: 'Cleaning fan', actual: '49', discount: '49' },
    { type: 'Bathroom Exaust Fan', actual: '89', discount: '89' },
    { type: 'Kitchen Sink Cleaning', actual: '99', discount: '99' },
    { type: 'Utensels Removing and Placing Back', actual: '399', discount: '399' },
    { type: 'Gas Stove Cleaning', actual: '99', discount: '99' },
    { type: 'Microwave Cleaning', actual: '150', discount: '150' },
    { type: 'Trolley & Shelves Cleaning', actual: '899', discount: '899' },
    { type: 'Balcony Cleaning', actual: '399', discount: '399' },
    { type: "Dining Table and Chairs Cleaning", actual: '299', discount: '299' },
    { type: "Mattress Cleaning", actual: '399', discount: '399' },
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
    // { imgUrl: require('../assets/other/miniServices.jpeg'), type: 'Add on', options: AddonServices },
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
