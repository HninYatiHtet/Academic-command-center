/* Strategy First · Academic Command Center | Ko Kyi Phyu Aung */
(() => {
    'use strict';
    const KEY = 'sf_academic_os_v1', THEME = 'sf_academic_theme', MOTION = 'sf_academic_motion';
    const ICONS = {
        'layout': '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
        'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
        'book': '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
        'calendar-check': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18m-12 5 2 2 4-4"/>',
        'clipboard': '<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h5"/>',
        'calendar': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
        'chart': '<path d="M3 3v18h18M7 16l4-5 3 2 5-7"/>',
        'settings': '<path d="M12 3v2m0 14v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M3 12h2m14 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/><circle cx="12" cy="12" r="4"/>',
        'graduation': '<path d="m2 10 10-5 10 5-10 5-10-5ZM6 12v5c4 3 8 3 12 0v-5M22 10v7"/>',
        'sparkles': '<path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3ZM19 18l.7 2.3L22 21l-2.3.7L19 24l-.7-2.3L16 21l2.3-.7L19 18ZM4 17l.6 1.4L6 19l-1.4.6L4 21l-.6-1.4L2 19l1.4-.6L4 17Z"/>',
        'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
        'more': '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
        'menu': '<path d="M4 6h16M4 12h16M4 18h16"/>',
        'x': '<path d="M18 6 6 18M6 6l12 12"/>',
        'chevron-right': '<path d="m9 18 6-6-6-6"/>',
        'arrow-right': '<path d="M4 12h16m-6-6 6 6-6 6"/>',
        'search': '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
        'moon': '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4a8.5 8.5 0 1 0 11.5 11.5Z"/>',
        'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
        'bell': '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
        'plus': '<path d="M12 5v14M5 12h14"/>',
        'download': '<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',
        'upload': '<path d="M12 16V4m-4 4 4-4 4 4M4 17v4h16v-4"/>',
        'filter': '<path d="M4 7h16M7 12h10M10 17h4"/>',
        'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6m-3-3h6"/>',
        'cpu': '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4"/>',
        'code': '<path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16"/>',
        'terminal': '<path d="m4 7 5 5-5 5M12 17h8"/>',
        'briefcase': '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c5 4 13 4 18 0"/>',
        'globe': '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c6 6 6 12 0 18M12 3c-6 6-6 12 0 18"/>',
        'palette': '<path d="M12 3a9 9 0 0 0 0 18h2a2 2 0 0 0 1.5-3.3 2 2 0 0 1 1.4-3.4H19a4 4 0 0 0 4-4A9 9 0 0 0 12 3Z"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="17" cy="9" r="1"/>',
        'smartphone': '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
        'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4"/>',
        'check': '<path d="m5 12 4 4L19 6"/>',
        'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
        'alert': '<path d="m12 3 10 18H2L12 3ZM12 9v4m0 4v.5"/>',
        'file': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6ZM14 2v6h6M8 13h8M8 17h8"/>',
        'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        'layers': '<path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5"/>',
        'mail': '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7"/>',
        'location': '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
        'edit': '<path d="M12 5h-7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 4l4 4-9 9-4 1 1-4 8-10Z"/>',
        'trash': '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 10v7m4-7v7"/>',
        'eye': '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
        'headphones': '<path d="M3 13V12a9 9 0 0 1 18 0v1M3 13h4v7H5a2 2 0 0 1-2-2v-5ZM21 13h-4v7h2a2 2 0 0 0 2-2v-5Z"/>',
        'laptop': '<rect x="4" y="3" width="16" height="13" rx="2"/><path d="M2 20h20l-2-4H4l-2 4Z"/>',
        'chevron-down': '<path d="m6 9 6 6 6-6"/>',
        'reset': '<path d="M3 11a9 9 0 1 1 3 7M3 4v7h7"/>',
        'file-down': '<path d="M14 2H6v20h12V8l-4-6ZM14 2v6h4M12 11v7m-3-3 3 3 3-3"/>',
        'slash': '<path d="M3 21 21 3"/>',
        'user': '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>',
        'monitor': '<rect x="2" y="3" width="20" height="15" rx="2"/><path d="M8 22h8m-4-4v4"/>',
        'info': '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.5"/>'
    };
    const icon = (n, cl = '') => `<svg class="i ${cl}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ICONS.info}</svg>`;
    const hydrateIcons = (scope = document) => { scope.querySelectorAll('i[data-icon]').forEach(el => { el.outerHTML = icon(el.dataset.icon); }); };
    const E = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const clone = o => JSON.parse(JSON.stringify(o));
    const load = () => { try {
        let d = JSON.parse(localStorage.getItem(KEY));
        return d && Array.isArray(d.students) && Array.isArray(d.programmes) && d.attendance ? d : clone(SF_SEED);
    }
    catch {
        return clone(SF_SEED);
    } };
    let db = load(), current = 'overview', filters = {
        students: '',
        studentStatus: 'All',
        programmes: 'All',
        assignments: 'All',
        attendance: ''
    }, attendanceWeek = 0;
    const root = document.querySelector('#pageContent'), $ = s => document.querySelector(s);
    const save = () => { db.assignments.forEach(a => { a.total = db.students.filter(s => s.programme === a.course).length; a.submissions = Math.max(0, Math.min(a.total, Number(a.submissions) || 0)); }); try {
        localStorage.setItem(KEY, JSON.stringify(db));
    }
    catch {
        toast('Browser storage is full or unavailable', 'warn');
    } };
    const pBy = id => db.programmes.find(p => p.id === id) || { name: 'Unassigned', code: '—', color: '#a0a5af' };
    const getActive = () => db.students.filter(s => s.status === 'Active').length;
    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const attendanceRows = () => db.students.map(student => ({ student, days: (db.attendance[student.id] || Array(5).fill('Present')).slice(0, 5) }));
    const percentage = (num, total) => total ? Math.round(100 * num / total) : 0;
    const percentage1 = (num, total) => total ? Math.round(1000 * num / total) / 10 : 0;
    const attendanceStats = () => {
        const rows = attendanceRows(), days = WEEK_DAYS.map((label, index) => {
            const values = rows.map(row => row.days[index]);
            const present = values.filter(v => v === 'Present').length;
            const late = values.filter(v => v === 'Late').length;
            const absent = values.filter(v => v === 'Absent').length;
            return {
                label,
                present,
                late,
                absent,
                total: values.length,
                rate: percentage(present + late, values.length)
            };
        });
        const present = days.reduce((sum, d) => sum + d.present, 0);
        const late = days.reduce((sum, d) => sum + d.late, 0);
        const absent = days.reduce((sum, d) => sum + d.absent, 0);
        return { days, present, late, absent, rate: percentage1(present + late, present + late + absent) };
    };
    const attendanceRate = () => attendanceStats().rate;
    const studentAttendanceRate = id => {
        const days = db.attendance[id] || Array(5).fill('Present');
        return percentage(days.filter(v => v === 'Present' || v === 'Late').length, days.length);
    };
    const pill = (s) => `<span class="status-pill ${s === 'Active' || s === 'Present' || s === 'Open' ? 'pill-green' : s === 'On leave' || s === 'Late' || s === 'Pending' ? 'pill-amber' : s === 'Absent' || s === 'Overdue' ? 'pill-red' : 'pill-slate'}">${E(s)}</span>`;
    const avatar = s => {
        let colors = [
            ['#263d4c', '#8adcf3'],
            ['#412b42', '#f7a6ce'],
            ['#39304c', '#c4a6ff'],
            ['#244237', '#8de5c4'],
            ['#473524', '#f0bf7b']
        ];
        let c = colors[(s.name.length + s.id.length) % colors.length];
        return `<span class="person-avatar" style="--avatar-bg:${c[0]};--avatar-fg:${c[1]}">${E(s.name.split(' ').slice(0, 2).map(x => x[0]).join('').toUpperCase())}</span>`;
    };
    const dateStr = d => new Date(`${d}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const count = id => db.students.filter(s => s.programme === id).length;
    const pct = (n, t) => t ? Math.round(n / t * 100) : 0;
    const dateLabel = () => new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    function toast(msg, type = 'ok') { const t = document.createElement('div'); t.className = `toast ${type === 'warn' ? 'warn' : ''}`; t.innerHTML = `${icon(type === 'warn' ? 'alert' : 'check-circle')}<span>${E(msg)}</span>`; $('#toastHolder').appendChild(t); setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 350); }, 3200); }
    function heading(k, title, desc, actions = '') { return `<div class="page-heading reveal"><div><span class="eyebrow">${E(k)}</span><h1>${title}</h1><p>${E(desc)}</p></div><div class="heading-actions">${actions}</div></div>`; }
    function sectionHead(title, sub, action = '') { return `<div class="section-header"><div><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div>${action}</div>`; }
    function statCard(name, num, iconName, clr, foot, chg) { return `<div class="card-sf stat-card reveal"><div class="stat-top"><span class="stat-label">${E(name)}</span><span class="stat-icon" style="color:${clr};background:${clr}19">${icon(iconName)}</span></div><div class="stat-value">${num}</div><div class="stat-foot">${chg ? `<span class="stat-change">${E(chg)}</span>` : ''}${E(foot)}</div></div>`; }
    function statusBreak() { const a = db.students.filter(s => s.status === 'Active').length, l = db.students.filter(s => s.status === 'On leave').length, pe = db.students.filter(s => s.status === 'Pending').length, total = Math.max(1, db.students.length); return { a, l, pe, total }; }
    ;
    function chartSvg() {
        const daily = attendanceStats().days, x = i => 36 + i * 132, y = v => 185 - v * 1.58;
        const path = daily.map((d, i) => `${i ? 'L' : 'M'}${x(i)} ${y(d.rate)}`).join(' ');
        const points = daily.map((d, i) => `<circle class="chart-point" cx="${x(i)}" cy="${y(d.rate)}" r="5"><title>${d.label}: ${d.rate}% attending</title></circle>`).join('');
        return `<svg class="chart-svg" viewBox="0 0 590 205" preserveAspectRatio="none" role="img" aria-label="Attendance percentage by weekday: ${daily.map(d => `${d.label} ${d.rate}%`).join(', ')}"><defs><linearGradient id="sf-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e83d59" stop-opacity=".28"/><stop offset="1" stop-color="#e83d59" stop-opacity="0"/></linearGradient></defs>${[0, 25, 50, 75, 100].map(v => `<line class="chart-grid" x1="35" x2="570" y1="${y(v)}" y2="${y(v)}"/><text class="chart-y" x="1" y="${y(v) + 4}">${v}%</text>`).join('')}<path class="chart-fill" d="${path} L${x(4)} 185 L${x(0)} 185 Z"/><path class="chart-line" d="${path}"/>${points}</svg><div class="chart-labels">${daily.map(d => `<span title="${d.rate}%">${d.label.slice(0, 3)}</span>`).join('')}</div>`;
    }
    function studentTable(items, actions = true) { return `<div class="table-responsive-sf"><table class="sf-table"><thead><tr><th>STUDENT</th><th>PROGRAMME</th><th>STATUS</th><th>ATTENDANCE</th><th>PROGRESS</th>${actions ? '<th>ACTIONS</th>' : ''}</tr></thead><tbody>${items.map(s => `<tr><td><div class="td-person">${avatar(s)}<div class="person-cell"><strong>${E(s.name)}</strong><small>${E(s.id)}</small></div></div></td><td>${E(pBy(s.programme).code)}</td><td>${pill(s.status)}</td><td><div class="inline-progress attendance-inline" aria-label="Attendance ${studentAttendanceRate(s.id)} percent"><div class="progress-line"><div class="progress-fill attendance-fill" style="--pct:${studentAttendanceRate(s.id)}%"></div></div><strong>${studentAttendanceRate(s.id)}%</strong></div></td><td><div class="inline-progress"><div class="progress-line"><div class="progress-fill" style="--pct:${s.progress}%"></div></div><small>${s.progress}%</small></div></td>${actions ? `<td><button class="btn btn-xs" data-action="student-detail" data-id="${E(s.id)}">View ${icon('arrow-up-right')}</button></td>` : ''}</tr>`).join('')}</tbody></table>${!items.length ? `<div class="empty-state">${icon('search')}<strong>No students found</strong>Try a different search or filter.</div>` : ''}</div>`; }
    function overview() {
        const a = statusBreak(), att = attendanceRate(), open = db.assignments.filter(x => x.status === 'Open').length;
        return `<div class="overview-intro reveal"><div><span class="eyebrow">THE ACADEMIC PULSE · LIVE WORKSPACE</span><h1>Everything in motion. <span class="red-text">One view.</span></h1><p>From the first lesson to the final milestone — stay one step ahead.</p></div><div class="date-chip">${icon('calendar')} ${E(dateLabel())}</div></div>
<section class="hero-dashboard reveal"><div class="hero-text"><span class="eyebrow">YOUR DAY. BEAUTIFULLY ORGANISED.</span><h2>Progress looks good<br>from here.</h2><p>One workspace for people, learning and the moments that matter.</p><div class="hero-actions"><button class="btn hero-cta" data-action="add-student">${icon('user-plus')} Add a student</button><button class="btn hero-ghost" data-view="reports">Explore analytics ${icon('arrow-up-right')}</button></div></div><span class="floating-symbol">${icon('graduation')}</span><span class="floating-symbol">${icon('laptop')}</span><span class="floating-symbol">${icon('cpu')}</span><span class="floating-symbol">${icon('sparkles')}</span></section>
<div class="stats-grid">${statCard('Total students', db.students.length, 'users', '#f77188', 'Student records', '+ New intakes')}${statCard('Active programmes', db.programmes.length, 'layers', '#a996ff', 'Across computing & beyond', 'Live')}${statCard('Attendance rate', att + '%', 'calendar-check', '#37cba9', 'Present + late this week', 'Live')}${statCard('Open assignments', open, 'clipboard', '#f2b667', 'Awaiting submissions', 'Actionable')}</div>
<div class="overview-layout"><div class="overview-left"><div class="card-sf card-pad chart-card reveal">${sectionHead('Weekly attendance trend', 'Live attendance by weekday', `<span class="chip selected">MON–FRI</span>`)}<div class="chart-wrap">${chartSvg()}</div></div><div class="card-sf card-pad table-card reveal">${sectionHead('Recently enrolled', 'A quick look at the people shaping tomorrow', `<button class="link-action" data-view="students">All students ${icon('arrow-up-right')}</button>`)}${studentTable(db.students.slice(-5).reverse(), false)}</div></div><div class="overview-right"><div class="card-sf card-pad status-card reveal">${sectionHead('Student status', 'Current enrolment snapshot')}<div class="donut-wrap"><div class="donut" style="background:conic-gradient(#f05368 0 ${a.a / a.total * 100}%,#f4b967 ${a.a / a.total * 100}% ${(a.a + a.pe) / a.total * 100}%,#38cfa6 ${(a.a + a.pe) / a.total * 100}% 100%)"><div class="donut-mid"><strong>${a.total}</strong><span>students</span></div></div><div class="legend-list">${[
            ['Active', a.a, '#f05368'],
            ['Pending', a.pe, '#f4b967'],
            ['On leave', a.l, '#38cfa6']
        ].map(([n, v, c]) => `<div class="legend-item"><span class="legend-name"><i class="legend-dot" style="background:${c}"></i>${n}</span><strong>${v}</strong></div>`).join('')}</div></div></div><div class="card-sf card-pad reveal">${sectionHead('Quick actions', 'Make the next move effortless')}<div class="quick-actions"><button class="quick-tile" data-action="add-student">${icon('user-plus')}<strong>Add student</strong><small>Register a learner</small></button><button class="quick-tile" data-action="add-assignment">${icon('clipboard')}<strong>New assignment</strong><small>Create a task</small></button><button class="quick-tile" data-view="attendance">${icon('calendar-check')}<strong>Mark attendance</strong><small>Update the register</small></button><button class="quick-tile" data-action="export-students">${icon('download')}<strong>Export roster</strong><small>Get a CSV report</small></button></div></div><div class="card-sf card-pad reveal">${sectionHead('On the radar', 'What’s coming up next', `<button class="link-action" data-view="timetable">Schedule ${icon('arrow-right')}</button>`)}<div class="activity-items">${db.assignments.filter(x => x.status === 'Open').slice(0, 3).map(x => `<div class="activity-item"><span class="activity-glyph">${icon('clock')}</span><div><strong>${E(x.title)}</strong><p>Due ${dateStr(x.due)} · ${E(pBy(x.course).code)}</p></div></div>`).join('')}</div></div></div></div>
<div class="card-sf card-pad reveal">${sectionHead('In focus', 'Programmes worth a closer look', `<button class="link-action" data-view="courses">Browse programmes ${icon('arrow-up-right')}</button>`)}<div class="grid-programmes">${db.programmes.slice(0, 3).map(programmeCard).join('')}</div></div>`;
    }
    function programmeCard(p) { let n = count(p.id); return `<article class="card-sf programme-card" style="--program-color:${p.color}"><div class="programme-head"><div class="programme-icon">${icon(p.icon || 'book')}</div><span class="programme-code">${E(p.code)}</span></div><h3>${E(p.name)}</h3><p>${E(p.desc)}</p><div class="programme-meta"><span>${icon('clock', 'sm')} ${E(p.duration || '12 weeks')}</span><span>${icon('users', 'sm')} <strong>${n}</strong> students</span></div><div class="programme-finish"><span>${E(p.level)}</span><button class="link-action" data-action="programme-detail" data-id="${E(p.id)}">Explore ${icon('arrow-up-right')}</button></div></article>`; }
    function students() { let s = db.students.filter(x => (`${x.name} ${x.email} ${x.id} ${pBy(x.programme).name}`).toLowerCase().includes(filters.students.toLowerCase()) && (filters.studentStatus === 'All' || x.status === filters.studentStatus)); return `${heading('PEOPLE & COMMUNITY', 'Every learner. <span class="red-text">Every possibility.</span>', 'Make space for every student story.', `<button class="btn" data-action="export-students">${icon('download')} Export CSV</button><button class="btn btn-primary-sf" data-action="add-student">${icon('plus')} Add student</button>`)}<div class="mini-stat-row">${statCard('Registered', db.students.length, 'users', '#f46b81', 'Learners')}${statCard('Active students', getActive(), 'check-circle', '#36d0a3', 'Currently attending')}${statCard('Programmes', db.programmes.length, 'book', '#ad9bff', 'Open pathways')}</div><div class="filter-row"><div class="filter-left"><label class="search-field">${icon('search')}<input class="input-sf" id="studentSearch" placeholder="Search name, email or ID" value="${E(filters.students)}"></label><select class="select-sf" id="studentStatus"><option>All</option>${['Active', 'Pending', 'On leave'].map(x => `<option ${filters.studentStatus === x ? 'selected' : ''}>${x}</option>`).join('')}</select></div><div class="filter-right tiny muted"><span id="studentResultCount">${s.length}</span> students shown</div></div><div class="card-sf card-pad table-card">${sectionHead('Student directory', 'Explore and manage the full student roster')}<div id="studentTableTarget">${studentTable(s)}</div></div>`; }
    function courses() { let arr = db.programmes.filter(p => filters.programmes === 'All' || p.category === filters.programmes); return `${heading('PROGRAMMES & PATHWAYS', 'Learning has no limits.', 'See what’s being taught, who’s learning and what’s next.', `<button class="btn btn-primary-sf" data-action="add-programme">${icon('plus')} New programme</button>`)}<div class="mini-stat-row">${statCard('Programmes', db.programmes.length, 'book', '#f46b81', 'Available')}${statCard('Short courses', db.programmes.filter(x => x.category === 'Short Course').length, 'cpu', '#37d0ae', 'Skills & specialisations')}${statCard('Diploma pathways', db.programmes.filter(x => x.category === 'Computing').length, 'graduation', '#ac9bff', 'Academic qualifications')}</div><div class="filter-row"><div class="filter-left"><span class="tiny muted strong">SHOW</span>${['All', 'Computing', 'Short Course'].map(n => `<button class="chip ${filters.programmes === n ? 'selected' : ''}" data-action="filter-programmes" data-filter="${n}">${n}</button>`).join('')}</div><span class="muted tiny">${arr.length} programmes</span></div><div class="grid-programmes">${arr.map(programmeCard).join('')}</div>`; }
    function attendance() {
        const students = db.students.filter(s => `${s.name} ${s.id}`.toLowerCase().includes(filters.attendance.toLowerCase())).slice(0, 28);
        const stats = attendanceStats(), am = stats.rate, notPresent = Math.round((100 - am) * 10) / 10, days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
        return `${heading('ACADEMIC PARTICIPATION', 'Presence makes progress.', 'Track weekly attendance and spot students who may need support.', `<button class="btn" data-action="export-attendance">${icon('download')} Export attendance</button>`)}
 <div class="mini-stat-row">${statCard('Weekly attendance', `<span id="attendanceKpiRate">${am}%</span>`, 'check-circle', '#39d0aa', 'Present + late')}${statCard('Students tracked', db.students.length, 'users', '#f36e83', 'Student records')}${statCard('Class days', 5, 'calendar', '#b19bff', 'Monday to Friday')}</div>
 <div class="content-split"><div class="card-sf card-pad"><div class="section-header"><div><h2>Weekly attendance register</h2><p>Click a status to cycle: Present → Late → Absent</p></div><label class="search-field">${icon('search')}<input id="attendanceSearch" class="input-sf" placeholder="Find a student" value="${E(filters.attendance)}"></label></div><div class="attendance-scroller"><div class="attendance-grid" id="attendanceGrid"><div class="at-head">STUDENT</div>${days.map(d => `<div class="at-head at-cell">${d}</div>`).join('')}${students.map(s => `<div class="at-person">${avatar(s)}<div><strong>${E(s.name)}</strong><small>${E(s.id)} · <span data-at-student-rate="${E(s.id)}">${studentAttendanceRate(s.id)}%</span> attendance</small></div></div>${(db.attendance[s.id] || Array(5).fill('Present')).map((st, d) => `<div class="at-cell"><button type="button" title="Change attendance" aria-label="${E(s.name)}, ${WEEK_DAYS[d]}, ${st}. Click to change status" class="at-toggle ${st.toLowerCase()}" data-action="attendance-toggle" data-id="${E(s.id)}" data-day="${d}">${st === 'Present' ? 'P' : st === 'Late' ? 'L' : 'A'}</button></div>`).join('')}`).join('')}</div></div><div class="attendance-legend"><span><i class="legend-dot" style="background:#37d2a5"></i> Present</span><span><i class="legend-dot" style="background:#f3b768"></i> Late</span><span><i class="legend-dot" style="background:#ef7182"></i> Absent</span><span>Attendance changes are saved locally</span></div></div>
 <aside class="card-sf card-pad">${sectionHead('Participation snapshot', 'Updates instantly as the register changes')}<div class="donut-wrap"><div id="attendanceDonut" class="donut" style="background:conic-gradient(#34d2a7 0 ${am}%,#f3b768 ${am}% 100%)"><div class="donut-mid"><strong id="attendanceDonutLabel">${am}%</strong><span>attendance</span></div></div><div class="legend-list"><div class="legend-item"><span>Attending</span><strong id="attendanceAttending">${am}%</strong></div><div class="legend-item"><span>Not present</span><strong id="attendanceAbsent">${notPresent}%</strong></div></div></div><div class="soft-divider"></div><h3 class="attendance-daily-heading">Attendance by weekday</h3><div class="attendance-day-bars" id="attendanceDayBars">${attendanceDayBars(stats)}</div><div class="soft-divider"></div><p class="feature-note">Late arrivals count as attending in the weekly percentage. The green, amber and red bars show Present, Late and Absent separately.</p><button class="btn btn-primary-sf" data-view="reports">${icon('chart')} Explore attendance insights</button></aside></div>`;
    }
    function attendanceDayBars(stats = attendanceStats()) {
        return stats.days.map(d => `<div class="attendance-day-row" data-attendance-day="${d.label}"><div class="attendance-day-title"><span>${d.label}</span><strong>${d.rate}%</strong></div><div class="attendance-segments" role="img" aria-label="${d.label}: ${d.present} present, ${d.late} late, ${d.absent} absent"><span class="seg-present" style="width:${percentage(d.present, d.total)}%"></span><span class="seg-late" style="width:${percentage(d.late, d.total)}%"></span><span class="seg-absent" style="width:${percentage(d.absent, d.total)}%"></span></div></div>`).join('');
    }
    function syncAttendanceUI() {
        if (current !== 'attendance')
            return;
        const stats = attendanceStats(), am = stats.rate;
        const assign = (id, value) => { const element = $(id); if (element)
            element.textContent = value; };
        assign('#attendanceKpiRate', `${am}%`);
        assign('#attendanceDonutLabel', `${am}%`);
        assign('#attendanceAttending', `${am}%`);
        assign('#attendanceAbsent', `${Math.round((100 - am) * 10) / 10}%`);
        const donut = $('#attendanceDonut');
        if (donut)
            donut.style.background = `conic-gradient(#34d2a7 0 ${am}%,#f3b768 ${am}% 100%)`;
        const bars = $('#attendanceDayBars');
        if (bars)
            bars.innerHTML = attendanceDayBars(stats);
        root.querySelectorAll('[data-at-student-rate]').forEach(el => { el.textContent = `${studentAttendanceRate(el.dataset.atStudentRate)}%`; });
    }
    function assignments() { let arr = db.assignments.filter(a => filters.assignments === 'All' || a.status === filters.assignments); return `${heading('ASSESSMENT & FEEDBACK', 'Work worth showing.', 'Keep coursework organised, deadlines visible and progress moving.', `<button class="btn btn-primary-sf" data-action="add-assignment">${icon('plus')} Create assignment</button>`)}<div class="mini-stat-row">${statCard('All assignments', db.assignments.length, 'clipboard', '#f26e85', 'Created tasks')}${statCard('Accepting work', db.assignments.filter(x => x.status === 'Open').length, 'file', '#35d0a7', 'Open tasks')}${statCard('Completed', db.assignments.filter(x => x.status === 'Closed').length, 'check-circle', '#b09cff', 'Closed tasks')}</div><div class="filter-row"><div class="filter-left">${['All', 'Open', 'Closed'].map(s => `<button class="chip ${filters.assignments === s ? 'selected' : ''}" data-action="filter-assignments" data-filter="${s}">${s}</button>`).join('')}</div><span class="tiny muted">${arr.length} results</span></div><div class="assignment-grid">${arr.map(a => { const pp = pBy(a.course), r = pct(a.submissions, a.total); return `<article class="card-sf assignment-card"><div class="assignment-head"><div><span class="programme-code">${E(pp.code)} · ${E(pp.category || 'Programme')}</span><h3>${E(a.title)}</h3></div>${pill(a.status)}</div><p>${E(a.desc)}</p><div class="programme-meta" style="display:flex;justify-content:space-between;margin-top:18px;color:var(--muted);font-size:11px"><span>Submissions received</span><strong style="color:var(--text)">${a.submissions} / ${a.total}</strong></div><div class="progress-line" style="max-width:none;margin-top:9px"><div class="progress-fill" style="--pct:${r}%"></div></div><div class="assignment-bottom"><div class="assignment-stats"><span>${icon('calendar', 'sm')} ${dateStr(a.due)}</span><span>${icon('clipboard', 'sm')} ${a.points} pts</span></div><button class="btn btn-xs" data-action="assignment-detail" data-id="${E(a.id)}">Manage ${icon('arrow-up-right')}</button></div></article>`; }).join('')}</div>${!arr.length ? '<div class="card-sf empty-state">No assignments found.</div>' : ''}`; }
    function timetable() { const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; return `${heading('ACADEMIC CALENDAR', 'Own your schedule.', 'A clear view of every class, every room and every opportunity.', `<button class="btn btn-primary-sf" data-action="add-session">${icon('plus')} Add a session</button>`)}<div class="mini-stat-row">${statCard('Scheduled sessions', db.timetable.length, 'calendar', '#f06b84', 'This week')}${statCard('Teaching rooms', new Set(db.timetable.map(x => x.room)).size, 'location', '#ad9bff', 'Across campus')}${statCard('Facilitators', new Set(db.timetable.map(x => x.teacher)).size, 'users', '#3bd0ad', 'Teaching faculty')}</div><div class="card-sf card-pad" style="margin-bottom:20px">${sectionHead('Your week, at a glance', 'Select a session to inspect or remove it')}<div class="timetable-grid">${days.map((day, i) => { let ar = db.timetable.filter(x => x.day === i + 1).sort((a, b) => a.start.localeCompare(b.start)); return `<div class="timetable-col"><h3>${day.toUpperCase()} <b>${ar.length} <span class="tiny muted">session${ar.length !== 1 ? 's' : ''}</span></b></h3>${ar.map(t => `<button class="session-card" style="--session-color:${pBy(t.course).color};width:100%;text-align:left" data-action="session-detail" data-id="${E(t.id)}"><time>${E(t.start)}–${E(t.end)}</time><strong>${E(pBy(t.course).name)}</strong><small>${E(t.room)} · ${E(t.type)}</small></button>`).join('') || '<div class="timeline-empty">No classes scheduled</div>'}</div>`; }).join('')}</div></div><div class="card-sf card-pad">${sectionHead('Session planning', 'Plan ahead for smooth learning experiences')}<p class="smallish muted">Use the timetable to organise rooms, academic staff and class activities. New sessions appear here immediately and remain available after refreshing the page.</p></div>`; }
    function reports() { let total = Math.max(db.students.length, 1), att = attendanceRate(), tops = db.programmes.map(p => ({ ...p, n: count(p.id) })).sort((a, b) => b.n - a.n); let rate = db.assignments.length ? Math.round(db.assignments.reduce((a, b) => a + pct(b.submissions, b.total), 0) / db.assignments.length) : 0; return `${heading('DATA & DECISIONS', 'Turn information <span class="red-text">into insight.</span>', 'A clearer picture of enrolment, attendance and academic activity.', `<button class="btn" data-action="export-attendance">${icon('download')} Attendance CSV</button><button class="btn btn-primary-sf" data-action="export-students">${icon('file-down')} Student report</button>`)}<div class="stats-grid">${statCard('Total learners', db.students.length, 'users', '#f06b83', 'Student population')}${statCard('Attendance', att + '%', 'calendar-check', '#35d3ab', 'Weekly participation')}${statCard('Submission index', rate + '%', 'clipboard', '#b19cff', 'Across recorded assignments')}${statCard('Programmes', db.programmes.length, 'book', '#f4bc6c', 'Learning pathways')}</div><div class="report-grid"><div class="card-sf card-pad">${sectionHead('Enrolment by programme', 'Distribution of students across available programmes')}<div class="horizontal-bars">${tops.map(p => `<div><div class="bar-row-top"><span>${E(p.name)}</span><strong>${p.n} students</strong></div><div class="bar-track"><div style="--bar-width:${Math.max(2, p.n / Math.max(1, tops[0]?.n) * 100)}%;--bar-color:${p.color}"></div></div></div>`).join('')}</div></div><div class="card-sf card-pad">${sectionHead('Assignment completion', 'A snapshot of tasks and submissions')}<div class="activity-feed">${db.assignments.slice(0, 6).map(a => `<div class="timeline-point"><span class="timeline-circle">${icon('clipboard')}</span><div style="flex:1"><strong>${E(a.title)}</strong><p>${E(pBy(a.course).code)} · ${a.submissions} of ${a.total} submissions</p><div class="progress-line" style="max-width:none;margin-top:9px"><div class="progress-fill" style="--pct:${pct(a.submissions, a.total)}%"></div></div></div></div>`).join('')}</div></div></div><div class="card-sf card-pad" style="margin-top:20px">${sectionHead('Attendance by weekday', 'Live participation from the weekly register')}<div class="attendance-day-bars attendance-report-bars">${attendanceDayBars()}</div></div><div class="card-sf card-pad" style="margin-top:20px">${sectionHead('Export centre', 'Take your insights with you')}<div class="heading-actions"><button class="btn" data-action="export-students">${icon('download')} Students CSV</button><button class="btn" data-action="export-attendance">${icon('download')} Attendance CSV</button><button class="btn" data-action="export-assignments">${icon('download')} Assignments CSV</button><button class="btn" data-action="export-data">${icon('file-down')} Workspace JSON</button></div></div>`; }
    function settings() { let dark = document.documentElement.dataset.theme === 'dark', on = localStorage.getItem(MOTION) !== 'off'; return `${heading('PERSONALISE WORKSPACE', 'Built around the way you work.', 'Choose your environment and manage the local workspace.')}<div class="content-split"><div class="card-sf card-pad">${sectionHead('Appearance & experience', 'Your workspace, your way')}<div class="settings-list"><div class="setting-row"><div><strong>Dark appearance</strong><p>Switch between refined light and dark dashboard themes.</p></div><button class="sf-switch ${dark ? 'on' : ''}" data-action="theme" role="switch" aria-checked="${dark}" aria-label="Dark appearance"></button></div><div class="setting-row"><div><strong>Ambient animations</strong><p>Enable floating academic icons, transitions and microinteractions.</p></div><button class="sf-switch ${on ? 'on' : ''}" data-action="motion" role="switch" aria-checked="${on}" aria-label="Ambient animations"></button></div><div class="setting-row"><div><strong>Export workspace data</strong><p>Save your current student, programme and attendance records as JSON.</p></div><button class="btn btn-xs" data-action="export-data">${icon('download')} Export</button></div><div class="setting-row"><div><strong>Restore sample records</strong><p>Replace all saved changes with the original workspace dataset.</p></div><button class="btn btn-xs btn-danger" data-action="reset-data">${icon('reset')} Reset data</button></div></div></div><div class="card-sf card-pad">${sectionHead('Workspace information', 'Strategy First Academic OS')}<div class="activity-items"><div class="activity-item"><span class="activity-glyph">${icon('monitor')}</span><div><strong>Frontend application</strong><p>HTML5 · CSS3 · Bootstrap 5 · JavaScript</p></div></div><div class="activity-item"><span class="activity-glyph">${icon('shield')}</span><div><strong>Local browser storage</strong><p>Edits are stored on this device in your browser.</p></div></div><div class="activity-item"><span class="activity-glyph">${icon('user')}</span><div><strong>Developed by</strong><p>Ko Kyi Phyu Aung</p></div></div><div class="activity-item"><span class="activity-glyph">${icon('mail')}</span><div><strong>Contact</strong><p><a href="mailto:kyiphyuaung@strategyfirst.edu.mm">kyiphyuaung@strategyfirst.edu.mm</a></p></div></div></div><div class="soft-divider"></div><p class="feature-note">This frontend workspace keeps editable records in the browser. It does not connect to institutional systems, authenticate accounts or publish changes to other devices.</p></div></div>`; }
    const pageMap = { overview, students, courses, attendance, assignments, timetable, reports, settings };
    const pageNames = {
        overview: 'Overview',
        students: 'Students',
        courses: 'Programmes',
        attendance: 'Attendance',
        assignments: 'Assignments',
        timetable: 'Timetable',
        reports: 'Analytics & reports',
        settings: 'Settings'
    };
    function render(preserve = false) { root.innerHTML = pageMap[current](); $('#crumbCurrent').textContent = pageNames[current]; document.querySelectorAll('[data-view]').forEach(el => el.classList.toggle('active', el.matches('.side-link') && el.dataset.view === current)); let ac = $('#assignmentCount'); if (ac)
        ac.textContent = db.assignments.filter(a => a.status === 'Open').length; if (!preserve)
        window.scrollTo({ top: 0, behavior: 'instant' }); }
    function navigate(view) { if (!pageMap[view])
        return; current = view; filters = { ...filters }; if (location.hash !== `#${view}`)
        location.hash = view; render(); closeMenu(); closeNotifications(); }
    function closeMenu() { $('#sidebar').classList.remove('open'); $('#sidebarScrim').classList.remove('show'); }
    function openMenu() { $('#sidebar').classList.add('open'); $('#sidebarScrim').classList.add('show'); }
    function closeNotifications() { $('#notificationPanel').hidden = true; }
    function showNotifications() { let panel = $('#notificationPanel'); panel.hidden = !panel.hidden; if (!panel.hidden)
        panel.innerHTML = `<h3>Your academic updates</h3>${db.notes.map(n => `<div class="notice-item"><strong>${E(n.title)}</strong><p>${E(n.text)}</p></div>`).join('')}${db.assignments.filter(a => a.status === 'Open').slice(0, 2).map(a => `<div class="notice-item"><strong>Assignment due · ${E(pBy(a.course).code)}</strong><p>${E(a.title)} · ${dateStr(a.due)}</p></div>`).join('')}`; }
    function toggleTheme() { let h = document.documentElement; let d = h.dataset.theme === 'dark' ? 'light' : 'dark'; h.dataset.theme = d; try {
        localStorage.setItem(THEME, d);
    }
    catch { } ; $('#themeToggle').innerHTML = icon(d === 'dark' ? 'sun' : 'moon'); if (current === 'settings')
        render(true); toast(`${d === 'dark' ? 'Dark' : 'Light'} appearance enabled`); }
    function toggleMotion() { const now = localStorage.getItem(MOTION) === 'off'; localStorage.setItem(MOTION, now ? 'on' : 'off'); document.documentElement.classList.toggle('reduce-motion', !now); if (current === 'settings')
        render(true); toast(now ? 'Ambient motion enabled' : 'Ambient motion reduced'); }
    function modal(title, html) { $('#modalTitle').textContent = title; $('#modalContent').innerHTML = html; $('#modalShell').hidden = false; document.body.style.overflow = 'hidden'; setTimeout(() => { const f = $('#modalContent').querySelector('input:not([type=hidden]),select,textarea,button'); f?.focus(); }, 70); }
    function closeModal() { $('#modalShell').hidden = true; document.body.style.overflow = ''; }
    function field(name, label, type = 'text', value = '', opts = '') { return `<div class="form-item"><label for="f-${name}">${E(label)}</label><input class="input-sf" id="f-${name}" name="${name}" type="${type}" value="${E(value)}" ${opts}></div>`; }
    function selectField(name, label, items, selected = '') { return `<div class="form-item"><label for="f-${name}">${E(label)}</label><select class="select-sf" id="f-${name}" name="${name}" required>${items.map(x => { let val = typeof x === 'string' ? x : x.value, txt = typeof x === 'string' ? x : x.label; return `<option value="${E(val)}" ${selected === val ? 'selected' : ''}>${E(txt)}</option>`; }).join('')}</select></div>`; }
    function formActions(save = 'Save changes', extra = '') { return `<div class="modal-actions">${extra}<button class="btn" type="button" data-action="close-modal">Cancel</button><button class="btn btn-primary-sf" type="submit">${icon('check')} ${E(save)}</button></div>`; }
    function studentForm(id) {
        let s = db.students.find(x => x.id === id), editing = !!s;
        s = s || {
            name: '',
            email: '',
            id: '',
            year: '2026',
            status: 'Active',
            progress: 0,
            attendance: 100,
            phone: '',
            programme: db.programmes[0]?.id
        };
        modal(editing ? 'Edit student' : 'Add a student', `<form id="studentForm" data-edit="${editing ? E(s.id) : ''}"><div class="form-grid">${field('name', 'Full name', 'text', s.name, 'required minlength="2"')}${field('email', 'Email', 'email', s.email, 'required')}${selectField('programme', 'Programme', db.programmes.map(p => ({ value: p.id, label: p.name })), s.programme)}${selectField('status', 'Status', ['Active', 'Pending', 'On leave'], s.status)}${field('year', 'Intake year', 'number', s.year, 'required min="2020" max="2100"')}${field('phone', 'Phone (optional)', 'text', s.phone === '—' ? '' : s.phone)}${editing ? field('progress', 'Progress (%)', 'number', s.progress, 'required min="0" max="100"') : ''}</div>${formActions(editing ? 'Update student' : 'Register student', editing ? `<button class="btn btn-danger" type="button" data-action="delete-student" data-id="${E(s.id)}">${icon('trash')} Delete</button>` : '')}</form>`);
    }
    function studentDetail(id) { let s = db.students.find(x => x.id === id); if (!s)
        return; modal(s.name, `<div class="card-sf" style="padding:20px;background:var(--panel2)"><div class="td-person">${avatar(s)}<div class="person-cell"><strong style="font-size:16px">${E(s.name)}</strong><small>${E(s.id)} · ${E(s.email)}</small></div></div></div><div class="form-grid" style="margin-top:20px"><div class="form-item"><label>Programme</label><strong>${E(pBy(s.programme).name)}</strong></div><div class="form-item"><label>Status</label>${pill(s.status)}</div><div class="form-item"><label>Intake</label><strong>${E(s.year)}</strong></div><div class="form-item"><label>Attendance</label><strong>${studentAttendanceRate(s.id)}%</strong></div><div class="form-item span-2"><label>Learning progress</label><div class="inline-progress"><div class="progress-line" style="max-width:none;flex:1"><div class="progress-fill" style="--pct:${s.progress}%"></div></div><strong>${s.progress}%</strong></div></div></div><div class="modal-actions"><button class="btn" data-action="close-modal">Close</button><button class="btn btn-primary-sf" data-action="edit-student" data-id="${E(id)}">${icon('edit')} Edit record</button></div>`); }
    function programmeForm() { modal('Create a programme', `<form id="programmeForm"><div class="form-grid">${field('code', 'Programme code', 'text', '', 'required maxlength="14"')}${field('name', 'Programme title', 'text', '', 'required minlength="5"')}${selectField('category', 'Category', ['Computing', 'Short Course'])}${selectField('level', 'Level', ['Foundation', 'Intermediate', 'Level 4', 'Level 5', 'Advanced'])}${field('tutor', 'Programme lead', 'text', '', 'required')}${field('duration', 'Duration', 'text', '8 weeks', 'required')}${field('capacity', 'Student capacity', 'number', 30, 'min="1" max="500" required')}<div class="form-item span-2"><label for="f-desc">Programme description</label><textarea class="input-sf" id="f-desc" name="desc" required maxlength="280"></textarea></div></div>${formActions('Create programme')}</form>`); }
    function programmeDetail(id) { let p = db.programmes.find(x => x.id === id); if (!p)
        return; let roster = db.students.filter(s => s.programme === id); modal(p.name, `<div class="card-sf" style="padding:22px;background:var(--panel2);--program-color:${p.color}"><div class="programme-icon">${icon(p.icon || 'book')}</div><h3 style="margin-top:15px">${E(p.name)}</h3><p class="muted smallish" style="margin-top:9px">${E(p.desc)}</p></div><div class="form-grid" style="margin:21px 0"><div class="form-item"><label>Programme code</label><strong>${E(p.code)}</strong></div><div class="form-item"><label>Lead lecturer</label><strong>${E(p.tutor)}</strong></div><div class="form-item"><label>Duration</label><strong>${E(p.duration)}</strong></div><div class="form-item"><label>Enrolled students</label><strong>${roster.length} / ${p.capacity} capacity</strong></div></div><div class="soft-divider"></div><h3 style="margin-bottom:11px">Learners in this programme</h3>${roster.length ? roster.slice(0, 8).map(s => `<div class="td-person" style="padding:7px 0">${avatar(s)}<div class="person-cell"><strong>${E(s.name)}</strong><small>${E(s.id)}</small></div></div>`).join('') : '<p class="muted smallish">No students have been assigned yet.</p>'}<div class="modal-actions"><button class="btn" data-action="close-modal">Close</button><button class="btn btn-primary-sf" data-action="add-student">${icon('user-plus')} Add learner</button></div>`); }
    function assignmentForm() { modal('Create assignment', `<form id="assignmentForm"><div class="form-grid">${field('title', 'Assignment title', 'text', '', 'required minlength="3"')}${selectField('course', 'Programme', db.programmes.map(p => ({ value: p.id, label: p.name })))}${field('due', 'Due date', 'date', new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10), 'required')}${field('points', 'Total points', 'number', 100, 'required min="1" max="1000"')}<div class="form-item span-2"><label for="f-desc">Instructions</label><textarea class="input-sf" name="desc" id="f-desc" required minlength="10" maxlength="500"></textarea></div></div>${formActions('Publish assignment')}</form>`); }
    function assignmentDetail(id) { let a = db.assignments.find(x => x.id === id); if (!a)
        return; modal(a.title, `<div class="card-sf" style="padding:19px;background:var(--panel2)"><span class="programme-code">${E(pBy(a.course).name)}</span><h3 style="margin-top:11px">${E(a.title)}</h3><p class="muted" style="font-size:12px;margin-top:12px">${E(a.desc)}</p></div><div class="form-grid" style="margin:22px 0"> <div class="form-item"><label>Due date</label><strong>${dateStr(a.due)}</strong></div><div class="form-item"><label>Status</label>${pill(a.status)}</div><div class="form-item"><label>Points</label><strong>${a.points}</strong></div><div class="form-item"><label>Received submissions</label><strong>${a.submissions} / ${a.total}</strong></div></div><div class="form-item"><label>Update received submissions</label><div class="heading-actions"><button class="btn btn-xs" data-action="change-submissions" data-id="${E(id)}" data-step="-1">− 1</button><button class="btn btn-xs" data-action="change-submissions" data-id="${E(id)}" data-step="1">+ 1</button><span class="tiny muted">Useful for tracking hand-ins</span></div></div><div class="modal-actions"><button class="btn" data-action="close-modal">Close</button><button class="btn btn-primary-sf" data-action="assignment-status" data-id="${E(id)}">${icon(a.status === 'Open' ? 'check-circle' : 'reset')} ${a.status === 'Open' ? 'Close assignment' : 'Reopen assignment'}</button></div>`); }
    function sessionForm() { modal('Schedule a class', `<form id="sessionForm"><div class="form-grid">${selectField('course', 'Programme', db.programmes.map(p => ({ value: p.id, label: p.name })))}${selectField('day', 'Weekday', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((name, i) => ({ value: String(i + 1), label: name })))}${field('start', 'Start time', 'time', '09:00', 'required')}${field('end', 'End time', 'time', '10:30', 'required')}${field('room', 'Room / Lab', 'text', 'Lab 1', 'required')}${field('teacher', 'Lecturer', 'text', 'Ko Kyi Phyu Aung', 'required')}${selectField('type', 'Session type', ['Lecture', 'Lab', 'Workshop', 'Seminar', 'Tutorial'])}</div>${formActions('Add session')}</form>`); }
    function sessionDetail(id) { let s = db.timetable.find(x => x.id === id); if (!s)
        return; modal('Class details', `<div class="card-sf card-pad" style="background:var(--panel2)"><span class="eyebrow">${['', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'][s.day] || 'CLASS'}</span><h2>${E(pBy(s.course).name)}</h2><p class="muted" style="margin-top:10px">${E(s.type)} with ${E(s.teacher)}</p><div class="soft-divider"></div><div class="heading-actions"><span class="chip">${icon('clock', 'sm')} ${E(s.start)} – ${E(s.end)}</span><span class="chip">${icon('location', 'sm')} ${E(s.room)}</span></div></div><div class="modal-actions"><button class="btn" data-action="close-modal">Close</button><button class="btn btn-danger" data-action="delete-session" data-id="${E(s.id)}">${icon('trash')} Remove session</button></div>`); }
    function download(filename, txt, type = 'text/csv;charset=utf-8') { const blob = new Blob([txt], { type }), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = filename; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); toast(`${filename} downloaded`); }
    function safeCsv(v) { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s))
        s = "'" + s; return '"' + s.replaceAll('"', '""') + '"'; }
    function csv(rows) { return rows.map(row => row.map(safeCsv).join(',')).join('\r\n') + '\r\n'; }
    function exportFile(what) {
        let rows = [], filename = '';
        if (what === 'students') {
            filename = 'sf_students.csv';
            rows = [
                [
                    'Student ID',
                    'Name',
                    'Email',
                    'Programme',
                    'Year',
                    'Status',
                    'Attendance %',
                    'Progress %'
                ],
                ...db.students.map(s => [
                    s.id,
                    s.name,
                    s.email,
                    pBy(s.programme).name,
                    s.year,
                    s.status,
                    studentAttendanceRate(s.id),
                    s.progress
                ])
            ];
        }
        if (what === 'attendance') {
            filename = 'sf_attendance.csv';
            rows = [
                ['Student ID', 'Name', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                ...db.students.map(s => [s.id, s.name, ...(db.attendance[s.id] || [])])
            ];
        }
        if (what === 'assignments') {
            filename = 'sf_assignments.csv';
            rows = [
                [
                    'Assignment ID',
                    'Title',
                    'Programme',
                    'Due',
                    'Status',
                    'Submissions',
                    'Total',
                    'Points'
                ],
                ...db.assignments.map(a => [
                    a.id,
                    a.title,
                    pBy(a.course).name,
                    a.due,
                    a.status,
                    a.submissions,
                    a.total,
                    a.points
                ])
            ];
        }
        if (what === 'data') {
            return download('sf_academic_workspace.json', JSON.stringify(db, null, 2), 'application/json');
        }
        if (rows.length)
            download(filename, csv(rows));
    }
    function showSearch() { closeNotifications(); $('#commandShell').hidden = false; $('#commandInput').value = ''; updateSearchResults(); setTimeout(() => $('#commandInput').focus(), 50); }
    function closeSearch() { $('#commandShell').hidden = true; }
    function updateSearchResults() { let q = $('#commandInput').value.trim().toLowerCase(); let views = Object.entries(pageNames).filter(([id, name]) => !q || name.toLowerCase().includes(q)).slice(0, 6); let st = db.students.filter(s => q && `${s.name} ${s.id}`.toLowerCase().includes(q)).slice(0, 6); let pro = db.programmes.filter(p => q && `${p.name} ${p.code}`.toLowerCase().includes(q)).slice(0, 5); $('#commandResults').innerHTML = `${views.length ? `<div class="command-section">PAGES</div>${views.map(([v, n]) => `<button class="command-result" data-view="${v}" data-action="close-search">${icon('arrow-right')}<span>${E(n)}<small>Open section</small></span></button>`).join('')}` : ''}${st.length ? `<div class="command-section">STUDENTS</div>${st.map(s => `<button class="command-result" data-action="search-student" data-id="${E(s.id)}">${icon('user')}<span>${E(s.name)}<small>${E(s.id)} · ${E(pBy(s.programme).code)}</small></span></button>`).join('')}` : ''}${pro.length ? `<div class="command-section">PROGRAMMES</div>${pro.map(p => `<button class="command-result" data-action="search-programme" data-id="${E(p.id)}">${icon('book')}<span>${E(p.name)}<small>${E(p.code)}</small></span></button>`).join('')}` : ''}${!views.length && !st.length && !pro.length ? '<div class="empty-state">No matching results</div>' : ''}`; }
    function onAction(button) { const a = button.dataset.action, id = button.dataset.id; switch (a) {
        case 'open-menu':
            openMenu();
            break;
        case 'close-menu':
            closeMenu();
            break;
        case 'search':
            showSearch();
            break;
        case 'close-search':
            closeSearch();
            break;
        case 'search-student':
            closeSearch();
            studentDetail(id);
            break;
        case 'search-programme':
            closeSearch();
            programmeDetail(id);
            break;
        case 'theme':
            toggleTheme();
            break;
        case 'motion':
            toggleMotion();
            break;
        case 'notifications':
            showNotifications();
            break;
        case 'close-modal':
            closeModal();
            break;
        case 'add-student':
            studentForm();
            break;
        case 'student-detail':
            studentDetail(id);
            break;
        case 'edit-student':
            studentForm(id);
            break;
        case 'delete-student':
            if (confirm('Delete this student record?')) {
                db.students = db.students.filter(s => s.id !== id);
                delete db.attendance[id];
                save();
                closeModal();
                render();
                toast('Student record deleted');
            }
            break;
        case 'add-programme':
            programmeForm();
            break;
        case 'programme-detail':
            programmeDetail(id);
            break;
        case 'filter-programmes':
            filters.programmes = button.dataset.filter;
            render(true);
            break;
        case 'add-assignment':
            assignmentForm();
            break;
        case 'assignment-detail':
            assignmentDetail(id);
            break;
        case 'filter-assignments':
            filters.assignments = button.dataset.filter;
            render(true);
            break;
        case 'assignment-status': {
            let o = db.assignments.find(x => x.id === id);
            if (o) {
                o.status = o.status === 'Open' ? 'Closed' : 'Open';
                save();
                assignmentDetail(id);
                render(true);
                toast('Assignment status updated');
            }
            break;
        }
        case 'change-submissions': {
            let o = db.assignments.find(x => x.id === id);
            if (o) {
                o.submissions = Math.max(0, Math.min(o.total, o.submissions + Number(button.dataset.step)));
                save();
                assignmentDetail(id);
                render(true);
            }
            break;
        }
        case 'add-session':
            sessionForm();
            break;
        case 'session-detail':
            sessionDetail(id);
            break;
        case 'delete-session':
            if (confirm('Remove this session from the timetable?')) {
                db.timetable = db.timetable.filter(t => t.id !== id);
                save();
                closeModal();
                render();
                toast('Session removed');
            }
            break;
        case 'attendance-toggle': {
            let v = db.attendance[id] || (db.attendance[id] = ['Present', 'Present', 'Present', 'Present', 'Present']);
            let n = Number(button.dataset.day), options = ['Present', 'Late', 'Absent'];
            v[n] = options[(options.indexOf(v[n]) + 1) % 3];
            let s = db.students.find(x => x.id === id);
            if (s)
                s.attendance = studentAttendanceRate(id);
            save();
            button.className = `at-toggle ${v[n].toLowerCase()}`;
            button.textContent = v[n][0];
            button.setAttribute('aria-label', `${s?.name || 'Student'}, ${WEEK_DAYS[n]}, ${v[n]}. Click to change status`);
            syncAttendanceUI();
            toast('Attendance saved');
            break;
        }
        case 'export-students':
            exportFile('students');
            break;
        case 'export-attendance':
            exportFile('attendance');
            break;
        case 'export-assignments':
            exportFile('assignments');
            break;
        case 'export-data':
            exportFile('data');
            break;
        case 'reset-data':
            if (confirm('Restore original sample data? All browser-saved changes will be lost.')) {
                db = clone(SF_SEED);
                save();
                render();
                toast('Workspace restored');
            }
            break;
    } }
    function handleSubmit(e) {
        const form = e.target;
        if (!form.matches('#studentForm,#programmeForm,#assignmentForm,#sessionForm'))
            return;
        e.preventDefault();
        if (!form.reportValidity())
            return;
        const v = Object.fromEntries(new FormData(form).entries());
        if (form.id === 'studentForm') {
            let id = form.dataset.edit;
            if (id) {
                let old = db.students.find(s => s.id === id);
                Object.assign(old, {
                    name: v.name.trim(),
                    email: v.email.trim(),
                    programme: v.programme,
                    status: v.status,
                    year: v.year,
                    phone: v.phone.trim() || '—',
                    progress: Number(v.progress)
                });
                toast('Student record updated');
            }
            else {
                let num = Math.max(26000, ...db.students.map(s => Number(s.id.replace(/\D/g, '')) || 0)) + 1;
                let uid = `SF${num}`;
                db.students.unshift({
                    id: uid,
                    name: v.name.trim(),
                    email: v.email.trim(),
                    programme: v.programme,
                    status: v.status,
                    year: v.year,
                    phone: v.phone.trim() || '—',
                    progress: 0,
                    attendance: 100,
                    join: new Date().toISOString().slice(0, 10)
                });
                db.attendance[uid] = Array(5).fill('Present');
                toast('Student registered successfully');
            }
        }
        if (form.id === 'programmeForm') {
            let id = 'P' + Date.now().toString().slice(-9), code = v.code.trim().toUpperCase();
            if (db.programmes.some(p => p.code === code)) {
                toast('Programme code already exists', 'warn');
                return;
            }
            db.programmes.push({
                id,
                code,
                name: v.name.trim(),
                category: v.category,
                level: v.level,
                tutor: v.tutor.trim(),
                duration: v.duration.trim(),
                capacity: Number(v.capacity),
                desc: v.desc.trim(),
                color: '#f16b83',
                icon: 'book'
            });
            toast('Programme created');
        }
        if (form.id === 'assignmentForm') {
            db.assignments.unshift({
                id: 'A' + Date.now(),
                title: v.title.trim(),
                course: v.course,
                due: v.due,
                status: 'Open',
                points: Number(v.points),
                submissions: 0,
                total: count(v.course),
                desc: v.desc.trim()
            });
            toast('Assignment published');
        }
        if (form.id === 'sessionForm') {
            if (v.end <= v.start) {
                toast('End time must be later than start time', 'warn');
                return;
            }
            db.timetable.push({
                id: 'T' + Date.now(),
                course: v.course,
                day: Number(v.day),
                start: v.start,
                end: v.end,
                room: v.room.trim(),
                teacher: v.teacher.trim(),
                type: v.type
            });
            toast('Session scheduled');
        }
        save();
        closeModal();
        render();
    }
    function updateStudentFilter() { const input = $('#studentSearch'); if (!input)
        return; let s = db.students.filter(x => (`${x.name} ${x.email} ${x.id} ${pBy(x.programme).name}`).toLowerCase().includes(filters.students.toLowerCase()) && (filters.studentStatus === 'All' || x.status === filters.studentStatus)); $('#studentTableTarget').innerHTML = studentTable(s); $('#studentResultCount').textContent = s.length; }
    function init() {
        hydrateIcons();
        document.documentElement.classList.toggle('reduce-motion', localStorage.getItem(MOTION) === 'off');
        $('#themeToggle').innerHTML = icon(document.documentElement.dataset.theme === 'dark' ? 'sun' : 'moon');
        $('#sidebarScrim').addEventListener('click', closeMenu);
        document.addEventListener('click', e => { const view = e.target.closest('[data-view]'); if (view) {
            navigate(view.dataset.view);
            if (view.dataset.action === 'close-search')
                closeSearch();
            return;
        } const act = e.target.closest('[data-action]'); if (act) {
            e.preventDefault();
            onAction(act);
        }
        else if (!e.target.closest('.notification-wrap'))
            closeNotifications(); });
        document.addEventListener('submit', handleSubmit);
        document.addEventListener('input', e => { if (e.target.id === 'commandInput')
            updateSearchResults(); if (e.target.id === 'studentSearch') {
            filters.students = e.target.value;
            updateStudentFilter();
        } if (e.target.id === 'attendanceSearch') {
            let v = e.target.value, pos = e.target.selectionStart;
            filters.attendance = v;
            render(true);
            let n = $('#attendanceSearch');
            n?.focus();
            n?.setSelectionRange(pos, pos);
        } });
        document.addEventListener('change', e => { if (e.target.id === 'studentStatus') {
            filters.studentStatus = e.target.value;
            updateStudentFilter();
        } });
        document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            showSearch();
        } if (e.key === 'Escape') {
            closeModal();
            closeSearch();
            closeNotifications();
            closeMenu();
        } });
        window.addEventListener('hashchange', () => { let view = location.hash.slice(1); if (pageMap[view] && view !== current) {
            current = view;
            render();
            closeMenu();
        } });
        const hash = location.hash.slice(1);
        if (pageMap[hash])
            current = hash;
        render();
    }
    init();
})();
