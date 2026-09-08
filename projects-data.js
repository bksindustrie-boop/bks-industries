// ==========================================================================
// B.K.S. Industries - Projects Gallery Data Store
// Updated: 2026-09-07T09:08:49.909Z
// ==========================================================================
const DEFAULT_PROJECTS_DATA = [
  {
    "id": "proj-20",
    "src": "images/main page/200 ltr water tank.jpg",
    "category": "fabrication",
    "badge": "Water Storage",
    "title": "Commercial Grade  Water Storage Tank (200L)",
    "location": "Commercial Kitchen Water Line",
    "desc": "Heavy 16G commercial grade 304 potable water storage tank with top inspection lid, level indicator, and drain valves.",
    "isCustom": true
  },
  {
    "id": "proj-real-01",
    "src": "images/real-gallery/real_restaurant_live_cooking_line.jpg",
    "category": "setups",
    "badge": "Live Restaurant Kitchen",
    "title": "Commercial Restaurant Live Cooking Line & Heavy Exhaust Canopy",
    "location": "Fine-Dining & Multi-Cuisine Restaurant, Bengaluru",
    "desc": "Fully commissioned commercial kitchen featuring heavy-duty commercial-grade gas ranges, flat griddle plates, multi-station prep tables, overhead utility racks, and continuous commercial baffle exhaust hood."
  },
  {
    "id": "proj-real-05",
    "src": "images/real-gallery/real_bain_marie_live_counter_station.jpg",
    "category": "counters",
    "badge": "Live Buffet Counter",
    "title": "Commercial 4-Well Bain Marie Soup Warmer & Live Service Counter",
    "location": "Buffet & Live Food Station, Bengaluru",
    "desc": "Food-grade Heavy-Duty Commercial Grade electric Bain Marie soup and gravy warmer with independent temperature controls, digital induction cooking unit, and 2-tier gantry display shelving."
  },
  {
    "id": "proj-01",
    "src": "images/main page/all in one kitchen.jpg",
    "category": "setups",
    "badge": "Kitchen Installation",
    "title": "Complete Commercial Kitchen Setup & Prep Line",
    "location": "Restaurant Installation Site, Karnataka",
    "desc": "Integrated commercial kitchen with heavy-duty commercial-grade Chinese wok ranges, preparation work tables, gas manifolds, and commercial exhaust hood canopy systems."
  },
  {
    "id": "proj-02",
    "src": "images/main page/bks industries.jpg",
    "category": "setups",
    "badge": "Factory Workshop",
    "title": "BKS Industries Manufacturing & Assembly Floor",
    "location": "BKS Factory Floor, Lakshmidevinagar, Bengaluru",
    "desc": "In-house heavy-duty commercial-grade fabrication workshop with CNC shearing, press brake bending, and precision argon TIG welding stations."
  },
  {
    "id": "proj-03",
    "src": "images/main page/bks2.jpg",
    "category": "setups",
    "badge": "Site Execution",
    "title": "Commercial Restaurant Kitchen Lineup & Exhaust System",
    "location": "Hotel Kitchen Project, Bengaluru",
    "desc": "End-to-end commercial kitchen installation featuring heavy stockpot burners, live counters, and high-CFM commercial exhaust ducting."
  },
  {
    "id": "proj-04",
    "src": "images/main page/bksi.jpg",
    "category": "setups",
    "badge": "Kitchen Delivery",
    "title": "Full Commercial Grade Cooking & Prep Facility",
    "location": "Commercial Dining Setup, South India",
    "desc": "Heavy-gauge Heavy-Duty Commercial Grade commercial kitchen equipment line customized for high-volume daily food service."
  },
  {
    "id": "proj-06",
    "src": "images/main page/bulk Burner.jpg",
    "category": "cooking",
    "badge": "Cooking Range Line",
    "title": "Heavy-Duty Bulk Stockpot Cooking Ranges Lineup",
    "location": "Institutional Canteen Project",
    "desc": "Batch installation of heavy single-burner bulk stockpot gas stoves with high-pressure burners and removable spillage trays."
  },
  {
    "id": "proj-08",
    "src": "images/main page/l type Burner.jpg",
    "category": "cooking",
    "badge": "Custom Configuration",
    "title": "L-Configuration Multi-Burner Commercial Cooking Station",
    "location": "Commercial Cloud Kitchen, Bengaluru",
    "desc": "Custom-designed L-shaped cooking line maximizing chef workflow efficiency in compact commercial kitchen spaces."
  },
  {
    "id": "proj-09",
    "src": "images/main page/burner with hot case2.jpg",
    "category": "cooking",
    "badge": "Multi-Station Range",
    "title": "Commercial Cooking Range Integrated with Hot Case Oven",
    "location": "Hotel Foodservice Setup",
    "desc": "High-power burner stove integrated with bottom insulated warming oven chamber for fast hot food service."
  },
  {
    "id": "proj-10",
    "src": "images/main page/dosa and Buner.jpg",
    "category": "cooking",
    "badge": "South Indian Station",
    "title": "Combined Flat Dosa Bhatti & High-Pressure Burner Unit",
    "location": "South Indian Restaurant Project",
    "desc": "Polished 16mm thick mild steel flat dosa griddle paired with high-output gas burner on heavy-duty commercial-grade frame."
  },
  {
    "id": "proj-13",
    "src": "images/main page/romali Roti 1.jpg",
    "category": "cooking",
    "badge": "Specialty Cooking",
    "title": "Heavy Heavy-Duty Commercial Grade Rumali Roti & Live Kebab Station",
    "location": "Live Banquet Service Setup",
    "desc": "Custom fabricated commercial grade live Rumali Roti station with integrated ingredient trays and gas piping."
  },
  {
    "id": "proj-16",
    "src": "images/main page/hot case 2.jpg",
    "category": "counters",
    "badge": "Hot Food Showcase",
    "title": "Multi-Vessel Commercial Bain Marie & Hot Food Case",
    "location": "Buffet & Dining Hall Project",
    "desc": "Food-grade Heavy-Duty Commercial Grade hot food servery case with independent temperature control and curved glass sneeze protection."
  },
  {
    "id": "proj-17",
    "src": "images/main page/food wamer trolley.jpg",
    "category": "counters",
    "badge": "Mobile Warmer",
    "title": "Mobile Commercial Grade Food Warmer Service Cart",
    "location": "Catering & Banquet Facility",
    "desc": "Heavy-duty insulated heated food transport cart on smooth swivel castor wheels with corner bumpers."
  },
  {
    "id": "proj-18",
    "src": "images/main page/tilting pan.jpg",
    "category": "fabrication",
    "badge": "Bulk Cooking Pan",
    "title": "Heavy-Duty Commercial Tilting Bratt Pan (150L)",
    "location": "Central Kitchen Installation",
    "desc": "Heavy rectangular commercial grade tilting braising pan with precision worm gear mechanism for safe bulk pouring."
  },
  {
    "id": "proj-23",
    "src": "images/main page/mesh.jpg",
    "category": "fabrication",
    "badge": "Custom SS Mesh",
    "title": "Commercial Grade Mesh Wire Grating & Drain Strainers",
    "location": "Drainage & Ventilation System",
    "desc": "Food-grade commercial grade wire mesh grating fabricated for floor drainage channels and exhaust baffle air intakes."
  }
];

const PROJECT_STORAGE_KEY = 'bksi_custom_projects_v1';

function getAllProjects() {
  try {
    const saved = localStorage.getItem(PROJECT_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const customProjs = parsed.filter(p => p && (p.isCustom || (p.id && p.id.startsWith('proj-custom-'))));
        const modifiedProjs = parsed.filter(p => p && !p.isCustom && (!p.id || !p.id.startsWith('proj-custom-')));
        const modifiedMap = new Map(modifiedProjs.map(p => [p.id, p]));
        const result = [...customProjs];
        const seenIds = new Set(customProjs.map(p => p.id));
        for (const def of DEFAULT_PROJECTS_DATA) {
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
    console.error('Error reading projects from localStorage:', e);
  }
  return [...DEFAULT_PROJECTS_DATA];
}

function getProjectById(id) {
  const all = getAllProjects();
  return all.find(p => p.id === id) || null;
}

function saveProjectToStorage(projObj) {
  try {
    const all = getAllProjects();
    const existingIndex = all.findIndex(p => p.id === projObj.id);
    if (existingIndex >= 0) {
      all[existingIndex] = { ...all[existingIndex], ...projObj };
    } else {
      all.unshift(projObj);
    }
    localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(all));
    if (typeof window !== 'undefined') window.projectsData = all;
    return { success: true, count: all.length };
  } catch (e) {
    console.error('Failed to save project:', e);
    return { success: false, error: e.message };
  }
}

function deleteProjectFromStorage(id) {
  try {
    let all = getAllProjects();
    all = all.filter(p => p.id !== id);
    localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(all));
    if (typeof window !== 'undefined') window.projectsData = all;
    return { success: true, count: all.length };
  } catch (e) {
    console.error('Failed to delete project:', e);
    return { success: false, error: e.message };
  }
}

if (typeof window !== 'undefined') {
  window.projectsData = getAllProjects();
}
