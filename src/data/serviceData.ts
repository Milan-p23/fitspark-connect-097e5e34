import { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  commonProblems: string[];
  repairSteps: { title: string; description: string }[];
  brands: string[];
  preventativeTips: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DATA: Record<string, ServiceData> = {
  "treadmill-repair": {
    slug: "treadmill-repair",
    name: "Treadmill Repair",
    shortName: "Treadmill",
    heroTitle: "Treadmill Repair in Toronto & GTA",
    heroSubtitle: "Expert treadmill repair for belt issues, motor problems, incline failures, and console errors. Fast, reliable service across the Greater Toronto Area.",
    metaTitle: "Treadmill Repair Toronto & GTA | Gold Fitness Repair",
    metaDescription: "Fast treadmill repair in Toronto & GTA. Belt, motor, incline, console errors. Call (647) 712-0809.",
    commonProblems: [
      "Belt slipping or sticking during use",
      "Belt wearing unevenly or fraying",
      "Motor overheating or shutting down",
      "Motor making loud grinding noises",
      "Incline not working or stuck",
      "Incline motor failure",
      "Console display blank or flickering",
      "Console showing error codes",
      "Speed inconsistencies during workout",
      "Treadmill not starting or powering on",
      "Burning smell from motor area",
      "Deck worn or damaged",
      "Safety key issues",
      "Heart rate monitor not working"
    ],
    repairSteps: [
      { title: "Diagnosis", description: "We perform a comprehensive inspection to identify the root cause of your treadmill issue, testing all major components including motor, belt, deck, and electronics." },
      { title: "Repair", description: "Our technicians complete the repair using quality parts. We fix motors, replace belts, repair consoles, and address any other issues found during diagnosis." },
      { title: "Testing", description: "We thoroughly test your treadmill at various speeds and inclines to ensure everything works perfectly. You receive a health report with maintenance recommendations." }
    ],
  brands: [
  "NordicTrack",
  "ProForm",
  "Life Fitness",
  "Precor",
  "Sole",
  "Bowflex",
  "Horizon",
  "Matrix",
  "Nautilus",
  "Schwinn",
  "Cybex",
  "Hammer Strength",
  "Concept2",
  "Technogym",
  "Hoist",
  "Body-Solid",
  "Inspire Fitness",
  "True Fitness",
  "Star Trac",
  "Octane Fitness",
  "Rogue Fitness",
  "Weider",
  "Spirit Fitness",
  "Freemotion",
  "Johnson Health Tech",
  "Torque Fitness",
  "Keiser",
  "Xterra",
  "Landice"
],
    preventativeTips: [
      "Lubricate the belt every 3-6 months",
      "Keep the area around and under the treadmill clean",
      "Check belt tension monthly",
      "Wipe down the console and handles after each use",
      "Ensure proper ventilation around the motor",
      "Use a surge protector to prevent electrical damage"
    ],
    faqs: [
      { q: "How much does treadmill repair cost?", a: "Repair costs vary depending on the issue. Simple belt adjustments start around $100, while motor replacements can range from $200-$500. We provide upfront quotes before any work begins." },
      { q: "How long does a treadmill repair take?", a: "Most repairs are completed in a single visit within 1-2 hours. Complex motor or electronics repairs may require ordering parts and a follow-up visit." },
      { q: "Is it worth repairing an old treadmill?", a: "Generally, if repair costs are less than 50% of replacement cost and the frame is solid, repair makes sense. We'll give you honest advice based on your specific situation." },
      { q: "Why is my treadmill belt slipping?", a: "Belt slipping usually indicates the belt needs tensioning or replacement. It can also be caused by worn deck, insufficient lubrication, or motor issues." },
      { q: "Can you repair commercial treadmills?", a: "Yes! We service both residential and commercial treadmills from all major brands including Life Fitness, Precor, Star Trac, and Matrix." },
      { q: "Do you offer same-day treadmill repair?", a: "We often have same-day or next-day availability. Contact us to check current scheduling for your area." },
      { q: "What brands of treadmills do you repair?", a: "We repair all major brands including NordicTrack, ProForm, Life Fitness, Precor, Sole, Bowflex, Horizon, and many more." },
      { q: "How often should I service my treadmill?", a: "We recommend professional maintenance annually, with belt lubrication every 3-6 months depending on usage." },
      { q: "Why is my treadmill making noise?", a: "Noises can indicate worn bearings, loose components, belt issues, or motor problems. We diagnose the exact cause and provide appropriate repairs." },
      { q: "Can you fix a treadmill console?", a: "Yes, we repair console display issues, error codes, connectivity problems, and replace faulty console components." },
      { q: "Do you provide warranties on repairs?", a: "Yes — all of our repairs are backed by a service warranty. Coverage and duration depend on the type of repair performed." },
      { q: "What's included in treadmill maintenance?", a: "Our maintenance service includes belt lubrication, tension adjustment, deck inspection, motor cleaning, electronics check, and a detailed health report." }
    ]
  },
  "elliptical-repair": {
    slug: "elliptical-repair",
    name: "Elliptical Repair",
    shortName: "Elliptical",
    heroTitle: "Elliptical Repair in Toronto & GTA",
    heroSubtitle: "Professional elliptical repair for resistance issues, noise problems, and console errors. Expert technicians serving the Greater Toronto Area.",
    metaTitle: "Elliptical Repair Toronto & GTA | Gold Fitness Repair",
    metaDescription: "Professional elliptical repair in Toronto & GTA. Noise, resistance, console issues. Call (647) 712-0809.",
    commonProblems: [
      "Squeaking or grinding noises during use",
      "Resistance not changing or stuck",
      "Resistance too easy or too hard",
      "Pedals wobbly or loose",
      "Stride feels uneven or jerky",
      "Console display not working",
      "Console showing error codes",
      "Heart rate sensors not reading",
      "Elliptical making clicking sounds",
      "Flywheel issues",
      "Power issues or won't turn on",
      "Moving arms loose or stiff",
      "Brake system problems",
      "Ramp/incline not adjusting"
    ],
    repairSteps: [
      { title: "Diagnosis", description: "We thoroughly inspect your elliptical including the flywheel, resistance system, pedals, arms, and electronics to identify all issues." },
      { title: "Repair", description: "Our technicians fix or replace faulty components including resistance motors, bearings, pedals, consoles, and structural parts." },
      { title: "Testing", description: "We test all resistance levels, movement patterns, and electronics to ensure smooth, quiet operation. You receive a complete health report." }
    ],
   brands: [
  "NordicTrack",
  "ProForm",
  "Life Fitness",
  "Precor",
  "Sole",
  "Bowflex",
  "Horizon",
  "Matrix",
  "Nautilus",
  "Schwinn",
  "Cybex",
  "Hammer Strength",
  "Concept2",
  "Technogym",
  "Hoist",
  "Body-Solid",
  "Inspire Fitness",
  "True Fitness",
  "Star Trac",
  "Octane Fitness",
  "Rogue Fitness",
  "Weider",
  "Spirit Fitness",
  "Freemotion",
  "Johnson Health Tech",
  "Torque Fitness",
  "Keiser",
  "Xterra",
  "Landice"
]
,
    preventativeTips: [
      "Wipe down after each use to prevent sweat damage",
      "Check for loose bolts monthly",
      "Keep the area around the elliptical dust-free",
      "Listen for unusual sounds and address promptly",
      "Lubricate pivot points as recommended by manufacturer",
      "Don't exceed the weight capacity"
    ],
    faqs: [
      { q: "Why is my elliptical making noise?", a: "Noises typically indicate worn bearings, loose hardware, or lack of lubrication. We diagnose the exact source and provide appropriate repairs." },
      { q: "How much does elliptical repair cost?", a: "Costs vary by issue. Simple adjustments start around $100, while resistance motor or flywheel repairs range from $150-$400. We quote before starting." },
      { q: "Can you fix elliptical resistance problems?", a: "Yes! We repair resistance motors, magnetic brake systems, and calibration issues to restore proper resistance functionality." },
      { q: "Why won't my elliptical turn on?", a: "Power issues can be caused by faulty adapters, internal wiring, or console problems. We diagnose and repair all electrical components." },
      { q: "Do you repair commercial ellipticals?", a: "Absolutely! We service both residential and commercial ellipticals from brands like Life Fitness, Precor, Matrix, and Octane." },
      { q: "How long do elliptical repairs take?", a: "Most repairs are completed in 1-2 hours during a single visit. Parts orders may require a follow-up appointment." },
      { q: "What brands of ellipticals do you repair?", a: "We repair all major brands including NordicTrack, ProForm, Life Fitness, Precor, Sole, Bowflex, and many more." },
      { q: "How often should I service my elliptical?", a: "Annual professional maintenance is recommended, with monthly visual inspections and bolt checks at home." },
      { q: "Can you fix a wobbly elliptical?", a: "Yes, we address structural issues including loose bolts, worn bushings, and frame alignment problems." },
      { q: "Why is my elliptical stride uneven?", a: "Uneven stride usually indicates worn bearings, misaligned components, or flywheel issues. We restore smooth operation." },
      { q: "Do you offer warranties on elliptical repairs?", a: "Yes, all repairs include a warranty on parts and labor. Terms vary by repair type." },
      { q: "Can you fix elliptical console issues?", a: "Yes, we repair display problems, error codes, Bluetooth connectivity, and replace faulty console components." }
    ]
  },
  "exercise-bike-repair": {
    slug: "exercise-bike-repair",
    name: "Exercise Bike Repair",
    shortName: "Exercise Bike",
    heroTitle: "Exercise Bike Repair in Toronto & GTA",
    heroSubtitle: "Expert exercise bike repair for spin bikes, recumbent bikes, and upright bikes. Resistance, pedal, and console repairs across the GTA.",
    metaTitle: "Exercise Bike Repair Toronto & GTA | Gold Fitness Repair",
    metaDescription: "Exercise bike repair in Toronto & GTA. Resistance, pedals, squeaks, console fixes. Call (647) 712-0809.",
    commonProblems: [
      "Resistance knob not working properly",
      "Magnetic resistance stuck or inconsistent",
      "Pedals loose or making noise",
      "Pedal straps or clips broken",
      "Seat wobbling or uncomfortable",
      "Seat post adjustment issues",
      "Console not displaying correctly",
      "Heart rate monitor not reading",
      "Squeaking during pedaling",
      "Clicking sounds from crank area",
      "Flywheel making grinding noises",
      "Belt slipping or worn",
      "Power adapter issues",
      "Handlebar adjustment problems"
    ],
    repairSteps: [
      { title: "Diagnosis", description: "We inspect your exercise bike's resistance system, drivetrain, pedals, seat, console, and frame to identify all issues." },
      { title: "Repair", description: "Our technicians repair or replace faulty components including resistance mechanisms, pedals, belts, bearings, and electronics." },
      { title: "Testing", description: "We test all resistance levels, ensure smooth pedaling, and verify console functionality. You receive maintenance recommendations." }
    ],
   brands: [
  "NordicTrack",
  "ProForm",
  "Life Fitness",
  "Precor",
  "Sole",
  "Bowflex",
  "Horizon",
  "Matrix",
  "Nautilus",
  "Schwinn",
  "Cybex",
  "Hammer Strength",
  "Concept2",
  "Technogym",
  "Hoist",
  "Body-Solid",
  "Inspire Fitness",
  "True Fitness",
  "Star Trac",
  "Octane Fitness",
  "Rogue Fitness",
  "Weider",
  "Spirit Fitness",
  "Freemotion",
  "Johnson Health Tech",
  "Torque Fitness",
  "Keiser",
  "Xterra",
  "Landice"
]
,
    preventativeTips: [
      "Wipe down after each use to prevent corrosion",
      "Check pedal tightness monthly",
      "Keep the flywheel area dust-free",
      "Lubricate the chain or belt as recommended",
      "Inspect resistance mechanism regularly",
      "Tighten all bolts periodically"
    ],
    faqs: [
      { q: "Do you repair Peloton bikes?", a: "Yes! We repair Peloton Bike and Bike+ including resistance issues, pedal problems, screen issues, and mechanical repairs." },
      { q: "How much does exercise bike repair cost?", a: "Simple fixes like pedal replacement start around $75. Resistance or console repairs range from $100-$350. We provide quotes upfront." },
      { q: "Why is my bike resistance not working?", a: "Resistance problems can be caused by faulty magnets, worn brake pads, calibration issues, or motor failures depending on your bike type." },
      { q: "Can you fix spin bike squeaking?", a: "Yes! Squeaking usually comes from pedals, bottom bracket bearings, or the flywheel. We diagnose and eliminate the noise." },
      { q: "Do you repair recumbent bikes?", a: "Absolutely! We service upright, recumbent, and spin bikes from all major manufacturers." },
      { q: "How long do exercise bike repairs take?", a: "Most repairs are completed in 1-2 hours. Complex issues requiring parts may need a follow-up visit." },
      { q: "What brands of exercise bikes do you repair?", a: "We repair Peloton, NordicTrack, Schwinn, Bowflex, Keiser, Life Fitness, Echelon, and many more." },
      { q: "Why is my exercise bike clicking?", a: "Clicking typically indicates worn pedal bearings, loose crank arms, or bottom bracket issues. We pinpoint and fix the source." },
      { q: "Can you replace exercise bike pedals?", a: "Yes, we replace standard, toe cage, and clipless pedals on all types of exercise bikes." },
      { q: "How often should I service my exercise bike?", a: "Annual professional service is recommended, with monthly home checks for bolt tightness and unusual sounds." },
      { q: "Do you offer warranties on bike repairs?", a: "Yes, all repairs include a warranty on parts and labor." },
      { q: "Can you fix exercise bike console problems?", a: "Yes, we repair display issues, connectivity problems, and replace faulty console components." }
    ]
  },
  "fitness-equipment-repair": {
    slug: "fitness-equipment-repair",
    name: "Fitness Equipment Repair",
    shortName: "General Equipment",
    heroTitle: "Fitness Equipment Repair in Toronto & GTA",
    heroSubtitle: "Complete gym equipment repair services for treadmills, ellipticals, bikes, rowers, strength machines, and more. Professional service across the GTA.",
    metaTitle: "Fitness Equipment Repair Toronto & GTA | Gold Fitness Repair",
    metaDescription: "Gym equipment repair across Toronto & GTA. Treadmills, ellipticals, bikes, rowers, strength equipment. Call (647) 712-0809.",
    commonProblems: [
      "Treadmill belt slipping or worn",
      "Elliptical resistance not working",
      "Exercise bike making noise",
      "Rowing machine chain or strap issues",
      "Cable machine pulleys stuck",
      "Weight stack not moving smoothly",
      "Multi-gym cable fraying",
      "Console displays not working",
      "Motor failures on cardio equipment",
      "Resistance systems malfunctioning",
      "Seat and handlebar adjustments stuck",
      "Frame or structural issues",
      "Power supply problems",
      "Bluetooth connectivity issues"
    ],
    repairSteps: [
      { title: "Diagnosis", description: "We perform a comprehensive inspection of your equipment to identify all issues, whether cardio machines, strength equipment, or accessories." },
      { title: "Repair", description: "Our technicians repair motors, resistance systems, cables, pulleys, electronics, and structural components using quality parts." },
      { title: "Testing", description: "We thoroughly test all repaired equipment to ensure safe, proper operation. You receive a detailed health report with recommendations." }
    ],
 brands: [
  "NordicTrack",
  "ProForm",
  "Life Fitness",
  "Precor",
  "Sole",
  "Bowflex",
  "Horizon",
  "Matrix",
  "Nautilus",
  "Schwinn",
  "Cybex",
  "Hammer Strength",
  "Concept2",
  "Technogym",
  "Hoist",
  "Body-Solid",
  "Inspire Fitness",
  "True Fitness",
  "Star Trac",
  "Octane Fitness",
  "Rogue Fitness",
  "Weider",
  "Spirit Fitness",
  "Freemotion",
  "Johnson Health Tech",
  "Torque Fitness",
  "Keiser",
  "Xterra",
  "Landice"
],
    preventativeTips: [
      "Wipe down equipment after each use",
      "Lubricate moving parts as recommended",
      "Check cables and pulleys monthly for wear",
      "Keep equipment in climate-controlled spaces",
      "Schedule annual professional maintenance",
      "Address unusual sounds or behaviors immediately"
    ],
    faqs: [
      { q: "What types of fitness equipment do you repair?", a: "We repair treadmills, ellipticals, exercise bikes, rowing machines, cable machines, multi-gyms, strength equipment, and more." },
      { q: "Do you repair home gym equipment?", a: "Yes! We service both home gyms and commercial fitness facilities across the GTA." },
      { q: "How much does fitness equipment repair cost?", a: "Costs vary by equipment type and issue. We provide upfront quotes after diagnosis. Simple repairs start around $75." },
      { q: "Do you repair rowing machines?", a: "Yes! We fix Concept2, WaterRower, NordicTrack, and other rowing machines including chain, strap, and resistance issues." },
      { q: "Can you fix cable machine problems?", a: "Absolutely! We repair cable machines, multi-gyms, and functional trainers including cable replacement, pulley repair, and weight stack issues." },
      { q: "Do you service commercial gym equipment?", a: "Yes, we provide repairs and maintenance for commercial gyms, condo fitness centers, and corporate facilities." },
      { q: "How long do repairs typically take?", a: "Most repairs are completed in 1-2 hours. Complex repairs requiring parts may need a follow-up visit." },
      { q: "Do you repair weight machines?", a: "Yes, we service selectorized weight machines, plate-loaded equipment, and cable-based strength equipment." },
      { q: "What brands do you service?", a: "We repair all major brands including Life Fitness, Precor, Cybex, Hammer Strength, Technogym, Bowflex, and many more." },
      { q: "Do you offer maintenance contracts?", a: "Yes, we offer maintenance programs for homes and commercial facilities. Contact us for customized plans." },
      { q: "Can you repair older fitness equipment?", a: "Yes! We repair equipment of all ages. If parts aren't available, we'll advise on alternatives." },
      { q: "Do you provide warranties on repairs?", a: "Yes, all our repairs include a warranty on parts and labor." }
    ]
  }
};

export const SERVICE_SLUGS = Object.keys(SERVICE_DATA);

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return SERVICE_DATA[slug];
};

export const ALL_SERVICES = [
  { name: "Treadmill Repair", slug: "treadmill-repair", icon: "treadmill" },
  { name: "Elliptical Repair", slug: "elliptical-repair", icon: "elliptical" },
  { name: "Exercise Bike Repair", slug: "exercise-bike-repair", icon: "bike" },
  { name: "Fitness Equipment Repair", slug: "fitness-equipment-repair", icon: "dumbbell" }
];
