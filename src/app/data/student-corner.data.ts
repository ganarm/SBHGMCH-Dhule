import { StudentCornerTopic } from './data.models';

export const STUDENT_CORNER_TOPICS: StudentCornerTopic[] = [
  {
    slug: 'extra-curricular',
    title: 'Extra-Curricular Activities',
    intro: 'Co-curricular programmes that complement clinical training and professional development.',
    items: [
      {
        heading: 'Cultural Activities',
        detail: 'Annual cultural programme and talent show.',
        bullets: [
          'Singing, dancing, drama and skits',
          'Rangoli, poster-making and painting competitions',
          "Freshers' welcome and farewell programmes",
          'Celebration of national and cultural festivals'
        ]
      },
      {
        heading: 'Sports & Physical Activities',
        detail: 'Promoting fitness, teamwork, and sportsmanship.',
        bullets: [
          'Cricket, volleyball, badminton and football',
          'Athletics and annual sports day',
          'Yoga and meditation sessions',
          'Indoor games: chess, carrom and table tennis',
          'Inter-college sports competitions'
        ]
      },
      {
        heading: 'Community Health & Social Service',
        detail: 'Active participation in community welfare.',
        bullets: [
          'Health awareness rallies and campaigns',
          'Blood donation camps',
          'Health education in villages and schools',
          'Nutrition awareness and hygiene programmes',
          'World Health Day and World AIDS Day activities',
          'Environmental cleanliness and plantation drives'
        ]
      },
      {
        heading: 'Academic & Professional Activities',
        detail: 'Enhancing clinical knowledge and academic excellence.',
        bullets: [
          'Quiz competitions and debates',
          'Essay writing and scientific poster presentations',
          'Seminar presentations and journal clubs',
          'First aid and CPR demonstrations',
          'Nursing exhibition and health education models',
          'Inter-college academic competitions'
        ]
      },
      {
        heading: 'Leadership & Social Responsibility',
        detail: 'Developing future healthcare leaders and responsible citizens.',
        bullets: [
          'National Service Scheme (NSS)',
          'Red Ribbon Club activities',
          'Student council activities',
          'Anti-ragging and anti-tobacco awareness',
          'Road safety campaigns',
          'Disaster preparedness and mock drills'
        ]
      }
    ]
  },
  {
    slug: 'important-days',
    title: 'Important Days',
    intro: 'Key observances and awareness days marked by the college each academic year.',
    items: [
      { heading: '12 January', detail: 'National Youth Day' },
      { heading: '26 January', detail: 'Republic Day' },
      { heading: '28 February', detail: 'National Science Day' },
      { heading: '8 March', detail: "International Women's Day" },
      { heading: '7 April', detail: 'World Health Day' },
      { heading: '24 April', detail: 'National Panchayati Raj Day' },
      { heading: '12 May', detail: 'International Nurses Day' },
      { heading: '5 June', detail: 'World Environment Day' },
      { heading: '21 June', detail: 'International Day of Yoga' },
      { heading: '1 July', detail: "National Doctors' Day" },
      { heading: '11 July', detail: 'World Population Day' },
      { heading: '15 August', detail: 'Independence Day' },
      { heading: '29 August', detail: 'National Sports Day' },
      { heading: '1 December', detail: 'World AIDS Day' },
      { heading: '10 December', detail: 'Human Rights Day' }
    ]
  },
  {
    slug: 'hostels',
    title: 'Hostel Facilities',
    intro: 'Safe, secure, and well-equipped accommodation for students.',
    items: [
      {
        heading: 'Hostel Buildings (B-1 & B-2)',
        detail: 'R.C.C framed structures (Ground + 2 floors) with a combined capacity of 300 students (150 per building).',
        bullets: [
          'Separate blocks for Boys and Girls',
          'Veg and Non-Veg Kitchens',
          'Spacious Dining Hall',
          'Demonstration Hall & General Hall',
          'Study rooms and secure entry'
        ]
      }
    ]
  },
  {
    slug: 'clinical-postings',
    title: 'Clinical & Rural Postings',
    intro: 'Extensive practical training in hospitals and community health centers.',
    items: [
      {
        heading: 'Hospital Clinical Training',
        detail: 'Hands-on training at the affiliated 250-bedded Shri. Bhausaheb Hire Government Medical College & Hospital.',
        bullets: [
          'Operation Theatres and ICUs',
          'Casualty and Emergency wards',
          'General Wards and OPDs'
        ]
      },
      {
        heading: 'Rural Public Health (RPH) Postings',
        detail: 'GNM 1st and 3rd-year students are assigned to Primary Health Centers (PHCs) in Dhule district.',
        bullets: [
          'Official permission granted by the District Health Officer (Zilla Parishad Dhule)',
          'Focus on community health, disease prevention, and rural healthcare delivery'
        ]
      }
    ]
  },
  {
    slug: 'grievance',
    title: 'Grievance & Support',
    intro: 'Students may raise academic, clinical, or welfare concerns through formal committees.',
    items: [
      {
        heading: 'Student Grievance Redressal Committee',
        detail: 'Resolution of student complaints and academic/clinical grievances.',
      },
      {
        heading: 'Internal Complaints Committee (ICC)',
        detail: 'Prevention and redressal of sexual harassment at the workplace.',
      },
      {
        heading: 'Anti-Ragging Committee & Squad',
        detail: 'Zero tolerance policy. Surprise inspections and immediate response to ragging incidents.',
      },
      {
        heading: 'SC/ST/OBC/Minority Welfare Committee',
        detail: 'Assistance with applicable welfare schemes, scholarships and grievances.',
      },
      {
        heading: 'Counselling and Mentorship Committee',
        detail: 'Academic counselling, mentoring, and student support.',
      }
    ]
  }
];