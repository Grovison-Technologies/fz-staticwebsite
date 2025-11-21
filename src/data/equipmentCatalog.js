export const EQUIPMENT_CATEGORIES = [
  {
    id: 'treadmills',
    title: 'Treadmills',
    tagline: 'Slat-belt and motorized decks for sprint labs and cardio rows.',
    highlight: 'Speed Lab Ready',
    background:
      'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80&w=1600',
    products: [
      {
        id: 'velocity-slx',
        name: 'Velocity SLX',
        summary: 'Self-powered curved treadmill for max acceleration work.',
        price: 'Starts at $5,299',
        leadTime: '4-week lead time',
        image:
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=900',
        details:
          'Magnetic resistance sled mode, wider running deck, and carbon stringer slats keep athletes upright during high-speed drills.',
        features: [
          '24 mph max speed equivalent',
          'Dual-zone resistance modes',
          'Bluetooth FTMS telemetry',
        ],
        specs: ['Curved deck', 'Slat belt', '11-gauge frame'],
      },
      {
        id: 'inertia-x',
        name: 'Inertia X',
        summary: 'Motorized treadmill with embedded coaching console.',
        price: 'Starts at $6,799',
        leadTime: '6-week lead time',
        image:
          'https://images.unsplash.com/photo-1544791499-b77b4ccdfa5c?auto=format&fit=crop&q=80&w=900',
        details:
          '4.0 CHP drive, auto-incline sled protocols, and built-in capture for remote programming make it a flagship treadmill for commercial floors.',
        features: [
          '4.0 CHP AC motor',
          '0-30% incline / -3% decline',
          '4K coaching screen with ANT+',
        ],
        specs: ['63" deck', 'Slat assist rollers', 'Impact absorption rails'],
      },
    ],
  },
  {
    id: 'dumbbells',
    title: 'Dumbbells',
    tagline: 'Urethane, knurled, and studio-ready sets built to be thrown around.',
    highlight: 'Lifetime Heads',
    background:
      'https://images.unsplash.com/photo-1596357395040-4894c79f274b?auto=format&fit=crop&q=80&w=1600',
    products: [
      {
        id: 'olympus-urethane',
        name: 'Olympus Urethane Set',
        summary: '5-150 lb matched pairs with low-profile heads.',
        price: 'Starts at $1,999',
        leadTime: 'Ship-ready',
        image:
          'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=900',
        details:
          'Laser-etched logos, stainless handles, and color-indexed rings keep racks organized and photo-ready for premium clubs.',
        features: [
          'Stainless steel handles',
          'Tolerance within +/- 100g',
          'Custom logo engraving',
        ],
        specs: ['5–150 lb pairs', 'Urethane shell', 'Straight knurl'],
      },
      {
        id: 'forte-studio',
        name: 'Forte Studio Kit',
        summary: 'Compact hex set for boutique studios and hotel gyms.',
        price: 'Starts at $899',
        leadTime: '2-week lead time',
        image:
          'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=900',
        details:
          'Powder-coated steel storage tree and rubberized heads withstand daily group classes without loosening bolts.',
        features: [
          '3–30 lb range',
          'Color-coded collars',
          'Anti-roll geometry',
        ],
        specs: ['12 pairs', 'Steel tree', 'Rubber heads'],
      },
    ],
  },
  {
    id: 'ellipticals',
    title: 'Ellipticals',
    tagline: 'Low-impact, high-output trainers for endurance zones.',
    highlight: 'Zero-Impact Glide',
    background:
      'https://images.unsplash.com/photo-1574680088810-c87b5dcfbaf7?auto=format&fit=crop&q=80&w=1600',
    products: [
      {
        id: 'arc-lt',
        name: 'Arc LT Trainer',
        summary: 'Hybrid stride elliptical that doubles as a stepper.',
        price: 'Starts at $3,899',
        leadTime: '4-week lead time',
        image:
          'https://images.unsplash.com/photo-1596357394965-108dd71650fd?auto=format&fit=crop&q=80&w=900',
        details:
          'Adaptive stride length tracks athlete height and automatically tunes resistance curves for each user profile.',
        features: [
          '17"–25" auto stride',
          'Dual-action handles',
          'CoachCast programming',
        ],
        specs: ['Poly track rails', 'Sealed bearings', '10.5" console'],
      },
      {
        id: 'flow-max',
        name: 'Flow Max EL',
        summary: 'Commercial elliptical with oversized pedals and cooling fans.',
        price: 'Starts at $4,499',
        leadTime: '5-week lead time',
        image:
          'https://images.unsplash.com/photo-1596357395031-fb31d299532d?auto=format&fit=crop&q=80&w=900',
        details:
          'Next-gen console displays split time, watt output, and custom heart-rate zones in a single glance.',
        features: [
          'Triple-fan cooling',
          'Watt-based resistance',
          'USB-C charging deck',
        ],
        specs: ['35 resistance levels', 'Self-powered', 'Aluminum frame'],
      },
    ],
  },
  {
    id: 'spin-bikes',
    title: 'Commercial Spin Bikes',
    tagline: 'Studio-proof bikes with magnetic resistance and dual pedals.',
    highlight: 'Ride 24/7',
    background:
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1600',
    products: [
      {
        id: 'pulse-pro',
        name: 'Pulse Pro',
        summary: 'Flagship bike with auto-calibrating resistance.',
        price: 'Starts at $2,199',
        leadTime: 'Ready to ship',
        image:
          'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&q=80&w=900',
        details:
          'Dual-belt drive keeps rides silent while the console syncs to leading streaming platforms.',
        features: [
          'Auto resistance calibration',
          'SPD + cage pedals',
          'Ceramic bearings',
        ],
        specs: ['53 lb flywheel', 'Kevlar belt', '155 mm Q-factor'],
      },
      {
        id: 'studio-x',
        name: 'Studio X',
        summary: 'Compact bike tailored for boutique rooms and hotels.',
        price: 'Starts at $1,499',
        leadTime: '3-week lead time',
        image:
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=900',
        details:
          'Front transport wheels and sweat-resistant coating mean it keeps pace with back-to-back classes.',
        features: [
          'Magnetic resistance dial',
          'Steel+aluminum frame',
          'Integrated tablet holder',
        ],
        specs: ['44 lb flywheel', 'Poly V-belt', 'Dual bottle cages'],
      },
    ],
  },
  {
    id: 'multi-gyms',
    title: 'Multi Gyms',
    tagline: 'Space-saving stacks built for hotels, schools, and pro facilities.',
    highlight: 'Modular Stack System',
    background:
      'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=1600',
    products: [
      {
        id: 'atlas-quad',
        name: 'Atlas Quad Station',
        summary: 'Four stations, two weight stacks, endless programming.',
        price: 'Starts at $6,999',
        leadTime: '8-week lead time',
        image:
          'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=900',
        details:
          'Dual 220 lb stacks, swivel pulleys, and integrated pull-up options make it a compact centerpiece for collegiate rooms.',
        features: [
          '11 attachment points',
          'Integrated storage tray',
          'Custom color plates',
        ],
        specs: ['2x220 lb stacks', '24 seat positions', '90" height'],
      },
      {
        id: 'fusion-duo',
        name: 'Fusion Duo',
        summary: 'Cable crossover + smith attachment inside one frame.',
        price: 'Starts at $7,799',
        leadTime: '10-week lead time',
        image:
          'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80&w=900',
        details:
          'Independent smith carriage plus crossover system supports everything from rehab to heavy hypertrophy days.',
        features: [
          'Counterbalanced carriage',
          'Multi-grip pull-up bar',
          'Integrated storage pegs',
        ],
        specs: ['3:1 & 2:1 ratios', 'Stainless guide rods', 'LED stack meters'],
      },
    ],
  },
  {
    id: 'techno-series',
    title: 'Techno Series',
    tagline: 'Connected strength line with sensor-backed reps and cloud data.',
    highlight: 'IoT Enabled',
    background:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600',
    products: [
      {
        id: 'techno-press',
        name: 'Techno Series Chest Press',
        summary: 'Smart selectorized press tracking tempo, power, and fatigue.',
        price: 'Starts at $5,499',
        leadTime: '6-week lead time',
        image:
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=900',
        details:
          'Each rep is logged through embedded sensors feeding to the FZ Cloud dashboard for remote coaching.',
        features: [
          'Force & tempo sensors',
          'Coach dashboard integration',
          'Dynamic seat memory',
        ],
        specs: ['240 lb stack', 'Bilateral arms', '7" glass console'],
      },
      {
        id: 'techno-row',
        name: 'Techno Series Low Row',
        summary: 'Iso-lateral row with gyroscopic handle tracking.',
        price: 'Starts at $5,199',
        leadTime: '6-week lead time',
        image:
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=900',
        details:
          'Gyro sensors inside the grips provide instant feedback on range of motion and asymmetry.',
        features: [
          'Rep-by-rep feedback',
          'Magnetic weight assist',
          'Cloud-based maintenance alerts',
        ],
        specs: ['220 lb stack', 'Adjustable chest pad', 'USB diagnostics'],
      },
    ],
  },
  {
    id: 'prestige-series',
    title: 'Prestige Series',
    tagline: 'Hand-built selectorized line with upholstery and powder options.',
    highlight: 'Designer Finishes',
    background:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600',
    products: [
      {
        id: 'prestige-leg-ext',
        name: 'Prestige Leg Extension',
        summary: 'Luxury upholstery plus easy step-through design.',
        price: 'Starts at $4,399',
        leadTime: '5-week lead time',
        image:
          'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&q=80&w=900',
        details:
          'Brass accent hardware, embroidered logos, and dual-density padding elevate any high-end floor.',
        features: [
          'Easy entry cam',
          'Self-adjusting tibia pad',
          '200+ color combos',
        ],
        specs: ['220 lb stack', 'Biomech cam', '5-year upholstery warranty'],
      },
      {
        id: 'prestige-adductor',
        name: 'Prestige Adductor / Abductor',
        summary: 'Dual-function station with intuitive switch-over lever.',
        price: 'Starts at $4,899',
        leadTime: '6-week lead time',
        image:
          'https://images.unsplash.com/photo-1518611012118-90cd9b402b53?auto=format&fit=crop&q=80&w=900',
        details:
          'Gas-assisted range limiter and privacy shrouds offer a premium member experience.',
        features: [
          'Dual function lever',
          'Privacy shrouds',
          'Mag assist incremental plates',
        ],
        specs: ['210 lb stack', 'Pivoting seat', 'Custom stitch patterns'],
      },
    ],
  },
  {
    id: 'endurance-series',
    title: 'Endurance Series',
    tagline: 'Conditioning tools built to eat watts day and night.',
    highlight: '24/7 Duty Cycle',
    background:
      'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=1600',
    products: [
      {
        id: 'endurance-airbike',
        name: 'Endurance Air Bike',
        summary: 'Belt-driven fan bike with oversized cranks.',
        price: 'Starts at $1,299',
        leadTime: 'Ready to ship',
        image:
          'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=900',
        details:
          'Industrial belt drive keeps noise down while still delivering brutal watt spikes for HIIT work.',
        features: [
          'Kevlar belt drive',
          'Multi-grip arms',
          'Wind guard with logo',
        ],
        specs: ['27" fan', 'Fully sealed bearings', 'Powder-coated steel'],
      },
      {
        id: 'endurance-rower',
        name: 'Endurance Smart Rower',
        summary: 'Hybrid air + magnetic resistance with torsion rail.',
        price: 'Starts at $1,899',
        leadTime: '3-week lead time',
        image:
          'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=900',
        details:
          'Dual-stage resistance keeps splits consistent while the console pushes data to team dashboards.',
        features: [
          'Air + magnetic combo',
          'Ergonomic seat + footboards',
          'Fold-away rail',
        ],
        specs: ['Stainless rail', '4.5" console', 'ANT+/BLE'],
      },
    ],
  },
];

