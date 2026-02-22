export interface CityData {
  name: string;
  slug: string;
  shortIntro: string;
  neighborhoods: string[];
  commonRepairs: string[];
  localFaqs: { q: string; a: string }[];
}

export const CITY_DATA: Record<string, CityData> = {
  toronto: {
    name: "Toronto",
    slug: "toronto",
    shortIntro: "As Toronto's trusted fitness equipment repair specialists, we serve homeowners, condos, and commercial gyms across the city. From downtown high-rises to suburban homes, we provide fast, professional service.",
    neighborhoods: [
      "Downtown Toronto", "Midtown", "North York", "Scarborough", "Etobicoke", "East York", "York",
      "The Annex", "Kensington Market", "Queen West", "King West", "Liberty Village", "The Beaches",
      "Leslieville", "Danforth", "High Park", "Junction", "Bloor West Village", "Yonge & Eglinton"
    ],
    commonRepairs: [
      "Treadmill belt slipping and wear",
      "Elliptical resistance motor failures",
      "Exercise bike squeaking and pedal issues",
      "Console display errors and blank screens",
      "Motor overheating in high-use equipment",
      "Incline system malfunctions"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Toronto?", a: "Yes, we often have same-day or next-day availability for Toronto residents. Contact us to check current scheduling." },
      { q: "Do you repair equipment in condos/apartments in Toronto?", a: "Absolutely! We regularly service fitness equipment in Toronto condos, apartments, and condo gym facilities." },
      { q: "Is there a travel/diagnostic fee for Toronto?", a: "We charge a flat diagnostic fee that includes travel within the GTA. This fee is waived if you proceed with the repair." },
      { q: "What brands do you service in Toronto?", a: "We service all major brands including NordicTrack, ProForm, Life Fitness, Precor, Bowflex, Peloton, and many more." },
      { q: "How quickly can I book a visit in Toronto?", a: "Most Toronto appointments can be booked within 1-3 business days, depending on availability." }
    ]
  },
  etobicoke: {
    name: "Etobicoke",
    slug: "etobicoke",
    shortIntro: "Serving Etobicoke and its diverse neighborhoods, we bring expert fitness equipment repair right to your home or facility. Our technicians know the area well and provide reliable, convenient service.",
    neighborhoods: [
      "Humber Bay", "Mimico", "The Queensway", "Islington-City Centre West", "Rexdale", "Kingsway",
      "Long Branch", "Alderwood", "Eatonville", "Markland Wood"
    ],
    commonRepairs: [
      "Belt slipping and deck wear",
      "Loud grinding noises from motors",
      "Incline/decline mechanism failures",
      "Console errors and connectivity issues",
      "Resistance system problems",
      "Power supply failures"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Etobicoke?", a: "Yes, we frequently have same-day availability for Etobicoke. Contact us to check current scheduling." },
      { q: "Do you repair equipment in condos/apartments in Etobicoke?", a: "Yes! We service equipment in Etobicoke condos, apartment buildings, and residential homes." },
      { q: "Is there a travel/diagnostic fee for Etobicoke?", a: "Our flat diagnostic fee covers travel within the GTA including Etobicoke. Fee waived with repair completion." },
      { q: "What brands do you service in Etobicoke?", a: "We repair all major brands: NordicTrack, ProForm, Life Fitness, Precor, Bowflex, Sole, and more." },
      { q: "How quickly can I book a visit in Etobicoke?", a: "Etobicoke appointments are typically available within 1-3 business days." }
    ]
  },
  oakville: {
    name: "Oakville",
    slug: "oakville",
    shortIntro: "Oakville residents trust Gold Fitness Repair for professional gym equipment service. We cover all of Oakville from the lakeshore to the northern communities with fast, reliable repairs.",
    neighborhoods: [
      "Downtown Oakville", "Glen Abbey", "River Oaks", "Bronte", "Kerr Village", "Iroquois Ridge North",
      "College Park", "Palermo", "Uptown Core"
    ],
    commonRepairs: [
      "Treadmill motor overheating",
      "Elliptical stride length issues",
      "Exercise bike resistance calibration",
      "Console software updates needed",
      "Belt tension and alignment",
      "Deck lubrication and maintenance"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Oakville?", a: "We often have same-day or next-day availability for Oakville residents. Call to confirm." },
      { q: "Do you repair equipment in condos/apartments in Oakville?", a: "Yes, we service condos, townhomes, and houses throughout Oakville." },
      { q: "Is there a travel/diagnostic fee for Oakville?", a: "Our diagnostic fee includes travel to Oakville. It's waived if you proceed with repairs." },
      { q: "What brands do you service in Oakville?", a: "We service NordicTrack, ProForm, Life Fitness, Precor, Bowflex, Peloton, Technogym, and more." },
      { q: "How quickly can I book a visit in Oakville?", a: "Most Oakville appointments can be scheduled within 2-4 business days." }
    ]
  },
  burlington: {
    name: "Burlington",
    slug: "burlington",
    shortIntro: "Burlington homeowners and gyms rely on Gold Fitness Repair for expert equipment service. We provide convenient scheduling and professional repairs throughout the city.",
    neighborhoods: [
      "Aldershot", "Downtown Burlington", "The Orchard", "Alton Village", "Tyandaga", "Millcroft",
      "Brant Hills", "Shoreacres", "Appleby"
    ],
    commonRepairs: [
      "Belt replacement and tensioning",
      "Motor brush replacement",
      "Incline motor repairs",
      "Console display issues",
      "Resistance system failures",
      "Squeaking and grinding noises"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Burlington?", a: "Same-day service is often available for Burlington. Contact us for current availability." },
      { q: "Do you repair equipment in condos/apartments in Burlington?", a: "Yes! We service condos, apartments, and homes across Burlington." },
      { q: "Is there a travel/diagnostic fee for Burlington?", a: "Our flat diagnostic fee covers Burlington. It's credited toward your repair if you proceed." },
      { q: "What brands do you service in Burlington?", a: "We repair all major brands including NordicTrack, ProForm, Sole, Life Fitness, and more." },
      { q: "How quickly can I book a visit in Burlington?", a: "Burlington appointments are usually available within 2-4 business days." }
    ]
  },
  milton: {
    name: "Milton",
    slug: "milton",
    shortIntro: "Milton's growing community trusts Gold Fitness Repair for reliable gym equipment service. We bring professional repairs directly to your home or commercial facility.",
    neighborhoods: [
      "Old Milton", "Dempsey", "Clarke", "Beaty", "Timberlea", "Scott",
      "Willmott", "Harrison", "Ford", "Cobden"
    ],
    commonRepairs: [
      "Treadmill belt wear and replacement",
      "Motor controller failures",
      "Console connectivity problems",
      "Incline calibration issues",
      "Pedal and crank repairs",
      "Power surge damage"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Milton?", a: "Yes, we frequently have same-day availability for Milton residents." },
      { q: "Do you repair equipment in condos/apartments in Milton?", a: "We service all residential and commercial properties in Milton." },
      { q: "Is there a travel/diagnostic fee for Milton?", a: "Our diagnostic fee includes travel to Milton and is waived with completed repairs." },
      { q: "What brands do you service in Milton?", a: "We service NordicTrack, ProForm, Bowflex, Life Fitness, Precor, and many more." },
      { q: "How quickly can I book a visit in Milton?", a: "Milton appointments are typically available within 2-3 business days." }
    ]
  },
  georgetown: {
    name: "Georgetown",
    slug: "georgetown",
    shortIntro: "Georgetown and Halton Hills residents count on Gold Fitness Repair for dependable fitness equipment service. We provide professional repairs for home and commercial gyms.",
    neighborhoods: [
      "Downtown Georgetown", "Glen Williams", "Delrex", "Stewarttown", "Halton Hills",
      "Acton", "Limehouse"
    ],
    commonRepairs: [
      "Belt slipping and deck issues",
      "Motor bearing replacement",
      "Console error codes",
      "Incline motor failures",
      "Resistance sensor problems",
      "Frame and structural repairs"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Georgetown?", a: "Same-day service is often available for Georgetown. Call to confirm availability." },
      { q: "Do you repair equipment in condos/apartments in Georgetown?", a: "Yes, we service all types of properties in Georgetown and Halton Hills." },
      { q: "Is there a travel/diagnostic fee for Georgetown?", a: "Our flat diagnostic fee includes travel to Georgetown and is waived with repairs." },
      { q: "What brands do you service in Georgetown?", a: "We repair all major brands: NordicTrack, ProForm, Life Fitness, Bowflex, and more." },
      { q: "How quickly can I book a visit in Georgetown?", a: "Georgetown appointments are usually available within 2-4 business days." }
    ]
  },
  brampton: {
    name: "Brampton",
    slug: "brampton",
    shortIntro: "Brampton's largest and most trusted fitness equipment repair service. We cover all Brampton neighborhoods with fast, professional repairs for home and commercial equipment.",
    neighborhoods: [
      "Downtown Brampton", "Bramalea", "Mount Pleasant", "Heart Lake", "Springdale", "Fletcher's Meadow",
      "Castlemore", "Peel Village", "Sandalwood", "Credit Valley", "Mayfield"
    ],
    commonRepairs: [
      "Treadmill motor failures",
      "Belt slipping and wear",
      "Console display problems",
      "Incline system issues",
      "Resistance calibration",
      "Power supply repairs"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Brampton?", a: "Yes, we often have same-day availability for Brampton residents." },
      { q: "Do you repair equipment in condos/apartments in Brampton?", a: "Absolutely! We service condos, apartments, townhomes, and houses throughout Brampton." },
      { q: "Is there a travel/diagnostic fee for Brampton?", a: "Our diagnostic fee covers travel within the GTA including Brampton. Fee waived with repair." },
      { q: "What brands do you service in Brampton?", a: "We service all major brands: NordicTrack, ProForm, Life Fitness, Precor, Peloton, and more." },
      { q: "How quickly can I book a visit in Brampton?", a: "Brampton appointments are typically available within 1-3 business days." }
    ]
  },
  mississauga: {
    name: "Mississauga",
    slug: "mississauga",
    shortIntro: "Mississauga's premier fitness equipment repair service. From Port Credit to Meadowvale, we provide expert repairs and maintenance for treadmills, ellipticals, bikes, and more.",
    neighborhoods: [
      "City Centre", "Square One", "Port Credit", "Cooksville", "Erin Mills", "Streetsville", "Meadowvale",
      "Creditview", "Clarkson", "Churchill Meadows", "Lisgar", "Malton", "Lakeview"
    ],
    commonRepairs: [
      "Treadmill belt and deck replacement",
      "Elliptical motor failures",
      "Exercise bike resistance issues",
      "Console software errors",
      "Incline motor repairs",
      "Bearing and roller replacement"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Mississauga?", a: "Yes, we frequently have same-day or next-day availability for Mississauga." },
      { q: "Do you repair equipment in condos/apartments in Mississauga?", a: "Yes! We regularly service Square One condos, apartment buildings, and condo gyms." },
      { q: "Is there a travel/diagnostic fee for Mississauga?", a: "Our flat diagnostic fee includes Mississauga. It's credited toward your repair cost." },
      { q: "What brands do you service in Mississauga?", a: "We service NordicTrack, ProForm, Life Fitness, Precor, Bowflex, Sole, Peloton, and more." },
      { q: "How quickly can I book a visit in Mississauga?", a: "Most Mississauga appointments are available within 1-3 business days." }
    ]
  },
  "north-york": {
    name: "North York",
    slug: "north-york",
    shortIntro: "North York residents trust Gold Fitness Repair for reliable gym equipment service. We cover all North York neighborhoods from Willowdale to Downsview with fast, professional repairs.",
    neighborhoods: [
      "Willowdale", "Downsview", "Yorkdale", "Lawrence Manor", "Don Mills", "Bayview Village",
      "Flemingdon Park", "Parkwoods", "Humber Summit"
    ],
    commonRepairs: [
      "Treadmill motor and belt issues",
      "Elliptical stride problems",
      "Console display failures",
      "Resistance motor repairs",
      "Incline mechanism fixes",
      "Power supply issues"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in North York?", a: "Yes, same-day service is often available for North York residents." },
      { q: "Do you repair equipment in condos/apartments in North York?", a: "Absolutely! We service condos, apartments, and condo gyms throughout North York." },
      { q: "Is there a travel/diagnostic fee for North York?", a: "Our diagnostic fee covers travel to North York and is waived with completed repairs." },
      { q: "What brands do you service in North York?", a: "We repair all major brands: NordicTrack, ProForm, Life Fitness, Precor, Bowflex, and more." },
      { q: "How quickly can I book a visit in North York?", a: "North York appointments are typically available within 1-2 business days." }
    ]
  },
  vaughan: {
    name: "Vaughan",
    slug: "vaughan",
    shortIntro: "Vaughan's trusted fitness equipment repair specialists. We serve Maple, Woodbridge, Kleinburg, and all Vaughan communities with professional repairs and maintenance.",
    neighborhoods: [
      "Maple", "Woodbridge", "Concord", "Kleinburg", "Thornhill",
      "Vellore Village", "Sonoma Heights", "Patterson", "Beverley Glen"
    ],
    commonRepairs: [
      "Belt replacement and tensioning",
      "Motor overheating issues",
      "Console connectivity problems",
      "Incline calibration",
      "Resistance system failures",
      "Deck lubrication"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Vaughan?", a: "Yes, we frequently have same-day availability for Vaughan residents." },
      { q: "Do you repair equipment in condos/apartments in Vaughan?", a: "Yes! We service condos, townhomes, and houses throughout Vaughan." },
      { q: "Is there a travel/diagnostic fee for Vaughan?", a: "Our flat diagnostic fee includes Vaughan. It's credited if you proceed with repairs." },
      { q: "What brands do you service in Vaughan?", a: "We service NordicTrack, ProForm, Life Fitness, Precor, Bowflex, Peloton, and more." },
      { q: "How quickly can I book a visit in Vaughan?", a: "Vaughan appointments are usually available within 1-3 business days." }
    ]
  },
  "richmond-hill": {
    name: "Richmond Hill",
    slug: "richmond-hill",
    shortIntro: "Richmond Hill homeowners and gyms rely on Gold Fitness Repair for expert equipment service. We provide professional repairs throughout Richmond Hill and Oak Ridges.",
    neighborhoods: [
      "Oak Ridges", "Richmond Hill Centre", "Langstaff", "Mill Pond", "Crosby",
      "Bayview Hill", "Jefferson", "Rouge Woods", "Observatory"
    ],
    commonRepairs: [
      "Treadmill belt slipping",
      "Elliptical motor issues",
      "Console display errors",
      "Incline motor failures",
      "Resistance calibration",
      "Bearing replacement"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Richmond Hill?", a: "Yes, same-day service is often available for Richmond Hill residents." },
      { q: "Do you repair equipment in condos/apartments in Richmond Hill?", a: "Absolutely! We service condos, apartments, and homes in Richmond Hill." },
      { q: "Is there a travel/diagnostic fee for Richmond Hill?", a: "Our diagnostic fee includes travel to Richmond Hill. Waived with completed repairs." },
      { q: "What brands do you service in Richmond Hill?", a: "We repair all major brands: NordicTrack, ProForm, Life Fitness, Bowflex, and more." },
      { q: "How quickly can I book a visit in Richmond Hill?", a: "Richmond Hill appointments are typically available within 2-3 business days." }
    ]
  },
  scarborough: {
    name: "Scarborough",
    slug: "scarborough",
    shortIntro: "Scarborough's reliable fitness equipment repair service. From Agincourt to Highland Creek, we bring professional repairs directly to your home or commercial gym.",
    neighborhoods: [
      "Scarborough Town Centre", "Agincourt", "Guildwood", "West Hill", "Birch Cliff",
      "Cliffside", "Malvern", "Rouge", "Highland Creek", "Dorset Park"
    ],
    commonRepairs: [
      "Treadmill belt and motor issues",
      "Elliptical noise problems",
      "Console software updates",
      "Incline system repairs",
      "Pedal and crank fixes",
      "Power board replacement"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Scarborough?", a: "Yes, we often have same-day availability for Scarborough residents." },
      { q: "Do you repair equipment in condos/apartments in Scarborough?", a: "Yes! We regularly service condos, apartments, and condo gyms in Scarborough." },
      { q: "Is there a travel/diagnostic fee for Scarborough?", a: "Our flat diagnostic fee covers travel to Scarborough. Waived with repair completion." },
      { q: "What brands do you service in Scarborough?", a: "We service NordicTrack, ProForm, Life Fitness, Precor, Bowflex, Sole, and more." },
      { q: "How quickly can I book a visit in Scarborough?", a: "Scarborough appointments are typically available within 1-3 business days." }
    ]
  }
};

export const CITY_SLUGS = Object.keys(CITY_DATA);

export const getCityBySlug = (slug: string): CityData | undefined => {
  return CITY_DATA[slug];
};
