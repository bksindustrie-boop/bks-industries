// ==========================================================================
// B.K.S. Industries - Products Catalog Data Store
// Updated: 2026-09-07T09:08:47.507Z
// ==========================================================================
const DEFAULT_PRODUCTS_DATA = [
  {
    "id": "prod-01",
    "name": "Single Burner Bulk Cooking Range",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/Single-Burner-Bulk-Cooking-Range-.png",
    "fuel": "LPG / PNG Gas",
    "specs": [
      "Heavy Cast Iron High-Pressure Burner",
      "Heavy 16G SS 304 Body Frame",
      "Removable Spillage Drip Tray",
      "Heavy Vessel Pan Support"
    ],
    "desc": "Heavy-duty commercial single burner stockpot stove for hotels, restaurants, and bulk catering."
  },
  {
    "id": "prod-02",
    "name": "Two Burner Commercial Cooking Range",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/Two_burner.png",
    "fuel": "LPG / PNG Gas",
    "specs": [
      "Dual Independent Control Valves",
      "High Thermal Efficiency Burners",
      "Stainless Steel Drip Trays",
      "Heavy Tubular Pipe Legs"
    ],
    "desc": "Dual burner commercial gas cooking range engineered for high-output kitchen lines."
  },
  {
    "id": "prod-03",
    "name": "Four Burner Commercial Gas Range",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/Four Burner.png",
    "fuel": "LPG / PNG Gas",
    "specs": [
      "4 High Flame Indian / Continental Burners",
      "Heavy Gauge SS 304 Fabrication",
      "Lower Storage Undershelf",
      "Individual Pilot Needle Valves"
    ],
    "desc": "Four-station heavy commercial gas cooking range for fast food and high-traffic restaurant kitchens."
  },
  {
    "id": "prod-04",
    "name": "Commercial Cooking Range with Hot Case / Oven",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/Burner With hot Case.png",
    "fuel": "LPG / PNG Gas",
    "specs": [
      "Top High-Pressure Burners + Bottom Warming Oven",
      "Double Wall Insulated Oven Chamber",
      "Heavy Duty Pan Grates",
      "Spacious Lower Storage Base"
    ],
    "desc": "Multipurpose cooking range integrated with bottom insulated hot case warming cabinet."
  },
  {
    "id": "prod-05",
    "name": "Chinese Wok Cooking Range",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/Chinish Burner.png",
    "fuel": "LPG Gas + Air Blower",
    "specs": [
      "Heavy Cast Iron Wok Ring",
      "Integrated Swivel Water Faucet",
      "Rear Splashback & Water Drainage Trough",
      "High Pressure Jet Burner"
    ],
    "desc": "Professional Indo-Chinese commercial wok burner with continuous water curtain cooling channel."
  },
  {
    "id": "prod-06",
    "name": "Commercial Flat Dosa Plate & Bhatti",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/dosa plate1.png",
    "fuel": "LPG Gas",
    "specs": [
      "16mm Thick Polished Mild Steel Hot Plate",
      "3-Side SS Oil Splash Shield",
      "Front Oil Collection Gutter & Cup",
      "Uniform Multi-Line Burner Heat"
    ],
    "desc": "Heavy-duty commercial Dosa Bhatti flat plate griddle with uniform heat distribution for South Indian menus."
  },
  {
    "id": "prod-07",
    "name": "Chapati & Dosa Cooking Plate Table",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/dosa Plate2.png",
    "fuel": "LPG Gas",
    "specs": [
      "Heavy Flat Tawa Plate Top",
      "Dedicated Puffer & Warming Zone",
      "Stainless Steel Body & Storage Shelf",
      "Precision Needle Flame Valves"
    ],
    "desc": "Commercial flat tawa griddle and chapati maker table with integrated bottom storage shelf."
  },
  {
    "id": "prod-08",
    "name": "Commercial Double Deep Fat Fryer",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/double-deep-fat-fryer.png",
    "fuel": "Electric 220V / LPG Gas",
    "specs": [
      "Dual Stainless Steel Oil Tanks (12L + 12L)",
      "Thermostatic Temperature Control (50-200Â°C)",
      "High-Grade SS Mesh Frying Baskets",
      "Bottom Oil Drain Valve Tap"
    ],
    "desc": "Commercial double tank deep fat fryer for crispy french fries, samosas, and fried delicacies."
  },
  {
    "id": "prod-09",
    "name": "Tilting Bratt Pan (150 Liters)",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/150 Ltr tilting-bratt.png",
    "fuel": "LPG Gas / Electric 415V",
    "specs": [
      "Capacity: 150 Liters Bulk Cooking Pan",
      "Smooth Manual Tilting Worm Gear Wheel",
      "Heavy SS 304 Rectangular Cooking Well",
      "Counterbalanced Spring-Loaded Insulated Lid"
    ],
    "desc": "Commercial 150L tilting Bratt pan for bulk batch cooking, gravies, braising, and curries."
  },
  {
    "id": "prod-10",
    "name": "Tilting Bratt Pan (200 Liters)",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/200 ltr tilting-bratt-pan.png",
    "fuel": "LPG Gas / Electric 415V",
    "specs": [
      "Capacity: 200 Liters Master Bulk Cooking",
      "Precision Tilting Mechanism for Easy Emptying",
      "Uniform High-Temp Base Heating",
      "Heavy Reinforced Industrial Frame"
    ],
    "desc": "Heavy-duty 200-liter tilting Bratt pan for mass institutional canteens, catering, and hospitals."
  },
  {
    "id": "prod-11",
    "name": "Tilting Batter Grinder & Cooking Bhatti",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/tilting Bhat.png",
    "fuel": "Electric / Gas",
    "specs": [
      "Heavy Natural Black Granite Roller Drum",
      "Tilting Mechanism for Effortless Unloading",
      "Heavy Food-Grade SS 304 Outer Drum",
      "Heavy Duty Gear Box Drive Motor"
    ],
    "desc": "High-capacity commercial wet grinder and tilting batter processor for idli and dosa kitchens."
  },
  {
    "id": "prod-12",
    "name": "Commercial BBQ Charcoal Griller",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/bbq-griller-500x500.png",
    "fuel": "Charcoal / Briquettes",
    "specs": [
      "Heavy SS 304 Charcoal Coal Bed Basin",
      "Refractory Fire Brick Heat Lining",
      "Removable SS Mesh Barbecue Grate",
      "Bottom Ash Collection Tray & Undershelf"
    ],
    "desc": "Commercial open-pit stainless steel barbecue grill for live cooking counters and restaurants."
  },
  {
    "id": "prod-13",
    "name": "Commercial Stainless Steel Tandoor Oven",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/tandoor-oven-.png",
    "fuel": "Charcoal / LPG Gas",
    "specs": [
      "Authentic High-Density Clay Pot Inside",
      "Heavy SS 304 Outer Casing with Rockwool Insulation",
      "Heavy Castor Wheels for Easy Mobility",
      "Includes SS Skewers & Top Lid Cover"
    ],
    "desc": "Insulated stainless steel charcoal/gas tandoor for authentic naans, rotis, and kebabs."
  },
  {
    "id": "prod-14",
    "name": "Commercial Pizza Deck Oven",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/Pizza Oven.png",
    "fuel": "Electric 415V / LPG Gas",
    "specs": [
      "High-Temp Cordierite Ceramic Baking Deck",
      "Top & Bottom Independent Temperature Controllers",
      "Toughened Glass Viewing Window with Halogen Light",
      "Insulated Double Wall Energy Saving Body"
    ],
    "desc": "Commercial stone base deck baking oven for crispy artisan pizzas, garlic breads, and pastries."
  },
  {
    "id": "prod-15",
    "name": "Commercial Shawarma Rotisserie Machine",
    "category": "cooking",
    "categoryLabel": "Cooking Ranges",
    "image": "images/WEB/shawarma machine.png",
    "fuel": "LPG Gas Infrared / Electric",
    "specs": [
      "Multi-Zone Ceramic Radiant Infrared Burners",
      "Motorized SS Skewer Spit with Adjustable Distance",
      "Removable Bottom Oil & Meat Drip Tray",
      "Full SS 304 Hygienic Housing"
    ],
    "desc": "Vertical radiant burner Shawarma donor machine with motorized rotating skewer spit."
  },
  {
    "id": "prod-16",
    "name": "SS Plain Preparation Work Table",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/Work Table.png",
    "fuel": "None",
    "specs": [
      "16 Gauge SS 304 Food Grade Sheet Top",
      "Heavy Duty Tubular Pipe Legs",
      "Adjustable SS Bullet Levelling Feet",
      "Sound Deadened Board Under Top Sheet"
    ],
    "desc": "Heavy-duty plain stainless steel preparation work table for commercial kitchen prep lines."
  },
  {
    "id": "prod-17",
    "name": "SS Work Table with Integrated Sink",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/sinle Sink with work Table.png",
    "fuel": "Water Inlet / Drain",
    "specs": [
      "Integrated Deep Drawn Sink Bowl + Prep Table",
      "Rear 150mm High Wall Splashback Guard",
      "Includes Swivel Water Tap Connection",
      "Food Grade SS 304 Satin Finish"
    ],
    "desc": "Multipurpose preparation table featuring an integrated washing sink bowl and splashback."
  },
  {
    "id": "prod-18",
    "name": "Single Sink Pot Wash Unit",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/single-sink-unit-.png",
    "fuel": "Water Inlet / Drain",
    "specs": [
      "Single Deep Drawn SS Bowl (18\"x18\"x12\")",
      "16 Gauge SS 304 Construction",
      "Rear 150mm Wall Splash Guard",
      "Swivel Spout Faucet & Strainer Coupling"
    ],
    "desc": "Commercial single bowl stainless steel utensil and pot washing sink unit."
  },
  {
    "id": "prod-19",
    "name": "Double Sink Pot Wash Unit",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/two Sink Unite.png",
    "fuel": "Water Inlet / Drain",
    "specs": [
      "Dual 18\"x18\" Deep SS Sink Bowls",
      "Heavy Duty Tubular Legs with Cross Bracing",
      "Dual Swivel Faucet Water Connections",
      "Corner Waste Strainers with Drain Traps"
    ],
    "desc": "Double bowl stainless steel kitchen wash and rinse sink station."
  },
  {
    "id": "prod-20",
    "name": "Triple Sink Wash & Sanitize Unit",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/3_Sink_Unit.png",
    "fuel": "Water Inlet / Drain",
    "specs": [
      "Three Compartment SS Wash/Rinse/Sanitize Bowls",
      "Heavy Gauge SS 304 Top Sheet",
      "Rear High Wall Splashback",
      "Independent Bowl Drain Ports"
    ],
    "desc": "Commercial 3-bowl pot, dish, and utensil washing and sanitizing sink unit."
  },
  {
    "id": "prod-21",
    "name": "Heavy-Duty Deep Pot Wash Sink",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/pot wash sink.png",
    "fuel": "Water Inlet / Drain",
    "specs": [
      "Extra Deep 24\"x24\"x16\" SS Pot Washing Bowl",
      "Reinforced Heavy Frame for Large Degchis & Handis",
      "Heavy-Duty SS Waste Coupling",
      "High Water Splash Surround"
    ],
    "desc": "Extra-deep heavy gauge stainless steel sink for large cooking vessels and degchis."
  },
  {
    "id": "prod-22",
    "name": "Hygienic SS Hand Wash Sink",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/hand wash sink.png",
    "fuel": "Water Inlet / Drain",
    "specs": [
      "Compact Wall Mounted / Free Standing Design",
      "Deep Bowl with Soap Dispenser Stand",
      "High Rear Splashback Shield",
      "Full SS 304 Satin Finish"
    ],
    "desc": "Hygienic stainless steel hand washing sink for kitchen entries and dining corridors."
  },
  {
    "id": "prod-23",
    "name": "3-Tap Stainless Steel Hand Wash Station",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/3-tap-stainless-steel-hand-wash.jpg",
    "fuel": "Water Inlet / Drain",
    "specs": [
      "Continuous Trough Sink for 3 Simultaneous Users",
      "Multiple Pillar Taps / Sensor Taps",
      "Full SS 304 Heavy Gauge Construction",
      "Ideal for Factory, School & Canteen Dining"
    ],
    "desc": "Multi-station continuous handwash sink trough for mass dining halls and canteens."
  },
  {
    "id": "prod-24",
    "name": "Vegetable Scraping & Sorting Chute Table",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/chute table.png",
    "fuel": "Drain",
    "specs": [
      "Integrated Waste Scrap Hole with Rubber Gasket",
      "Sloped Table Top for Clean Vegetable Sorting",
      "Heavy SS 304 Top Sheet with Underframe",
      "Adjustable Stainless Bullet Feet"
    ],
    "desc": "Specialized vegetable preparation, peeling, and waste disposal chute table."
  },
  {
    "id": "prod-25",
    "name": "Commercial Idli Making Machine",
    "category": "prep",
    "categoryLabel": "Preparation & Sinks",
    "image": "images/WEB/idli-making-machine.png",
    "fuel": "Electric 220V",
    "specs": [
      "Automated High-Speed Batter Dispenser",
      "Food Grade SS 304 Contact Parts",
      "Consistent Idli Portion Weight & Shape",
      "Easy Disassembly for Daily Hygiene Washing"
    ],
    "desc": "Commercial mechanized idli portioning and batter processing machine."
  },
  {
    "id": "prod-26",
    "name": "Two Door Commercial Vertical Refrigerator",
    "category": "refrigeration",
    "categoryLabel": "Refrigeration",
    "image": "images/WEB/2 door fridge.png",
    "fuel": "Electric 220V",
    "specs": [
      "Capacity: 500L - 600L Storage Volume",
      "Temp: +2Â°C to +8Â°C (Chiller) / -18Â°C (Freezer)",
      "Heavy Tropicalized Compressor (up to 43Â°C ambient)",
      "Digital Microprocessor Temperature Controller"
    ],
    "desc": "2-door stainless steel vertical commercial kitchen refrigerator / deep freezer."
  },
  {
    "id": "prod-27",
    "name": "Four Door Vertical Commercial Deep Freezer",
    "category": "refrigeration",
    "categoryLabel": "Refrigeration",
    "image": "images/WEB/vertical_freezer.png",
    "fuel": "Electric 220V",
    "specs": [
      "Capacity: 1000L - 1200L Heavy Storage Volume",
      "Food Grade SS 304 Inside & Outside Construction",
      "Auto Defrost & Self-Closing Magnetic Gasket Doors",
      "Adjustable SS Heavy Storage Grid Shelves"
    ],
    "desc": "Heavy-duty 4-door vertical upright stainless steel refrigerator for restaurants and hotels."
  },
  {
    "id": "prod-28",
    "name": "Under-Counter Worktop Refrigerator",
    "category": "refrigeration",
    "categoryLabel": "Refrigeration",
    "image": "images/WEB/table top freezer.png",
    "fuel": "Electric 220V",
    "specs": [
      "Heavy SS 304 Worktop Surface for Food Prep",
      "Capacity: 280L / 400L Storage Under Counter",
      "Fan-Assisted Forced Air Fast Cooling System",
      "GN Pan Compatible Slide Runners Inside"
    ],
    "desc": "Worktop preparation table with refrigerated cold storage cabinets below."
  },
  {
    "id": "prod-29",
    "name": "Prep Counter Refrigerator with GN Wells & Overshelf",
    "category": "refrigeration",
    "categoryLabel": "Refrigeration",
    "image": "images/WEB/table top freezer with overshelf.png",
    "fuel": "Electric 220V",
    "specs": [
      "Top Cold Well holds 6 to 9 GN Topping Containers",
      "Polyethylene Food Cutting Board Work Area",
      "Refrigerated Storage Cabinets Below Counter",
      "Upper Stainless Steel Utility Overshelf"
    ],
    "desc": "Refrigerated pizza topping and salad preparation counter with GN condiment wells and overshelf."
  },
  {
    "id": "prod-30",
    "name": "Food Grade SS 304 Water Storage Tank (50L / 1000L)",
    "category": "refrigeration",
    "categoryLabel": "Refrigeration",
    "image": "images/WEB/1000 Liter Water Tank.png",
    "fuel": "Water Inlet / Drain",
    "specs": [
      "Capacity: 50L to 1000L Volumes",
      "Heavy 16 Gauge SS 304 Argon Welded Sheet",
      "Manhole Top Lid with Breather Vent & Level Gauge",
      "Bottom Conical Drain Port for Complete Cleanout"
    ],
    "desc": "Heavy-duty food-grade stainless steel potable water storage tank for commercial kitchens."
  },
  {
    "id": "prod-31",
    "name": "Commercial Hot Bain Marie Servery Counter",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/Hot-Bain-Marie-Counter.png",
    "fuel": "Electric 220V / LPG Gas",
    "specs": [
      "Holds 3 / 4 / 6 Standard GN Food Containers",
      "Thermostatic Temperature Control (30-110Â°C)",
      "Toughened Curved Glass Sneeze Guard Cover",
      "Ball Valve Bottom Water Drainage System"
    ],
    "desc": "Commercial electric / gas Bain Marie counter for hot buffet foodservice lines."
  },
  {
    "id": "prod-32",
    "name": "6-Hole Bain Marie Round Vessel Counter",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/6-hole-brain-marie-counter-500x500.png",
    "fuel": "LPG Gas / Electric",
    "specs": [
      "6 Heavy Deep Round Drop-In Stainless Steel Pots with Lids",
      "Water Bath Jacket for Uniform Gentle Heating",
      "Front Stainless Tray Slide Rail for Customers",
      "Spacious Bottom Enclosed Under-Storage Locker"
    ],
    "desc": "6-pot round vessel hot Bain Marie counter for gravies, sambar, curries, and soups."
  },
  {
    "id": "prod-33",
    "name": "8 Vessel Commercial Hot Food Case",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/8 Vessel Hot Case.png",
    "fuel": "Electric 220V / LPG Gas",
    "specs": [
      "Holds 8 Independent GN 1/1 Food Containers",
      "Thermostat Temperature Controller with Indicator",
      "Curved Toughened Glass Sneeze Shield",
      "Full Heavy-Gauge SS 304 Satin Finish"
    ],
    "desc": "8-vessel hot food Bain Marie counter for busy hotel buffets and dining canteens."
  },
  {
    "id": "prod-34",
    "name": "12 Vessel Commercial Hot Food Buffet Case",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/12 Vessel Hot Case.png",
    "fuel": "Electric 220V / LPG Gas",
    "specs": [
      "Capacity for 12 Independent GN Food Vessels with Covers",
      "Multi-Zone Independent Heating Element Switches",
      "Upper Stainless Heated Plate Shelf Over-Bridge",
      "Full Heavy-Gauge SS 304 Mirror Polished Surround"
    ],
    "desc": "Large 12-vessel master hot food servery case for high-traffic hotel buffets and canteens."
  },
  {
    "id": "prod-35",
    "name": "Commercial Biryani Bain Marie Counter",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/biriyani hot Case.jpg",
    "fuel": "LPG Gas / Electric",
    "specs": [
      "Accommodates Large Handis / Degchis (30kg - 60kg Biryani)",
      "Insulated Water Jacket to Prevent Rice Charring & Drying",
      "High Splash Surround with Customer Tray Rails",
      "Heavy Reinforced Stand Construction"
    ],
    "desc": "Heavy stainless steel Biryani warming counter engineered for large commercial degchis."
  },
  {
    "id": "prod-36",
    "name": "Stainless Steel Hot Display Food Warmer",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/hot wamer.png",
    "fuel": "Electric 220V",
    "specs": [
      "Even Thermal Air Circulation Heating",
      "Internal Warm Display Light",
      "Removable Bottom Crumb Tray",
      "Sliding Toughened Glass Doors"
    ],
    "desc": "Countertop heated display case for pastries, samosas, patties, and savory snacks."
  },
  {
    "id": "prod-37",
    "name": "Curved Glass Pastry & Dessert Display Counter",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/disply Counter.png",
    "fuel": "Electric 220V",
    "specs": [
      "Front Heated Curved Anti-Fog Double Glazed Glass",
      "Temperature: +2Â°C to +8Â°C with Humidity Retention",
      "3-Tier Adjustable Glass Shelves with Warm LED Lights",
      "Mirror Polished SS 304 Base"
    ],
    "desc": "Luxury illuminated curved glass refrigerated display showcase for pastries and desserts."
  },
  {
    "id": "prod-38",
    "name": "Illuminated Stainless Steel Sweet Display Showcase",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/s s display Counter.JPG",
    "fuel": "Electric 220V",
    "specs": [
      "Heavy SS 304 Construction with Sliding Glass Rear Doors",
      "Optional Heated Rods or Refrigerated Cold Coil",
      "Illuminated Acrylic Logo Branding Box on Front",
      "Multi-Tier Stainless Steel Tray Shelves"
    ],
    "desc": "Commercial Indian sweet and confectionery display counter with illumination."
  },
  {
    "id": "prod-39",
    "name": "Live Pani Puri & Street Chat Counter",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/Pani Puri Counter.jpeg",
    "fuel": "Electric 220V / LPG",
    "specs": [
      "Curved Toughened Glass Front Sneeze Shield with Puri Storage Box",
      "Integrated Drop-In SS Bowls for Chutneys & Spices",
      "Central Pani Puri Water Bowls Well",
      "Attractive LED Backlit Signboard Front"
    ],
    "desc": "Custom stainless steel Pani Puri and Indian street chat live food service counter."
  },
  {
    "id": "prod-40",
    "name": "Stainless Steel Cashier & Billing POS Counter",
    "category": "servery",
    "categoryLabel": "Servery & Warmers",
    "image": "images/WEB/Cash Counter.png",
    "fuel": "None",
    "specs": [
      "Lockable Cash Drawer Unit with Key",
      "Cable Grommets for POS Computer / Billing Machine",
      "Footrest Bar & Customer Handbag Shelf",
      "Complete Food Grade SS 304 Construction"
    ],
    "desc": "Stainless steel cashier POS counter and billing desk for restaurants and food courts."
  },
  {
    "id": "prod-41",
    "name": "Idli Steamer Cabinet with Integrated Steam Boiler",
    "category": "bakery",
    "categoryLabel": "Bakery & Snacks",
    "image": "images/WEB/Idli-Steamer-With-Boiler-Electric.png",
    "fuel": "LPG Gas / Electric 415V",
    "specs": [
      "Capacity: 54 / 108 / 162 Idlis per batch",
      "Food Grade SS 304 Steaming Chamber & Perforated Trays",
      "Integrated Bottom Steam Water Boiler with Auto-Cutoff",
      "Silicone Gasket Door with Locking Clamps"
    ],
    "desc": "Commercial high-volume idli steamer cabinet with integrated steam boiler system."
  },
  {
    "id": "prod-42",
    "name": "Bulk 120 / 300 Idli Steamer Box",
    "category": "bakery",
    "categoryLabel": "Bakery & Snacks",
    "image": "images/WEB/120 Idly Box.png",
    "fuel": "Direct Steam / Boiler",
    "specs": [
      "Heavy SS 304 Perforated Steaming Trays",
      "Insulated Double Wall Door with Heat Guard",
      "Pressure Relief Safety Vent",
      "High Output Capacity for Bulk Catering"
    ],
    "desc": "High-capacity industrial idli steaming box for central kitchens, canteens, and marriage caterers."
  },
  {
    "id": "prod-43",
    "name": "Commercial Stainless Steel Sandwich Griller",
    "category": "bakery",
    "categoryLabel": "Bakery & Snacks",
    "image": "images/WEB/sandwich Griller.png",
    "fuel": "Electric 220V",
    "specs": [
      "Heavy Cast Iron Ribbed Pressing Plates",
      "Thermostat Control (50-300Â°C) with Indicator",
      "Counterbalanced Floating Top Press Lid",
      "Removable Bottom Grease Drip Tray"
    ],
    "desc": "Heavy-duty panini and sandwich contact griller press for cafes and snack bars."
  },
  {
    "id": "prod-44",
    "name": "Mobile Sweet Corn Live Steamer Counter",
    "category": "bakery",
    "categoryLabel": "Bakery & Snacks",
    "image": "images/WEB/Sweet_corn_counter.png",
    "fuel": "Electric 220V",
    "specs": [
      "Perforated SS Steamer Tank with Hinged Lid",
      "Integrated Condiment Mixing Bowls Holder",
      "Mobile Stand on Heavy Swivel Castors",
      "Attractive Graphic Signboard Canopy Support"
    ],
    "desc": "Mobile commercial sweet corn steamer kiosk cart for food courts and live counters."
  },
  {
    "id": "prod-45",
    "name": "Commercial Live Momos Steamer Counter",
    "category": "bakery",
    "categoryLabel": "Bakery & Snacks",
    "image": "images/WEB/momose Couner.png",
    "fuel": "Electric 220V / LPG Gas",
    "specs": [
      "Multi-Tier Perforated Stainless Steaming Chambers",
      "Fast Steam Generation Boiler Bottom",
      "Glass Sneeze Shield & Serving Shelf",
      "Compact Stand with Locking Wheels"
    ],
    "desc": "Specialized stainless steel Momos steaming and live presentation counter."
  },
  {
    "id": "prod-46",
    "name": "SS 304 Commercial Exhaust Hood Canopy",
    "category": "exhaust",
    "categoryLabel": "Exhaust Systems",
    "image": "images/WEB/exhaust hood.jpeg",
    "fuel": "Exhaust Extraction",
    "specs": [
      "100% SS 304 Heavy Gauge Seamless Welded Construction",
      "Removable Stainless Steel Baffle Grease Filters",
      "Continuous Perimeter Oil Collection Gutter with Drain Cock",
      "Custom Sized to Match Cooking Line Dimensions"
    ],
    "desc": "Heavy-gauge stainless steel kitchen exhaust hood canopy with baffle grease filters for zero-smoke cooking."
  },
  {
    "id": "prod-47",
    "name": "Rooftop Exhaust Ducting & Discharge System",
    "category": "exhaust",
    "categoryLabel": "Exhaust Systems",
    "image": "images/WEB/exhaust hood out.jpeg",
    "fuel": "Exhaust Flow Line",
    "specs": [
      "Heavy Gauge GI / SS 304 Sheet Fabrication",
      "Flanged Lock Joints with Fire-Resistant Gaskets",
      "In-Line Centrifugal Exhaust Blower Fan System",
      "Compliant with Fire Safety & Municipal Kitchen Norms"
    ],
    "desc": "Commercial kitchen exhaust ducting fabrication with grease-tight fire safety flanging."
  },
  {
    "id": "prod-48",
    "name": "Under-Counter SS Vegetable & Spice Holding Rack",
    "category": "storage",
    "categoryLabel": "Storage & Trolleys",
    "image": "images/WEB/Under-Counter-Vegetable-Rack-Holding-Trolley.png",
    "fuel": "None",
    "specs": [
      "Fits under standard 34\" prep tables",
      "Holds Multiple Spice & Batter Containers",
      "Smooth Rolling Swivel Wheels with Brakes",
      "Food Grade SS 304 Construction"
    ],
    "desc": "Compact mobile spices and condiments ingredient trolley for commercial cooking lines."
  },
  {
    "id": "prod-49",
    "name": "Perforated Potato & Onion Storage Bin Trolley",
    "category": "storage",
    "categoryLabel": "Storage & Trolleys",
    "image": "images/WEB/potato bin1.png",
    "fuel": "None",
    "specs": [
      "Multi-Tier Heavy Gauge Perforated SS Baskets",
      "360Â° Air Circulation to Prevent Vegetable Spoilage",
      "Heavy Duty 4\" PU Castor Wheels",
      "Capacity: 100kg+ Bulk Root Vegetables"
    ],
    "desc": "Mobile perforated vegetable storage bin for potatoes, onions, and root vegetables."
  },
  {
    "id": "prod-50",
    "name": "Stainless Steel Storage Drawer Cabinet",
    "category": "storage",
    "categoryLabel": "Storage & Trolleys",
    "image": "images/WEB/drawer cabinet.png",
    "fuel": "None",
    "specs": [
      "Smooth Ball-Bearing Slide Runners",
      "Lockable Drawers for Cutlery & Spices",
      "Heavy Gauge SS 304 Solid Top Work Area",
      "Hygienic Enclosed Base with Levelling Feet"
    ],
    "desc": "Heavy stainless steel drawer storage cabinet unit for prep tools, cutlery, and kitchen supplies."
  },
  {
    "id": "prod-51",
    "name": "Heavy-Duty Platform Hand Truck Trolley",
    "category": "storage",
    "categoryLabel": "Storage & Trolleys",
    "image": "images/WEB/Platform-Trolley.png",
    "fuel": "None",
    "specs": [
      "Heavy SS 304 Base Plate with Channel Stiffeners",
      "Load Rating: 300kg to 500kg",
      "Heavy Duty 6\" Industrial PU Castor Wheels",
      "Ergonomic Push/Pull Tubular Handle"
    ],
    "desc": "Heavy-duty stainless steel platform hand truck trolley for bulk goods and flour sacks."
  },
  {
    "id": "prod-52",
    "name": "Multi-Tier Stainless Steel Utility Service Trolley",
    "category": "storage",
    "categoryLabel": "Storage & Trolleys",
    "image": "images/WEB/trollry.png",
    "fuel": "None",
    "specs": [
      "2 or 3 Deep Drawn Sound-Deadened SS Trays",
      "Side Safety Guard Rails to prevent vessel spills",
      "Rubber Corner Bumper Wheels",
      "Quiet Smooth-Rolling PU Castors"
    ],
    "desc": "Multi-tier stainless steel dining room and kitchen food service utility trolley."
  },
  {
    "id": "prod-53",
    "name": "Commercial SS Canteen Dining Table & Chairs",
    "category": "storage",
    "categoryLabel": "Storage & Trolleys",
    "image": "images/WEB/Round Table.png",
    "fuel": "None",
    "specs": [
      "Heavy SS 304 Table Top with Round Stools / Chairs",
      "Zero Floor Clutter & Easy Mopping Design",
      "Heavy Powder-Coated / SS Tubular Underframe",
      "Engineered for Heavy Industrial & College Canteens"
    ],
    "desc": "Commercial canteen dining tables and stainless steel seating furniture for institutions."
  }
];

const PRODUCT_STORAGE_KEY = 'bksi_custom_products_v1';

function getAllProducts() {
  try {
    const saved = localStorage.getItem(PRODUCT_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const customProds = parsed.filter(p => p && (p.isCustom || (p.id && p.id.startsWith('prod-custom-'))));
        const modifiedProds = parsed.filter(p => p && !p.isCustom && (!p.id || !p.id.startsWith('prod-custom-')));
        const modifiedMap = new Map(modifiedProds.map(p => [p.id, p]));
        const result = [...customProds];
        const seenIds = new Set(customProds.map(p => p.id));
        for (const def of DEFAULT_PRODUCTS_DATA) {
          if (seenIds.has(def.id)) continue;
          if (modifiedMap.has(def.id)) {
            result.push(modifiedMap.get(def.id));
          } else {
            result.push(def);
          }
          seenIds.add(def.id);
        }
        return result;
      }
    }
  } catch (e) {
    console.error('Error reading products from localStorage:', e);
  }
  return [...DEFAULT_PRODUCTS_DATA];
}

function getProductById(id) {
  const all = getAllProducts();
  return all.find(p => p.id === id) || null;
}

function saveProductToStorage(prodObj) {
  try {
    const all = getAllProducts();
    const existingIndex = all.findIndex(p => p.id === prodObj.id);
    if (existingIndex >= 0) {
      all[existingIndex] = { ...all[existingIndex], ...prodObj };
    } else {
      all.unshift(prodObj);
    }
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(all));
    if (typeof window !== 'undefined') window.webProductsData = all;
    return { success: true, count: all.length };
  } catch (e) {
    console.error('Failed to save product:', e);
    return { success: false, error: e.message };
  }
}

function deleteProductFromStorage(id) {
  try {
    let all = getAllProducts();
    all = all.filter(p => p.id !== id);
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(all));
    if (typeof window !== 'undefined') window.webProductsData = all;
    return { success: true, count: all.length };
  } catch (e) {
    console.error('Failed to delete product:', e);
    return { success: false, error: e.message };
  }
}

if (typeof window !== 'undefined') {
  window.webProductsData = getAllProducts();
}
