export interface ActivityClaim {
  id: string;
  activityCode: string;
  level?: string;
  quantity?: number;
  points: number;
  detail?: string;
}

export interface ActivityItem {
  code: string;
  name: string;
  maxPoints: number;
  type: "level" | "count" | "fixed" | "input";
  levels?: Record<string, number>;
  pointsPerUnit?: number;
  unitName?: string;
  proof: string;
  desc?: string;
}

export const KTU_ACTIVITIES: Record<string, ActivityItem> = {
  "1.1": {
    code: "1.1",
    name: "Participation in Sports, Arts & Cultural Activities",
    maxPoints: 40,
    type: "level",
    levels: { "College": 1, "Zonal": 5, "State": 10, "National": 20, "International": 40 },
    proof: "Participation Certificate",
    desc: "Only highest level counts. College (1), Zonal (5), State (10), National (20), International (40)"
  },
  "1.2": {
    code: "1.2",
    name: "Winners - Single Events (Sports, Arts & Cultural)",
    maxPoints: 40,
    type: "level",
    levels: { "College": 5, "Zonal": 10, "State": 20, "National": 40, "International": 40 },
    proof: "Winner Certificate",
    desc: "Only highest level counts. Winner overrides participation. College (5), Zonal (10), State (20), National (40), International (40)"
  },
  "1.3": {
    code: "1.3",
    name: "Winners - Group Events (Sports, Arts & Cultural)",
    maxPoints: 40,
    type: "level",
    levels: { "College": 3, "Zonal": 5, "State": 15, "National": 30, "International": 40 },
    proof: "Winner Certificate",
    desc: "Only highest level counts. Winner overrides participation. College (3), Zonal (5), State (15), National (30), International (40)"
  },
  "1.4": {
    code: "1.4",
    name: "College Magazine Publication",
    maxPoints: 20,
    type: "count",
    pointsPerUnit: 5,
    unitName: "article(s)",
    proof: "Published copy of magazine",
    desc: "5 points per activity. Max 20 points per year."
  },
  "1.5": {
    code: "1.5",
    name: "Four-Wheeler Driving License (obtained during course)",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Driving License copy",
    desc: "One-time claim only (5 points)"
  },
  "1.6": {
    code: "1.6",
    name: "Community Service (2 days)",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "certificate(s)",
    proof: "Certificate from organizing body",
    desc: "5 points per program. Max 10 points."
  },
  "1.7": {
    code: "1.7",
    name: "Community Service (up to 1 week)",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 10,
    unitName: "certificate(s)",
    proof: "Certificate from organizing body",
    desc: "10 points per program. Max 10 points."
  },
  "1.8": {
    code: "1.8",
    name: "Blood Donation",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "donation(s)",
    proof: "Blood donation certificate",
    desc: "5 points per donation. Max 10 points."
  },
  "1.9": {
    code: "1.9",
    name: "THRIVE Project (Govt. of Kerala)",
    maxPoints: 20,
    type: "count",
    pointsPerUnit: 10,
    unitName: "semester(s)",
    proof: "THRIVE participation certificate",
    desc: "10 points per semester. Max 20 points."
  },
  "1.10": {
    code: "1.10",
    name: "Tree Planting (Geo-tagged)",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Geo-tagged photo with certificate",
    desc: "One-time claim only (5 points)"
  },
  "1.11": {
    code: "1.11",
    name: "NSS Volunteer (2 years)",
    maxPoints: 30,
    type: "fixed",
    pointsPerUnit: 30,
    proof: "NSS Volunteer Certificate",
    desc: "One-time claim only (30 points)"
  },
  "1.12": {
    code: "1.12",
    name: "University Leadership Camp (100 hours)",
    maxPoints: 20,
    type: "fixed",
    pointsPerUnit: 20,
    proof: "Leadership Camp Certificate",
    desc: "One-time claim only (20 points)"
  },
  "1.13": {
    code: "1.13",
    name: "Winners - State NSS Events",
    maxPoints: 15,
    type: "count",
    pointsPerUnit: 15,
    unitName: "event(s)",
    proof: "Winner Certificate",
    desc: "15 points per event. Max 15 points."
  },
  "1.14": {
    code: "1.14",
    name: "Special Service / Appreciation Certificate",
    maxPoints: 40,
    type: "count",
    pointsPerUnit: 15,
    unitName: "certificate(s)",
    proof: "Appreciation Certificate",
    desc: "15 points per certificate. Max 40 points."
  },
  "1.15": {
    code: "1.15",
    name: "State / National Awards (NSS/NCC)",
    maxPoints: 40,
    type: "level",
    levels: { "State": 15, "National": 25 },
    proof: "Award Certificate",
    desc: "Only highest level counts. State (15), National (25)"
  },
  "1.16": {
    code: "1.16",
    name: "Approved National Camps / NIC / NYF",
    maxPoints: 15,
    type: "fixed",
    pointsPerUnit: 15,
    proof: "Camp participation certificate",
    desc: "One-time claim only (15 points)"
  },
  "1.17": {
    code: "1.17",
    name: "10-Day Volunteer Service (50 hours)",
    maxPoints: 15,
    type: "fixed",
    pointsPerUnit: 15,
    proof: "Volunteer service certificate",
    desc: "One-time claim only (15 points)"
  },
  "1.18": {
    code: "1.18",
    name: "RDC / IDC / International Events (NCC)",
    maxPoints: 25,
    type: "fixed",
    pointsPerUnit: 25,
    proof: "Event participation certificate",
    desc: "One-time claim only (25 points)"
  },
  "1.19": {
    code: "1.19",
    name: "NCC Certificates",
    maxPoints: 30,
    type: "level",
    levels: { "One Year NCC + Parade": 10, "NCC 'B' Certificate": 20, "NCC 'C' Certificate": 30 },
    proof: "NCC Certificate",
    desc: "Only highest level counts. One Year NCC (10), NCC 'B' (20), NCC 'C' (30)"
  },
  "1.20": {
    code: "1.20",
    name: "First Aid / CPR / Fire Safety Training",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "training(s)",
    proof: "Training completion certificate",
    desc: "5 points per training. Max 10 points."
  },
  "1.21": {
    code: "1.21",
    name: "Swimming Proficiency",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Swimming proficiency certificate",
    desc: "One-time claim only (5 points)"
  },
  "2.1": {
    code: "2.1",
    name: "Tech-Fest Participation",
    maxPoints: 30,
    type: "level",
    levels: { "College": 2, "Zonal": 5, "State": 10, "National": 20, "International": 30 },
    proof: "Participation Certificate",
    desc: "Only highest level counts. College (2), Zonal (5), State (10), National (20), International (30)"
  },
  "2.2": {
    code: "2.2",
    name: "Tech-Fest Winners",
    maxPoints: 40,
    type: "level",
    levels: { "College": 5, "Zonal": 10, "State": 20, "National": 40, "International": 40 },
    proof: "Winner Certificate",
    desc: "Only highest level counts. Winner overrides participation. College (5), Zonal (10), State (20), National (40), International (40)"
  },
  "2.3": {
    code: "2.3",
    name: "Professional Society Events - Participation",
    maxPoints: 20,
    type: "level",
    levels: { "College": 2, "Zonal": 5, "State": 10, "National": 15, "International": 20 },
    proof: "Participation Certificate",
    desc: "Only highest level counts. College (2), Zonal (5), State (10), National (15), International (20)"
  },
  "2.4": {
    code: "2.4",
    name: "Professional Society Events - Winners",
    maxPoints: 35,
    type: "level",
    levels: { "College": 3, "Zonal": 7, "State": 15, "National": 25, "International": 35 },
    proof: "Winner Certificate",
    desc: "Only highest level counts. Winner overrides participation. College (3), Zonal (7), State (15), National (25), International (35)"
  },
  "2.5": {
    code: "2.5",
    name: "Conferences / Workshops (Top Institutes)",
    maxPoints: 15,
    type: "count",
    pointsPerUnit: 5,
    unitName: "event(s)",
    proof: "Certificate from organizing institute",
    desc: "5 points per event. Max 15 points."
  },
  "2.6": {
    code: "2.6",
    name: "Poster Presentation",
    maxPoints: 40,
    type: "count",
    pointsPerUnit: 5,
    unitName: "presentation(s)",
    proof: "Poster presentation certificate",
    desc: "5 points per presentation. Max 40 points."
  },
  "2.7": {
    code: "2.7",
    name: "Paper Presentation (Top Institutes)",
    maxPoints: 40,
    type: "count",
    pointsPerUnit: 10,
    unitName: "presentation(s)",
    proof: "Paper presentation certificate",
    desc: "10 points per presentation. Max 40 points."
  },
  "2.8": {
    code: "2.8",
    name: "Paper Presentation - Winners (Top Institutes)",
    maxPoints: 40,
    type: "level",
    levels: { "2nd/3rd Place": 15, "1st Place": 20 },
    proof: "Winner certificate",
    desc: "Only highest level counts. 1st Place (20), 2nd/3rd Place (15)"
  },
  "2.9": {
    code: "2.9",
    name: "Paper Presentation (KTU Colleges)",
    maxPoints: 40,
    type: "level",
    levels: { "Participation": 5, "Winner (2nd/3rd)": 7, "Winner (1st)": 10 },
    proof: "Certificate from KTU college",
    desc: "Only highest level counts. Participation (5), Winner 2nd/3rd (7), Winner 1st (10)"
  },
  "2.11": {
    code: "2.11",
    name: "Professional Society Membership",
    maxPoints: 15,
    type: "level",
    levels: { "Member": 5, "Executive": 10, "Chair/Lead": 15 },
    proof: "Membership/position certificate",
    desc: "Only highest level counts. Member (5), Executive (10), Chair/Lead (15)"
  },
  "2.12": {
    code: "2.12",
    name: "College / University Union Office Bearer",
    maxPoints: 30,
    type: "level",
    levels: { "College Office Bearer": 20, "University Office Bearer": 30 },
    proof: "Office bearer certificate",
    desc: "Only highest level counts. College Office Bearer (20), University Office Bearer (30)"
  },
  "2.13": {
    code: "2.13",
    name: "Department Association Role",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "year(s)",
    proof: "Association certificate",
    desc: "5 points per year. Max 10 points."
  },
  "2.14": {
    code: "2.14",
    name: "Class Representative",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "year(s)",
    proof: "Class representative certificate",
    desc: "5 points per year. Max 10 points."
  },
  "2.15": {
    code: "2.15",
    name: "Industrial Visit Coordinator",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Coordinator certificate",
    desc: "One-time claim only (5 points)"
  },
  "2.16": {
    code: "2.16",
    name: "Placement Cell Role",
    maxPoints: 10,
    type: "level",
    levels: { "Executive": 5, "Coordinator": 10 },
    proof: "Placement cell certificate",
    desc: "Only highest level counts. Executive (5), Coordinator (10)"
  },
  "2.17": {
    code: "2.17",
    name: "IEDC Cell Role",
    maxPoints: 10,
    type: "level",
    levels: { "Exec/Office Bearer": 5, "Event Coordinator": 5 },
    proof: "IEDC certificate",
    desc: "Exec/Office Bearer (5), Event Coordinator (5)"
  },
  "2.18": {
    code: "2.18",
    name: "YIP (K-DISC) - Student Coordinator",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "YIP coordinator certificate",
    desc: "One-time claim only (5 points)"
  },
  "2.19": {
    code: "2.19",
    name: "STRIDE Student Activity",
    maxPoints: 20,
    type: "level",
    levels: { "Volunteer": 5, "Member": 5, "Leadership": 10, "High Impact Project": 20 },
    proof: "STRIDE certificate",
    desc: "Only highest level counts. Volunteer (5), Member (5), Leadership (10), High Impact Project (20)"
  },
  "2.20": {
    code: "2.20",
    name: "College Magazine Editorial Board",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "year(s)",
    proof: "Editorial board certificate",
    desc: "5 points per activity. Max 10 points."
  },
  "2.21": {
    code: "2.21",
    name: "Hobby Clubs (Exec/Convenor)",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "year(s)",
    proof: "Club certificate",
    desc: "5 points per year. Max 10 points."
  },
  "2.22": {
    code: "2.22",
    name: "FOSS / Open Source Member/Lead",
    maxPoints: 20,
    type: "level",
    levels: { "Club Member": 5, "Lead": 10, "Open Source Contribution": 10, "Internship": 10 },
    proof: "Certificate/proof of contribution",
    desc: "Club Member (5), Lead (10), Open Source Contribution (10), Internship (10)"
  },
  "2.23": {
    code: "2.23",
    name: "Short-Term Internship (>=2 weeks)",
    maxPoints: 10,
    type: "fixed",
    pointsPerUnit: 10,
    proof: "Internship completion certificate",
    desc: "One-time claim only (10 points)"
  },
  "2.24": {
    code: "2.24",
    name: "English Proficiency (TOEFL/IELTS/PTE/BEC)",
    maxPoints: 30,
    type: "input",
    proof: "Score card/certificate",
    desc: "Based on score. Max 30 points."
  },
  "2.25": {
    code: "2.25",
    name: "Aptitude Tests (GRE/GATE/CAT/GMAT)",
    maxPoints: 30,
    type: "input",
    proof: "Score card",
    desc: "Based on score. Max 30 points."
  },
  "3.1": {
    code: "3.1",
    name: "Industrial Visit Report",
    maxPoints: 20,
    type: "count",
    pointsPerUnit: 5,
    unitName: "report(s)",
    proof: "Approved IV report",
    desc: "5 points per report. Max 20 points."
  },
  "3.2": {
    code: "3.2",
    name: "Best Project / Seminar",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Best project/seminar certificate",
    desc: "One-time claim only (5 points)"
  },
  "3.3": {
    code: "3.3",
    name: "Long-Term Internship (>=3.5 months)",
    maxPoints: 15,
    type: "fixed",
    pointsPerUnit: 15,
    proof: "Internship completion certificate",
    desc: "One-time claim only (15 points)"
  },
  "3.4": {
    code: "3.4",
    name: "LEAP (IIT Madras)",
    maxPoints: 30,
    type: "input",
    proof: "LEAP certificate",
    desc: "Program specific points. Max 30 points."
  },
  "3.5": {
    code: "3.5",
    name: "YIP (K-DISC)",
    maxPoints: 35,
    type: "input",
    proof: "YIP certificate",
    desc: "Program specific points. Max 35 points."
  },
  "3.6": {
    code: "3.6",
    name: "STRIDE Innovation Scheme",
    maxPoints: 35,
    type: "input",
    proof: "STRIDE certificate",
    desc: "Program specific points. Max 35 points."
  },
  "3.7": {
    code: "3.7",
    name: "GDC AI Workforce Program",
    maxPoints: 35,
    type: "input",
    proof: "GDC certificate",
    desc: "Program specific points. Max 35 points."
  },
  "3.8": {
    code: "3.8",
    name: "ICFOSS Certified Solution",
    maxPoints: 25,
    type: "fixed",
    pointsPerUnit: 25,
    proof: "ICFOSS certificate",
    desc: "One-time claim only (25 points)"
  },
  "3.9": {
    code: "3.9",
    name: "Registered Startup",
    maxPoints: 30,
    type: "fixed",
    pointsPerUnit: 30,
    proof: "Startup registration certificate",
    desc: "One-time claim only (30 points)"
  },
  "3.10": {
    code: "3.10",
    name: "Patents",
    maxPoints: 40,
    type: "level",
    levels: { "Filed": 20, "Published": 30, "Granted/Licensed": 40 },
    proof: "Patent certificate/proof",
    desc: "Only highest level counts. Filed (20), Published (30), Granted/Licensed (40)"
  },
  "3.11": {
    code: "3.11",
    name: "Prototype / Industry Adoption",
    maxPoints: 40,
    type: "fixed",
    pointsPerUnit: 40,
    proof: "Industry adoption certificate",
    desc: "One-time claim only (40 points)"
  },
  "3.12": {
    code: "3.12",
    name: "Venture Capital / Angel Funding",
    maxPoints: 40,
    type: "fixed",
    pointsPerUnit: 40,
    proof: "Funding proof",
    desc: "One-time claim only (40 points)"
  },
  "3.13": {
    code: "3.13",
    name: "Societal Innovation Project",
    maxPoints: 40,
    type: "fixed",
    pointsPerUnit: 40,
    proof: "Innovation certificate",
    desc: "One-time claim only (40 points)"
  },
  "3.14": {
    code: "3.14",
    name: "Research Publications",
    maxPoints: 40,
    type: "level",
    levels: { "Q3/Q4 Journal": 25, "Q1/Q2 Journal": 40 },
    proof: "Published paper proof",
    desc: "Only highest level counts. Q3/Q4 Journal (25), Q1/Q2 Journal (40)"
  },
  "3.15": {
    code: "3.15",
    name: "National Hackathons",
    maxPoints: 40,
    type: "level",
    levels: { "3rd Place": 30, "2nd Place": 35, "1st Place": 40 },
    proof: "Hackathon winner certificate",
    desc: "Only highest level counts. 1st Place (40), 2nd Place (35), 3rd Place (30)"
  },
  "3.16": {
    code: "3.16",
    name: "International Hackathons",
    maxPoints: 40,
    type: "level",
    levels: { "Participation": 30, "Runner-up": 35, "Winner": 40 },
    proof: "Hackathon certificate",
    desc: "Only highest level counts. Participation (30), Runner-up (35), Winner (40)"
  },
  "3.17": {
    code: "3.17",
    name: "Skilling Courses (Approved)",
    maxPoints: 40,
    type: "count",
    pointsPerUnit: 1,
    unitName: "hour(s)",
    proof: "Course completion certificate",
    desc: "1 point per hour. Max 40 points."
  }
};

export const KTU_ACTIVITY_GROUPS = [
  {
    id: "I",
    name: "Group I: Co-curricular Activities",
    categories: [
      {
        name: "Sports, Arts & Cultural Activities",
        activities: ["1.1", "1.2", "1.3"]
      },
      {
        name: "College Magazine Publication",
        activities: ["1.4"]
      },
      {
        name: "Driving License",
        activities: ["1.5"]
      },
      {
        name: "Community Service & Outreach",
        activities: ["1.6", "1.7", "1.8", "1.9", "1.10"]
      },
      {
        name: "NSS / NCC / NSO",
        activities: ["1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19"]
      },
      {
        name: "Health & Life Skills",
        activities: ["1.20", "1.21"]
      }
    ]
  },
  {
    id: "II",
    name: "Group II: Professional Development",
    categories: [
      {
        name: "Technical Events",
        activities: ["2.1", "2.2", "2.3", "2.4"]
      },
      {
        name: "Academic Presentations",
        activities: ["2.5", "2.6", "2.7", "2.8", "2.9"]
      },
      {
        name: "Leadership & Roles",
        activities: ["2.11", "2.12", "2.13", "2.14", "2.15", "2.16", "2.17", "2.18", "2.19", "2.20", "2.21"]
      },
      {
        name: "FOSS & Internships",
        activities: ["2.22", "2.23"]
      },
      {
        name: "Certifications",
        activities: ["2.24", "2.25"]
      }
    ]
  },
  {
    id: "III",
    name: "Group III: Advanced Achievements",
    categories: [
      {
        name: "Reports & Projects",
        activities: ["3.1", "3.2", "3.3"]
      },
      {
        name: "Programs",
        activities: ["3.4", "3.5", "3.6", "3.7", "3.8"]
      },
      {
        name: "Innovation, Patents & Research",
        activities: ["3.9", "3.10", "3.11", "3.12", "3.13", "3.14"]
      },
      {
        name: "Hackathons & Skilling",
        activities: ["3.15", "3.16", "3.17"]
      }
    ]
  }
];

export const calculateActivityPoints = (activities: ActivityClaim[], studentType: "regular" | "lateral" | "pwd") => {
  let groupCaps = 40;
  let groupMins = 40;
  let totalRequired = 120;
  let ratio = 1.0;
  
  if (studentType === "lateral") {
    groupCaps = 30;
    groupMins = 30;
    totalRequired = 90;
    ratio = 0.75;
  } else if (studentType === "pwd") {
    groupCaps = 20;
    groupMins = 20;
    totalRequired = 60;
    ratio = 0.5;
  }

  const codePoints: Record<string, number> = {};
  const claimsByCode: Record<string, ActivityClaim[]> = {};
  
  activities.forEach(act => {
    if (!claimsByCode[act.activityCode]) {
      claimsByCode[act.activityCode] = [];
    }
    claimsByCode[act.activityCode].push(act);
  });

  Object.entries(claimsByCode).forEach(([code, claims]) => {
    const details = KTU_ACTIVITIES[code];
    if (!details) return;

    const scaledMaxPoints = Math.round(details.maxPoints * ratio);

    if (details.type === "level" || details.type === "fixed") {
      const maxPts = Math.max(...claims.map(c => c.points));
      codePoints[code] = Math.min(scaledMaxPoints, maxPts);
    } else {
      const sumPts = claims.reduce((acc, c) => acc + c.points, 0);
      codePoints[code] = Math.min(scaledMaxPoints, sumPts);
    }
  });
  
  const sportsArtsMax = Math.max(
    codePoints["1.1"] || 0,
    codePoints["1.2"] || 0,
    codePoints["1.3"] || 0
  );
  if (sportsArtsMax > 0) {
    codePoints["sports_arts"] = Math.min(Math.round(40 * ratio), sportsArtsMax);
    delete codePoints["1.1"];
    delete codePoints["1.2"];
    delete codePoints["1.3"];
  }

  const techFestMax = Math.max(
    codePoints["2.1"] || 0,
    codePoints["2.2"] || 0
  );
  if (techFestMax > 0) {
    codePoints["tech_fest"] = Math.min(Math.round(40 * ratio), techFestMax);
    delete codePoints["2.1"];
    delete codePoints["2.2"];
  }

  const profSocietyMax = Math.max(
    codePoints["2.3"] || 0,
    codePoints["2.4"] || 0
  );
  if (profSocietyMax > 0) {
    codePoints["prof_society"] = Math.min(Math.round(35 * ratio), profSocietyMax);
    delete codePoints["2.3"];
    delete codePoints["2.4"];
  }

  const paperPresentationMax = Math.max(
    codePoints["2.7"] || 0,
    codePoints["2.8"] || 0,
    codePoints["2.9"] || 0
  );
  if (paperPresentationMax > 0) {
    codePoints["paper_presentation"] = Math.min(Math.round(40 * ratio), paperPresentationMax);
    delete codePoints["2.7"];
    delete codePoints["2.8"];
    delete codePoints["2.9"];
  }

  let group1Raw = 0;
  let group2Raw = 0;
  let group3Raw = 0;

  Object.entries(codePoints).forEach(([code, pts]) => {
    if (code.startsWith("1") || code === "sports_arts") {
      group1Raw += pts;
    } else if (code.startsWith("2") || code === "tech_fest" || code === "prof_society" || code === "paper_presentation") {
      group2Raw += pts;
    } else if (code.startsWith("3")) {
      group3Raw += pts;
    }
  });

  const group1Capped = Math.min(groupCaps, group1Raw);
  const group2Capped = Math.min(groupCaps, group2Raw);
  const group3Capped = Math.min(groupCaps, group3Raw);
  const totalCapped = Math.min(totalRequired, group1Capped + group2Capped + group3Capped);

  const issues: string[] = [];
  if (group1Capped < groupMins) issues.push(`Group I: ${group1Capped}/${groupMins} pts`);
  if (group2Capped < groupMins) issues.push(`Group II: ${group2Capped}/${groupMins} pts`);
  if (group3Capped < groupMins) issues.push(`Group III: ${group3Capped}/${groupMins} pts`);
  if (totalCapped < totalRequired) issues.push(`Total: ${totalCapped}/${totalRequired} pts`);

  const isQualified = issues.length === 0;

  return {
    group1Raw,
    group2Raw,
    group3Raw,
    group1Capped,
    group2Capped,
    group3Capped,
    totalCapped,
    totalRequired,
    groupMins,
    groupCaps,
    isQualified,
    issues
  };
};
