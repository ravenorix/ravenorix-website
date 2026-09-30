/**
 * RavenØrix Drone Pricing
 *
 * Benchmark data used by the pricing estimate engine.
 *
 * IMPORTANT:
 * These are market benchmarks, not RavenØrix's own prices.
 * The calculator should use these as reference data and combine
 * them with project characteristics and geographic information.
 *
 * Sources are intentionally stored with each benchmark so the
 * pricing engine can eventually report:
 * - where the benchmark came from
 * - how current it is
 * - how strong the data is
 */

export type PricingService =
  | "photography"
  | "video"
  | "photo-video"
  | "real-estate"
  | "commercial"
  | "construction"
  | "inspection"
  | "other";

export type BenchmarkSource =
  | "rotor-rate"
  | "shoot-rate"
  | "wgan"
  | "drone-services"
  | "rotate"
  | "quotecraft";

export type BenchmarkConfidence =
  | "high"
  | "moderate"
  | "low";

export interface PricingBenchmark {
  id: string;

  service: PricingService;

  label: string;

  low: number;

  high: number;

  unit:
    | "shoot"
    | "half-day"
    | "full-day"
    | "visit"
    | "package";

  geography:
    | "us"
    | "alaska";

  source: BenchmarkSource;

  sourceName: string;

  sourceUrl: string;

  publishedDate: string;

  confidence: BenchmarkConfidence;

  notes: string;
}


/**
 * 2026 MARKET BENCHMARKS
 *
 * These ranges represent published market observations.
 *
 * They are deliberately NOT averaged into one number yet.
 * The next pricing-engine step will determine which benchmarks
 * should influence a particular estimate.
 */

export const dronePricingBenchmarks: PricingBenchmark[] = [

  /* =========================================================
     REAL ESTATE
  ========================================================= */

  {
    id: "real-estate-us-standard",

    service: "real-estate",

    label: "Residential real estate aerial package",

    low: 150,

    high: 400,

    unit: "shoot",

    geography: "us",

    source: "rotor-rate",

    sourceName: "Rotor Rate",

    sourceUrl:
      "https://rotorrate.com/blog/drone-photography-pricing-2026-rate-guide",

    publishedDate: "2026-05-14",

    confidence: "high",

    notes:
      "Typical residential real-estate aerial work with approximately 10–20 finished stills and optional short video."
  },


  {
    id: "real-estate-alaska",

    service: "real-estate",

    label: "Residential real estate aerial package — Alaska",

    low: 250,

    high: 600,

    unit: "shoot",

    geography: "alaska",

    source: "rotor-rate",

    sourceName: "Rotor Rate — Alaska 2026",

    sourceUrl:
      "https://rotorrate.com/pricing-guides/drone-services-pricing-alaska",

    publishedDate: "2026-07-01",

    confidence: "high",

    notes:
      "Alaska-specific benchmark covering residential real-estate photo/video work. Higher logistics and travel costs are reflected in the state-level range."
  },


  {
    id: "real-estate-wgan",

    service: "real-estate",

    label: "Standalone real estate aerial work",

    low: 200,

    high: 500,

    unit: "shoot",

    geography: "us",

    source: "wgan",

    sourceName: "WGAN",

    sourceUrl:
      "https://calc.wgan.info/drone-pricing",

    publishedDate: "2026-05-16",

    confidence: "moderate",

    notes:
      "WGAN reports approximately $200–$500+ for standalone drone photography, while add-on work can be lower."
  },


  /* =========================================================
     AERIAL PHOTOGRAPHY
  ========================================================= */

  {
    id: "photo-us-half-day",

    service: "photography",

    label: "Drone photography — half day",

    low: 300,

    high: 700,

    unit: "half-day",

    geography: "us",

    source: "shoot-rate",

    sourceName: "ShootRate",

    sourceUrl:
      "https://www.shootrate.app/drone-photography-pricing",

    publishedDate: "2026-01-01",

    confidence: "high",

    notes:
      "Up to approximately four hours of still photography for real estate, property, construction progress, or similar work."
  },


  {
    id: "photo-us-commercial",

    service: "commercial",

    label: "Commercial / brand aerial photography — half day",

    low: 1000,

    high: 3500,

    unit: "half-day",

    geography: "us",

    source: "rotor-rate",

    sourceName: "Rotor Rate",

    sourceUrl:
      "https://rotorrate.com/blog/2026-drone-services-rate-guide",

    publishedDate: "2026-06-19",

    confidence: "moderate",

    notes:
      "Commercial and brand photography benchmark. This category generally involves higher client value, production expectations, and licensing considerations."
  },


  /* =========================================================
     AERIAL VIDEO
  ========================================================= */

  {
    id: "video-us-half-day",

    service: "video",

    label: "Drone photo + video — half day",

    low: 500,

    high: 1200,

    unit: "half-day",

    geography: "us",

    source: "shoot-rate",

    sourceName: "ShootRate",

    sourceUrl:
      "https://www.shootrate.app/drone-photography-pricing",

    publishedDate: "2026-01-01",

    confidence: "high",

    notes:
      "Mixed aerial stills and edited video deliverables for property, corporate marketing, and similar projects."
  },


  {
    id: "video-us-cinematic",

    service: "video",

    label: "Cinematic aerial video",

    low: 400,

    high: 800,

    unit: "shoot",

    geography: "us",

    source: "rotate",

    sourceName: "Rotate",

    sourceUrl:
      "https://rotatepilot.com/blog/drone-photography-pricing-guide-2026",

    publishedDate: "2026-03-10",

    confidence: "moderate",

    notes:
      "Published benchmark for cinematic flythrough-style aerial video. Final pricing depends heavily on editing and production requirements."
  },


  /* =========================================================
     PHOTO + VIDEO
  ========================================================= */

  {
    id: "photo-video-us",

    service: "photo-video",

    label: "Aerial photo + video package",

    low: 500,

    high: 1200,

    unit: "half-day",

    geography: "us",

    source: "shoot-rate",

    sourceName: "ShootRate",

    sourceUrl:
      "https://www.shootrate.app/drone-photography-pricing",

    publishedDate: "2026-01-01",

    confidence: "high",

    notes:
      "Combined aerial photography and edited video deliverables."
  },


  /* =========================================================
     CONSTRUCTION
  ========================================================= */

  {
    id: "construction-us",

    service: "construction",

    label: "Construction progress documentation",

    low: 250,

    high: 600,

    unit: "visit",

    geography: "us",

    source: "rotor-rate",

    sourceName: "Rotor Rate",

    sourceUrl:
      "https://rotorrate.com/blog/2026-drone-services-rate-guide",

    publishedDate: "2026-06-19",

    confidence: "high",

    notes:
      "Typical recurring construction progress photography visit."
  },


  {
    id: "construction-quotecraft",

    service: "construction",

    label: "Construction progress visit",

    low: 350,

    high: 1200,

    unit: "visit",

    geography: "us",

    source: "quotecraft",

    sourceName: "QuoteCraft",

    sourceUrl:
      "https://yourquotecraft.com/blog/drone-pilot-pricing-2026",

    publishedDate: "2026-05-17",

    confidence: "moderate",

    notes:
      "Broader construction progress benchmark. Higher end can reflect more involved documentation and commercial requirements."
  },


  /* =========================================================
     INSPECTION
  ========================================================= */

  {
    id: "inspection-us-commercial",

    service: "inspection",

    label: "Commercial inspection",

    low: 600,

    high: 2500,

    unit: "visit",

    geography: "us",

    source: "rotor-rate",

    sourceName: "Rotor Rate",

    sourceUrl:
      "https://rotorrate.com/blog/2026-drone-services-rate-guide",

    publishedDate: "2026-06-19",

    confidence: "moderate",

    notes:
      "Commercial inspection benchmark. Scope, documentation, equipment, access, and reporting requirements can significantly change the final quote."
  },


  {
    id: "inspection-alaska-roof",

    service: "inspection",

    label: "Residential roof inspection — Alaska",

    low: 450,

    high: 1000,

    unit: "visit",

    geography: "alaska",

    source: "rotor-rate",

    sourceName: "Rotor Rate — Alaska 2026",

    sourceUrl:
      "https://rotorrate.com/pricing-guides/drone-services-pricing-alaska",

    publishedDate: "2026-07-01",

    confidence: "high",

    notes:
      "Alaska-specific residential roof inspection benchmark with documentation. Thermal equipment can substantially increase pricing."
  },


  /* =========================================================
     GENERAL / DAY RATE
  ========================================================= */

  {
    id: "commercial-day-rate",

    service: "commercial",

    label: "Broad commercial aerial day rate",

    low: 1200,

    high: 2500,

    unit: "full-day",

    geography: "us",

    source: "rotor-rate",

    sourceName: "Rotor Rate",

    sourceUrl:
      "https://rotorrate.com/blog/2026-drone-services-rate-guide",

    publishedDate: "2026-06-19",

    confidence: "moderate",

    notes:
      "Broad commercial day-rate benchmark. Intended for substantial production work rather than a simple residential shoot."
  },


  {
    id: "commercial-full-day-shootrate",

    service: "commercial",

    label: "Full-day aerial session",

    low: 1000,

    high: 3000,

    unit: "full-day",

    geography: "us",

    source: "shoot-rate",

    sourceName: "ShootRate",

    sourceUrl:
      "https://www.shootrate.app/drone-photography-pricing",

    publishedDate: "2026-01-01",

    confidence: "high",

    notes:
      "Large property, multi-structure site, or commercial project requiring approximately six to eight hours of coverage."
  }

];


/* =========================================================
   HELPERS
========================================================= */

/**
 * Return every benchmark associated with a service.
 */
export function getBenchmarksForService(
  service: PricingService
): PricingBenchmark[] {

  return dronePricingBenchmarks.filter(
    benchmark => benchmark.service === service
  );

}


/**
 * Return benchmarks for a service and geographic area.
 *
 * Alaska-specific data is preferred when available.
 * U.S. benchmarks remain available as the fallback layer.
 */
export function getBenchmarksForMarket(
  service: PricingService,
  geography: "us" | "alaska"
): PricingBenchmark[] {

  const serviceBenchmarks =
    getBenchmarksForService(service);

  if (geography === "alaska") {

    const alaskaBenchmarks =
      serviceBenchmarks.filter(
        benchmark => benchmark.geography === "alaska"
      );

    if (alaskaBenchmarks.length > 0) {
      return alaskaBenchmarks;
    }

  }

  return serviceBenchmarks.filter(
    benchmark => benchmark.geography === "us"
  );

}


/**
 * Calculate the midpoint of a published benchmark.
 *
 * This is NOT the final customer estimate.
 * It is simply a neutral benchmark value that the
 * pricing engine can use later.
 */
export function getBenchmarkMidpoint(
  benchmark: PricingBenchmark
): number {

  return (benchmark.low + benchmark.high) / 2;

}


/**
 * Calculate the combined low/high range across
 * a collection of benchmarks.
 */
export function getBenchmarkRange(
  benchmarks: PricingBenchmark[]
): {
  low: number;
  high: number;
} | null {

  if (benchmarks.length === 0) {
    return null;
  }

  return {
    low: Math.min(
      ...benchmarks.map(benchmark => benchmark.low)
    ),

    high: Math.max(
      ...benchmarks.map(benchmark => benchmark.high)
    )
  };

}