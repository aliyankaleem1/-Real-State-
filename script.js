/**
 * AVARIA — Premier Luxury Real Estate Marketplace Engine
 * Featuring Multi-Property Portfolio: Houses & Villas, Luxury Flats & Apartments, Commercial Shops & Retail.
 * Dynamic Multi-Currency Converter (PKR, USD, AED, GBP, SAR),
 * Dual Financing & Commercial ROI Calculator, 3D Architectural Scene, and Interactive Property Modal.
 */

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  initIntroAnimation();
  initHeaderScroll();
  initPropertyCatalog();
  init3dVillaEngine();
  init3dCardTilt();
  initHeroMouseParallax();
  updateMortgage();
  updateCommercialRoi();
});

/* ==========================================================================
   MULTI-PROPERTY CATALOG DATA (Houses, Flats, Commercial Shops)
   ========================================================================== */
const propertyCatalog = [
  // --- HOUSES & LUXURY VILLAS ---
  {
    id: "house-1",
    type: "house",
    typeLabel: "Luxury Villa",
    purpose: "buy",
    title: "Avaria Royal Crest Villa",
    location: "DHA Phase 8 (Sahil Avenue), Karachi",
    pricePkr: 385000000,
    priceDisplay: "PKR 38.5 Crore",
    usdPrice: "$1.38M",
    beds: 5,
    baths: 6,
    area: "1,000 Gaz (Sq. Yd)",
    coveredArea: "9,200 sq.ft Covered",
    badge: "SBCA & DHA Clear Title",
    tag: "Exclusive Mandate",
    featured: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "12m Heated Private Lap Pool",
      "30kW Solar Hybrid Microgrid",
      "Dedicated RO Water Filtration Plant",
      "Basement Cinema & Private Gym",
      "Italian Valcucine Designer Kitchen",
      "Double-Height 22ft Reception Salon"
    ],
    description: "An architectural masterpiece in DHA Phase 8 with unobstructed Arabian Sea views, cantilevered master wing, imported Italian travertine stone, landscaped oasis courtyard, and 4-car private garage."
  },
  {
    id: "house-2",
    type: "house",
    typeLabel: "Modern Bungalow",
    purpose: "buy",
    title: "The Palm Horizon Beachfront Villa",
    location: "Clifton Block 2 (Sea View Enclave), Karachi",
    pricePkr: 245000000,
    priceDisplay: "PKR 24.5 Crore",
    usdPrice: "$880K",
    beds: 4,
    baths: 5,
    area: "500 Gaz (Sq. Yd)",
    coveredArea: "5,800 sq.ft Covered",
    badge: "100% DHA Registered",
    tag: "Beachfront Living",
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Walking Distance to Sea View Coast",
      "20kW Solar System Installed",
      "Rooftop Sunset Lounge & BBQ Deck",
      "Lutron Smart Lighting & Climate",
      "Separate Servant & Driver Quarters"
    ],
    description: "Striking minimalist beachfront bungalow walking distance to Clifton beach. Built with open-plan courtyard circulation, floor-to-ceiling double-glazed thermal glass, and Burmese teak woodwork."
  },
  {
    id: "house-3",
    type: "house",
    typeLabel: "Golf Course Estate",
    purpose: "buy",
    title: "Pine Crest Signature Golf Mansion",
    location: "DHA Golf Club Enclave, Phase 8, Karachi",
    pricePkr: 520000000,
    priceDisplay: "PKR 52.0 Crore",
    usdPrice: "$1.86M",
    beds: 6,
    baths: 8,
    area: "2,000 Gaz (Sq. Yd)",
    coveredArea: "15,500 sq.ft Covered",
    badge: "Diplomatic Security Zone",
    tag: "Ultra Luxury Estate",
    featured: false,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Direct 18-Hole Championship Fairway View",
      "Infinity Edge Resort Swimming Pool",
      "Air-Conditioned Indoor Squash Court",
      "Basement Parking for 10 Vehicles",
      "Dual Italian Kone Glass Elevators"
    ],
    description: "The epitome of high-society luxury living overlooking the DHA Golf Course. Features reinforced perimeter, bulletproof glass facade, private spa retreat, and lush botanical gardens."
  },
  {
    id: "house-4",
    type: "house",
    typeLabel: "Designer Townhouse",
    purpose: "rent",
    title: "The Bukhari Modern Triplex Townhouse",
    location: "DHA Phase 6 (Near Ittehad Commercial), Karachi",
    pricePkr: 1200000, // Monthly Rent
    priceDisplay: "PKR 12 Lakh / Month",
    usdPrice: "$4,300 / mo",
    beds: 4,
    baths: 5,
    area: "300 Gaz (Sq. Yd)",
    coveredArea: "4,200 sq.ft Covered",
    badge: "Turnkey Ready to Move",
    tag: "Furnished For Rent",
    featured: false,
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Fully Furnished with European Designer Decor",
      "Dedicated Full Power Generator Connection",
      "Private Internal Passenger Lift",
      "Rooftop Terrace with Pergola",
      "24/7 Gated Security Patrol"
    ],
    description: "Immaculately styled triplex townhouse in a peaceful DHA Phase 6 pocket. Equipped with Miele kitchen appliances, imported Spanish marble, and private lift access across all 3 levels."
  },

  // --- FLATS & LUXURY APARTMENTS ---
  {
    id: "flat-1",
    type: "flat",
    typeLabel: "Oceanfront Luxury Flat",
    purpose: "buy",
    title: "Emaar Crescent Bay Sea-View Residence",
    location: "Coral Tower, Emaar Crescent Bay, DHA Phase 8",
    pricePkr: 88000000,
    priceDisplay: "PKR 8.8 Crore",
    usdPrice: "$315K",
    beds: 3,
    baths: 4,
    area: "2,650 Sq. Ft",
    coveredArea: "2,650 sq.ft Living Space",
    badge: "Emaar Master Development",
    tag: "180° Arabian Sea View",
    featured: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Unobstructed Panoramic Arabian Sea Vista",
      "Private Gated Beach Access for Residents",
      "Infinity Horizon Pool & Fitness Spa",
      "High-Speed Mitsubishi Smart Elevators",
      "2 Reserved Covered Basement Parking Slots"
    ],
    description: "Prime high-floor corner luxury apartment overlooking the open sea. Complete with resort-style community amenities, private beach access, concierge reception, and high rental demand."
  },
  {
    id: "flat-2",
    type: "flat",
    typeLabel: "Sky Duplex Penthouse",
    purpose: "buy",
    title: "The Skyline Crown Executive Penthouse",
    location: "Hoshang Pearl / Clifton Marine Drive, Karachi",
    pricePkr: 165000000,
    priceDisplay: "PKR 16.5 Crore",
    usdPrice: "$590K",
    beds: 4,
    baths: 5,
    area: "4,800 Sq. Ft",
    coveredArea: "4,800 sq.ft Duplex",
    badge: "Direct Penthouse Key Access",
    tag: "360° Coastline Views",
    featured: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Private Rooftop Sky Deck with Heated Jacuzzi",
      "Double-Height 24ft Glass Curtain Walls",
      "Smart Touch Home Automation System",
      "Separate Maid Room & Private Service Entry",
      "3 Dedicated Basement Car Bays"
    ],
    description: "Exclusive duplex penthouse crowning the 28th floor with breathtaking 360-degree vistas across the Arabian Sea coastline and Karachi skyline. Custom designed with Italian cabinetry and private cinema."
  },
  {
    id: "flat-3",
    type: "flat",
    typeLabel: "High-Rise Apartment",
    purpose: "rent",
    title: "The Bayview Executive 2-Bed Suite",
    location: "Reef Towers, Emaar Crescent Bay, DHA Phase 8",
    pricePkr: 450000, // Monthly Rent
    priceDisplay: "PKR 4.5 Lakh / Month",
    usdPrice: "$1,600 / mo",
    beds: 2,
    baths: 3,
    area: "1,750 Sq. Ft",
    coveredArea: "1,750 sq.ft Living Space",
    badge: "Full Sea Facing",
    tag: "Furnished For Rent",
    featured: false,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Designer Scandinavian Furniture & Lighting",
      "Contemporary Open-Plan Chef's Kitchen",
      "Full Access to Emaar Clubhouse & Pools",
      "24/7 Security & Keycard Access",
      "High Floor Fresh Ocean Breeze"
    ],
    description: "Fully furnished turnkey executive apartment with floor-to-ceiling glass windows facing the open ocean. Ideal for corporate diplomats, expats, and senior executives seeking peace of mind."
  },
  {
    id: "flat-4",
    type: "flat",
    typeLabel: "Prestige Urban Flat",
    purpose: "buy",
    title: "Civil Lines Prestige Parkview Residence",
    location: "Near Karachi Gymkhana, Civil Lines, Karachi",
    pricePkr: 52000000,
    priceDisplay: "PKR 5.2 Crore",
    usdPrice: "$186K",
    beds: 3,
    baths: 3,
    area: "2,100 Sq. Ft",
    coveredArea: "2,100 sq.ft Living Space",
    badge: "Prime Cantonment Address",
    tag: "Central Landmark",
    featured: false,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Overlooking Lush Parkland & Heritage Trees",
      "100% Standby Soundproof Generator Backup",
      "High-Security Gated Residential Tower",
      "Modern Fitness Gym & Resident Community Hall",
      "Dedicated Basement Car Parking"
    ],
    description: "Centrally located luxury residential flat in serene, high-security Civil Lines. Quick access to elite clubs, major embassies, financial centers, and top health facilities."
  },

  // --- COMMERCIAL SHOPS & RETAIL SPACES ---
  {
    id: "shop-1",
    type: "shop",
    typeLabel: "Flagship Retail Shop",
    purpose: "buy",
    title: "Main Boulevard Flagship Ground Corner Shop",
    location: "DHA Phase 6 Commercial Avenue, Karachi",
    pricePkr: 75000000,
    priceDisplay: "PKR 7.5 Crore",
    usdPrice: "$270K",
    beds: 0,
    baths: 1,
    area: "1,250 Sq. Ft",
    coveredArea: "1,250 sq.ft Ground + Mezzanine",
    badge: "DHA Approved Commercial",
    tag: "High Footfall Corner",
    featured: true,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    features: [
      "32ft Clear Glass Double Frontage",
      "Corner Visibility to 2 Main Arterial Roads",
      "Dedicated Customer Street Parking",
      "24/7 Central Commercial Power Generator",
      "Estimated 9.4% Annual Rental Yield"
    ],
    description: "High-capital appreciation commercial corner shop on prime DHA Phase 6 commercial hub. Unrivaled visibility, ideal for luxury retail boutiques, flagship jewelry stores, or high-end dining cafes."
  },
  {
    id: "shop-2",
    type: "shop",
    typeLabel: "Mall Retail Boutique",
    purpose: "rent",
    title: "Clifton Luxury Mall Ground Floor Boutique",
    location: "Near Two Swords / Ocean Mall, Clifton, Karachi",
    pricePkr: 550000, // Monthly Rent
    priceDisplay: "PKR 5.5 Lakh / Month",
    usdPrice: "$1,970 / mo",
    beds: 0,
    baths: 1,
    area: "850 Sq. Ft",
    coveredArea: "850 sq.ft Ready Fitted",
    badge: "Turnkey Fitted Out",
    tag: "Commercial For Rent",
    featured: false,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Ready Fitted Track Lighting & Display Racks",
      "Polished Premium Italian Terrazzo Floors",
      "Central HVAC Air Conditioning Included",
      "Consistent High Affluent Consumer Footfall",
      "Valet Parking & 24/7 Security"
    ],
    description: "Turnkey ready-to-move luxury boutique shop on the high-traffic ground atrium corridor of Clifton. Perfect for fashion designers, cosmetic brands, or premium lifestyle accessories."
  },
  {
    id: "shop-3",
    type: "shop",
    typeLabel: "Commercial Plaza Showroom",
    purpose: "buy",
    title: "Shahrah-e-Faisal Corporate Showroom & Shop",
    location: "Main Shahrah-e-Faisal Corporate Zone, Karachi",
    pricePkr: 110000000,
    priceDisplay: "PKR 11.0 Crore",
    usdPrice: "$395K",
    beds: 0,
    baths: 2,
    area: "2,400 Sq. Ft",
    coveredArea: "2,400 sq.ft Ground + Mezzanine",
    badge: "Direct Boulevard Facing",
    tag: "Bank / MNC Suitable",
    featured: true,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "50ft Frontage Facing Primary Business Artery",
      "6 Reserved Underground Tenant Parking Spaces",
      "Industrial Heavy-Duty Power Grid & Generator",
      "SBCA Commercial Regularized Title",
      "Proven Multinational Corporate Rental Record"
    ],
    description: "Grand commercial display showroom and retail shop directly fronting Karachi's main business thoroughfare. Ensures massive corporate brand exposure with guaranteed premium corporate rental yields."
  },
  {
    id: "shop-4",
    type: "shop",
    typeLabel: "F&B Outdoor Cafe Shop",
    purpose: "rent",
    title: "Seaview Promenade Outdoor Cafe & Shop",
    location: "Sahil Promenade, DHA Phase 8, Karachi",
    pricePkr: 650000, // Monthly Rent
    priceDisplay: "PKR 6.5 Lakh / Month",
    usdPrice: "$2,330 / mo",
    beds: 0,
    baths: 2,
    area: "1,500 Sq. Ft + 800 Sq. Ft Deck",
    coveredArea: "2,300 sq.ft Total Space",
    badge: "F&B Gas & Exhaust Fitted",
    tag: "Alfresco Dining Deck",
    featured: false,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Approved Open-Air Ocean Deck for Outdoor Tables",
      "Commercial Grade Exhaust Hood & Grease Trap",
      "3-Phase High-Capacity Commercial Electric",
      "Vibrant Weekend & Evening Footfall",
      "Dedicated Valet Customer Drop-off"
    ],
    description: "Prime food and beverage commercial shop with approved wooden deck fronting the scenic Sahil Promenade in DHA Phase 8. Captures evening ocean breeze and high-volume family dining traffic."
  }
];

/* ==========================================================================
   CURRENCY CONVERSION ENGINE
   ========================================================================== */
const currencyRates = {
  PKR: { rate: 1, symbol: "PKR ", label: "PKR (₨ Crore/Lakh)", isPkr: true },
  USD: { rate: 0.00359, symbol: "$", label: "USD ($ US Dollar)", isPkr: false },
  AED: { rate: 0.01318, symbol: "AED ", label: "AED (د.إ UAE Dirham)", isPkr: false },
  GBP: { rate: 0.00282, symbol: "£", label: "GBP (£ British Pound)", isPkr: false },
  SAR: { rate: 0.01347, symbol: "SAR ", label: "SAR (﷼ Saudi Riyal)", isPkr: false }
};

let currentCurrency = 'PKR';

function formatPrice(pkrAmount, purpose = 'buy') {
  const curr = currencyRates[currentCurrency] || currencyRates.PKR;
  if (curr.isPkr) {
    if (purpose === 'rent') {
      const lakh = (pkrAmount / 100000).toFixed(1);
      return `PKR ${lakh} Lakh / mo`;
    } else {
      const crore = (pkrAmount / 10000000).toFixed(1);
      return `PKR ${crore} Crore`;
    }
  } else {
    const converted = Math.round(pkrAmount * curr.rate);
    const formatted = converted.toLocaleString();
    if (purpose === 'rent') {
      return `${curr.symbol}${formatted} / mo`;
    } else {
      return `${curr.symbol}${formatted}`;
    }
  }
}

function selectCurrency(currCode) {
  if (!currencyRates[currCode]) return;
  currentCurrency = currCode;

  // Update header label
  const labelEl = document.getElementById('currentCurrencyLabel');
  if (labelEl) labelEl.textContent = currencyRates[currCode].label.split(' ')[0] + " (" + currencyRates[currCode].symbol.trim() + ")";

  // Update active state in menu
  document.querySelectorAll('.currency-opt').forEach(opt => {
    if (opt.getAttribute('data-curr') === currCode) opt.classList.add('active');
    else opt.classList.remove('active');
  });

  // Re-render property catalog and update calculators
  renderPropertyGrid();
  updateMortgage();
  updateCommercialRoi();
  showToast("Currency Updated", `Switched pricing display to ${currCode}`);
}

/* ==========================================================================
   PROPERTY CATALOG RENDERING & FILTERING
   ========================================================================== */
let activeTypeFilter = 'all';     // 'all', 'house', 'flat', 'shop'
let activePurposeFilter = 'all';  // 'all', 'buy', 'rent'
let currentSearchKeyword = '';

function initPropertyCatalog() {
  renderPropertyGrid();
}

function setTypeFilter(type, btnEl) {
  activeTypeFilter = type;
  document.querySelectorAll('.prop-tab-pill').forEach(btn => btn.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderPropertyGrid();
}

function setPurposeFilter(purpose, btnEl) {
  activePurposeFilter = purpose;
  document.querySelectorAll('.purpose-pill').forEach(btn => btn.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderPropertyGrid();
}

function handlePropertySearch(keyword) {
  currentSearchKeyword = (keyword || '').toLowerCase().trim();
  renderPropertyGrid();
}

function handleHeroSearchSubmit(e) {
  if (e) e.preventDefault();
  const typeSelect = document.getElementById('heroSearchType');
  const locSelect = document.getElementById('heroSearchLocation');
  const purposeSelect = document.getElementById('heroSearchPurpose');

  if (typeSelect) activeTypeFilter = typeSelect.value;
  if (purposeSelect) activePurposeFilter = purposeSelect.value;

  const locVal = locSelect ? locSelect.value.toLowerCase() : '';
  currentSearchKeyword = locVal === 'all' ? '' : locVal;

  // Sync category tabs UI
  document.querySelectorAll('.prop-tab-pill').forEach(btn => {
    if (btn.getAttribute('data-type') === activeTypeFilter) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  renderPropertyGrid();

  // Smooth scroll to catalog
  const catalogSection = document.getElementById('properties');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderPropertyGrid() {
  const grid = document.getElementById('propertyGrid');
  const counterEl = document.getElementById('propertiesCountText');
  if (!grid) return;

  const filtered = propertyCatalog.filter(prop => {
    // Type match
    const matchesType = (activeTypeFilter === 'all') || (prop.type === activeTypeFilter);
    // Purpose match
    const matchesPurpose = (activePurposeFilter === 'all') || (prop.purpose === activePurposeFilter);
    // Search match
    const matchesSearch = !currentSearchKeyword ||
      prop.title.toLowerCase().includes(currentSearchKeyword) ||
      prop.location.toLowerCase().includes(currentSearchKeyword) ||
      prop.typeLabel.toLowerCase().includes(currentSearchKeyword) ||
      prop.description.toLowerCase().includes(currentSearchKeyword);

    return matchesType && matchesPurpose && matchesSearch;
  });

  if (counterEl) {
    counterEl.textContent = `Showing ${filtered.length} of ${propertyCatalog.length} Verified Properties`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-properties-box">
        <i data-lucide="home" class="icon-lg text-gold"></i>
        <h3>No Matching Properties Found</h3>
        <p>No listings matched your selected filters. Try choosing "All Properties" or resetting your search term.</p>
        <button class="btn-primary" onclick="resetPropertyFilters()">Reset All Filters</button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(prop => {
    const formattedPrice = formatPrice(prop.pricePkr, prop.purpose);
    const purposeBadge = prop.purpose === 'buy' ? 'For Sale' : 'For Rent';

    // Icon & specs based on property type
    let specsHtml = '';
    let typeIcon = 'home';
    if (prop.type === 'house') {
      typeIcon = 'home';
      specsHtml = `
        <div class="card-spec-item" title="Bedrooms"><i data-lucide="bed" class="icon-xs"></i> <span>${prop.beds} Beds</span></div>
        <div class="card-spec-item" title="Bathrooms"><i data-lucide="bath" class="icon-xs"></i> <span>${prop.baths} Baths</span></div>
        <div class="card-spec-item" title="Plot Size"><i data-lucide="maximize" class="icon-xs"></i> <span>${prop.area.split(' ')[0]} Gaz</span></div>
      `;
    } else if (prop.type === 'flat') {
      typeIcon = 'building-2';
      specsHtml = `
        <div class="card-spec-item" title="Bedrooms"><i data-lucide="bed" class="icon-xs"></i> <span>${prop.beds} Beds</span></div>
        <div class="card-spec-item" title="Bathrooms"><i data-lucide="bath" class="icon-xs"></i> <span>${prop.baths} Baths</span></div>
        <div class="card-spec-item" title="Covered Area"><i data-lucide="maximize" class="icon-xs"></i> <span>${prop.area}</span></div>
      `;
    } else {
      typeIcon = 'shopping-bag';
      specsHtml = `
        <div class="card-spec-item" title="Commercial Area"><i data-lucide="maximize" class="icon-xs"></i> <span>${prop.area.split('+')[0]}</span></div>
        <div class="card-spec-item" title="Washrooms"><i data-lucide="bath" class="icon-xs"></i> <span>${prop.baths} Washroom</span></div>
        <div class="card-spec-item" title="Frontage & Traffic"><i data-lucide="trending-up" class="icon-xs"></i> <span>High Footfall</span></div>
      `;
    }

    return `
      <div class="property-catalog-card" data-id="${prop.id}">
        <div class="card-media-wrap">
          <img src="${prop.image}" alt="${prop.title}" class="card-main-img" loading="lazy">
          <div class="card-badges-row">
            <span class="card-type-tag ${prop.type}">
              <i data-lucide="${typeIcon}" class="icon-xs"></i> ${prop.typeLabel}
            </span>
            <span class="card-purpose-tag ${prop.purpose}">${purposeBadge}</span>
          </div>
          <span class="card-verified-badge" title="Verified Title">
            <i data-lucide="check-circle" class="icon-xs"></i> Verified Clear Title
          </span>
        </div>

        <div class="card-body-content">
          <div class="card-price-header">
            <div class="card-price-main">${formattedPrice}</div>
            <div class="card-tag-sub">${prop.tag}</div>
          </div>

          <h3 class="card-title-text" onclick="openPropertyDetailModal('${prop.id}')">${prop.title}</h3>
          
          <p class="card-location-text">
            <i data-lucide="map-pin" class="icon-xs text-gold"></i>
            <span>${prop.location}</span>
          </p>

          <div class="card-specs-row">
            ${specsHtml}
          </div>

          <p class="card-desc-snippet">${prop.description.substring(0, 95)}...</p>

          <div class="card-actions-row">
            <button class="btn-card-details" onclick="openPropertyDetailModal('${prop.id}')">
              <span>View Details & Specs</span>
              <i data-lucide="arrow-right" class="icon-xs"></i>
            </button>
            <button class="btn-card-inquire" onclick="openBookingModal('Inquiry: ${prop.title.replace(/'/g, "\\'")}')" title="Inquire Privately">
              <i data-lucide="calendar"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function resetPropertyFilters() {
  activeTypeFilter = 'all';
  activePurposeFilter = 'all';
  currentSearchKeyword = '';

  const searchInput = document.getElementById('propSearchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.prop-tab-pill').forEach(btn => {
    if (btn.getAttribute('data-type') === 'all') btn.classList.add('active');
    else btn.classList.remove('active');
  });

  document.querySelectorAll('.purpose-pill').forEach(btn => {
    if (btn.getAttribute('data-purpose') === 'all') btn.classList.add('active');
    else btn.classList.remove('active');
  });

  renderPropertyGrid();
}

/* ==========================================================================
   PROPERTY DETAIL MODAL (Gallery, Specs, Verified Details & WhatsApp)
   ========================================================================== */
function openPropertyDetailModal(propertyId) {
  const prop = propertyCatalog.find(p => p.id === propertyId);
  if (!prop) return;

  const modal = document.getElementById('propertyDetailModal');
  if (!modal) return;

  const formattedPrice = formatPrice(prop.pricePkr, prop.purpose);

  document.getElementById('modalPropTitle').textContent = prop.title;
  document.getElementById('modalPropLocation').textContent = prop.location;
  document.getElementById('modalPropPrice').textContent = formattedPrice;
  document.getElementById('modalPropType').textContent = `${prop.typeLabel} • ${prop.purpose === 'buy' ? 'For Sale' : 'For Rent'}`;
  document.getElementById('modalPropImage').src = prop.image;
  document.getElementById('modalPropImage').alt = prop.title;
  document.getElementById('modalPropDesc').textContent = prop.description;
  document.getElementById('modalPropBadge').textContent = prop.badge;

  // Render specs
  const specsGrid = document.getElementById('modalPropSpecsGrid');
  if (specsGrid) {
    if (prop.type === 'house') {
      specsGrid.innerHTML = `
        <div class="modal-spec-cell"><span class="label">Plot Size</span><strong>${prop.area}</strong></div>
        <div class="modal-spec-cell"><span class="label">Covered Area</span><strong>${prop.coveredArea}</strong></div>
        <div class="modal-spec-cell"><span class="label">Bedrooms</span><strong>${prop.beds} Master Suites</strong></div>
        <div class="modal-spec-cell"><span class="label">Bathrooms</span><strong>${prop.baths} Designer Baths</strong></div>
        <div class="modal-spec-cell"><span class="label">Status</span><strong>Ready for Possession</strong></div>
        <div class="modal-spec-cell"><span class="label">Lease Term</span><strong>99-Year Sub-Lease</strong></div>
      `;
    } else if (prop.type === 'flat') {
      specsGrid.innerHTML = `
        <div class="modal-spec-cell"><span class="label">Apartment Size</span><strong>${prop.area}</strong></div>
        <div class="modal-spec-cell"><span class="label">Bedrooms</span><strong>${prop.beds} Luxury Suites</strong></div>
        <div class="modal-spec-cell"><span class="label">Bathrooms</span><strong>${prop.baths} Marble Baths</strong></div>
        <div class="modal-spec-cell"><span class="label">View</span><strong>Arabian Sea Coastline</strong></div>
        <div class="modal-spec-cell"><span class="label">Floor Level</span><strong>High Floor Executive</strong></div>
        <div class="modal-spec-cell"><span class="label">Parking</span><strong>2 Covered Basement Bays</strong></div>
      `;
    } else {
      specsGrid.innerHTML = `
        <div class="modal-spec-cell"><span class="label">Retail Area</span><strong>${prop.area}</strong></div>
        <div class="modal-spec-cell"><span class="label">Frontage</span><strong>Wide Double Glass Display</strong></div>
        <div class="modal-spec-cell"><span class="label">Washroom</span><strong>${prop.baths} Fitted Facility</strong></div>
        <div class="modal-spec-cell"><span class="label">Power</span><strong>100% Standby Generator</strong></div>
        <div class="modal-spec-cell"><span class="label">Zoning</span><strong>SBCA Commercial Approved</strong></div>
        <div class="modal-spec-cell"><span class="label">Footfall</span><strong>High Consumer Traffic</strong></div>
      `;
    }
  }

  // Render features list
  const featuresList = document.getElementById('modalPropFeaturesList');
  if (featuresList && prop.features) {
    featuresList.innerHTML = prop.features.map(f => `
      <li class="modal-feature-item">
        <i data-lucide="check" class="icon-xs text-gold"></i>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Update inquiry form prefill
  const propInput = document.getElementById('inquiryPropertyInput');
  if (propInput) propInput.value = `${prop.title} (${prop.location})`;

  // WhatsApp link
  const waBtn = document.getElementById('modalWhatsAppBtn');
  if (waBtn) {
    const waText = encodeURIComponent(`Hello AVARIA Estates, I am interested in inquiring about "${prop.title}" (${formattedPrice}) located in ${prop.location}. Please share the comprehensive PDF dossier.`);
    waBtn.href = `https://wa.me/923001234567?text=${waText}`;
  }

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    lucide.createIcons();
  }
}

function closePropertyDetailModal() {
  const modal = document.getElementById('propertyDetailModal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

/* ==========================================================================
   3D ARCHITECTURAL SPACE EXPLORER (Villa, Apartment Tower, Commercial Plaza)
   ========================================================================== */
let scene3d, camera3d, renderer3d, controls3d;
let villaGroup3d;
let current3dModelType = 'villa'; // 'villa', 'apartment', 'commercial'

function init3dVillaEngine() {
  const canvas = document.getElementById('villa3dCanvas');
  const container = document.getElementById('hero3dContainer');
  if (!canvas || !container) return;

  scene3d = new THREE.Scene();
  scene3d.fog = new THREE.FogExp2(0xfbfbfa, 0.015);

  const width = container.clientWidth;
  const height = container.clientHeight;

  camera3d = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera3d.position.set(24, 16, 28);

  renderer3d = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer3d.setSize(width, height);
  renderer3d.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer3d.shadowMap.enabled = true;
  renderer3d.shadowMap.type = THREE.PCFSoftShadowMap;

  // Controls
  if (window.THREE && THREE.OrbitControls) {
    controls3d = new THREE.OrbitControls(camera3d, renderer3d.domElement);
    controls3d.enableDamping = true;
    controls3d.dampingFactor = 0.05;
    controls3d.maxPolarAngle = Math.PI / 2.05; // Don't go below ground
    controls3d.minDistance = 10;
    controls3d.maxDistance = 55;
    controls3d.target.set(0, 3, 0);
  }

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.9);
  scene3d.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xfff5e6, 1.3);
  sunLight.position.set(30, 45, 25);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  scene3d.add(sunLight);

  const fillLight = new THREE.DirectionalLight(0xddeeff, 0.6);
  fillLight.position.set(-25, 20, -20);
  scene3d.add(fillLight);

  // Ground plane
  const groundGeo = new THREE.PlaneGeometry(120, 120);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0xf5f3ee,
    roughness: 0.9,
    metalness: 0.05
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene3d.add(ground);

  // Build default 3D Model
  build3dModel('villa');

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    if (controls3d) controls3d.update();
    if (villaGroup3d) {
      villaGroup3d.rotation.y += 0.0015; // Gentle slow architectural rotation
    }
    renderer3d.render(scene3d, camera3d);
  }
  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    if (!container || !camera3d || !renderer3d) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera3d.aspect = w / h;
    camera3d.updateProjectionMatrix();
    renderer3d.setSize(w, h);
  });
}

function build3dModel(type) {
  if (villaGroup3d) {
    scene3d.remove(villaGroup3d);
  }
  villaGroup3d = new THREE.Group();
  current3dModelType = type;

  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.1 });
  const travertineMat = new THREE.MeshStandardMaterial({ color: 0xe6ded2, roughness: 0.6, metalness: 0.05 });
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x88ccff, transparent: true, opacity: 0.45, roughness: 0.1, transmission: 0.8 });
  const poolMat = new THREE.MeshStandardMaterial({ color: 0x0099cc, roughness: 0.1, metalness: 0.2 });
  const goldMetalMat = new THREE.MeshStandardMaterial({ color: 0xbfa175, roughness: 0.25, metalness: 0.85 });

  if (type === 'villa') {
    // Ground Floor Villa Block
    const groundFloor = new THREE.Mesh(new THREE.BoxGeometry(14, 4, 10), travertineMat);
    groundFloor.position.set(0, 2, 0);
    groundFloor.castShadow = true;
    groundFloor.receiveShadow = true;
    villaGroup3d.add(groundFloor);

    // Upper Cantilevered Floor
    const upperFloor = new THREE.Mesh(new THREE.BoxGeometry(16, 3.8, 8), whiteMat);
    upperFloor.position.set(1.5, 5.9, 0.5);
    upperFloor.castShadow = true;
    upperFloor.receiveShadow = true;
    villaGroup3d.add(upperFloor);

    // Glass Windows Frontage
    const glassFacade = new THREE.Mesh(new THREE.BoxGeometry(12, 3.2, 0.2), glassMat);
    glassFacade.position.set(1.5, 5.9, 4.6);
    villaGroup3d.add(glassFacade);

    // Swimming Pool
    const pool = new THREE.Mesh(new THREE.BoxGeometry(10, 0.4, 4), poolMat);
    pool.position.set(0, 0.2, 7);
    villaGroup3d.add(pool);

    // Gold Pergola Louvers
    for (let i = -5; i <= 5; i += 1.2) {
      const louver = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.3, 3.5), goldMetalMat);
      louver.position.set(i + 1, 8, 4.5);
      villaGroup3d.add(louver);
    }
  } else if (type === 'apartment') {
    // High-Rise Luxury Apartment Tower
    const towerCore = new THREE.Mesh(new THREE.BoxGeometry(8, 22, 8), whiteMat);
    towerCore.position.set(0, 11, 0);
    towerCore.castShadow = true;
    towerCore.receiveShadow = true;
    villaGroup3d.add(towerCore);

    // Floor Balconies
    for (let f = 2; f <= 20; f += 2.5) {
      const balcony = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.3, 9.6), travertineMat);
      balcony.position.set(0, f, 0);
      villaGroup3d.add(balcony);

      const glassRail = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.9, 9.5), glassMat);
      glassRail.position.set(0, f + 0.5, 0);
      villaGroup3d.add(glassRail);
    }

    // Penthouse Sky Deck
    const skyDeck = new THREE.Mesh(new THREE.BoxGeometry(10.5, 1.2, 10.5), goldMetalMat);
    skyDeck.position.set(0, 22.5, 0);
    villaGroup3d.add(skyDeck);
  } else {
    // Commercial Plaza & Shop Frontage
    const plazaBase = new THREE.Mesh(new THREE.BoxGeometry(18, 5, 10), travertineMat);
    plazaBase.position.set(0, 2.5, 0);
    plazaBase.castShadow = true;
    villaGroup3d.add(plazaBase);

    // Wide Double Glass Retail Frontage
    const shopGlass = new THREE.Mesh(new THREE.BoxGeometry(16, 4, 0.2), glassMat);
    shopGlass.position.set(0, 2.3, 5.1);
    villaGroup3d.add(shopGlass);

    // Upper Mezzanine Corporate Offices
    const mezzanine = new THREE.Mesh(new THREE.BoxGeometry(16, 4.5, 8), whiteMat);
    mezzanine.position.set(0, 7.2, -0.5);
    villaGroup3d.add(mezzanine);

    // Commercial Brand Display Signage
    const signBoard = new THREE.Mesh(new THREE.BoxGeometry(14, 1.2, 0.3), goldMetalMat);
    signBoard.position.set(0, 5.2, 5.2);
    villaGroup3d.add(signBoard);
  }

  scene3d.add(villaGroup3d);
}

function switch3dModel(type, btnEl) {
  build3dModel(type);
  document.querySelectorAll('.hud-type-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  showToast("3D Architectural View", `Loaded 3D model for: ${type.toUpperCase()}`);
}

function set3dCameraPreset(preset) {
  if (!camera3d || !controls3d) return;
  document.querySelectorAll('.hud-cam-btn').forEach(b => b.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');

  if (preset === 'drone') {
    camera3d.position.set(24, 20, 28);
    controls3d.target.set(0, 4, 0);
  } else if (preset === 'front') {
    camera3d.position.set(0, 6, 26);
    controls3d.target.set(0, 3, 0);
  } else if (preset === 'corner') {
    camera3d.position.set(20, 10, 18);
    controls3d.target.set(0, 4, 0);
  }
  controls3d.update();
}

/* ==========================================================================
   MORTGAGE & COMMERCIAL SHOP ROI CALCULATOR
   ========================================================================== */
let activeCalcTab = 'mortgage'; // 'mortgage' or 'roi'

function switchCalcTab(tabName, btnEl) {
  activeCalcTab = tabName;
  document.querySelectorAll('.calc-tab-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const mortgagePanel = document.getElementById('mortgageCalcPanel');
  const roiPanel = document.getElementById('commercialRoiPanel');

  if (tabName === 'mortgage') {
    if (mortgagePanel) mortgagePanel.style.display = 'block';
    if (roiPanel) roiPanel.style.display = 'none';
    updateMortgage();
  } else {
    if (mortgagePanel) mortgagePanel.style.display = 'none';
    if (roiPanel) roiPanel.style.display = 'block';
    updateCommercialRoi();
  }
}

function updateMortgage() {
  const priceInput = document.getElementById('calcHomePrice');
  const downPercentInput = document.getElementById('calcDownPercent');
  const tenureInput = document.getElementById('calcTenure');

  if (!priceInput || !downPercentInput || !tenureInput) return;

  const priceCrore = parseFloat(priceInput.value) || 15;
  const downPercent = parseFloat(downPercentInput.value) || 30;
  const tenureYears = parseInt(tenureInput.value) || 15;

  const totalPkr = priceCrore * 10000000;
  const downPaymentPkr = totalPkr * (downPercent / 100);
  const loanPkr = totalPkr - downPaymentPkr;

  const profitRateAnnual = 0.135; // 13.5% Islamic Diminishing Musharakah Rate
  const monthlyRate = profitRateAnnual / 12;
  const totalMonths = tenureYears * 12;

  const monthlyInstallmentPkr = (loanPkr * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

  // Update UI displays
  const downPkrDisplay = (downPaymentPkr / 10000000).toFixed(2);
  const loanPkrDisplay = (loanPkr / 10000000).toFixed(2);
  const monthlyLakhDisplay = (monthlyInstallmentPkr / 100000).toFixed(2);

  const priceValText = document.getElementById('calcHomePriceVal');
  const downValText = document.getElementById('calcDownPercentVal');
  const tenureValText = document.getElementById('calcTenureVal');

  if (priceValText) priceValText.textContent = `PKR ${priceCrore} Crore`;
  if (downValText) downValText.textContent = `${downPercent}% (PKR ${downPkrDisplay} Cr)`;
  if (tenureValText) tenureValText.textContent = `${tenureYears} Years (${totalMonths} Months)`;

  const resMonthly = document.getElementById('resMonthlyInstallment');
  const resDown = document.getElementById('resDownPayment');
  const resFinanced = document.getElementById('resFinancedAmount');

  if (resMonthly) resMonthly.textContent = `PKR ${monthlyLakhDisplay} Lakh / month`;
  if (resDown) resDown.textContent = `PKR ${downPkrDisplay} Crore`;
  if (resFinanced) resFinanced.textContent = `PKR ${loanPkrDisplay} Crore`;
}

function updateCommercialRoi() {
  const shopPriceInput = document.getElementById('calcShopPrice');
  const monthlyRentInput = document.getElementById('calcMonthlyRent');

  if (!shopPriceInput || !monthlyRentInput) return;

  const shopPriceCrore = parseFloat(shopPriceInput.value) || 7.5;
  const monthlyRentLakh = parseFloat(monthlyRentInput.value) || 5.5;

  const totalPricePkr = shopPriceCrore * 10000000;
  const annualRentPkr = (monthlyRentLakh * 100000) * 12;
  const roiPercentage = ((annualRentPkr / totalPricePkr) * 100).toFixed(2);
  const paybackYears = (totalPricePkr / annualRentPkr).toFixed(1);

  const shopPriceVal = document.getElementById('calcShopPriceVal');
  const monthlyRentVal = document.getElementById('calcMonthlyRentVal');

  if (shopPriceVal) shopPriceVal.textContent = `PKR ${shopPriceCrore} Crore`;
  if (monthlyRentVal) monthlyRentVal.textContent = `PKR ${monthlyRentLakh} Lakh / month`;

  const resAnnualRent = document.getElementById('resAnnualRent');
  const resRoiPercent = document.getElementById('resRoiPercent');
  const resPayback = document.getElementById('resPaybackPeriod');

  if (resAnnualRent) resAnnualRent.textContent = `PKR ${(annualRentPkr / 100000).toFixed(1)} Lakh / year`;
  if (resRoiPercent) resRoiPercent.textContent = `${roiPercentage}% Annual ROI`;
  if (resPayback) resPayback.textContent = `${paybackYears} Years`;
}

/* ==========================================================================
   BOOKING & VISIT INQUIRY MODAL
   ========================================================================== */
function openBookingModal(source = 'General Inquiry') {
  const modal = document.getElementById('bookingModal');
  const sub = document.getElementById('modalSub');
  if (sub && source) {
    sub.textContent = `Inquiring for: ${source}. A certified AVARIA estates luxury advisor will reach out to schedule your private tour.`;
  }
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

function handleBookingSubmit(e) {
  e.preventDefault();
  closeBookingModal();
  closePropertyDetailModal();
  showToast(
    "Inquiry Dispatched Successfully",
    "Our senior portfolio advisor has received your request and will contact you via WhatsApp / Phone."
  );
}

/* ==========================================================================
   GENERIC UI HELPERS (Preloader, Parallax, Toasts)
   ========================================================================== */
function initIntroAnimation() {
  const loader = document.getElementById('introLoader');
  const fill = document.getElementById('loaderFill');
  const percentText = document.getElementById('loaderPercent');

  if (!loader) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 20) + 10;
    if (progress > 100) progress = 100;
    if (fill) fill.style.width = `${progress}%`;
    if (percentText) percentText.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.style.display = 'none', 600);
      }, 300);
    }
  }, 100);
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, { passive: true });
}

function init3dCardTilt() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const dx = (x - rect.width / 2) / (rect.width / 2);
        const dy = (y - rect.height / 2) / (rect.height / 2);
        card.style.transform = `perspective(1000px) rotateX(${-dy * 7}deg) rotateY(${dx * 7}deg) translateY(-6px)`;
      } else {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
      }
    });
  });
}

function initHeroMouseParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.addEventListener('mousemove', (e) => {
    if (!controls3d) return;
    const rect = hero.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    controls3d.target.x = nx * 1.5;
    controls3d.target.y = 3 + ny * 0.8;
  });
}

function showToast(title, desc) {
  let toast = document.getElementById('avariaToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'avariaToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <div class="toast-indicator"></div>
    <div class="toast-body">
      <h4 class="toast-title">${title}</h4>
      <p class="toast-desc">${desc}</p>
    </div>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4200);
}

// Global modal backdrop close
window.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('modal-backdrop')) {
    closeBookingModal();
    closePropertyDetailModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookingModal();
    closePropertyDetailModal();
  }
});
