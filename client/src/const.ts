export interface PharmacyFirstCondition {
  id: string;
  name: string;
  ageRange: string;
  summary: string;
  symptoms: string[];
  treatment: string;
  redFlags: string[];
}

export interface ClinicalService {
  id: string;
  title: string;
  badge: string;
  description: string;
  priceTag: string;
  duration: string;
  category: 'nhs' | 'private' | 'community';
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  gphc: string;
  bio: string;
  story: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
}

export interface VaccinePriceItem {
  vaccine: string;
  doses: string;
  pricePerDose: string;
  fullCoursePrice: string;
  recommendation: string;
}

export const PHARMACY_DETAILS = {
  name: 'Queensway Chemist',
  tagline: "Chorlton's Independent Pharmacy — Caring for South Manchester Families Since 1987",
  address: '14 Manchester Road, Chorlton-cum-Hardy, Manchester M21 9PN',
  phone: '0161 946 0834',
  phoneIntl: '+441619460834',
  email: 'care@queenswaychemist.co.uk',
  gphcNumber: '9014227',
  odsCode: 'FFM98',
  regularHours: [
    { day: 'Monday', opens: '09:00', closes: '18:30', dayIndex: 1 },
    { day: 'Tuesday', opens: '09:00', closes: '18:30', dayIndex: 2 },
    { day: 'Wednesday', opens: '09:00', closes: '18:30', dayIndex: 3 },
    { day: 'Thursday', opens: '09:00', closes: '18:30', dayIndex: 4 },
    { day: 'Friday', opens: '09:00', closes: '18:30', dayIndex: 5 },
    { day: 'Saturday', opens: '09:00', closes: '17:00', dayIndex: 6 },
    { day: 'Sunday', opens: '10:00', closes: '14:00', dayIndex: 0 },
  ],
  deliveryPostcodes: ['M21', 'M20', 'M16', 'M32'],
};

export const PHARMACY_FIRST_CONDITIONS: PharmacyFirstCondition[] = [
  {
    id: 'uti',
    name: 'Uncomplicated UTIs',
    ageRange: 'Women aged 16–64',
    summary: 'Prompt, discrete clinical assessment and targeted antibiotic treatment for lower urinary tract infections without needing a GP prescription.',
    symptoms: ['Burning or stinging pain when urinating', 'Needing to urinate suddenly or more often', 'Cloudy or strong-smelling urine', 'Lower stomach pain'],
    treatment: 'Nitrofurantoin or Pivmecillinam when clinically indicated, plus symptomatic pain relief advice.',
    redFlags: ['Fever over 38°C or chills', 'Pain in the flank or upper back', 'Visible blood in urine with loin pain', 'Pregnancy or male patients (referred directly)'],
  },
  {
    id: 'sore-throat',
    name: 'Severe Sore Throat',
    ageRange: 'Adults and children aged 5+',
    summary: 'Clinical Centor & FeverPAIN scoring in our private consultation room to identify bacterial tonsillitis and prescribe penicillin V or clarithromycin if needed.',
    symptoms: ['High fever over 38°C', 'Purulent exudate / white spots on tonsils', 'Severe pain when swallowing', 'Swollen, tender cervical lymph nodes'],
    treatment: 'Oral Phenoxymethylpenicillin (or Clarithromycin for penicillin allergy) plus throat anaesthetic sprays.',
    redFlags: ['Difficulty breathing or swallowing saliva', 'Drooling or stridor', 'Trismus (inability to open mouth)', 'Unilateral swelling (peritonsillar abscess)'],
  },
  {
    id: 'sinusitis',
    name: 'Acute Sinusitis',
    ageRange: 'Adults and children aged 12+',
    summary: 'Assessment for persistent facial pressure, toothache, and purulent nasal discharge extending beyond 10 days.',
    symptoms: ['Facial pain or fullness worse on bending forward', 'Thick yellow/green nasal discharge', 'Reduced sense of smell', 'Sinus headache'],
    treatment: 'Steroid nasal sprays, saline washouts, and oral antibiotics for persistent or worsening presentation.',
    redFlags: ['Swelling or redness around one or both eyes', 'Severe systemic headache with stiff neck', 'Double vision or reduced visual acuity'],
  },
  {
    id: 'earache',
    name: 'Acute Otitis Media (Earache)',
    ageRange: 'Children aged 1–17',
    summary: 'Video otoscopic examination of the tympanic membrane to determine middle ear effusion, bulging, and inflammatory infection.',
    symptoms: ['Rapid onset earache', 'Tugging or rubbing at ears in young children', 'Fever and irritability', 'Muffled hearing'],
    treatment: 'Pain relief titration with oral analgesia; amoxicillin suspension or capsules when indicated by NICE criteria.',
    redFlags: ['Perforation with severe discharge', 'Swelling behind the ear (mastoid tenderness)', 'Facial weakness or lethargy'],
  },
  {
    id: 'impetigo',
    name: 'Impetigo',
    ageRange: 'Adults and children aged 1+',
    summary: 'Rapid diagnosis of contagious superficial bacterial skin infections with golden crusting sores.',
    symptoms: ['Golden, honey-coloured crusted patches', 'Red sores that burst quickly', 'Mild itching or soreness around nose/mouth'],
    treatment: 'Topical hydrogen peroxide cream, topical fusidic acid, or oral flucloxacillin for widespread lesions.',
    redFlags: ['Bullous impetigo spreading across large surface areas', 'Systemic lethargy and high fever in toddlers'],
  },
  {
    id: 'shingles',
    name: 'Shingles (Herpes Zoster)',
    ageRange: 'Adults aged 18+',
    summary: 'Immediate antiviral initiation within 72 hours of rash emergence to diminish pain and prevent post-herpetic neuralgia.',
    symptoms: ['Unilateral tingling, burning or severe skin pain', 'Banded cluster of fluid-filled blisters', 'Hypersensitive skin dermatomally'],
    treatment: 'Oral Valaciclovir or Aciclovir 7-day course with neuropathic pain management guidance.',
    redFlags: ['Rash near the eye or tip of the nose (Hutchinson sign)', 'Disseminated lesions across multiple dermatomes', 'Immunocompromised patients'],
  },
  {
    id: 'insect-bites',
    name: 'Infected Insect Bites',
    ageRange: 'Adults and children aged 1+',
    summary: 'Differentiating normal histamine reactions from cellulitis and secondary bacterial entry following midge, horsefly, or tick bites.',
    symptoms: ['Expanding erythema and swelling beyond initial bite', 'Warmth, firm induration, and increasing pain', 'Pus or yellow crusting at puncture mark'],
    treatment: 'Oral Flucloxacillin (or Clarithromycin/Erythromycin) with demarcation tracking on skin.',
    redFlags: ['Rapidly tracking red streaks toward torso', 'Rigors or high fever', 'Bites on eyelids or genital areas'],
  },
];

export const CORE_SERVICES: ClinicalService[] = [
  {
    id: 'pharmacy-first',
    title: 'NHS Pharmacy First Consultations',
    badge: 'NHS Walk-in · Free',
    description: 'Instant consultation in our accredited private room for 7 common conditions without waiting days for a GP appointment.',
    priceTag: 'Free on the NHS',
    duration: '10–15 mins',
    category: 'nhs',
  },
  {
    id: 'prescription-delivery',
    title: 'Free NHS Prescription Delivery',
    badge: 'Chorlton & South Manchester',
    description: 'Reliable doorstep delivery of your repeat NHS electronic prescriptions (EPS) across M21, M20, M16, and M32.',
    priceTag: 'Free Community Service',
    duration: 'Scheduled Weekdays',
    category: 'community',
  },
  {
    id: 'travel-clinic',
    title: 'Private Travel Vaccination Clinic',
    badge: 'Designated Yellow Fever Centre',
    description: 'Tailored travel risk assessments, malaria prevention tablets, and comprehensive immunisations for globetrotters and pilgrims.',
    priceTag: 'Consultation £20 (Waived with vaccines)',
    duration: '20–30 mins',
    category: 'private',
  },
  {
    id: 'ear-wax-removal',
    title: 'Ear Wax Microsuction Clinic',
    badge: 'Video Otoscopy Included',
    description: 'Safe, water-free microsuction performed under magnification by certified pharmacists for immediate hearing relief.',
    priceTag: '£50 One Ear / £70 Both Ears',
    duration: '20 mins',
    category: 'private',
  },
  {
    id: 'blood-pressure',
    title: 'NHS Blood Pressure Checks & ABPM',
    badge: 'Free for Adults 40+',
    description: 'Instant cardiovascular screening plus 24-hour ambulatory blood pressure monitoring for accurate hypertension detection.',
    priceTag: 'Free NHS Service',
    duration: '10 mins',
    category: 'nhs',
  },
  {
    id: 'blister-packs',
    title: 'Dosette Blister Pack Trays',
    badge: 'Medication Adherence Support',
    description: 'Sealed 7-day multi-compartment trays arranged by morning, lunch, tea, and bedtime to ensure medication is taken safely.',
    priceTag: 'Free Clinical Assessment',
    duration: 'Weekly / Monthly Cycle',
    category: 'community',
  },
  {
    id: 'contraception',
    title: 'NHS Contraceptive Service',
    badge: 'Walk-in & Confidential',
    description: 'Initiation and ongoing supply of oral contraceptive pills without needing to visit your doctor or sexual health clinic.',
    priceTag: 'Free on the NHS',
    duration: '15 mins',
    category: 'nhs',
  },
  {
    id: 'stop-smoking',
    title: 'NHS SmokeFree Support & NRT',
    badge: 'Behavioural + Nicotine Therapy',
    description: 'One-to-one behavioral guidance, carbon monoxide breath testing, and fully funded nicotine replacement aids.',
    priceTag: 'Free NHS Service',
    duration: '12-week program',
    category: 'nhs',
  },
];

export const CLINICAL_TEAM: TeamMember[] = [
  {
    name: 'Meera Patel',
    role: 'Superintendent Pharmacist & Travel Health Lead',
    credentials: 'MPharm (Hons), IPresc, MRPharmS',
    gphc: '2091344',
    bio: 'Meera has steered clinical governance at Queensway Chemist for over 14 years with an independent prescribing qualification and a special interest in travel epidemiology.',
    story: 'Born and raised in Greater Manchester, Meera believes community pharmacies are the warm hearth of neighborhood health, combining clinical precision with human listening.',
  },
  {
    name: 'Tariq Hussain',
    role: 'Senior Clinical Pharmacist',
    credentials: 'MPharm (Hons), Ear Care Dip.',
    gphc: '2078491',
    bio: 'Specialist in minor ailment triage, pediatric Pharmacy First consultations, and certified video-guided ear microsuction.',
    story: 'Tariq has worked across both hospital acute wards and community high streets, bringing hospital-level rigorous triage into the heart of Chorlton.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Accuracy Checking Pharmacy Technician (ACPT)',
    credentials: 'NVQ Level 3 Pharmacy Services',
    gphc: '5031209',
    bio: 'Sarah oversees daily dispensary flow, electronic prescription throughput, cold-chain integrity, and blister pack assembly.',
    story: 'With 19 years at Queensway, Sarah knows hundreds of regular patients by name and ensures complex regimes run without a hitch.',
  },
  {
    name: 'Liam Gallagher',
    role: 'Community Delivery Lead & Logistics Coordinator',
    credentials: 'Good Distribution Practice (GDP) Certified',
    gphc: 'Community Healthcare Team',
    bio: 'Directing our dedicated temperature-regulated delivery vehicle across Chorlton, Didsbury, Whalley Range, and Stretford.',
    story: 'Liam is the reassuring smile at our vulnerable and elderly patients’ doorsteps each afternoon, ensuring no neighbour is left isolated.',
  },
];

export const VACCINE_PRICES: VaccinePriceItem[] = [
  { vaccine: 'Hepatitis A (Adult)', doses: 'Single dose (Booster at 6–12 mos)', pricePerDose: '£55', fullCoursePrice: '£55', recommendation: 'Asia, Africa, Central & South America' },
  { vaccine: 'Hepatitis B (Adult)', doses: '3 doses (0, 1, 6 months)', pricePerDose: '£50', fullCoursePrice: '£150', recommendation: 'Healthcare, adventure travel, prolonged stays' },
  { vaccine: 'Typhoid (Injectable)', doses: 'Single dose', pricePerDose: '£42', fullCoursePrice: '£42', recommendation: 'Indian subcontinent, SE Asia, Africa' },
  { vaccine: 'Tetanus, Diphtheria & Polio (Revaxis)', doses: 'Single booster', pricePerDose: '£40', fullCoursePrice: '£40', recommendation: 'Routine booster for worldwide travel' },
  { vaccine: 'Rabies (Pre-exposure)', doses: '3 doses', pricePerDose: '£75', fullCoursePrice: '£225', recommendation: 'Animal contact risk, remote trekking' },
  { vaccine: 'Meningitis ACWY', doses: 'Single dose + Certificate', pricePerDose: '£65', fullCoursePrice: '£65', recommendation: 'Hajj & Umrah pilgrims, sub-Saharan Africa' },
  { vaccine: 'Yellow Fever (Designated Centre)', doses: 'Single lifetime dose + ICVP', pricePerDose: '£78', fullCoursePrice: '£78', recommendation: 'Tropical South America & Equatorial Africa' },
  { vaccine: 'Japanese Encephalitis', doses: '2 doses', pricePerDose: '£105', fullCoursePrice: '£210', recommendation: 'Rural Asian destinations during monsoon' },
  { vaccine: 'Chickenpox (Varicella)', doses: '2 doses', pricePerDose: '£75', fullCoursePrice: '£150', recommendation: 'Non-immune adults & children 1+' },
  { vaccine: 'Shingrix (Shingles vaccine)', doses: '2 doses', pricePerDose: '£220', fullCoursePrice: '£440', recommendation: 'Adults 50+ seeking private immunity' },
];

export const PATIENT_REVIEWS: ReviewItem[] = [
  {
    name: 'David Thornhill',
    location: 'Chorlton Green',
    date: 'August 2026',
    rating: 5,
    comment: 'Superb service. Walked in with severe earache, Tariq examined me within 10 minutes using the video otoscope and prescribed what was needed under Pharmacy First. No 8am GP telephone panic.',
  },
  {
    name: 'Elena Rostova',
    location: 'Whalley Range',
    date: 'July 2026',
    rating: 5,
    comment: 'Queensway have looked after my mother’s blister packs and daily medication for three years. Liam delivers faithfully every Tuesday afternoon. Could not ask for kinder care.',
  },
  {
    name: 'Marcus & Chloe Bell',
    location: 'Beech Road, Chorlton',
    date: 'September 2026',
    rating: 5,
    comment: 'Got our Yellow Fever and Hep A jabs done before our trip to Costa Rica. Meera gave such thoughtful travel advice and the certificate was prepared in minutes.',
  },
  {
    name: 'Dr. Robert Hargreaves (Ret. GP)',
    location: 'Didsbury',
    date: 'August 2026',
    rating: 5,
    comment: 'Outstanding community pharmacy governed with the highest clinical rigor. Their hypertension case-finding program is doing genuinely life-saving work in South Manchester.',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'What is NHS Pharmacy First and do I need to see a GP first?',
    a: 'NHS Pharmacy First allows community pharmacists to clinically assess and prescribe prescription-only treatments for 7 common ailments (UTIs, sore throat, earache, sinusitis, impetigo, shingles, infected bites) on the NHS without needing a doctor’s appointment or prescription.',
  },
  {
    q: 'How do I nominate Queensway Chemist for free prescription delivery?',
    a: 'You can nominate us instantly in the NHS App by searching "Queensway Chemist" or our postcode M21 9PN. Alternatively, ask your GP surgery or call our dispensary on 0161 946 0834. Once nominated, your doctor sends prescriptions electronically to us, and we prepare and deliver them to your door for free.',
  },
  {
    q: 'Does your website store my medical notes or take online payments?',
    a: 'No. To ensure total patient privacy and GDPR compliance, this website collects zero medical records, holds no patient health histories, and processes zero online payments. All consultations are scheduled via Cal.com or telephone, and any private fees (e.g. travel vaccines or microsuction) are settled in person at the clinic.',
  },
  {
    q: 'What happens if the pharmacist decides my condition requires GP or hospital care?',
    a: 'Patient safety is paramount. If your condition shows clinical red flags or falls outside NHS protocol guidelines, our pharmacists will issue an urgent same-day referral to your GP surgery or direct you safely to NHS 111 / A&E.',
  },
  {
    q: 'Do you charge for prescription delivery across South Manchester?',
    a: 'Our prescription delivery service is completely free for patients registered within our local delivery zones covering Chorlton, Didsbury, Whalley Range, and Stretford (M21, M20, M16, M32).',
  },
  {
    q: 'Are your consultation rooms private and chaperone-supported?',
    a: 'Yes. We have a dedicated, soundproofed private consultation suite that complies with NHS specifications. You are entitled to have a chaperone present for any examination; please simply ask our team upon arrival.',
  },
];

export const LEGAL_DOCUMENTS = [
  { title: 'Privacy Policy', path: '/legal/privacy-policy', desc: 'UK GDPR, Data Protection Act 2018, and our strict zero-health-data web policy.' },
  { title: 'Terms of Service', path: '/legal/terms-of-service', desc: 'Website usage conditions, health educational content disclaimers, and governing law.' },
  { title: 'Clinical Disclaimer', path: '/legal/disclaimer', desc: 'Emergency routing (999/111), POM guidance, GPhC premises registration (9014227).' },
  { title: 'Accessibility Statement', path: '/legal/accessibility', desc: 'Commitment to WCAG 2.2 AA accessibility standards, contrast, and keyboard navigation.' },
  { title: 'Complaints & Chaperone Policy', path: '/legal/complaints', desc: 'NHS complaints escalation, Greater Manchester ICB, and consultation chaperone protocol.' },
  { title: 'Prescription Delivery Area Policy', path: '/legal/shipping-policy', desc: 'Delivery timetable, postcodes served, cold-chain handling, and doorstep ID verification.' },
  { title: 'Cancellation & Rescheduling Policy', path: '/legal/cancellation-policy', desc: '24-hour courtesy guidance for appointments with zero cancellation fees.' },
  { title: 'Cookie Policy', path: '/legal/cookie-policy', desc: 'PECR-compliant cookie schedule and purpose definitions.' },
  { title: 'Cookie Preferences', path: '/legal/cookie-preferences', desc: 'Interactive granular consent controls for functional and analytics cookies.' },
  { title: 'Security Policy', path: '/legal/security-policy', desc: 'TLS 1.3 standards, zero-data-at-rest posture, and incident notification plans.' },
  { title: 'Responsible Disclosure', path: '/legal/responsible-disclosure', desc: 'Security researcher guidelines and safe harbor commitments.' },
  { title: 'Data Processing Agreement', path: '/legal/data-processing-agreement', desc: 'Governance regarding third-party scheduling tools and data minimization.' },
  { title: 'Acceptable Use Policy', path: '/legal/acceptable-use-policy', desc: 'Prohibiting automated scraping, abusive submissions, and misuse of clinic forms.' },
  { title: 'Community Guidelines', path: '/legal/community-guidelines', desc: 'Rules for health community interaction and medical misinformation prevention.' },
];
