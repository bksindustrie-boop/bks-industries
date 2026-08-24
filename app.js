// ==========================================================================
// B.K.S. Industries - Modern Commercial Kitchen & SS Fabrication Controller
// ==========================================================================

// ==========================================================================
// AUTHENTIC PRODUCT CATALOG DATA (MAPPED TO IMAGES/WEB/ REPOSITORY PHOTOS)
// ==========================================================================
const webProductsData = [
  // =========================================================================
  // 1. COOKING RANGES & BURNERS (Category: 'cooking')
  // =========================================================================
  {
    id: 'prod-01',
    name: 'Single Burner Bulk Cooking Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/Single-Burner-Bulk-Cooking-Range-.png',
    fuel: 'LPG / PNG Gas',
    specs: ['Heavy Cast Iron High-Pressure Burner', 'Heavy 16G SS 304 Body Frame', 'Removable Spillage Drip Tray', 'Heavy Vessel Pan Support'],
    desc: 'Heavy-duty commercial single burner stockpot stove for hotels, restaurants, and bulk catering.'
  },
  {
    id: 'prod-02',
    name: 'Two Burner Commercial Cooking Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/Two_burner.png',
    fuel: 'LPG / PNG Gas',
    specs: ['Dual Independent Control Valves', 'High Thermal Efficiency Burners', 'Stainless Steel Drip Trays', 'Heavy Tubular Pipe Legs'],
    desc: 'Dual burner commercial gas cooking range engineered for high-output kitchen lines.'
  },
  {
    id: 'prod-03',
    name: 'Four Burner Commercial Gas Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/Four Burner.png',
    fuel: 'LPG / PNG Gas',
    specs: ['4 High Flame Indian / Continental Burners', 'Heavy Gauge SS 304 Fabrication', 'Lower Storage Undershelf', 'Individual Pilot Needle Valves'],
    desc: 'Four-station heavy commercial gas cooking range for fast food and high-traffic restaurant kitchens.'
  },
  {
    id: 'prod-04',
    name: 'Commercial Cooking Range with Hot Case / Oven',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/Burner With hot Case.png',
    fuel: 'LPG / PNG Gas',
    specs: ['Top High-Pressure Burners + Bottom Warming Oven', 'Double Wall Insulated Oven Chamber', 'Heavy Duty Pan Grates', 'Spacious Lower Storage Base'],
    desc: 'Multipurpose cooking range integrated with bottom insulated hot case warming cabinet.'
  },
  {
    id: 'prod-05',
    name: 'Chinese Wok Cooking Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/Chinish Burner.png',
    fuel: 'LPG Gas + Air Blower',
    specs: ['Heavy Cast Iron Wok Ring', 'Integrated Swivel Water Faucet', 'Rear Splashback & Water Drainage Trough', 'High Pressure Jet Burner'],
    desc: 'Professional Indo-Chinese commercial wok burner with continuous water curtain cooling channel.'
  },
  {
    id: 'prod-06',
    name: 'Commercial Flat Dosa Plate & Bhatti',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/dosa plate1.png',
    fuel: 'LPG Gas',
    specs: ['16mm Thick Polished Mild Steel Hot Plate', '3-Side SS Oil Splash Shield', 'Front Oil Collection Gutter & Cup', 'Uniform Multi-Line Burner Heat'],
    desc: 'Heavy-duty commercial Dosa Bhatti flat plate griddle with uniform heat distribution for South Indian menus.'
  },
  {
    id: 'prod-07',
    name: 'Chapati & Dosa Cooking Plate Table',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/dosa Plate2.png',
    fuel: 'LPG Gas',
    specs: ['Heavy Flat Tawa Plate Top', 'Dedicated Puffer & Warming Zone', 'Stainless Steel Body & Storage Shelf', 'Precision Needle Flame Valves'],
    desc: 'Commercial flat tawa griddle and chapati maker table with integrated bottom storage shelf.'
  },
  {
    id: 'prod-08',
    name: 'Commercial Double Deep Fat Fryer',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/double-deep-fat-fryer.png',
    fuel: 'Electric 220V / LPG Gas',
    specs: ['Dual Stainless Steel Oil Tanks (12L + 12L)', 'Thermostatic Temperature Control (50-200°C)', 'High-Grade SS Mesh Frying Baskets', 'Bottom Oil Drain Valve Tap'],
    desc: 'Commercial double tank deep fat fryer for crispy french fries, samosas, and fried delicacies.'
  },
  {
    id: 'prod-09',
    name: 'Tilting Bratt Pan (150 Liters)',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/150 Ltr tilting-bratt.png',
    fuel: 'LPG Gas / Electric 415V',
    specs: ['Capacity: 150 Liters Bulk Cooking Pan', 'Smooth Manual Tilting Worm Gear Wheel', 'Heavy SS 304 Rectangular Cooking Well', 'Counterbalanced Spring-Loaded Insulated Lid'],
    desc: 'Commercial 150L tilting Bratt pan for bulk batch cooking, gravies, braising, and curries.'
  },
  {
    id: 'prod-10',
    name: 'Tilting Bratt Pan (200 Liters)',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/200 ltr tilting-bratt-pan.png',
    fuel: 'LPG Gas / Electric 415V',
    specs: ['Capacity: 200 Liters Master Bulk Cooking', 'Precision Tilting Mechanism for Easy Emptying', 'Uniform High-Temp Base Heating', 'Heavy Reinforced Industrial Frame'],
    desc: 'Heavy-duty 200-liter tilting Bratt pan for mass institutional canteens, catering, and hospitals.'
  },
  {
    id: 'prod-11',
    name: 'Tilting Batter Grinder & Cooking Bhatti',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/tilting Bhat.png',
    fuel: 'Electric / Gas',
    specs: ['Heavy Natural Black Granite Roller Drum', 'Tilting Mechanism for Effortless Unloading', 'Heavy Food-Grade SS 304 Outer Drum', 'Heavy Duty Gear Box Drive Motor'],
    desc: 'High-capacity commercial wet grinder and tilting batter processor for idli and dosa kitchens.'
  },
  {
    id: 'prod-12',
    name: 'Commercial BBQ Charcoal Griller',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/bbq-griller-500x500.png',
    fuel: 'Charcoal / Briquettes',
    specs: ['Heavy SS 304 Charcoal Coal Bed Basin', 'Refractory Fire Brick Heat Lining', 'Removable SS Mesh Barbecue Grate', 'Bottom Ash Collection Tray & Undershelf'],
    desc: 'Commercial open-pit stainless steel barbecue grill for live cooking counters and restaurants.'
  },
  {
    id: 'prod-13',
    name: 'Commercial Stainless Steel Tandoor Oven',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/tandoor-oven-.png',
    fuel: 'Charcoal / LPG Gas',
    specs: ['Authentic High-Density Clay Pot Inside', 'Heavy SS 304 Outer Casing with Rockwool Insulation', 'Heavy Castor Wheels for Easy Mobility', 'Includes SS Skewers & Top Lid Cover'],
    desc: 'Insulated stainless steel charcoal/gas tandoor for authentic naans, rotis, and kebabs.'
  },
  {
    id: 'prod-14',
    name: 'Commercial Pizza Deck Oven',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/Pizza Oven.png',
    fuel: 'Electric 415V / LPG Gas',
    specs: ['High-Temp Cordierite Ceramic Baking Deck', 'Top & Bottom Independent Temperature Controllers', 'Toughened Glass Viewing Window with Halogen Light', 'Insulated Double Wall Energy Saving Body'],
    desc: 'Commercial stone base deck baking oven for crispy artisan pizzas, garlic breads, and pastries.'
  },
  {
    id: 'prod-15',
    name: 'Commercial Shawarma Rotisserie Machine',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/WEB/shawarma machine.png',
    fuel: 'LPG Gas Infrared / Electric',
    specs: ['Multi-Zone Ceramic Radiant Infrared Burners', 'Motorized SS Skewer Spit with Adjustable Distance', 'Removable Bottom Oil & Meat Drip Tray', 'Full SS 304 Hygienic Housing'],
    desc: 'Vertical radiant burner Shawarma donor machine with motorized rotating skewer spit.'
  },

  // =========================================================================
  // 2. PREPARATION & SS SINKS (Category: 'prep')
  // =========================================================================
  {
    id: 'prod-16',
    name: 'SS Plain Preparation Work Table',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/Work Table.png',
    fuel: 'None',
    specs: ['16 Gauge SS 304 Food Grade Sheet Top', 'Heavy Duty Tubular Pipe Legs', 'Adjustable SS Bullet Levelling Feet', 'Sound Deadened Board Under Top Sheet'],
    desc: 'Heavy-duty plain stainless steel preparation work table for commercial kitchen prep lines.'
  },
  {
    id: 'prod-17',
    name: 'SS Work Table with Integrated Sink',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/sinle Sink with work Table.png',
    fuel: 'Water Inlet / Drain',
    specs: ['Integrated Deep Drawn Sink Bowl + Prep Table', 'Rear 150mm High Wall Splashback Guard', 'Includes Swivel Water Tap Connection', 'Food Grade SS 304 Satin Finish'],
    desc: 'Multipurpose preparation table featuring an integrated washing sink bowl and splashback.'
  },
  {
    id: 'prod-18',
    name: 'Single Sink Pot Wash Unit',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/single-sink-unit-.png',
    fuel: 'Water Inlet / Drain',
    specs: ['Single Deep Drawn SS Bowl (18"x18"x12")', '16 Gauge SS 304 Construction', 'Rear 150mm Wall Splash Guard', 'Swivel Spout Faucet & Strainer Coupling'],
    desc: 'Commercial single bowl stainless steel utensil and pot washing sink unit.'
  },
  {
    id: 'prod-19',
    name: 'Double Sink Pot Wash Unit',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/two Sink Unite.png',
    fuel: 'Water Inlet / Drain',
    specs: ['Dual 18"x18" Deep SS Sink Bowls', 'Heavy Duty Tubular Legs with Cross Bracing', 'Dual Swivel Faucet Water Connections', 'Corner Waste Strainers with Drain Traps'],
    desc: 'Double bowl stainless steel kitchen wash and rinse sink station.'
  },
  {
    id: 'prod-20',
    name: 'Triple Sink Wash & Sanitize Unit',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/3_Sink_Unit.png',
    fuel: 'Water Inlet / Drain',
    specs: ['Three Compartment SS Wash/Rinse/Sanitize Bowls', 'Heavy Gauge SS 304 Top Sheet', 'Rear High Wall Splashback', 'Independent Bowl Drain Ports'],
    desc: 'Commercial 3-bowl pot, dish, and utensil washing and sanitizing sink unit.'
  },
  {
    id: 'prod-21',
    name: 'Heavy-Duty Deep Pot Wash Sink',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/pot wash sink.png',
    fuel: 'Water Inlet / Drain',
    specs: ['Extra Deep 24"x24"x16" SS Pot Washing Bowl', 'Reinforced Heavy Frame for Large Degchis & Handis', 'Heavy-Duty SS Waste Coupling', 'High Water Splash Surround'],
    desc: 'Extra-deep heavy gauge stainless steel sink for large cooking vessels and degchis.'
  },
  {
    id: 'prod-22',
    name: 'Hygienic SS Hand Wash Sink',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/hand wash sink.png',
    fuel: 'Water Inlet / Drain',
    specs: ['Compact Wall Mounted / Free Standing Design', 'Deep Bowl with Soap Dispenser Stand', 'High Rear Splashback Shield', 'Full SS 304 Satin Finish'],
    desc: 'Hygienic stainless steel hand washing sink for kitchen entries and dining corridors.'
  },
  {
    id: 'prod-23',
    name: '3-Tap Stainless Steel Hand Wash Station',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/3-tap-stainless-steel-hand-wash.jpg',
    fuel: 'Water Inlet / Drain',
    specs: ['Continuous Trough Sink for 3 Simultaneous Users', 'Multiple Pillar Taps / Sensor Taps', 'Full SS 304 Heavy Gauge Construction', 'Ideal for Factory, School & Canteen Dining'],
    desc: 'Multi-station continuous handwash sink trough for mass dining halls and canteens.'
  },
  {
    id: 'prod-24',
    name: 'Vegetable Scraping & Sorting Chute Table',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/chute table.png',
    fuel: 'Drain',
    specs: ['Integrated Waste Scrap Hole with Rubber Gasket', 'Sloped Table Top for Clean Vegetable Sorting', 'Heavy SS 304 Top Sheet with Underframe', 'Adjustable Stainless Bullet Feet'],
    desc: 'Specialized vegetable preparation, peeling, and waste disposal chute table.'
  },
  {
    id: 'prod-25',
    name: 'Commercial Idli Making Machine',
    category: 'prep',
    categoryLabel: 'Preparation & Sinks',
    image: 'images/WEB/idli-making-machine.png',
    fuel: 'Electric 220V',
    specs: ['Automated High-Speed Batter Dispenser', 'Food Grade SS 304 Contact Parts', 'Consistent Idli Portion Weight & Shape', 'Easy Disassembly for Daily Hygiene Washing'],
    desc: 'Commercial mechanized idli portioning and batter processing machine.'
  },

  // =========================================================================
  // 3. REFRIGERATION & WATER TANKS (Category: 'refrigeration')
  // =========================================================================
  {
    id: 'prod-26',
    name: 'Two Door Commercial Vertical Refrigerator',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/WEB/2 door fridge.png',
    fuel: 'Electric 220V',
    specs: ['Capacity: 500L - 600L Storage Volume', 'Temp: +2°C to +8°C (Chiller) / -18°C (Freezer)', 'Heavy Tropicalized Compressor (up to 43°C ambient)', 'Digital Microprocessor Temperature Controller'],
    desc: '2-door stainless steel vertical commercial kitchen refrigerator / deep freezer.'
  },
  {
    id: 'prod-27',
    name: 'Four Door Vertical Commercial Deep Freezer',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/WEB/vertical_freezer.png',
    fuel: 'Electric 220V',
    specs: ['Capacity: 1000L - 1200L Heavy Storage Volume', 'Food Grade SS 304 Inside & Outside Construction', 'Auto Defrost & Self-Closing Magnetic Gasket Doors', 'Adjustable SS Heavy Storage Grid Shelves'],
    desc: 'Heavy-duty 4-door vertical upright stainless steel refrigerator for restaurants and hotels.'
  },
  {
    id: 'prod-28',
    name: 'Under-Counter Worktop Refrigerator',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/WEB/table top freezer.png',
    fuel: 'Electric 220V',
    specs: ['Heavy SS 304 Worktop Surface for Food Prep', 'Capacity: 280L / 400L Storage Under Counter', 'Fan-Assisted Forced Air Fast Cooling System', 'GN Pan Compatible Slide Runners Inside'],
    desc: 'Worktop preparation table with refrigerated cold storage cabinets below.'
  },
  {
    id: 'prod-29',
    name: 'Prep Counter Refrigerator with GN Wells & Overshelf',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/WEB/table top freezer with overshelf.png',
    fuel: 'Electric 220V',
    specs: ['Top Cold Well holds 6 to 9 GN Topping Containers', 'Polyethylene Food Cutting Board Work Area', 'Refrigerated Storage Cabinets Below Counter', 'Upper Stainless Steel Utility Overshelf'],
    desc: 'Refrigerated pizza topping and salad preparation counter with GN condiment wells and overshelf.'
  },
  {
    id: 'prod-30',
    name: 'Food Grade SS 304 Water Storage Tank (50L / 1000L)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/WEB/1000 Liter Water Tank.png',
    fuel: 'Water Inlet / Drain',
    specs: ['Capacity: 50L to 1000L Volumes', 'Heavy 16 Gauge SS 304 Argon Welded Sheet', 'Manhole Top Lid with Breather Vent & Level Gauge', 'Bottom Conical Drain Port for Complete Cleanout'],
    desc: 'Heavy-duty food-grade stainless steel potable water storage tank for commercial kitchens.'
  },

  // =========================================================================
  // 4. SERVERY, WARMERS & DISPLAY (Category: 'servery')
  // =========================================================================
  {
    id: 'prod-31',
    name: 'Commercial Hot Bain Marie Servery Counter',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/Hot-Bain-Marie-Counter.png',
    fuel: 'Electric 220V / LPG Gas',
    specs: ['Holds 3 / 4 / 6 Standard GN Food Containers', 'Thermostatic Temperature Control (30-110°C)', 'Toughened Curved Glass Sneeze Guard Cover', 'Ball Valve Bottom Water Drainage System'],
    desc: 'Commercial electric / gas Bain Marie counter for hot buffet foodservice lines.'
  },
  {
    id: 'prod-32',
    name: '6-Hole Bain Marie Round Vessel Counter',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/6-hole-brain-marie-counter-500x500.png',
    fuel: 'LPG Gas / Electric',
    specs: ['6 Heavy Deep Round Drop-In Stainless Steel Pots with Lids', 'Water Bath Jacket for Uniform Gentle Heating', 'Front Stainless Tray Slide Rail for Customers', 'Spacious Bottom Enclosed Under-Storage Locker'],
    desc: '6-pot round vessel hot Bain Marie counter for gravies, sambar, curries, and soups.'
  },
  {
    id: 'prod-33',
    name: '8 Vessel Commercial Hot Food Case',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/8 Vessel Hot Case.png',
    fuel: 'Electric 220V / LPG Gas',
    specs: ['Holds 8 Independent GN 1/1 Food Containers', 'Thermostat Temperature Controller with Indicator', 'Curved Toughened Glass Sneeze Shield', 'Full Heavy-Gauge SS 304 Satin Finish'],
    desc: '8-vessel hot food Bain Marie counter for busy hotel buffets and dining canteens.'
  },
  {
    id: 'prod-34',
    name: '12 Vessel Commercial Hot Food Buffet Case',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/12 Vessel Hot Case.png',
    fuel: 'Electric 220V / LPG Gas',
    specs: ['Capacity for 12 Independent GN Food Vessels with Covers', 'Multi-Zone Independent Heating Element Switches', 'Upper Stainless Heated Plate Shelf Over-Bridge', 'Full Heavy-Gauge SS 304 Mirror Polished Surround'],
    desc: 'Large 12-vessel master hot food servery case for high-traffic hotel buffets and canteens.'
  },
  {
    id: 'prod-35',
    name: 'Commercial Biryani Bain Marie Counter',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/biriyani hot Case.jpg',
    fuel: 'LPG Gas / Electric',
    specs: ['Accommodates Large Handis / Degchis (30kg - 60kg Biryani)', 'Insulated Water Jacket to Prevent Rice Charring & Drying', 'High Splash Surround with Customer Tray Rails', 'Heavy Reinforced Stand Construction'],
    desc: 'Heavy stainless steel Biryani warming counter engineered for large commercial degchis.'
  },
  {
    id: 'prod-36',
    name: 'Stainless Steel Hot Display Food Warmer',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/hot wamer.png',
    fuel: 'Electric 220V',
    specs: ['Even Thermal Air Circulation Heating', 'Internal Warm Display Light', 'Removable Bottom Crumb Tray', 'Sliding Toughened Glass Doors'],
    desc: 'Countertop heated display case for pastries, samosas, patties, and savory snacks.'
  },
  {
    id: 'prod-37',
    name: 'Curved Glass Pastry & Dessert Display Counter',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/disply Counter.png',
    fuel: 'Electric 220V',
    specs: ['Front Heated Curved Anti-Fog Double Glazed Glass', 'Temperature: +2°C to +8°C with Humidity Retention', '3-Tier Adjustable Glass Shelves with Warm LED Lights', 'Mirror Polished SS 304 Base'],
    desc: 'Luxury illuminated curved glass refrigerated display showcase for pastries and desserts.'
  },
  {
    id: 'prod-38',
    name: 'Illuminated Stainless Steel Sweet Display Showcase',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/s s display Counter.JPG',
    fuel: 'Electric 220V',
    specs: ['Heavy SS 304 Construction with Sliding Glass Rear Doors', 'Optional Heated Rods or Refrigerated Cold Coil', 'Illuminated Acrylic Logo Branding Box on Front', 'Multi-Tier Stainless Steel Tray Shelves'],
    desc: 'Commercial Indian sweet and confectionery display counter with illumination.'
  },
  {
    id: 'prod-39',
    name: 'Live Pani Puri & Street Chat Counter',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/Pani Puri Counter.jpeg',
    fuel: 'Electric 220V / LPG',
    specs: ['Curved Toughened Glass Front Sneeze Shield with Puri Storage Box', 'Integrated Drop-In SS Bowls for Chutneys & Spices', 'Central Pani Puri Water Bowls Well', 'Attractive LED Backlit Signboard Front'],
    desc: 'Custom stainless steel Pani Puri and Indian street chat live food service counter.'
  },
  {
    id: 'prod-40',
    name: 'Stainless Steel Cashier & Billing POS Counter',
    category: 'servery',
    categoryLabel: 'Servery & Warmers',
    image: 'images/WEB/Cash Counter.png',
    fuel: 'None',
    specs: ['Lockable Cash Drawer Unit with Key', 'Cable Grommets for POS Computer / Billing Machine', 'Footrest Bar & Customer Handbag Shelf', 'Complete Food Grade SS 304 Construction'],
    desc: 'Stainless steel cashier POS counter and billing desk for restaurants and food courts.'
  },

  // =========================================================================
  // 5. BAKERY & SNACK EQUIPMENT (Category: 'bakery')
  // =========================================================================
  {
    id: 'prod-41',
    name: 'Idli Steamer Cabinet with Integrated Steam Boiler',
    category: 'bakery',
    categoryLabel: 'Bakery & Snacks',
    image: 'images/WEB/Idli-Steamer-With-Boiler-Electric.png',
    fuel: 'LPG Gas / Electric 415V',
    specs: ['Capacity: 54 / 108 / 162 Idlis per batch', 'Food Grade SS 304 Steaming Chamber & Perforated Trays', 'Integrated Bottom Steam Water Boiler with Auto-Cutoff', 'Silicone Gasket Door with Locking Clamps'],
    desc: 'Commercial high-volume idli steamer cabinet with integrated steam boiler system.'
  },
  {
    id: 'prod-42',
    name: 'Bulk 120 / 300 Idli Steamer Box',
    category: 'bakery',
    categoryLabel: 'Bakery & Snacks',
    image: 'images/WEB/120 Idly Box.png',
    fuel: 'Direct Steam / Boiler',
    specs: ['Heavy SS 304 Perforated Steaming Trays', 'Insulated Double Wall Door with Heat Guard', 'Pressure Relief Safety Vent', 'High Output Capacity for Bulk Catering'],
    desc: 'High-capacity industrial idli steaming box for central kitchens, canteens, and marriage caterers.'
  },
  {
    id: 'prod-43',
    name: 'Commercial Stainless Steel Sandwich Griller',
    category: 'bakery',
    categoryLabel: 'Bakery & Snacks',
    image: 'images/WEB/sandwich Griller.png',
    fuel: 'Electric 220V',
    specs: ['Heavy Cast Iron Ribbed Pressing Plates', 'Thermostat Control (50-300°C) with Indicator', 'Counterbalanced Floating Top Press Lid', 'Removable Bottom Grease Drip Tray'],
    desc: 'Heavy-duty panini and sandwich contact griller press for cafes and snack bars.'
  },
  {
    id: 'prod-44',
    name: 'Mobile Sweet Corn Live Steamer Counter',
    category: 'bakery',
    categoryLabel: 'Bakery & Snacks',
    image: 'images/WEB/Sweet_corn_counter.png',
    fuel: 'Electric 220V',
    specs: ['Perforated SS Steamer Tank with Hinged Lid', 'Integrated Condiment Mixing Bowls Holder', 'Mobile Stand on Heavy Swivel Castors', 'Attractive Graphic Signboard Canopy Support'],
    desc: 'Mobile commercial sweet corn steamer kiosk cart for food courts and live counters.'
  },
  {
    id: 'prod-45',
    name: 'Commercial Live Momos Steamer Counter',
    category: 'bakery',
    categoryLabel: 'Bakery & Snacks',
    image: 'images/WEB/momose Couner.png',
    fuel: 'Electric 220V / LPG Gas',
    specs: ['Multi-Tier Perforated Stainless Steaming Chambers', 'Fast Steam Generation Boiler Bottom', 'Glass Sneeze Shield & Serving Shelf', 'Compact Stand with Locking Wheels'],
    desc: 'Specialized stainless steel Momos steaming and live presentation counter.'
  },

  // =========================================================================
  // 6. EXHAUST & DUCTING (Category: 'exhaust')
  // =========================================================================
  {
    id: 'prod-46',
    name: 'SS 304 Commercial Exhaust Hood Canopy',
    category: 'exhaust',
    categoryLabel: 'Exhaust Systems',
    image: 'images/WEB/exhaust hood.jpeg',
    fuel: 'Exhaust Extraction',
    specs: ['100% SS 304 Heavy Gauge Seamless Welded Construction', 'Removable Stainless Steel Baffle Grease Filters', 'Continuous Perimeter Oil Collection Gutter with Drain Cock', 'Custom Sized to Match Cooking Line Dimensions'],
    desc: 'Heavy-gauge stainless steel kitchen exhaust hood canopy with baffle grease filters for zero-smoke cooking.'
  },
  {
    id: 'prod-47',
    name: 'Rooftop Exhaust Ducting & Discharge System',
    category: 'exhaust',
    categoryLabel: 'Exhaust Systems',
    image: 'images/WEB/exhaust hood out.jpeg',
    fuel: 'Exhaust Flow Line',
    specs: ['Heavy Gauge GI / SS 304 Sheet Fabrication', 'Flanged Lock Joints with Fire-Resistant Gaskets', 'In-Line Centrifugal Exhaust Blower Fan System', 'Compliant with Fire Safety & Municipal Kitchen Norms'],
    desc: 'Commercial kitchen exhaust ducting fabrication with grease-tight fire safety flanging.'
  },

  // =========================================================================
  // 7. STORAGE, TROLLEYS & CANTEEN (Category: 'storage')
  // =========================================================================
  {
    id: 'prod-48',
    name: 'Under-Counter SS Vegetable & Spice Holding Rack',
    category: 'storage',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/WEB/Under-Counter-Vegetable-Rack-Holding-Trolley.png',
    fuel: 'None',
    specs: ['Fits under standard 34" prep tables', 'Holds Multiple Spice & Batter Containers', 'Smooth Rolling Swivel Wheels with Brakes', 'Food Grade SS 304 Construction'],
    desc: 'Compact mobile spices and condiments ingredient trolley for commercial cooking lines.'
  },
  {
    id: 'prod-49',
    name: 'Perforated Potato & Onion Storage Bin Trolley',
    category: 'storage',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/WEB/potato bin1.png',
    fuel: 'None',
    specs: ['Multi-Tier Heavy Gauge Perforated SS Baskets', '360° Air Circulation to Prevent Vegetable Spoilage', 'Heavy Duty 4" PU Castor Wheels', 'Capacity: 100kg+ Bulk Root Vegetables'],
    desc: 'Mobile perforated vegetable storage bin for potatoes, onions, and root vegetables.'
  },
  {
    id: 'prod-50',
    name: 'Stainless Steel Storage Drawer Cabinet',
    category: 'storage',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/WEB/drawer cabinet.png',
    fuel: 'None',
    specs: ['Smooth Ball-Bearing Slide Runners', 'Lockable Drawers for Cutlery & Spices', 'Heavy Gauge SS 304 Solid Top Work Area', 'Hygienic Enclosed Base with Levelling Feet'],
    desc: 'Heavy stainless steel drawer storage cabinet unit for prep tools, cutlery, and kitchen supplies.'
  },
  {
    id: 'prod-51',
    name: 'Heavy-Duty Platform Hand Truck Trolley',
    category: 'storage',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/WEB/Platform-Trolley.png',
    fuel: 'None',
    specs: ['Heavy SS 304 Base Plate with Channel Stiffeners', 'Load Rating: 300kg to 500kg', 'Heavy Duty 6" Industrial PU Castor Wheels', 'Ergonomic Push/Pull Tubular Handle'],
    desc: 'Heavy-duty stainless steel platform hand truck trolley for bulk goods and flour sacks.'
  },
  {
    id: 'prod-52',
    name: 'Multi-Tier Stainless Steel Utility Service Trolley',
    category: 'storage',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/WEB/trollry.png',
    fuel: 'None',
    specs: ['2 or 3 Deep Drawn Sound-Deadened SS Trays', 'Side Safety Guard Rails to prevent vessel spills', 'Rubber Corner Bumper Wheels', 'Quiet Smooth-Rolling PU Castors'],
    desc: 'Multi-tier stainless steel dining room and kitchen food service utility trolley.'
  },
  {
    id: 'prod-53',
    name: 'Commercial SS Canteen Dining Table & Chairs',
    category: 'storage',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/WEB/Round Table.png',
    fuel: 'None',
    specs: ['Heavy SS 304 Table Top with Round Stools / Chairs', 'Zero Floor Clutter & Easy Mopping Design', 'Heavy Powder-Coated / SS Tubular Underframe', 'Engineered for Heavy Industrial & College Canteens'],
    desc: 'Commercial canteen dining tables and stainless steel seating furniture for institutions.'
  }
];

// Active State for Products Catalog
let currentProductsCategory = 'all';
let currentProductsSearch = '';

// ==========================================================================
// AUTHENTIC PROJECTS GALLERY DATA (MAPPED TO IMAGES/MAIN PAGE/ PHOTOS)
// ==========================================================================
const projectsData = [
  // =========================================================================
  // 1. RECENT CLIENT INSTALLATIONS & ON-SITE EXECUTION (AUTHENTIC PHOTOS)
  // =========================================================================
  {
    id: 'proj-real-01',
    src: 'images/real-gallery/real_restaurant_live_cooking_line.jpg',
    category: 'setups',
    badge: 'Live Restaurant Kitchen',
    title: 'Commercial Restaurant Live Cooking Line & Heavy Exhaust Canopy',
    location: 'Fine-Dining & Multi-Cuisine Restaurant, Bengaluru',
    desc: 'Fully commissioned commercial kitchen featuring heavy SS 304 gas ranges, flat griddle plates, multi-station prep tables, overhead utility racks, and continuous stainless baffle exhaust hood.'
  },
  {
    id: 'proj-real-04',
    src: 'images/real-gallery/real_qsr_pantry_service_kitchen.jpg',
    category: 'setups',
    badge: 'QSR Setup',
    title: 'Commercial QSR Kitchen & Food Prep Facility',
    location: 'Quick Service Restaurant, Bengaluru',
    desc: 'Space-optimized commercial kitchen layout featuring heavy SS prep counters, commercial refrigeration, and ceiling-integrated ventilation ducting.'
  },
  {
    id: 'proj-real-05',
    src: 'images/real-gallery/real_bain_marie_live_counter_station.jpg',
    category: 'counters',
    badge: 'Live Buffet Counter',
    title: 'Commercial 4-Well Bain Marie Soup Warmer & Live Service Counter',
    location: 'Buffet & Live Food Station, Bengaluru',
    desc: 'Food-grade SS 304 electric Bain Marie soup and gravy warmer with independent temperature controls, digital induction cooking unit, and 2-tier gantry display shelving.'
  },

  // =========================================================================
  // 2. COMMERCIAL KITCHEN SETUP INSTALLATIONS (Category: 'setups')
  // =========================================================================
  {
    id: 'proj-01',
    src: 'images/main page/all in one kitchen.jpg',
    category: 'setups',
    badge: 'Kitchen Installation',
    title: 'Complete Commercial Kitchen Setup & Prep Line',
    location: 'Restaurant Installation Site, Karnataka',
    desc: 'Integrated commercial kitchen with heavy SS 304 Chinese wok ranges, preparation work tables, gas manifolds, and stainless exhaust hood canopy systems.'
  },
  {
    id: 'proj-02',
    src: 'images/main page/bks industries.jpg',
    category: 'setups',
    badge: 'Factory Workshop',
    title: 'BKS Industries Manufacturing & Assembly Floor',
    location: 'BKS Factory Floor, Lakshmidevinagar, Bengaluru',
    desc: 'In-house heavy SS 304 fabrication workshop with CNC shearing, press brake bending, and precision argon TIG welding stations.'
  },
  {
    id: 'proj-03',
    src: 'images/main page/bks2.jpg',
    category: 'setups',
    badge: 'Site Execution',
    title: 'Commercial Restaurant Kitchen Lineup & Exhaust System',
    location: 'Hotel Kitchen Project, Bengaluru',
    desc: 'End-to-end commercial kitchen installation featuring heavy stockpot burners, live counters, and high-CFM stainless exhaust ducting.'
  },
  {
    id: 'proj-04',
    src: 'images/main page/bksi.jpg',
    category: 'setups',
    badge: 'Kitchen Delivery',
    title: 'Full Stainless Steel Cooking & Prep Facility',
    location: 'Commercial Dining Setup, South India',
    desc: 'Heavy-gauge SS 304 commercial kitchen equipment line customized for high-volume daily food service.'
  },
  {
    id: 'proj-05',
    src: 'images/main page/bksinsutries.jpg',
    category: 'setups',
    badge: 'Factory Dispatch',
    title: 'Batch Production & Quality Inspection Line',
    location: 'BKS Manufacturing Workshop, Bengaluru',
    desc: 'Finished commercial kitchen equipment undergoes 100% gas pressure testing and polish inspection prior to dispatch.'
  },

  // =========================================================================
  // 2. COOKING LINES & BURNER RANGES (Category: 'cooking')
  // =========================================================================
  {
    id: 'proj-06',
    src: 'images/main page/bulk Burner.jpg',
    category: 'cooking',
    badge: 'Cooking Range Line',
    title: 'Heavy-Duty Bulk Stockpot Cooking Ranges Lineup',
    location: 'Institutional Canteen Project',
    desc: 'Batch installation of heavy single-burner bulk stockpot gas stoves with high-pressure burners and removable spillage trays.'
  },
  {
    id: 'proj-07',
    src: 'images/main page/2 burner.jpg',
    category: 'cooking',
    badge: 'Gas Range Setup',
    title: 'Two Burner Heavy Commercial Cooking Range',
    location: 'Restaurant Kitchen Installation',
    desc: 'Dual-burner stainless steel commercial gas range with heavy cast iron vessel supports and lower storage undershelf.'
  },
  {
    id: 'proj-08',
    src: 'images/main page/l type Burner.jpg',
    category: 'cooking',
    badge: 'Custom Configuration',
    title: 'L-Configuration Multi-Burner Commercial Cooking Station',
    location: 'Commercial Cloud Kitchen, Bengaluru',
    desc: 'Custom-designed L-shaped cooking line maximizing chef workflow efficiency in compact commercial kitchen spaces.'
  },
  {
    id: 'proj-09',
    src: 'images/main page/burner with hot case2.jpg',
    category: 'cooking',
    badge: 'Multi-Station Range',
    title: 'Commercial Cooking Range Integrated with Hot Case Oven',
    location: 'Hotel Foodservice Setup',
    desc: 'High-power burner stove integrated with bottom insulated warming oven chamber for fast hot food service.'
  },
  {
    id: 'proj-10',
    src: 'images/main page/dosa and Buner.jpg',
    category: 'cooking',
    badge: 'South Indian Station',
    title: 'Combined Flat Dosa Bhatti & High-Pressure Burner Unit',
    location: 'South Indian Restaurant Project',
    desc: 'Polished 16mm thick mild steel flat dosa griddle paired with high-output gas burner on heavy SS 304 frame.'
  },
  {
    id: 'proj-13',
    src: 'images/main page/romali Roti 1.jpg',
    category: 'cooking',
    badge: 'Specialty Cooking',
    title: 'Heavy SS 304 Rumali Roti & Live Kebab Station',
    location: 'Live Banquet Service Setup',
    desc: 'Custom fabricated stainless steel live Rumali Roti station with integrated ingredient trays and gas piping.'
  },

  // =========================================================================
  // 3. LIVE COUNTERS & BEVERAGE STATIONS (Category: 'counters')
  // =========================================================================
  {
    id: 'proj-16',
    src: 'images/main page/hot case 2.jpg',
    category: 'counters',
    badge: 'Hot Food Showcase',
    title: 'Multi-Vessel Commercial Bain Marie & Hot Food Case',
    location: 'Buffet & Dining Hall Project',
    desc: 'Food-grade SS 304 hot food servery case with independent temperature control and curved glass sneeze protection.'
  },
  {
    id: 'proj-17',
    src: 'images/main page/food wamer trolley.jpg',
    category: 'counters',
    badge: 'Mobile Warmer',
    title: 'Mobile Stainless Steel Food Warmer Service Cart',
    location: 'Catering & Banquet Facility',
    desc: 'Heavy-duty insulated heated food transport cart on smooth swivel castor wheels with corner bumpers.'
  },

  // =========================================================================
  // 4. HEAVY SS FABRICATION & UTILITIES (Category: 'fabrication')
  // =========================================================================
  {
    id: 'proj-18',
    src: 'images/main page/tilting pan.jpg',
    category: 'fabrication',
    badge: 'Bulk Cooking Pan',
    title: 'Heavy-Duty Commercial Tilting Bratt Pan (150L)',
    location: 'Central Kitchen Installation',
    desc: 'Heavy rectangular stainless steel tilting braising pan with precision worm gear mechanism for safe bulk pouring.'
  },
  {
    id: 'proj-19',
    src: 'images/main page/tilting pan2.jpg',
    category: 'fabrication',
    badge: 'Tilting Kettle',
    title: 'Commercial Tilting Bratt Pan & Heavy Boiling Vessel',
    location: 'Hospital & Canteen Facility',
    desc: 'Industrial 200L tilting cooking kettle for gravies, sambar, rice, and bulk food processing.'
  },
  {
    id: 'proj-20',
    src: 'images/main page/200 ltr water tank.jpg',
    category: 'fabrication',
    badge: 'Water Storage',
    title: 'Food-Grade SS 304 Potable Water Storage Tank (200L)',
    location: 'Commercial Kitchen Water Line',
    desc: 'Heavy 16G stainless steel 304 potable water storage tank with top inspection lid, level indicator, and drain valves.'
  },
  {
    id: 'proj-23',
    src: 'images/main page/mesh.jpg',
    category: 'fabrication',
    badge: 'Custom SS Mesh',
    title: 'Stainless Steel Mesh Wire Grating & Drain Strainers',
    location: 'Drainage & Ventilation System',
    desc: 'Food-grade stainless steel wire mesh grating fabricated for floor drainage channels and exhaust baffle air intakes.'
  }
];

let activeProjectsCategory = 'all';
let currentProjectLightboxIndex = 0;

// ==========================================================================
// INTERACTIVE PRODUCTS CATALOG CONTROLLER
// ==========================================================================

function renderProductsCatalog(category = 'all', search = '') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const countBadge = document.getElementById('productsCountBadge');
  const query = (search || '').toLowerCase().trim();

  const filtered = webProductsData.filter(item => {
    const matchCategory = category === 'all' || item.category === category;
    const matchSearch = query === '' ||
      item.name.toLowerCase().includes(query) ||
      (item.desc && item.desc.toLowerCase().includes(query)) ||
      (item.categoryLabel && item.categoryLabel.toLowerCase().includes(query));
    return matchCategory && matchSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: var(--bg-white); border-radius: var(--radius-2xl); border: 1.5px dashed var(--border-slate-300);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: var(--text-slate-400); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--text-navy); margin-bottom: 0.5rem;">No Equipment Found</h4>
        <p style="color: var(--text-slate-500); font-size: 0.9rem; max-width: 28rem; margin: 0 auto 1.25rem;">
          We couldn't find matches for "${escapeHtml(search)}". Try searching for "Burner", "Bain Marie", "Sink", "Table", or "Tandoor".
        </p>
        <button type="button" class="apollo-btn-primary" onclick="filterProducts('all')">
          <span>View All Equipment</span>
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((item, idx) => {
    const waUrl = `https://wa.me/918123939433?text=${encodeURIComponent(`Hello BKS Industries, I am interested in: ${item.name}. Please share technical specifications, pricing, and delivery timeline.`)}`;

    return `
      <div class="product-card reveal-init reveal-fade-up revealed stagger-${(idx % 6) + 1}">
        <div class="product-img-wrap">
          <span class="product-cat-pill">${item.categoryLabel}</span>
          <img src="${item.image}" alt="${escapeHtml(item.name)} - BKS Industries" loading="lazy">
        </div>
        <div class="product-body">
          <h3 class="product-title">${escapeHtml(item.name)}</h3>
          <p class="product-desc">${escapeHtml(item.desc)}</p>
          <ul class="product-specs-list">
            ${item.specs.map(spec => `<li><i class="fa-solid fa-circle-check"></i> <span>${escapeHtml(spec)}</span></li>`).join('')}
          </ul>
          <div class="product-footer">
            <a href="#contact" class="btn-prod-quote" onclick="setInquiryProduct('${item.name.replace(/'/g, "\\'")}')">
              <i class="fa-solid fa-paper-plane"></i> Get Quote
            </a>
            <a href="${waUrl}" target="_blank" rel="noopener" class="btn-prod-wa" title="Inquire on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterProducts(category) {
  currentProductsCategory = category;
  const pillBtns = document.querySelectorAll('.prod-filter-pill');
  pillBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const searchInput = document.getElementById('productsSearchInput');
  const query = searchInput ? searchInput.value : '';
  renderProductsCatalog(currentProductsCategory, query);
}

function handleProductsSearch(query) {
  currentProductsSearch = query;
  renderProductsCatalog(currentProductsCategory, currentProductsSearch);
}

function scrollToProductsCategory(category) {
  if (window.location.pathname.endsWith('products.html') || window.location.pathname.endsWith('/products')) {
    filterProducts(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.location.href = `products.html?category=${encodeURIComponent(category)}`;
  }
}

function setInquiryProduct(productName) {
  const msgEl = document.getElementById('inqMessage') || document.getElementById('inqProduct');
  const typeSelect = document.getElementById('inqType') || document.getElementById('inqProjectType');
  if (msgEl) {
    msgEl.value = `I am interested in requesting an official quote for: ${productName}. Please share dimensions, SS gauge options, pricing, and installation timeline.`;
  }
  if (typeSelect && typeSelect.value !== undefined) {
    typeSelect.value = "Commercial Cooking Ranges & Burners";
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleProductInquirySubmit(event) {
  event.preventDefault();
  const name = document.getElementById('inqName') ? document.getElementById('inqName').value.trim() : '';
  const phone = document.getElementById('inqPhone') ? document.getElementById('inqPhone').value.trim() : '';
  const email = document.getElementById('inqEmail') ? document.getElementById('inqEmail').value.trim() : '';
  const projectType = document.getElementById('inqProjectType') ? document.getElementById('inqProjectType').value : '';
  const productSpecs = document.getElementById('inqProduct') ? document.getElementById('inqProduct').value.trim() : '';

  const waMsg = `Hello BKS Industries,%0A%0AI would like a commercial kitchen equipment quotation:%0A• Name: ${encodeURIComponent(name)}%0A• Phone: ${encodeURIComponent(phone)}%0A• Email: ${encodeURIComponent(email)}%0A• Project Type: ${encodeURIComponent(projectType)}%0A• Equipment / Details: ${encodeURIComponent(productSpecs)}`;

  showToast('Quotation request submitted! Opening WhatsApp for instant factory confirmation...', 'success');
  setTimeout(() => {
    window.open(`https://wa.me/918123939433?text=${waMsg}`, '_blank');
    if (event.target && event.target.reset) event.target.reset();
  }, 1200);
}

// ==========================================================================
// OUR PROJECTS GALLERY & LIGHTBOX CONTROLLER
// ==========================================================================

function renderProjectsGallery(filter = 'all') {
  activeProjectsCategory = filter;
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const filterBtns = document.querySelectorAll('.gmb-filter-bar .gmb-filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const filtered = projectsData.filter(item => filter === 'all' || item.category === filter);

  grid.innerHTML = filtered.map((item, idx) => {
    const realIndex = projectsData.findIndex(p => p.id === item.id);
    return `
      <div class="gmb-card reveal-init reveal-fade-up revealed stagger-${(idx % 6) + 1}" data-category="${item.category}">
        <div class="gmb-img-wrap" onclick="openProjectLightbox(${realIndex})" title="Click to view full image">
          <img src="${item.src}" alt="${escapeHtml(item.title)} - BKS Industries" loading="lazy">
          <span class="gmb-type-badge">${escapeHtml(item.badge)}</span>
          <div class="gmb-overlay">
            <i class="fa-solid fa-expand"></i>
            <span>View Installation</span>
          </div>
        </div>
        <div class="gmb-card-body">
          <h3 class="gmb-card-title">${escapeHtml(item.title)}</h3>
          <p class="gmb-card-loc"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(item.location)}</p>
          <p class="gmb-card-desc">${escapeHtml(item.desc)}</p>
          <button type="button" class="btn-gmb-direct" onclick="openProjectLightbox(${realIndex})">
            <i class="fa-solid fa-camera"></i> Inspect Project Photo
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function filterProjects(category) {
  renderProjectsGallery(category);
}

function openProjectLightbox(index) {
  if (index < 0 || index >= projectsData.length) return;
  currentProjectLightboxIndex = index;
  updateProjectLightboxContent();
  const modal = document.getElementById('projectLightbox');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectLightbox() {
  const modal = document.getElementById('projectLightbox');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function changeProjectSlide(direction) {
  currentProjectLightboxIndex = (currentProjectLightboxIndex + direction + projectsData.length) % projectsData.length;
  updateProjectLightboxContent();
}

function updateProjectLightboxContent() {
  const item = projectsData[currentProjectLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById('projectLightboxImg');
  const titleEl = document.getElementById('projectLightboxTitle');
  const descEl = document.getElementById('projectLightboxDesc');
  const waEl = document.getElementById('projectLightboxWa');

  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.title;
  }
  if (titleEl) {
    titleEl.textContent = `${item.title} (${item.badge})`;
  }
  if (descEl) {
    descEl.textContent = `${item.location} — ${item.desc}`;
  }
  if (waEl) {
    waEl.href = `https://wa.me/918123939433?text=${encodeURIComponent(`Hello BKS Industries, I am interested in a commercial kitchen setup similar to your project: "${item.title}". Please share details.`)}`;
  }
}

// Lightbox Keyboard Control Listener
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('projectLightbox');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'Escape') closeProjectLightbox();
    if (e.key === 'ArrowLeft') changeProjectSlide(-1);
    if (e.key === 'ArrowRight') changeProjectSlide(1);
  }
});

// ==========================================================================
// INTERACTIVE ANIMATION SUITE: SCROLL-REVEAL, STAT COUNTERS & TYPOGRAPHY
// ==========================================================================

function initScrollReveal() {
  const selectors = [
    '.section-header',
    '.hero-container > *',
    '.stat-item',
    '.feature-card',
    '.calc-card',
    '.review-card',
    '.blog-card',
    '.contact-form-card',
    '.contact-info-card',
    '.gmb-card'
  ];

  const elementsToReveal = document.querySelectorAll(selectors.join(', '));
  
  elementsToReveal.forEach((el) => {
    if (!el.classList.contains('reveal-init')) {
      el.classList.add('reveal-init');
      const siblingIndex = Array.from(el.parentNode.children).indexOf(el);
      if (siblingIndex >= 0 && siblingIndex <= 5) {
        el.classList.add(`stagger-${siblingIndex + 1}`);
      }
    }
  });

  const textSelectors = ['.section-title', '.section-subtitle', '.section-desc', '.hero-description'];
  const textElements = document.querySelectorAll(textSelectors.join(', '));
  textElements.forEach(el => {
    if (!el.classList.contains('text-fade-in')) {
      el.classList.add('text-fade-in');
    }
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          if (entry.target.classList.contains('text-fade-in')) {
            entry.target.classList.add('is-visible');
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    document.querySelectorAll('.reveal-init, .text-fade-in').forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal-init').forEach(el => el.classList.add('reveal-active'));
    document.querySelectorAll('.text-fade-in').forEach(el => el.classList.add('is-visible'));
  }
}

function initStatCounters() {
  const statsContainer = document.querySelector('.hero-stats-grid');
  if (!statsContainer) return;

  const statItems = [
    { selector: '.stat-item:nth-child(1) .stat-number', target: 70, suffix: '+', decimals: 0 },
    { selector: '.stat-item:nth-child(2) .stat-number', target: 500, suffix: '+', decimals: 0 },
    { selector: '.stat-item:nth-child(3) .stat-number', target: 15, suffix: '+ Yrs', decimals: 0 },
    { selector: '.stat-item:nth-child(4) .stat-number', target: 5.0, suffix: ' ★', decimals: 1 }
  ];

  let hasAnimated = false;

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statItems.forEach(item => {
            const el = document.querySelector(item.selector);
            if (el) animateStatValue(el, 0, item.target, 1600, item.suffix, item.decimals);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    counterObserver.observe(statsContainer);
  }
}

function animateStatValue(element, start, end, duration, suffix = '', decimals = 0) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentVal = start + easeOut * (end - start);
    
    element.textContent = (decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal)) + suffix;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = (decimals > 0 ? end.toFixed(decimals) : end) + suffix;
    }
  };
  window.requestAnimationFrame(step);
}

function init3DCardTilt() {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const interactiveCards = document.querySelectorAll('.hero-image-card, .calc-card, .review-card, .apollo-ind-card, .product-card, .gmb-card');
    
    interactiveCards.forEach(card => {
      card.classList.add('tilt-card');
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      }, { passive: true });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
}

function initHeroTypewriter() {
  const targetEl = document.getElementById('typingDynamicText');
  if (!targetEl) return;

  const phrases = [
    "SS Fabricators Bangalore",
    "Commercial Kitchen Setups",
    "SS 304 Equipment Fabricators",
    "Hotel & Cloud Kitchen Specialists"
  ];

  let phraseIdx = 0;
  let charIdx = phrases[0].length;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeLoop() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      targetEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      targetEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typingSpeed = 2400;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeLoop, typingSpeed);
  }

  setTimeout(typeLoop, 2000);
}

// ==========================================================================
// INTERACTIVE HERO MOTION GRAPHICS & PARTICLE CONSTELLATION ENGINE
// ==========================================================================

function initHeroMotionGraphics() {
  const canvas = document.getElementById('heroMotionCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const heroSection = document.getElementById('hero');
  let width = (canvas.width = heroSection ? heroSection.offsetWidth : window.innerWidth);
  let height = (canvas.height = heroSection ? heroSection.offsetHeight : window.innerHeight);

  let isVisible = true;
  let animFrameId = null;

  const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
  const particles = [];
  const mouse = { x: -1000, y: -1000, radius: 130 };

  const colors = [
    { r: 245, g: 158, b: 11 },
    { r: 251, g: 191, b: 36 },
    { r: 56,  g: 189, b: 248 },
    { r: 2,   g: 132, b: 199 }
  ];

  class Particle {
    constructor() {
      this.init();
    }

    init() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.75;
      this.vy = (Math.random() - 0.5) * 0.75;
      this.radius = Math.random() * 2.2 + 1.2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.baseAlpha = Math.random() * 0.45 + 0.35;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      else if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      else if (this.y > height) this.y = 0;

      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius && dist > 0) {
        const force = (1 - dist / mouse.radius) * 0.8;
        this.x -= (dx / dist) * force;
        this.y -= (dy / dist) * force;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.baseAlpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.6)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    const maxDist = 110;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      const mdx = mouse.x - particles[i].x;
      const mdy = mouse.y - particles[i].y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < mouse.radius) {
        const alpha = (1 - mDist / mouse.radius) * 0.35;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  function renderLoop() {
    if (!isVisible) return;

    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();

    animFrameId = requestAnimationFrame(renderLoop);
  }

  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });

    heroSection.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    }, { passive: true });
  }

  if ('IntersectionObserver' in window && heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          if (!animFrameId) renderLoop();
        } else {
          if (animFrameId) {
            cancelAnimationFrame(animFrameId);
            animFrameId = null;
          }
        }
      });
    }, { threshold: 0.05 });

    heroObserver.observe(heroSection);
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (heroSection) {
        width = canvas.width = heroSection.offsetWidth;
        height = canvas.height = heroSection.offsetHeight;
      }
    }, 200);
  }, { passive: true });

  renderLoop();
}

// ==========================================================================
// APOLLO HERO CAROUSEL & TYPOGRAPHY SUITE
// ==========================================================================

let heroSlideIndex = 0;
let heroSlideTimer = null;

function initHeroCarousel() {
  const slides = document.querySelectorAll('.apollo-hero-slide');
  const dots = document.querySelectorAll('.apollo-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const slideNumEl = document.getElementById('apolloSlideNum');
  const watermarkEl = document.getElementById('apolloWatermark');

  if (slides.length === 0) return;

  function showSlide(idx) {
    heroSlideIndex = (idx + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      if (i === heroSlideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    dots.forEach((dot, i) => {
      if (i === heroSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    const displayNum = String(heroSlideIndex + 1).padStart(2, '0');
    if (slideNumEl) slideNumEl.textContent = displayNum;
    if (watermarkEl) watermarkEl.textContent = displayNum;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      clearInterval(heroSlideTimer);
      showSlide(heroSlideIndex - 1);
      startHeroAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(heroSlideTimer);
      showSlide(heroSlideIndex + 1);
      startHeroAutoPlay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      clearInterval(heroSlideTimer);
      const idx = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);
      showSlide(idx);
      startHeroAutoPlay();
    });
  });

  function startHeroAutoPlay() {
    clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(() => {
      showSlide(heroSlideIndex + 1);
    }, 5000);
  }

  startHeroAutoPlay();
}

function initTypewriterApollo() {
  const target = document.getElementById('typedWord');
  if (!target) return;

  const words = [
    "Hotel & Restaurant Kitchens",
    "Cloud Kitchens & Cafes",
    "Commercial Exhaust Hoods & Ducting",
    "Heavy-Duty SS 304 Cooking Ranges",
    "Commercial Refrigeration & Chillers",
    "Hospital & Canteen Foodservice",
    "Custom Mobile Food Trucks",
    "SS Fabrication & Conveyor Lines"
  ];

  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function loop() {
    const currentWord = words[wordIdx];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      target.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === currentWord.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(loop, typingSpeed);
  }

  setTimeout(loop, 1200);
}

// ==========================================================================
// INQUIRY FORM CONTROLLER
// ==========================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

async function handleInquirySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById('inqSubmitBtn');
  const originalText = submitBtn ? submitBtn.innerHTML : 'Send Instant Inquiry';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting Your Details...';
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Direct FormSubmit payload sent to Bks-industries@outlook.com & Bksindustries23@gmail.com
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    city: data.city,
    project_type: data.project_type,
    message: data.message,
    _replyto: data.email,
    _subject: `New Commercial Kitchen Inquiry from ${data.name} (${data.phone}) - BKS Industries`,
    _template: 'table',
    _captcha: 'false',
    _cc: 'Bksindustries23@gmail.com'
  };

  try {
    await fetch('https://formsubmit.co/ajax/Bks-industries@outlook.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.log('Inquiry dispatched:', err);
  }

  // Populate & reveal Apollo Success Confirmation Card
  const successBox = document.getElementById('inquirySuccessBox');
  const formEl = document.getElementById('contactForm');
  const nameEl = document.getElementById('successCustomerName');
  const projEl = document.getElementById('successProjectType');
  const phoneEl = document.getElementById('successPhone');
  const waBtn = document.getElementById('successWhatsAppBtn');

  if (nameEl) nameEl.textContent = data.name || 'Customer';
  if (projEl) projEl.textContent = data.project_type || 'Commercial Kitchen Equipment';
  if (phoneEl) phoneEl.textContent = data.phone || '+91 81239 39433';
  if (waBtn) {
    const textMsg = `Hello BKS Industries, I am ${encodeURIComponent(data.name || 'Customer')} from ${encodeURIComponent(data.city || 'Karnataka')}. I submitted an inquiry for: ${encodeURIComponent(data.project_type || 'Commercial Kitchen Equipment')}.`;
    waBtn.href = `https://wa.me/918123939433?text=${textMsg}`;
  }

  if (formEl) formEl.style.display = 'none';
  if (successBox) successBox.style.display = 'block';

  showToast('Form submitted successfully! Details sent directly to B.K.S. Industries.', 'success');

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

function resetInquiryForm() {
  const formEl = document.getElementById('contactForm');
  const successBox = document.getElementById('inquirySuccessBox');
  if (formEl) {
    formEl.reset();
    formEl.style.display = 'block';
  }
  if (successBox) {
    successBox.style.display = 'none';
  }
}

// ==========================================================================
// ADVANCED MODERN ANIMATIONS ENGINE
// ==========================================================================

function initScrollProgress() {
  const progressBar = document.getElementById('apolloScrollProgress');
  const backToTopBtn = document.getElementById('apolloBackToTop');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (window.scrollY > 380) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });
}

function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-init');
  if (!revealElements.length) return;

  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.apollo-stat-num[data-target]');
  if (!counterElements.length) return;

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);

          el.textContent = `${prefix}${currentVal}${progress >= 1 ? suffix : ''}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${prefix}${target}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counterElements.forEach(el => counterObserver.observe(el));
}

// Attach Apollo initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Check URL parameters for products page
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  const searchParam = urlParams.get('search');
  if (catParam) {
    filterProducts(catParam);
  } else if (searchParam) {
    const searchInput = document.getElementById('productsSearchInput');
    if (searchInput) searchInput.value = searchParam;
    filterProducts('all');
  } else {
    renderProductsCatalog('all', '');
  }

  renderProjectsGallery('all');
  initHeroCarousel();
  initTypewriterApollo();
  initScrollProgress();
  initScrollReveals();
  initAnimatedCounters();
  init3DCardTilt();
});

/* ==========================================================================
   BKSI AUTOMATED AI ASSISTANT CHATBOT ENGINE
   ========================================================================== */
function toggleBksiChat() {
  const win = document.getElementById('bksiChatWindow');
  if (!win) return;
  win.classList.toggle('active');
  if (win.classList.contains('active')) {
    const input = document.getElementById('bksiChatInput');
    if (input) setTimeout(() => input.focus(), 300);
  }
}

function handleChipClick(text) {
  const input = document.getElementById('bksiChatInput');
  if (input) {
    input.value = text;
    const form = document.getElementById('bksiChatForm');
    if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }
}

function appendUserMessage(text) {
  const body = document.getElementById('bksiChatBody');
  if (!body) return;
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const msgEl = document.createElement('div');
  msgEl.className = 'bksi-msg user';
  msgEl.innerHTML = `
    <div class="bksi-msg-avatar"><i class="fa-solid fa-user"></i></div>
    <div>
      <div class="bksi-msg-bubble">${escapeHtml(text)}</div>
      <div class="bksi-msg-time">${timeStr}</div>
    </div>
  `;
  body.appendChild(msgEl);
  body.scrollTop = body.scrollHeight;
}

function showTypingIndicator() {
  const body = document.getElementById('bksiChatBody');
  if (!body) return null;
  const typingEl = document.createElement('div');
  typingEl.id = 'bksiTypingIndicator';
  typingEl.className = 'bksi-msg bot';
  typingEl.innerHTML = `
    <div class="bksi-msg-avatar"><i class="fa-solid fa-robot"></i></div>
    <div>
      <div class="bksi-typing">
        <span class="bksi-typing-dot"></span>
        <span class="bksi-typing-dot"></span>
        <span class="bksi-typing-dot"></span>
      </div>
    </div>
  `;
  body.appendChild(typingEl);
  body.scrollTop = body.scrollHeight;
  return typingEl;
}

function removeTypingIndicator() {
  const typingEl = document.getElementById('bksiTypingIndicator');
  if (typingEl) typingEl.remove();
}

function appendBotMessage(htmlContent) {
  removeTypingIndicator();
  const body = document.getElementById('bksiChatBody');
  if (!body) return;
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const msgEl = document.createElement('div');
  msgEl.className = 'bksi-msg bot';
  msgEl.innerHTML = `
    <div class="bksi-msg-avatar"><i class="fa-solid fa-robot"></i></div>
    <div>
      <div class="bksi-msg-bubble">${htmlContent}</div>
      <div class="bksi-msg-time">${timeStr}</div>
    </div>
  `;
  body.appendChild(msgEl);
  body.scrollTop = body.scrollHeight;
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"']/g, function(s) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s];
  });
}

function resetBksiChat() {
  const body = document.getElementById('bksiChatBody');
  if (!body) return;
  body.innerHTML = `
    <div class="bksi-msg bot">
      <div class="bksi-msg-avatar"><i class="fa-solid fa-robot"></i></div>
      <div>
        <div class="bksi-msg-bubble">
          Hello! 👋 Welcome back to <strong>B.K.S. Industries</strong>!
          <br><br>
          How can I assist you with your commercial kitchen requirements today?
          <div class="bksi-chat-chips">
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Get Quotation & Pricing')">💰 Get Price Quotation</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('View Completed Projects')">📸 Real Projects Gallery</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Custom Food Truck Setup')">🚚 Food Truck Setup</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Commercial Cooking Ranges')">🔥 Cooking Ranges</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('SS Exhaust Hoods & Ducting')">💨 Exhaust & Ducting</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Factory Location in Bengaluru')">🏭 Visit Factory</button>
          </div>
        </div>
        <div class="bksi-msg-time">Just now</div>
      </div>
    </div>
  `;
}

// Intelligent Automated AI Knowledge Engine
function generateAiReply(userText) {
  const query = userText.toLowerCase();

  // 1. Projects / Photos / Gallery / Real Installations
  if (query.includes('project') || query.includes('photo') || query.includes('gallery') || query.includes('real') || query.includes('work') || query.includes('completed') || query.includes('site')) {
    return `
      📸 <strong>Completed Commercial Kitchen Projects & Installations</strong>:
      <br><br>
      We have executed 500+ commercial kitchen projects across Karnataka & South India, including restaurant cooking lines, live beverage counters, and heavy SS 304 custom machinery.
      <div class="bksi-msg-actions">
        <a href="#projects" onclick="toggleBksiChat();" class="bksi-msg-btn-quote">📸 View Real Projects Gallery</a>
        <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20please%20share%20your%20completed%20project%20portfolio." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 Request Portfolio on WhatsApp</a>
      </div>
    `;
  }

  // 2. Quotation / Pricing / Estimate
  if (query.includes('quot') || query.includes('price') || query.includes('cost') || query.includes('rate') || query.includes('budget') || query.includes('pricing')) {
    return `
      We provide customized direct manufacturer quotations tailored to your exact kitchen dimensions and burner requirements! 📋
      <br><br>
      To receive an official quote with CAD engineering layout:
      <div class="bksi-msg-actions">
        <a href="#contact" onclick="toggleBksiChat()" class="bksi-msg-btn-quote">📝 Fill Instant Inquiry Form</a>
        <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20please%20send%20me%20a%20quotation%20for%20commercial%20kitchen%20equipment." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 Get Instant Quote on WhatsApp</a>
      </div>
    `;
  }

  // 3. Food Truck / Mobile Kitchen
  if (query.includes('food truck') || query.includes('truck') || query.includes('van') || query.includes('mobile kitchen') || query.includes('cart')) {
    return `
      🚚 <strong>Custom Commercial Food Truck Fabrication</strong>:
      <br><br>
      &bull; <strong>100% SS 304</strong> food-grade custom counters & storage.<br>
      &bull; Built-in high-pressure burners, deep fryers, and flat griddles.<br>
      &bull; Heavy-duty exhaust hood canopy with centrifugal blower.<br>
      &bull; Fresh water tanks, waste drainage, and fire-safe LPG line piping.<br>
      &bull; RTO compliant design & electrical inverter setups.
      <div class="bksi-msg-actions">
        <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20I%20am%20interested%20in%20custom%20Food%20Truck%20Fabrication." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 Discuss Food Truck Project</a>
      </div>
    `;
  }

  // 4. Burners / Cooking Ranges / Ovens
  if (query.includes('burner') || query.includes('range') || query.includes('stove') || query.includes('gas') || query.includes('cook') || query.includes('oven') || query.includes('tandoor') || query.includes('dosa') || query.includes('bhatty')) {
    return `
      🔥 <strong>Heavy-Duty Commercial Cooking Equipment</strong>:
      <br><br>
      We manufacture 1, 2, 3, and 4-Burner Indian Cooking Ranges, Chinese Wok Ranges with water faucets, Chapati Puffer Plates, Dosa Bhatties, and Gas/Electric Deck Ovens with heavy cast iron pan supports!
      <div class="bksi-msg-actions">
        <a href="products.html?category=cooking" class="bksi-msg-btn-quote">🔥 View Cooking Ranges</a>
        <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20I%20need%20details%20for%20Commercial%20Burner%20Ranges." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 WhatsApp Inquiry</a>
      </div>
    `;
  }

  // 5. Exhaust / Hood / Ducting / Chimney
  if (query.includes('exhaust') || query.includes('hood') || query.includes('duct') || query.includes('chimney') || query.includes('ventilation') || query.includes('blower')) {
    return `
      💨 <strong>SS 304 Exhaust Hood & Ducting Systems</strong>:
      <br><br>
      We design zero-smoke kitchen ventilation with stainless steel baffle grease filters, oil collection troughs, heavy gauge GI/SS ducting, and vibration-free centrifugal exhaust blowers compliant with fire safety norms.
      <div class="bksi-msg-actions">
        <a href="products.html?category=exhaust" class="bksi-msg-btn-quote">💨 Explore Exhaust Hoods</a>
        <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20I%20need%20details%20for%20Exhaust%20Hood%20Systems." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 WhatsApp Quote</a>
      </div>
    `;
  }

  // 6. Bain Marie / Warmers / Buffet
  if (query.includes('bain marie') || query.includes('warmer') || query.includes('buffet') || query.includes('servery') || query.includes('hot case')) {
    return `
      🍲 <strong>Bain Marie & Hot Food Servery Counters</strong>:
      <br><br>
      Equipped with standard GN container pans (2 to 12 pan configurations), dry/wet heating elements, digital thermostat temperature control, and toughened curved/flat glass sneeze guards for luxury hotel dining and buffets.
      <div class="bksi-msg-actions">
        <a href="products.html?category=servery" class="bksi-msg-btn-quote">🍲 View Bain Marie Showcases</a>
      </div>
    `;
  }

  // 7. Refrigeration / Freezers / Tanks
  if (query.includes('fridge') || query.includes('refrigerat') || query.includes('chiller') || query.includes('freezer') || query.includes('water tank')) {
    return `
      ❄️ <strong>Commercial SS 304 Refrigeration & Water Storage</strong>:
      <br><br>
      We manufacture 2-door & 4-door vertical upright chillers/freezers, under-counter worktop refrigerators, GN topping prep tables, and 50L - 1000L food-grade potable SS 304 water tanks.
      <div class="bksi-msg-actions">
        <a href="products.html?category=refrigeration" class="bksi-msg-btn-quote">❄️ Explore Refrigeration</a>
      </div>
    `;
  }

  // 8. Factory Location / Address / Contact
  if (query.includes('location') || query.includes('address') || query.includes('factory') || query.includes('where') || query.includes('visit') || query.includes('bengaluru') || query.includes('bangalore') || query.includes('contact') || query.includes('phone') || query.includes('number')) {
    return `
      🏭 <strong>B.K.S. Industries Manufacturing Facility</strong>:
      <br><br>
      📍 <strong>Address</strong>: Site No. 22, 1st Cross, Kempamma Layout, Lakshmidevinagar, Bengaluru, Karnataka &mdash; 560096.<br>
      📞 <strong>Phone</strong>: +91 81239 39433<br>
      ✉️ <strong>Email</strong>: Bks-industries@outlook.com<br>
      ⏰ <strong>Hours</strong>: Mon &mdash; Sat: 9:00 AM &mdash; 7:30 PM
      <div class="bksi-msg-actions">
        <a href="https://wa.me/918123939433" target="_blank" rel="noopener" class="bksi-msg-btn-wa">📞 Call / WhatsApp Now</a>
      </div>
    `;
  }

  // 9. Commercial Kitchen Setup / Hotel / Restaurant / Canteen
  if (query.includes('restaurant') || query.includes('hotel') || query.includes('canteen') || query.includes('hospital') || query.includes('resort') || query.includes('setup')) {
    return `
      🏆 <strong>End-to-End Commercial Kitchen Equipment Setup</strong>:
      <br><br>
      From architectural 2D/3D CAD kitchen layouts and LPG manifold piping to exhaust ducting, equipment manufacturing, on-site installation, and staff handover. 500+ successful projects delivered across India!
      <div class="bksi-msg-actions">
        <a href="index.html#services" class="bksi-msg-btn-quote">📋 View Kitchen Services</a>
      </div>
    `;
  }

  // 10. Greetings & Friendly chat
  if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('good morning') || query.includes('good afternoon') || query.includes('namaste')) {
    return `
      Hello! 😊 Welcome to <strong>B.K.S. Industries</strong>.
      <br><br>
      Are you looking for commercial cooking ranges, completed project installations, custom food trucks, or a complete restaurant kitchen setup? I am here to help you!
    `;
  }

  // Default Fallback
  return `
    Thank you for your question! As a leading commercial kitchen equipment manufacturer in Bengaluru, we customize all products to your exact requirements. 🛠️
    <br><br>
    Would you like our engineering team to send you our complete product catalog or assist you on WhatsApp?
    <div class="bksi-msg-actions">
      <a href="products.html" class="bksi-msg-btn-quote">📦 Browse Products Catalog</a>
      <a href="index.html#projects" class="bksi-msg-btn-quote">📸 View Real Projects</a>
    </div>
  `;
}

async function handleUserChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('bksiChatInput');
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  appendUserMessage(userText);
  input.value = '';

  showTypingIndicator();

  const delay = Math.floor(Math.random() * 300) + 600;
  setTimeout(() => {
    const replyHtml = generateAiReply(userText);
    appendBotMessage(replyHtml);
  }, delay);
}

// ==========================================================================
// MOBILE DRAWER NAVIGATION CONTROLLER
// ==========================================================================
function toggleMobileMenu() {
  const drawer = document.getElementById('apolloMobileDrawer');
  const backdrop = document.getElementById('apolloMobileBackdrop');
  if (!drawer || !backdrop) return;

  if (drawer.classList.contains('active')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  const drawer = document.getElementById('apolloMobileDrawer');
  const backdrop = document.getElementById('apolloMobileBackdrop');
  const hamburger = document.getElementById('apolloHamburger');
  if (!drawer || !backdrop) return;

  drawer.classList.add('active');
  backdrop.classList.add('active');
  if (hamburger) hamburger.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const drawer = document.getElementById('apolloMobileDrawer');
  const backdrop = document.getElementById('apolloMobileBackdrop');
  const hamburger = document.getElementById('apolloHamburger');
  if (!drawer || !backdrop) return;

  drawer.classList.remove('active');
  backdrop.classList.remove('active');
  if (hamburger) hamburger.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleMobileAccordion(contentId, btn) {
  const content = document.getElementById(contentId);
  if (!content) return;
  const isExpanded = content.classList.contains('expanded');
  
  if (isExpanded) {
    content.classList.remove('expanded');
    if (btn) btn.classList.remove('expanded');
  } else {
    content.classList.add('expanded');
    if (btn) btn.classList.add('expanded');
  }
}

// Global Escape Key to close drawers & modals
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMobileMenu();
    closeEnquiryModal();
  }
});

// ==========================================================================
// 18. GLOBAL LEAD CAPTURE POPUP MODAL CONTROLLER
// ==========================================================================

function initLeadModal() {
  if (document.getElementById('bksiLeadModalBackdrop')) return;

  const modalHtml = `
    <div class="bksi-lead-modal-backdrop" id="bksiLeadModalBackdrop" onclick="handleLeadModalBackdropClick(event)" aria-hidden="true" role="dialog">
      <div class="bksi-lead-modal-window" onclick="event.stopPropagation()">
        <!-- Modal Header -->
        <div class="bksi-lead-modal-header">
          <div class="bksi-lead-modal-header-info">
            <img src="images/bksi_official_logo.png" alt="BKSI Logo" class="bksi-lead-modal-logo">
            <div>
              <h3 class="bksi-lead-modal-title">Request Factory Quotation</h3>
              <div class="bksi-lead-modal-sub">
                <i class="fa-solid fa-bolt"></i> Direct Factory Pricing &bull; 30-Min Response
              </div>
            </div>
          </div>
          <button type="button" class="bksi-lead-modal-close" onclick="closeEnquiryModal()" aria-label="Close Modal">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="bksi-lead-modal-body">
          <span class="bksi-lead-chips-label">Quick Select Your Requirement:</span>
          <div class="bksi-lead-chips">
            <button type="button" class="bksi-lead-chip" onclick="selectLeadChip(this, 'Complete Commercial Kitchen Setup')">🍽️ Full Kitchen Setup</button>
            <button type="button" class="bksi-lead-chip" onclick="selectLeadChip(this, 'Commercial Cooking Ranges & Burners')">🔥 Cooking Ranges</button>
            <button type="button" class="bksi-lead-chip" onclick="selectLeadChip(this, 'SS Exhaust Hoods & Ducting System')">💨 Exhaust & Ducting</button>
            <button type="button" class="bksi-lead-chip" onclick="selectLeadChip(this, 'Custom Food Truck Fabrication')">🚚 Food Truck</button>
            <button type="button" class="bksi-lead-chip" onclick="selectLeadChip(this, 'SS Prep Tables & Sinks')">🧼 Prep Tables & Sinks</button>
            <button type="button" class="bksi-lead-chip" onclick="selectLeadChip(this, 'Commercial Refrigeration')">❄️ Chillers & Freezers</button>
          </div>

          <form id="bksiLeadModalForm" onsubmit="handleLeadModalSubmit(event)">
            <div class="bksi-lead-grid-2">
              <div class="bksi-lead-form-group">
                <label class="bksi-lead-label" for="leadName">Your Name <span>*</span></label>
                <input type="text" id="leadName" class="bksi-lead-input" required placeholder="e.g. Ramesh Kumar">
              </div>
              <div class="bksi-lead-form-group">
                <label class="bksi-lead-label" for="leadPhone">Phone Number <span>*</span></label>
                <input type="tel" id="leadPhone" class="bksi-lead-input" required placeholder="e.g. 98765 43210">
              </div>
            </div>

            <div class="bksi-lead-grid-2">
              <div class="bksi-lead-form-group">
                <label class="bksi-lead-label" for="leadEmail">Email Address (Optional)</label>
                <input type="email" id="leadEmail" class="bksi-lead-input" placeholder="e.g. name@kitchen.com">
              </div>
              <div class="bksi-lead-form-group">
                <label class="bksi-lead-label" for="leadType">Kitchen Type <span>*</span></label>
                <select id="leadType" class="bksi-lead-select" required>
                  <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                  <option value="Hotel / Resort">Hotel / Resort</option>
                  <option value="Cloud Kitchen / Delivery">Cloud Kitchen / Delivery</option>
                  <option value="Food Truck / Mobile Kitchen">Food Truck / Mobile Kitchen</option>
                  <option value="Industrial / Hospital Canteen">Industrial / Hospital Canteen</option>
                  <option value="Bakery / Sweet Shop">Bakery / Sweet Shop</option>
                  <option value="Single Equipment Purchase">Single Equipment Purchase</option>
                </select>
              </div>
            </div>

            <div class="bksi-lead-form-group">
              <label class="bksi-lead-label" for="leadDetails">Equipment / Requirement Details <span>*</span></label>
              <textarea id="leadDetails" class="bksi-lead-textarea" rows="3" required placeholder="Describe your kitchen dimensions or required equipment (e.g. 2-burner range, work table, upright chiller)..."></textarea>
            </div>

            <button type="submit" class="bksi-lead-submit-btn">
              <i class="fa-solid fa-paper-plane"></i>
              <span>Send Quotation Request to Factory</span>
            </button>

            <div class="bksi-lead-guarantee">
              <i class="fa-solid fa-shield-halved" style="color: #10B981;"></i>
              <span>100% Confidential &bull; Direct Factory Price &bull; No Obligation</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openEnquiryModal(prefillContext = '') {
  initLeadModal();
  const backdrop = document.getElementById('bksiLeadModalBackdrop');
  if (!backdrop) return;

  if (prefillContext) {
    const detailsInput = document.getElementById('leadDetails');
    if (detailsInput) {
      detailsInput.value = `Interested in: ${prefillContext}`;
    }
  }

  backdrop.classList.add('active');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const nameInput = document.getElementById('leadName');
    if (nameInput) nameInput.focus();
  }, 100);
}

function closeEnquiryModal() {
  const backdrop = document.getElementById('bksiLeadModalBackdrop');
  if (!backdrop) return;

  backdrop.classList.remove('active');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function handleLeadModalBackdropClick(e) {
  if (e.target === document.getElementById('bksiLeadModalBackdrop')) {
    closeEnquiryModal();
  }
}

function selectLeadChip(chipBtn, text) {
  const allChips = document.querySelectorAll('.bksi-lead-chip');
  allChips.forEach(c => c.classList.remove('active'));
  chipBtn.classList.add('active');

  const detailsInput = document.getElementById('leadDetails');
  if (detailsInput) {
    detailsInput.value = text;
    detailsInput.focus();
  }
}

function handleLeadModalSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('leadName').value.trim();
  const phone = document.getElementById('leadPhone').value.trim();
  const email = document.getElementById('leadEmail') ? document.getElementById('leadEmail').value.trim() : '';
  const type = document.getElementById('leadType') ? document.getElementById('leadType').value : 'Commercial Kitchen';
  const details = document.getElementById('leadDetails').value.trim();

  // Show immediate confirmation toast
  if (typeof showToast === 'function') {
    showToast(`Thank you, ${name}! Your quotation request has been received. Opening WhatsApp confirmation...`, 'success');
  } else {
    alert(`Thank you, ${name}! Your quotation request has been received. Opening WhatsApp confirmation...`);
  }

  // Close modal
  closeEnquiryModal();
  if (e.target && e.target.reset) e.target.reset();

  // Route to WhatsApp with pre-filled lead details
  setTimeout(() => {
    const waText = encodeURIComponent(
      `Hello BKS Industries Team,\n\nI submitted an online equipment quotation request:\n• Name: ${name}\n• Phone: ${phone}${email ? `\n• Email: ${email}` : ''}\n• Kitchen Type: ${type}\n• Requirements: ${details}\n\nPlease share catalog and itemized quotation.`
    );
    window.open(`https://wa.me/918123939433?text=${waText}`, '_blank');
  }, 900);
}

// Bind all Enquiry / Get Quote buttons globally to openEnquiryModal
function bindEnquiryButtons() {
  const enquiryBtns = document.querySelectorAll('.apollo-btn-enquiry, .open-lead-modal-btn');
  enquiryBtns.forEach(btn => {
    btn.onclick = function(e) {
      e.preventDefault();
      openEnquiryModal();
    };
  });
}

// Auto-initialize components on DOM Ready across all pages
document.addEventListener('DOMContentLoaded', function() {
  initLeadModal();
  bindEnquiryButtons();

  if (document.getElementById('projectsGrid')) {
    renderProjectsGallery('all');
  }
  if (typeof initScrollReveal === 'function') {
    initScrollReveal();
  }
  if (typeof initStatCounters === 'function') {
    initStatCounters();
  }
  if (typeof init3DCardTilt === 'function') {
    init3DCardTilt();
  }
});