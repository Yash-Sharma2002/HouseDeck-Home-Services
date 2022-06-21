

export const CitiesImg = [
  { id: "bangalore", url: require("../assets/cities/bangalore.png"), name: "Bangalore", },
  { id: "chennai", url: require("../assets/cities/chennai.png"), name: "Chennai" },
  { id: "delhi", url: require("../assets/cities/delhi.png"), name: "Delhi" },
  { id: "faridabad", url: require("../assets/cities/faridabad.png"), name: "Faridabad" },
  { id: "ghaziabad", url: require("../assets/cities/ghaziabad.png"), name: "Ghaziabad" },
  {
    id: "greater_noida",
    url: require("../assets/cities/greater_noida.png"),
    name: "Greater Noida",
  },
  { id: "gurgaon", url: require("../assets/cities/gurgaon.png"), name: "Gurgaon" },
  { id: "hyderabad", url: require("../assets/cities/hyderabad.png"), name: "Hyderabad" },
  { id: "mumbai", url: require("../assets/cities/mumbai.png"), name: "Mumbai" },
  { id: "noida", url: require("../assets/cities/noida.png"), name: "Noida" },
  { id: "pune", url: require("../assets/cities/pune.png"), name: "Pune" },
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
  { name: "Home Inspection", url: '#' },
  { name: "Home services", url: '/home-services' },
  { name: "Home services questions", url: '/home-services/faqs' },

];
export const GlobalServicesBottomListNotAvailable = [
  { name: "Housedeck for NRIs", url: '' },
  { name: "Property Management", url: '' },
  { name: "Packers and movers", url: '' },
  { name: "Rent services questions", url: '' },
  { name: "Home Loan ELigiblity Check", url: '' },
]

export const IconHeaderImage = {
  width: "15px",
  marginRight: 8,
  marginLeft: -8,
};

export const isLogin = false;

export const CustomerRatings = [
  {
    key: "S",
    name: "Sunita Singh",
    text: `"I've never cleaned a house  before and these guys did a dream job. Came home and was amazed at how perfect everything was. The whole process was so easy and really helpful when I needed it. good value for money!"`,
  },
  // { key: 'R', name: 'Raj', text:`"I have never experienced a better company's full reliability and professional service  than HouseDeck lite. They have characterized the company to provide effective products that are clean, effective, eco friendly and meet the needs of our families. As an organization, they are completely reliable and  always confident that they will provide exactly what we need in the most economical, environmentally friendly and safe way even in our absence. I highly recommend  their service-oriented approach to professionalism, communication and meeting  deadlines."`},
  {
    key: "S",
    name: "Shweta Tiwari",
    text: `"Affordable price and great service. We booked an after party cleaning for the house and garden and the team did an amazing job of getting everything back to normal. They do our hectic work into just few time."`,
  },
  {
    key: "T",
    name: "Tina Anand",
    text: `"We ordered carpet cleaning for each room and got a good discount. Carpets clean very well and dry quickly with eco friendly products. Overall good service, punctuality  and well trained professionals are there.."`,
  },
];

export const RecommendedServicesData = [
  {
    key: "painting",
    img: require("../assets/services/painting.jpg"),
    title: "Home Painting Service",
    subText: "Book your free consultation to get accurate quote.",
    colorText: "Book Consultation",
    url: '/home-services/service=Home Painting'
  },
  {
    key: "cleaning",
    img: require("../assets/services/cleaning.jpg"),
    title: "Home Cleaning Service",
    subText:
      "Make your house look like new. Spot free cleaning at lowest prices",
    colorText: "Book Now",
    url: '/home-services/service=Home Cleaning'
  },
  {
    key: "pnm",
    img: require("../assets/services/pnm.jpg"),
    title: "Packer and Movers",
    subText: "Guaranteed On-time | Safe Delivery",
    colorText: "Estimate Moving Cost",
    url: '/home-services'
  },
];

export const FooterLink = [
  { name: "Home", url: "/home-services" },
  { name: "About Us", url: "/home-services/about-us" },
  { name: "Privacy Policy", url: "/home-services/privacy-policy" },
  { name: "Return Exchange & Refund", url: "/home-services/return-exchange-and-refund", },
  { name: "FAQs", url: "/home-services/faqs" },
  { name: "Housedeck Partner (Home Services)", url: "/home-services/housedeck-partner-(Terms-of-Use)" },
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
  { url: 'https://housedeck.in/book-free-online-consultation/', name: "Home Interior", tag: true },
  { url: 'https://housedecklite.com/home-inspection/', name: "Home Inspection", tag: true },
  { url: '/home-services/service=Home Painting', name: "Painting", tag: true },
  { url: '', name: 'False Ceiling', tag: false },
  { url: '', name: 'Pay Utility bills', tag: false },
  { url: '', name: 'Rent Furniture', tag: false },
  { url: '', name: 'Buy Furniture', tag: false },
  { url: '', name: 'Storage Solution', tag: false },
  { url: '', name: 'Packers & Movers', tag: false },
  { url: 'https://housedeck.in/magazine/', name: 'HouseDeck Ideas', tag: true },
]



export const SearchBar = {
  'bangalore': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
    // { value: "Electrician", url: '/home-services/service=Electrician' },
    // { value: "Carpentary", url: '/home-services/service=Carpentary' },
    // { value: "Plumbing", url: '/home-services/service=Plumbing' },
  ],
  'noida': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
  ],
  'mumbai': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
    // { value: "Electrician", url: '/home-services/service=Electrician' },
    // { value: "Carpentary", url: '/home-services/service=Carpentary' },
    // { value: "Plumbing", url: '/home-services/service=Plumbing' },
  ],
  'chennai': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
    // { value: "Electrician", url: '/home-services/service=Electrician' },
    // { value: "Carpentary", url: '/home-services/service=Carpentary' },
    // { value: "Plumbing", url: '/home-services/service=Plumbing' },
  ],
  'pune': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
    // { value: "Electrician", url: '/home-services/service=Electrician' },
    // { value: "Carpentary", url: '/home-services/service=Carpentary' },
    // { value: "Plumbing", url: '/home-services/service=Plumbing' },
  ],
  'hyderabad': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
  ],
  'gurgaon': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
  ],
  'ghaziabad': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
    // { value: "Electrician", url: '/home-services/service=Electrician' },
    // { value: "Carpentary", url: '/home-services/service=Carpentary' },
    // { value: "Plumbing", url: '/home-services/service=Plumbing' },
  ],
  'delhi': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
  ],
  'faridabad': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
    // { value: "Electrician", url: '/home-services/service=Electrician' },
  ],
  'greater_noida': [
    { value: "Home Painting", url: "/home-services/service=Home Painting" },
    { value: "Home Cleaning", url: "/home-services/service=Home Cleaning" },
    { value: "False Ceiling", url: "/home-services/service=Home Cleaning" },
    // { value: "Home Sanitization", url: '/home-services/service=Home Sanitization' },
    // { value: "Pest Control", url: '/home-services/service=Pest Control' },
    // { value: "AC Repair", url: '/home-services/service=AC Repair' },
  ],
  '': [
    { value: "No Service Available", url: "" },
  ],
}

export const ServiceWithImage = {
  'bangalore': [

    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',
    },

    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',

    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      takeToPath: '/home-services/service=Carpentary',
      tag: false,
    },
    {
      id: "Plumbing", src: require("../assets/imageService/plumbing.png"), offer: "Coming Soon", tag: false, takeToPath: '/home-services/service=Plumbing',
    },
  ],
  'chennai': [

    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',
    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },

    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',

    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      takeToPath: '/home-services/service=Carpentary',
      tag: false,
    },
    { id: "Plumbing", src: require("../assets/imageService/plumbing.png"), offer: "Coming Soon", tag: false, takeToPath: '/home-services/service=Plumbing', },
  ],
  'mumbai': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',

    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      takeToPath: '/home-services/service=Carpentary',
      tag: false,
    },
    { id: "Plumbing", src: require("../assets/imageService/plumbing.png"), offer: "Coming Soon", tag: false, takeToPath: '/home-services/service=Plumbing', },
  ],
  'pune': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',

    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      takeToPath: '/home-services/service=Carpentary',
      offer: "Coming Soon",
      tag: false,
    },
    { id: "Plumbing", src: require("../assets/imageService/plumbing.png"), offer: "Coming Soon", tag: false, takeToPath: '/home-services/service=Plumbing', },
  ],
  'hyderabad': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',
    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Carpentary',
    },
    {
      id: "Plumbing",
      src: require("../assets/imageService/plumbing.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Plumbing',
    },
  ],
  'gurgaon': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',
    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Carpentary',
    },
    {
      id: "Plumbing",
      src: require("../assets/imageService/plumbing.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Plumbing',
    },
  ],
  'delhi': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',
    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Carpentary',
    },
    {
      id: "Plumbing",
      src: require("../assets/imageService/plumbing.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Plumbing',
    },
  ],
  'noida': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',
    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Carpentary',
    },
    {
      id: "Plumbing",
      src: require("../assets/imageService/plumbing.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Plumbing',
    },
  ],
  'greater_noida': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',
    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Carpentary',
    },
    {
      id: "Plumbing",
      src: require("../assets/imageService/plumbing.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Plumbing',
    },
  ],
  'ghaziabad': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    { id: "Plumbing", src: require("../assets/imageService/plumbing.png"), offer: "Coming Soon", tag: false, takeToPath: '/home-services/service=Plumbing', },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',

    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Carpentary',
    },
  ],
  'faridabad': [
    // fixed data
    {
      id: "Painting",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Painting',

    },
    {
      id: "Cleaning",
      src: require("../assets/imageService/cleaning.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=Home Cleaning',
    },
       {
      id: "False Ceiling",
      src: require("../assets/imageService/painting.png"),
      offer: "",
      tag: true,
      takeToPath: '/home-services/service=False Ceiling',

    },
    {
      id: "Home Sanitization",
      src: require("../assets/imageService/home-sanitization.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Home Sanitization',

    },
    {
      id: "Pest Control",
      src: require("../assets/imageService/pest_control.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Pest Control',
    },
    // variable data
    {
      id: "AC Repair",
      src: require("../assets/imageService/ac_repair.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=AC Repair',

    },
    {
      id: "Electrician",
      src: require("../assets/imageService/electricity.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Electrician',

    },
    {
      id: "Carpentary",
      src: require("../assets/imageService/carpentary.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Carpentary',
    },
    {
      id: "Plumbing",
      src: require("../assets/imageService/plumbing.png"),
      offer: "Coming Soon",
      tag: false,
      takeToPath: '/home-services/service=Plumbing',
    },
  ],
  '': [
    {
      id: "Not Available",
      src: '',
      offer: "Coming Soon",
      tag: true,
      takeToPath: '',

    }
  ]

}
export const FAQData = [
  {
    ques: "Why choose Housedeck Home Services?",
    ans: (
      <div>
        Housedeck Home Services provides safe, professional, trusted painting
        services to give your home a painting makeover. Get your home painted in
        3 easy steps:
        <br /> <br />
        1.Book a site visit <br /> 2.Get an instant quotation <br />
        3.Enjoy hassle-free home painting
      </div>
    ),
    panel: "panel1",
  },
  {
    ques: "What are the cities that Housedeck Home Services currently operates in?",
    ans: ["Bangalore, Pune. We are launching soon in Chennai, Hyderabad."],
    panel: "panel2",
  },
  {
    ques: "Is the site visit chargeable??",
    ans: "Yes, we charge 49/- for site visit.",
    panel: "panel3",
  },
  {
    ques: "Can I get 1 wall or 1 room painted?",
    ans: "Yes, we take up projects with 1 wall or 1 room requirement. The minimum project value should be Rs.5,000/-",
    panel: "panel4",
  },
  {
    ques: "What should I expect during the site visit?",
    ans: "Our Housedeck Consultant will visit your home and take measurements. Based on the on-site conditions and your needs, they will suggest suitable options and share multiple options across paint brands and types. They will also give you a walkthrough of how the project will go ahead if you decide to go ahead with us.",
    panel: "panel5",
  },
  {
    ques: "Where does housedeck source paint material from?",
    ans: "All material is sourced from authorized brand stores only, therefore you can be assured of quality. We ensure that all material is genuine through regular checks when the material is delivered on-site and during execution.",
    panel: "panel6",
  },
  {
    ques: "Can I see few shade samples to choose paint color?",
    ans: "Housedeck Consultant will show you the paint shade card to help you choose the right shade for your home. We don’t offer trial samples on the wall.",
    panel: "panel7",
  },
  {
    ques: "What are the payment options available?",
    ans: "On Housedeck payment gateway you can pay using a credit card, debit card, net banking, UPI options. You can also pay via cheque. Cash payments are acceptable up to a certain amount. Please check with your Housedeck Consultant for guidance. Please note a non-refundable gateway fee of 2% is applicable on payments made for a project against certain payment options. This information is communicated on the payment page.",
    panel: "panel8",
  },
  {
    ques: "Can I see few shade samples to choose paint color?",
    ans: "Housedeck Consultant will show you the paint shade card to help you choose the right shade for your home. We don’t offer trial samples on the wall.",
    panel: "panel9",
  },
  {
    ques: "What are the payment terms?",
    ans: "We collect 50% payment 3 days before the start of the project. This helps in partial material procurement and allocating vendors. The balance amount is collect midway. For eg.: If your project schedule is for 6 days, we request you to make the final 50% payment at end of the 3rd day.",
    panel: "panel10",
  },
  {
    ques: "What are the payment options available?",
    ans: "On Housedeck payment gateway you can pay using a credit card, debit card, net banking, UPI options. You can also pay via cheque. Cash payments are acceptable up to a certain amount. Please check with your Housedeck Consultant for guidance. Please note a non-refundable gateway fee of 2% is applicable on payments made for a project against certain payment options. This information is communicated on the payment page.",
    panel: "panel11",
  },
  {
    ques: "Who will work on my home painting project?",
    ans: "On booking a site visit, you will be assigned an Housedeck Consultant who will be your point of contact for measurement and quotation. During site execution, Housedeck Pro will help you with managing the project.",
    panel: "panel12",
  },
  {
    ques: "Who will undertake the execution of my painting project?",
    ans: "We work with skilled workmen with significant experience in delivering painting projects across the city. They are skilled to complete all types of painting requirements on time and with quality.",
    panel: "panel13",
  },
  {
    ques: "How can I track my project?",
    ans: "Your Housedeck Consultant will create a common communication group (WhatsApp, Email) where regular updates will be shared.",
    panel: "panel14",
  },
  {
    ques: "How much time will it take to complete my project?",
    ans: "Completing a painting project depends on the type of job i.e. fresh painting, repainting, rental painting as well as the work front available and site condition. For eg.: A typical 2bhk repainting requirement with full home available as work front should take about 4-5 days. Your Housedeck Consultant will be able to give you an estimate during consultation.",
    panel: "panel15",
  },
  {
    ques: "Can I stay in my home when it is getting painted?",
    ans: "Yes, absolutely. We can take up painting your home in stages (say 2 rooms at a time) to ensure a smooth, hassle-free experience.",
    panel: "panel16",
  },
  {
    ques: "I have concerns about my project? Who can I reach out to?",
    ans: "On the common communication group, we will have an Housedeck Consultant, Housedeck Pro, and Area Manager. You can ask your queries on this group for any updates.",
    panel: "panel17",
  },
  {
    ques: "Who will audit the quality of the project?",
    ans: "Each project will have a Supervisor who monitors progress, shares work plan with the workers on-site on daily basis. The Housedeck Pro will also audit the quality on a regular basis.",
    panel: "panel18",
  },
  {
    ques: "Can I provide my own material for the painting project?",
    ans: "No, this option is not available.",
    panel: "panel19",
  },
  {
    ques: "How soon can the work begin?",
    ans: "We can start 3 days after payment of 50% of the project amount.",
    panel: "panel20",
  },
  {
    ques: "Who will audit the quality of the project?",
    ans: "Each project will have a Supervisor who monitors progress, shares work plan with the workers on-site on daily basis. The Housedeck Pro will also audit the quality on a regular basis.",
    panel: "panel21",
  },
  {
    ques: "Can I postpone or cancel my project?",
    ans: (
      <div>
        In case of emergencies, you can choose to postpone your project from the
        planned date by discussing it with your Housedeck team on the common
        communication group. You can postpone up to 15 days from initially
        planned date. Beyond that, it will be treated as a canceled project.{" "}
        <br />
        For cancellations before 3 days from the start date, we can refund the
        paid-up amount. <br />
        If you'd like to cancel within 3 days of the project start date, we will
        not be able to refund the amount. However, we will deliver the procured
        paint material to your home.
      </div>
    ),
    panel: "panel22",
  },
  {
    ques: "What is the warranty offered?",
    ans: "Housedeck offers a standard 1-year warranty on the service workmanship of the painting project.",
    panel: "panel23",
  },
  {
    ques: "How can I claim a warranty?",
    ans: "Please write to care@housedecklite.com or call 8046809045 with details and an Housedeck representative will get in touch with you within 2 working days.",
    panel: "panel24",
  },
  {
    ques: "What are the warranty terms & conditions?",
    ans: (
      <div>
        If a defect is found upon inspection by Housedeck Home Services
        authorized representative, the defect will be rectified in accordance
        with the claim terms below.
        <br /> <br /> The warranty policy shall apply where: <br />
        <br /> 1.The overall paint surface area exceeds 100 square feet, subject
        to satisfactory inspection of the surface painted by Housedeck's
        representative. <br /> 2.Housedeck shall provide replacement paint, as
        long as the particular paint code (paint code is necessary) is not
        discontinued by the manufacturer. <br /> 3.Paint failure shall mean any
        of the following occurrences <br /> 4.Film integrity, flaking, and
        peeling of the paint, caused by one coat of paint coming off from
        another or the paint film coming off from the substrate
        <br /> 5.Fading of the color shade <br /> 6.Growth of fungus and algae
        on wall surfaces (spread over a minimum area of 10 sq. feet) <br />{" "}
        7.The customer has used the entire paint system recommended by
        Housedeck. This is applicable for fresh painting, repainting or rental
        painting projects.
        <br />
        <br /> The warranty policy shall be void in the following events: <br />
        <br />
        1.Intermittent dripping of water due to proximity of vegetation or
        air-conditioning units or any other sources of water leakage like plant
        pots. <br /> 2.Water penetration due to capillary rise from the ground
        level, water leakage, seeping, and continuous dampness of the surface.
        <br /> 3.Defects arising due to contamination of surface and
        failure/defects in the structure. <br />
        <br />
        The replacement cost includes the cost of paint and labor required to
        set right the area of paint failure, at the time of claim lodged.
        <br /> <br /> In coastal areas fading and chalking occur with all
        surfaces. Within normal limits, this is not considered a failure.
        <br /> <br /> Damage caused to the painted surface due to fire,
        excessive heat exposure, corrosive agents, abrasive materials, or by the
        customer including without limitation due to rework/fitting work done by
        the customer after handover.
        <br />
        <br /> Any structural cracks or cracks arising due to structure
        deformity shall not be covered under.
      </div>
    ),
    panel: "panel25",
  },
];


// Painting Data
export const HomePainting = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}


export const InteriorPainting = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}

export const ExteriorPainitng = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}


export const WaterProofing = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}

export const WallsWallPapers = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}

export const FalseCeiling = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
  innerData: [
    { type: 'Consulation', price: '49' },
  ],
  quotes: [{ text: 'Consultation Duration Up to 50 min' }, { text: 'Visiting Team :  1-2 Experts' }, { text: 'Laser Measurement' }, { text: 'Design Consultation' }, { text: 'Experience Expert Professionals To handle the Project' }, { text: '100% Customization' }, { text: 'Price quotation(s) customized to your needs' },]
}

export const EnamelPolish = {
  imgUrl: require('../assets/other/deepHomeCleaning.jpeg'),
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


//home cleaning data
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
    { type: 'Fridge Cleaning', price: '' },
    { type: 'Carpet Wet Shampooing & Vacumming (25 sq ft)', price: '349' },
    { type: 'Cushion Cleaning (Set of 5)', price: '139' },
    { type: 'Mattress Cleaning', price: '349' },
    { type: 'Curtains Cleaning (Set of 2)', price: '89' }
  ],
  quotes: [{ text: 'Floor Scubbing machine' }, { text: 'Government approved chemicals' }, { text: 'Hard water stains can be removed upto 75%' }, { text: 'Also includes balcony and utility areas' }]
}

export const ServiceDialogData = {
  'home_cleaning': [
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'House Basic Cleaning', options: FullHouseBasicCleaning },
    { imgUrl: require('../assets/other/deepHomeCleaning.jpeg'), type: 'Full House Deep Cleaning', options: FullHouseDeepCleaning },
    { imgUrl: require('../assets/other/kitchenCleaning.jpg'), type: 'Kitchen Cleaning', options: KitchenCleaning },
    { imgUrl: require('../assets/other/bathroomCleaning.jpg'), type: 'Bathroom Cleaning', options: BathroomCleaning },
    { imgUrl: require('../assets/other/sofaCleaning.jpg'), type: 'Sofa Cleaning', options: SofaCleaning },
    { imgUrl: require('../assets/other/miniServices.jpeg'), type: 'Mini Services', options: MiniServices },
  ],
  'home_painting': [
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'Painting Consultation', options: HomePainting },
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'Interior Painting', options: InteriorPainting },
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'Exterior Painting', options: ExteriorPainitng },
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'WaterProofing', options: WaterProofing },
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'Textured Walls & Wallpapers', options: WallsWallPapers },
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'Wood & Enamel Polish', options: EnamelPolish },
  ],
  'false_ceiling': [
    { imgUrl: require('../assets/other/essentialHomeCleaning.jpeg'), type: 'False Ceiling (POP)', options: FalseCeiling },
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
