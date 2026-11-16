# SF Academic Command Center

**Strategy First International College — Academic Management Dashboard**

**Developer:** Ko Kyi Phyu Aung  
**Email:** kyiphyuaung@strategyfirst.edu.mm

## Overview

SF Academic Command Center is a responsive academic-management frontend that brings together student records, programme information, weekly attendance, assessment tracking, class schedules and academic reporting. The interface includes a responsive sidebar, animated academic illustrations, charts, search, light/dark themes, keyboard navigation and editable records.

The project is designed as a self-contained web-application reference using HTML, CSS, Bootstrap 5 and JavaScript. Academic records shown on first launch are illustrative seed data; they are not institutional records or verified current programme offerings.

## Start the project

### Windows

1. Extract the ZIP archive.
2. Double-click `START_WINDOWS.bat` (Python 3 required).
3. Open `http://127.0.0.1:8768` if the browser does not open automatically.

Alternatively, open `index.html` in Chrome, Edge or Firefox; the page uses local assets and does not need an internet connection. A local server is recommended to ensure consistent behaviour across browsers.

### macOS / Linux

From the project folder:

```bash
chmod +x START_MAC_LINUX.sh
./START_MAC_LINUX.sh
```

Or use a terminal directly:

```bash
python3 run_local_server.py
```

Then open `http://127.0.0.1:8768`.

## Project features

| Area | Features |
|---|---|
| Overview | KPI cards, live weekday attendance trend, student status breakdown, recent student table, upcoming assignments, quick actions |
| Students | Search/filter records; add, view, edit and delete students; progress, attendance and programme assignments |
| Programmes | Browse diplomas and short courses, inspect programme details, add new programmes |
| Attendance | Weekly Monday–Friday attendance register, change Present/Late/Absent with one click, export CSV |
| Assignments | Browse assignments, publish new assignments, view instructions and deadlines, update submission counters, close/reopen assignments |
| Timetable | Weekly class schedule, inspect sessions, schedule additional classes, remove sessions |
| Analytics & reports | Enrolment charts, submission progress, attendance indicators and weekday bars updated from the register, downloadable CSV and JSON exports |
| Workspace | Dark/light theme, ambient academic animations, reduce-motion option, reset dataset |
| Navigation | Responsive mobile sidebar, keyboard-accessible controls, global search via **Ctrl+K** / **Cmd+K**, notification panel |

## Technology

- HTML5 and semantic elements
- Bootstrap 5 (bundled locally, no CDN)
- CSS3 custom design system, transitions and keyframe animations
- Vanilla JavaScript (no frontend framework or build step)
- Browser `localStorage` for editable data and preferences
- Inline SVG icons/charts (no external icon library needed)

## Directory

```text
SF_Academic_Command_Center/
├── index.html
├── START_WINDOWS.bat
├── START_MAC_LINUX.sh
├── README.md
├── QUICK_START_MYANMAR.md
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── style.css
│   ├── img/
│   │   └── strategy-first-crest.png
│   └── js/
│       ├── data.js
│       ├── bootstrap.bundle.min.js
│       └── app.js
└── docs/
    └── REQUIREMENTS_AND_TEST_CASES.md
```

## Data storage and limitations

- Editing students, programmes, attendance, assignments and timetable sessions saves to the **current browser's localStorage**. Refreshing the page restores saved changes.
- Records are not shared across browsers, devices or users. Clearing browser data or selecting **Restore sample records** will reset changes.
- There is no backend API, user authentication, real student database, synchronisation or permission system. Do not use this frontend to store sensitive or real student data.
- Submission counters track the number of received assignments only; they do not accept or store uploaded files. For a real file-upload workflow, add authenticated backend endpoints, server-side validation and access controls.
- Programme names, sample students, instructors and academic metrics are **illustrative content** and should be replaced or reviewed before any real-world deployment.
- The attendance register is an editable five-day sample week, not a multi-semester attendance system.

For detailed functional/non-functional requirements and test cases, see [`docs/REQUIREMENTS_AND_TEST_CASES.md`](docs/REQUIREMENTS_AND_TEST_CASES.md).

## Development credit

**Ko Kyi Phyu Aung**  
[kyiphyuaung@strategyfirst.edu.mm](mailto:kyiphyuaung@strategyfirst.edu.mm)

## Attendance charts and live updates

- Attendance buttons cycle **Present → Late → Absent → Present**. Every click saves the change to browser storage.
- Weekly attendance percentage = (Present + Late) / total recorded sessions × 100. The daily segmented bars distinguish Present, Late and Absent with green, amber and red.
- The weekly rate, donut chart, weekday bars, student attendance percentages, Overview trend, and Reports attendance section all read from the same attendance register. No fixed chart data is used for weekly attendance.
- **Learning progress** is a separate metric from **attendance**. Marking a student absent changes attendance measures, not their course completion progress.
- If replacing an earlier version, extract this ZIP into its own folder and force-reload the browser. Previously saved data in the same local origin stays available unless manually reset.


## Final teaching launcher / port isolation (2026-11-13)

- **Academic Command Center** opens on **http://127.0.0.1:8768/**. The other projects use separate ports (Tech Store 8765, Learning Hub 8766, Academic Command Center 8768).
- `START_WINDOWS.bat` now runs its server **in the current command window**, rather than detaching a background `cmd /k` process. Stop with Ctrl+C or close that specific server window.
- The browser opens only after the server binds successfully. If that port is occupied, the launcher prints a clear error rather than showing a different project.
- Always extract the ZIP to its own folder. Do not run batches from within the ZIP preview or overwrite another project's files.
- Illustrative assignment submission counts are aligned to the sample student roster; browser-saved data will be normalized on the next edit/save. Reset sample data in Settings to apply the corrected initial dataset if you used an older version.
