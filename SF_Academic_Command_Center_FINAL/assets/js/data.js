/* Strategy First Academic OS · illustrative local data */
const SF_SEED = (() => {
    const programmes = [
        {
            id: 'P01',
            code: 'L4-DC',
            name: 'Level 4 Diploma in Computing',
            category: 'Computing',
            level: 'Level 4',
            tutor: 'Dr. Aye Chan',
            capacity: 60,
            color: '#ff516b',
            icon: 'code',
            duration: '12 months',
            desc: 'Build a solid foundation in programming, software engineering, systems and computing principles.'
        },
        {
            id: 'P02',
            code: 'L4-DCBM',
            name: 'Level 4 Diploma in Computing with Business',
            category: 'Computing',
            level: 'Level 4',
            tutor: 'Daw Thiri Win',
            capacity: 50,
            color: '#a996ff',
            icon: 'briefcase',
            duration: '12 months',
            desc: 'Explore the intersection of software, business processes and management fundamentals.'
        },
        {
            id: 'P03',
            code: 'L5-DC',
            name: 'Level 5 Diploma in Computing',
            category: 'Computing',
            level: 'Level 5',
            tutor: 'U Min Htet',
            capacity: 45,
            color: '#36c9a6',
            icon: 'terminal',
            duration: '12 months',
            desc: 'Progress to advanced computing, databases, systems analysis and development practice.'
        },
        {
            id: 'P04',
            code: 'WEB',
            name: 'Modern Web Development',
            category: 'Short Course',
            level: 'Foundation',
            tutor: 'Ko Kyi Phyu Aung',
            capacity: 35,
            color: '#59b5ff',
            icon: 'globe',
            duration: '10 weeks',
            desc: 'Plan, design and launch responsive user-first websites and web applications.'
        },
        {
            id: 'P05',
            code: 'PY',
            name: 'Python & AI Foundations',
            category: 'Short Course',
            level: 'Foundation',
            tutor: 'Daw Nandar',
            capacity: 35,
            color: '#f4be68',
            icon: 'cpu',
            duration: '8 weeks',
            desc: 'Discover Python programming, data workflows and applied artificial intelligence.'
        },
        {
            id: 'P06',
            code: 'UIX',
            name: 'UI/UX Design Studio',
            category: 'Short Course',
            level: 'Foundation',
            tutor: 'Ko Myo Lin',
            capacity: 35,
            color: '#fb8cbe',
            icon: 'palette',
            duration: '8 weeks',
            desc: 'Design intuitive user journeys, wireframes, visual systems and prototypes.'
        },
        {
            id: 'P07',
            code: 'FLU',
            name: 'Flutter Mobile Development',
            category: 'Short Course',
            level: 'Intermediate',
            tutor: 'U Ye Myint',
            capacity: 30,
            color: '#56d3de',
            icon: 'smartphone',
            duration: '10 weeks',
            desc: 'Build cross-platform mobile interfaces using Dart and Flutter.'
        },
        {
            id: 'P08',
            code: 'CYB',
            name: 'Cybersecurity Essentials',
            category: 'Short Course',
            level: 'Intermediate',
            tutor: 'Daw Su Su',
            capacity: 30,
            color: '#c0a5ff',
            icon: 'shield',
            duration: '8 weeks',
            desc: 'Understand security principles, safe systems and defensive practices.'
        }
    ];
    const first = [
        'Thiri',
        'Aung',
        'Su',
        'Min',
        'Htet',
        'Khin',
        'Nandar',
        'Pyae',
        'May',
        'Ye',
        'Ei',
        'Myat',
        'Nyein',
        'Wai',
        'Zin',
        'Moe',
        'Kyaw',
        'Phyu',
        'Thiha',
        'Hnin'
    ];
    const last = [
        'Win',
        'Htet',
        'Aung',
        'Oo',
        'Naing',
        'Tun',
        'Lwin',
        'Soe',
        'Myint',
        'Hlaing',
        'Ko',
        'Zaw',
        'Htun',
        'Thet',
        'Mon'
    ];
    const students = Array.from({ length: 48 }, (_, i) => {
        const a = first[i % first.length], b = last[(i * 7 + 3) % last.length];
        return {
            id: `SF${String(26001 + i)}`,
            name: `${a} ${b}`,
            email: `${a.toLowerCase()}.${b.toLowerCase()}${i + 1}@student.example`,
            programme: programmes[i % programmes.length].id,
            year: i % 3 === 0 ? '2025' : '2026',
            status: i % 13 === 0 ? 'On leave' : i % 9 === 0 ? 'Pending' : 'Active',
            progress: Math.min(97, 29 + (i * 13) % 68),
            attendance: Math.min(100, 64 + (i * 9) % 36),
            join: `2026-${String(1 + i % 9).padStart(2, '0')}-${String(1 + i % 25).padStart(2, '0')}`,
            phone: '—'
        };
    });
    const assignments = [
        {
            id: 'A100',
            title: 'Responsive Web Interface',
            course: 'P04',
            due: '2026-11-18',
            status: 'Open',
            submissions: 4,
            total: 6,
            points: 100,
            desc: 'Create a responsive multi-page website with accessible navigation and a consistent design system.'
        },
        {
            id: 'A101',
            title: 'Software Engineering Mini Project',
            course: 'P01',
            due: '2026-11-23',
            status: 'Open',
            submissions: 5,
            total: 6,
            points: 100,
            desc: 'Define requirements, design use case and class diagrams, and submit a working prototype.'
        },
        {
            id: 'A102',
            title: 'User Journey & Wireframes',
            course: 'P06',
            due: '2026-11-16',
            status: 'Open',
            submissions: 3,
            total: 6,
            points: 50,
            desc: 'Map user journeys and create high-fidelity wireframes for a digital product.'
        },
        {
            id: 'A103',
            title: 'Python Data Challenge',
            course: 'P05',
            due: '2026-11-27',
            status: 'Open',
            submissions: 2,
            total: 6,
            points: 80,
            desc: 'Process a dataset and present clear findings with charts.'
        },
        {
            id: 'A104',
            title: 'Database ERD & SQL',
            course: 'P03',
            due: '2026-10-31',
            status: 'Closed',
            submissions: 5,
            total: 6,
            points: 100,
            desc: 'Model data entities and write structured SQL queries.'
        },
        {
            id: 'A105',
            title: 'Mobile UI Prototype',
            course: 'P07',
            due: '2026-11-30',
            status: 'Open',
            submissions: 2,
            total: 6,
            points: 70,
            desc: 'Design screen flows and a working mobile interface prototype.'
        }
    ];
    const timetable = [
        {
            id: 'T01',
            day: 1,
            start: '09:00',
            end: '10:30',
            course: 'P01',
            room: 'Lab 3',
            teacher: 'Dr. Aye Chan',
            type: 'Lecture'
        },
        {
            id: 'T02',
            day: 1,
            start: '13:00',
            end: '14:30',
            course: 'P04',
            room: 'Lab 1',
            teacher: 'Ko Kyi Phyu Aung',
            type: 'Workshop'
        },
        {
            id: 'T03',
            day: 2,
            start: '10:00',
            end: '11:30',
            course: 'P06',
            room: 'Studio 2',
            teacher: 'Ko Myo Lin',
            type: 'Workshop'
        },
        {
            id: 'T04',
            day: 2,
            start: '14:00',
            end: '15:30',
            course: 'P03',
            room: 'Room 204',
            teacher: 'U Min Htet',
            type: 'Lecture'
        },
        {
            id: 'T05',
            day: 3,
            start: '09:00',
            end: '10:30',
            course: 'P05',
            room: 'Lab 2',
            teacher: 'Daw Nandar',
            type: 'Lab'
        },
        {
            id: 'T06',
            day: 3,
            start: '13:00',
            end: '14:30',
            course: 'P02',
            room: 'Room 301',
            teacher: 'Daw Thiri Win',
            type: 'Lecture'
        },
        {
            id: 'T07',
            day: 4,
            start: '10:00',
            end: '11:30',
            course: 'P07',
            room: 'Lab 1',
            teacher: 'U Ye Myint',
            type: 'Workshop'
        },
        {
            id: 'T08',
            day: 4,
            start: '13:00',
            end: '14:30',
            course: 'P08',
            room: 'Lab 3',
            teacher: 'Daw Su Su',
            type: 'Lab'
        },
        {
            id: 'T09',
            day: 5,
            start: '09:00',
            end: '10:30',
            course: 'P04',
            room: 'Lab 1',
            teacher: 'Ko Kyi Phyu Aung',
            type: 'Workshop'
        },
        {
            id: 'T10',
            day: 5,
            start: '14:00',
            end: '15:30',
            course: 'P01',
            room: 'Room 204',
            teacher: 'Dr. Aye Chan',
            type: 'Seminar'
        },
    ];
    const attendance = {};
    students.forEach((s, i) => { attendance[s.id] = [0, 1, 2, 3, 4].map((_, d) => (i * 7 + d * 11) % 15 === 0 ? 'Absent' : (i + d) % 19 === 0 ? 'Late' : 'Present'); });
    return {
        programmes,
        students,
        assignments,
        timetable,
        attendance,
        notes: [
            {
                id: 'N1',
                title: 'Midterm progress review',
                text: 'Review attendance and course performance before faculty check-in.',
                date: '2026-11-14',
                type: 'Academic'
            },
            {
                id: 'N2',
                title: 'New UI/UX showcase',
                text: 'Students will present prototype concepts during the upcoming studio session.',
                date: '2026-11-18',
                type: 'Event'
            }
        ],
        activity: []
    };
})();
