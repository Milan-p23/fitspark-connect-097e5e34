export interface CityData {
  name: string;
  slug: string;
  shortIntro: string;
  neighborhoods: string[];
  commonRepairs: string[];
  localFaqs: { q: string; a: string }[];
  // New SEO fields
  seoTitle?: string;
  seoDescription?: string;
  longIntro?: string[];
  localServiceNotes?: string[];
  serviceScenarios?: { title: string; body: string }[];
  brandNotes?: string;
  nearbyCities?: string[];
  headingVariants?: {
    neighborhoodsTitle?: string;
    issuesTitle?: string;
    faqTitle?: string;
  };
  faqSchemaEnabled?: boolean;
  serviceTaglines?: Record<string, string>;
  featuredBlurb?: string;
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
    ],
    nearbyCities: ["etobicoke", "north-york", "scarborough", "mississauga"],
    featuredBlurb: "Toronto is our home base. We serve hundreds of downtown condos, midtown homes, and commercial gyms across all six former boroughs — with same-day availability most days."
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
    ],
    nearbyCities: ["toronto", "mississauga", "brampton", "vaughan"],
    featuredBlurb: "Etobicoke is where our shop is located. From Humber Bay condos to Rexdale homes, we offer the fastest response times and deepest local knowledge in the west end."
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
    ],
    nearbyCities: ["burlington", "mississauga", "milton"]
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
    ],
    nearbyCities: ["oakville", "milton", "georgetown"]
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
    ],
    nearbyCities: ["georgetown", "oakville", "burlington"]
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
    ],
    nearbyCities: ["milton", "brampton", "vaughan"]
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
    ],
    nearbyCities: ["mississauga", "vaughan", "georgetown", "etobicoke"]
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
    ],
    nearbyCities: ["etobicoke", "oakville", "brampton", "toronto"],
    featuredBlurb: "Mississauga's high-rise condos near Square One and sprawling homes in Erin Mills keep us busy year-round. We're one of the few repair services covering all of Mississauga with same-week appointments."
  },
  "north-york": {
    name: "North York",
    slug: "north-york",
    seoTitle: "North York Gym Equipment Repair — Treadmills, Ellipticals & Bikes | Gold Fitness Repair",
    seoDescription: "On-site fitness equipment repair in North York. We fix treadmills, ellipticals, exercise bikes, and home gyms across Willowdale, Don Mills, Bayview Village and more. Call (647) 712-0809.",
    shortIntro: "North York residents trust Gold Fitness Repair for reliable gym equipment service. We cover all North York neighborhoods from Willowdale to Downsview with fast, professional repairs.",
    longIntro: [
      "North York is one of the most densely populated areas of the Greater Toronto Area, with a unique mix of high-rise condo towers along Yonge Street, established family neighborhoods in Don Mills and Bayview Village, and rapidly developing communities near Downsview Park. This diversity means fitness equipment usage patterns vary widely — from compact folding treadmills tucked into condo dens to full home gyms in spacious Willowdale basements.",
      "At Gold Fitness Repair, we've been servicing North York homes, condos, and small commercial gyms for years. Our technicians understand the logistical challenges of condo repairs — coordinating with concierge desks, navigating freight elevators, and working within the space constraints common in buildings along Yonge and Sheppard. We arrive with the tools and parts needed to complete most repairs in a single visit.",
      "Whether your NordicTrack treadmill stopped mid-run in your Bayview Village home, your Peloton bike started clicking in your Empress Walk condo, or the elliptical in your Don Mills basement gym needs a resistance motor, we handle it. We also provide preventative maintenance packages designed to extend the life of your equipment and avoid costly breakdowns — particularly important for machines in high-humidity condo environments.",
      "Our North York clients often tell us they chose Gold Fitness Repair because we showed up on time, explained the issue clearly, and finished the job without upselling unnecessary parts. That reputation matters to us, and it's why a large percentage of our North York business comes from repeat customers and referrals from neighbors in the same building."
    ],
    localServiceNotes: [
      "High-rise condo repairs along the Yonge-Sheppard corridor — we coordinate with concierge and building management",
      "Basement home gym servicing in established Willowdale and Bayview Village neighborhoods",
      "Compact-space repairs for folding treadmills and apartment-friendly bikes common in North York condos",
      "Condo amenity gym maintenance for buildings in Don Mills, Parkwoods, and Flemingdon Park",
      "Post-winter tune-ups popular among North York homeowners who pause equipment use in warmer months",
      "Frequent NordicTrack and ProForm repairs — the most common brands we see in North York households"
    ],
    serviceScenarios: [
      {
        title: "Condo Treadmill Stopped Working After a Power Flicker",
        body: "A Willowdale condo resident called us after their NordicTrack T6.5 stopped responding following a brief power outage. We diagnosed a blown motor controller — a common issue when treadmills lack surge protection. We replaced the controller on-site and recommended a dedicated surge protector strip, which we see as essential for condo owners in North York's older Yonge corridor buildings where electrical fluctuations are more frequent."
      },
      {
        title: "Elliptical Making Grinding Noises in a Bayview Village Home",
        body: "A family in Bayview Village noticed their ProForm elliptical had developed a loud grinding sound during use. Our technician found worn-out drive belt bearings — accelerated by the machine sitting on an uneven basement floor. We replaced the bearings, levelled the unit, and added felt pads to reduce vibration. Total repair time was about 90 minutes, and the machine runs quietly again."
      },
      {
        title: "Spin Bike Resistance Stuck at Maximum in a Don Mills Apartment",
        body: "A Don Mills apartment renter's Schwinn IC4 spin bike had its resistance locked at the highest level. The magnetic resistance brake had shifted out of alignment, likely from the bike being moved between rooms. We recalibrated the brake assembly and tested all 100 resistance levels. The tenant was back to normal workouts the same afternoon."
      }
    ],
    brandNotes: "North York households tend to favour mid-range home fitness brands like NordicTrack, ProForm, and Bowflex — often purchased from Canadian Tire, Costco, or Amazon. We also see a growing number of Peloton bikes and Echelon units in condo buildings along the Yonge corridor. In larger homes in Bayview Village and York Mills, premium brands like Life Fitness, Precor, and Technogym are more common, typically bought through specialty fitness retailers. Regardless of where you purchased your equipment or what brand it is, our technicians carry parts and knowledge for all of them.",
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
      { q: "Do you offer same-day service in North York?", a: "Yes, same-day service is often available for North York residents. We prioritize this area due to high demand and our proximity." },
      { q: "Can you repair equipment inside North York condos?", a: "Absolutely. We regularly work in high-rise condos along Yonge & Sheppard, Bayview, and Don Mills. We coordinate with concierge and use freight elevators as needed." },
      { q: "Is there a travel/diagnostic fee for North York?", a: "Our diagnostic fee covers travel to North York and is waived with completed repairs. No hidden charges." },
      { q: "What brands do you see most in North York?", a: "NordicTrack, ProForm, and Bowflex are the most common. We also frequently repair Peloton, Life Fitness, Sole, and Schwinn units." },
      { q: "How quickly can I book a visit in North York?", a: "North York appointments are typically available within 1-2 business days due to our proximity and technician availability in the area." },
      { q: "Do you service condo amenity gyms in North York?", a: "Yes. We maintain and repair equipment in condo gyms and small commercial facilities across North York, including ongoing maintenance contracts." }
    ],
    nearbyCities: ["toronto", "scarborough", "vaughan", "richmond-hill"],
    headingVariants: {
      neighborhoodsTitle: "North York Neighborhoods We Cover",
      issuesTitle: "Equipment Problems We Solve in North York",
      faqTitle: "North York Residents Ask Us"
    },
    faqSchemaEnabled: true,
    serviceTaglines: {
      "treadmill-repair": "On-site treadmill repair for Willowdale condos, Don Mills homes, and Bayview Village basements.",
      "elliptical-repair": "Elliptical noise, resistance, and stride fixes across all North York neighborhoods.",
      "exercise-bike-repair": "Spin bike and recumbent bike servicing — including Peloton — throughout North York.",
      "fitness-equipment-repair": "Full home gym and commercial equipment repair for North York residents and facilities."
    },
    featuredBlurb: "North York's condo towers and family homes keep our technicians busy daily. From Willowdale to Bayview Village, we handle everything from treadmill belt swaps to full home gym overhauls — usually within 48 hours."
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
    ],
    nearbyCities: ["north-york", "richmond-hill", "brampton", "toronto"]
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
    ],
    nearbyCities: ["vaughan", "north-york", "scarborough"]
  },
  scarborough: {
    name: "Scarborough",
    slug: "scarborough",
    seoTitle: "Scarborough Fitness Equipment Repair — Treadmills, Bikes & Ellipticals | Gold Fitness Repair",
    seoDescription: "Expert gym equipment repair in Scarborough. We service treadmills, ellipticals, exercise bikes, and home gyms in Agincourt, Malvern, Highland Creek and more. Call (647) 712-0809.",
    shortIntro: "Scarborough's reliable fitness equipment repair service. From Agincourt to Highland Creek, we bring professional repairs directly to your home or commercial gym.",
    longIntro: [
      "Scarborough is one of the largest and most diverse districts in the Greater Toronto Area, stretching from the Bluffs along Lake Ontario up to Steeles Avenue. It's home to a wide variety of housing — detached homes with finished basements in Agincourt, semi-detached houses in Dorset Park, and newer townhome developments in Rouge and Highland Creek. Many of these properties include dedicated home gym spaces, and we see high demand for on-site equipment repair across the entire district.",
      "Gold Fitness Repair has built a strong client base in Scarborough over the years. Our technicians are familiar with the area's layout, traffic patterns, and building types, which means we can schedule efficiently and arrive prepared. Whether you're in a house near the Scarborough Town Centre or a bungalow backing onto Highland Creek, we bring the tools and parts for most common repairs.",
      "Scarborough homeowners tend to invest in reliable mid-range fitness equipment — NordicTrack and ProForm treadmills are by far the most common machines we service here, followed by Bowflex home gyms and Schwinn exercise bikes. We also maintain equipment in several Scarborough condo amenity gyms and small personal training studios. Our technicians carry replacement belts, motors, controllers, and console parts for the most popular models, reducing the need for return visits.",
      "One pattern we see often in Scarborough is equipment that's been purchased online (Amazon, Costco, or direct from the manufacturer) and either wasn't assembled properly or developed issues outside the original warranty period. We handle post-warranty repairs and can correct assembly problems that lead to premature wear — saving you from replacing a machine that just needs professional attention.",
      "If you're in Scarborough and your treadmill, elliptical, bike, or home gym needs service, we're usually able to book you within two business days. Our flat diagnostic fee covers the visit and is waived if you proceed with the repair."
    ],
    localServiceNotes: [
      "Detached home basement gyms are the most common setup we service in Scarborough — many with multiple machines",
      "Post-warranty repair specialists: we fix equipment bought online from Amazon, Costco, and manufacturer websites",
      "Assembly corrections for machines that were self-assembled or improperly set up by delivery teams",
      "Condo amenity gym maintenance in newer Scarborough Town Centre developments",
      "Seasonal tune-ups popular among Scarborough homeowners who increase treadmill use during winter months",
      "High volume of NordicTrack and ProForm repairs — we stock common parts for these brands",
      "Townhome and semi-detached repairs in Malvern, Rouge, and Woburn where space is tighter"
    ],
    serviceScenarios: [
      {
        title: "Treadmill Belt Burning Smell in an Agincourt Home",
        body: "An Agincourt homeowner called us after noticing a burning smell from their NordicTrack C990 treadmill. Our technician found the walking belt had worn through in spots and was creating friction against the deck. We replaced both the belt and deck, applied fresh lubricant, and tested the machine at all speed levels. The homeowner had been considering buying a new treadmill, but the repair cost less than a third of a replacement and the machine now runs like new."
      },
      {
        title: "Bowflex Home Gym Cable Snapped in Highland Creek",
        body: "A Highland Creek resident's Bowflex Revolution home gym had a cable snap during a chest press. This is a safety concern, so we prioritized the appointment. We replaced the cable, inspected all other cables and pulleys for wear, and lubricated the guide rods. The entire repair took about two hours. We also recommended a quarterly cable inspection schedule given the machine's age and heavy use."
      },
      {
        title: "Exercise Bike Pedal Threads Stripped in Malvern",
        body: "A Malvern family's Schwinn 170 upright bike developed a loose pedal that wouldn't tighten. The pedal threads on the crank arm had stripped — likely from the pedal being installed on the wrong side during original assembly. We replaced the crank arm and installed new pedals correctly. This is a repair we see frequently with self-assembled bikes, and it's a straightforward fix when caught early."
      }
    ],
    brandNotes: "Scarborough homes are stocked with a practical mix of fitness equipment. NordicTrack and ProForm dominate the treadmill and elliptical market here, largely because they're readily available at Costco, Canadian Tire, and Amazon. We also see a steady number of Bowflex Max Trainers, Schwinn upright and recumbent bikes, and Sole treadmills. In newer subdivisions around Rouge and Highland Creek, Peloton bikes and Echelon units are becoming more common. For home gym setups, Bowflex Revolution and Body-Solid units are the most frequent. Our technicians carry parts for all these brands and can diagnose compatibility issues when homeowners mix and match equipment from different manufacturers.",
    neighborhoods: [
      "Scarborough Town Centre", "Agincourt", "Guildwood", "West Hill", "Birch Cliff",
      "Cliffside", "Malvern", "Rouge", "Highland Creek", "Dorset Park", "Woburn",
      "Bendale", "Morningside", "Centennial Scarborough"
    ],
    commonRepairs: [
      "Treadmill belt and motor issues",
      "Elliptical noise problems",
      "Console software updates",
      "Incline system repairs",
      "Pedal and crank fixes",
      "Power board replacement",
      "Home gym cable and pulley replacement",
      "Post-assembly corrections"
    ],
    localFaqs: [
      { q: "Do you offer same-day service in Scarborough?", a: "Yes, we often have same-day availability for Scarborough residents, especially for urgent issues like safety concerns or complete equipment failure." },
      { q: "Can you fix equipment that was assembled incorrectly?", a: "Absolutely. We frequently correct assembly issues from self-assembly or third-party delivery teams. Improper assembly is one of the top causes of premature equipment failure we see in Scarborough." },
      { q: "Is there a travel/diagnostic fee for Scarborough?", a: "Our flat diagnostic fee covers travel to Scarborough. It's waived if you proceed with the repair — no surprises." },
      { q: "What brands do you repair most in Scarborough?", a: "NordicTrack and ProForm are the most common, followed by Bowflex, Schwinn, Sole, and Peloton. We service all major brands." },
      { q: "How quickly can I book a visit in Scarborough?", a: "Scarborough appointments are typically available within 1-3 business days. Same-day slots open up frequently." },
      { q: "Do you repair home gyms and cable machines?", a: "Yes! We repair Bowflex, Body-Solid, Inspire Fitness, and other home gym systems including cable replacement, pulley repair, and weight stack servicing." },
      { q: "Can you service equipment bought from Costco or Amazon?", a: "Yes. A large portion of our Scarborough clients bought equipment online. We handle post-warranty repairs and can source parts for most models regardless of where they were purchased." }
    ],
    nearbyCities: ["toronto", "north-york", "richmond-hill"],
    headingVariants: {
      neighborhoodsTitle: "Scarborough Areas We Service",
      issuesTitle: "Equipment Repairs We Handle in Scarborough",
      faqTitle: "Questions Scarborough Residents Ask"
    },
    faqSchemaEnabled: true,
    serviceTaglines: {
      "treadmill-repair": "Belt, motor, and deck repairs for Scarborough homes — from Agincourt basements to Highland Creek garages.",
      "elliptical-repair": "Elliptical stride, noise, and resistance repairs across all Scarborough neighborhoods.",
      "exercise-bike-repair": "Spin bike, upright, and recumbent bike fixes — including Peloton and Schwinn — throughout Scarborough.",
      "fitness-equipment-repair": "Complete home gym, cable machine, and commercial equipment repair for Scarborough residents."
    },
    featuredBlurb: "Scarborough's sprawling neighborhoods and basement home gyms are a big part of our service area. We stock parts for the NordicTrack and ProForm machines that are most popular here, so most repairs are done in a single visit."
  }
};

export const CITY_SLUGS = Object.keys(CITY_DATA);

export const getCityBySlug = (slug: string): CityData | undefined => {
  return CITY_DATA[slug];
};
