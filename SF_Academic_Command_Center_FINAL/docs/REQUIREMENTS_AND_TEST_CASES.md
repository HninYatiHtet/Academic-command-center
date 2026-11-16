# SF Academic Command Center — Software Requirements & Test Cases

**Project:** Strategy First Academic Management Dashboard  
**Developer:** Ko Kyi Phyu Aung  
**Email:** kyiphyuaung@strategyfirst.edu.mm  
**Stack:** HTML5, CSS3, Bootstrap 5, Vanilla JavaScript, Local Storage

## 1. Project description

The website brings academic information into a single interface for viewing and updating student records, programme listings, attendance statuses, assignments, timetables and operational reports. It demonstrates how a modern academic dashboard can prioritise clarity, navigation, consistent components, responsive layouts and usable interactions.

### 1.1 Aims

- Provide a consistent interface for managing common academic records.
- Help users view current information and take routine actions without navigating to unrelated systems.
- Demonstrate UI patterns including dashboard cards, sidebar navigation, tables, forms, filtering, modal dialogs and charts.
- Support both desktop and mobile layouts with accessible interaction patterns.

### 1.2 Scope

**Included:** academic dashboard UI, sample data, student CRUD, programme creation, attendance updates, assignment management, timetable creation/deletion, filters, search, local reports, offline-first assets, themes, responsive layouts and animations.

**Excluded:** login/authentication, real student records, server databases, multi-user collaboration, role-based access, payment processing, actual assignment file upload or grading, messaging integrations, institutional data synchronisation and production deployment.

**Assumptions:** A modern browser with JavaScript enabled; user accepts local-only storage and uses fictional sample records; no internet access is required after extraction.

**Constraints:** Local Storage capacity and browser privacy modes; single-device persistence only; live attendance trend; no server-side validation, audit history, or encryption of saved records.

## 2. Functional requirements

| ID | Requirement | Interface / Verification |
|---|---|---|
| FR-01 | Display an overview with student, programme, attendance and assignment KPIs. | Overview |
| FR-02 | Display programme counts and student status visualisations. | Overview |
| FR-03 | Navigate between main dashboard sections using a sidebar. | Global navigation |
| FR-04 | Collapse navigation into a mobile drawer on small screens. | Mobile sidebar |
| FR-05 | Search student records by name, student ID, email or programme. | Students |
| FR-06 | Filter students by enrolment status. | Students |
| FR-07 | Create a new student with validated form fields. | Students → Add student |
| FR-08 | Display, edit and remove an existing student record. | Students → View / Edit / Delete |
| FR-09 | Display the programme catalog and filter by category. | Programmes |
| FR-10 | View programme details and assigned students. | Programmes → Explore |
| FR-11 | Create a programme with course code, instructor, duration and description. | Programmes → New programme |
| FR-12 | Change weekly attendance statuses among Present, Late and Absent; immediately update attendance rates, charts, weekday bars and student attendance values. | Attendance / Overview / Reports |
| FR-13 | Display assignments with status, due date, details and recorded submission counts. | Assignments |
| FR-14 | Create a new assignment with title, programme, deadline and instructions. | Assignments → Create |
| FR-15 | Update assignment submission counters and open/closed status. | Assignments → Manage |
| FR-16 | View weekly sessions with start/end times, instructor and room. | Timetable |
| FR-17 | Add or remove a scheduled class session. | Timetable |
| FR-18 | Export student, attendance and assignment records to CSV. | Reports / export buttons |
| FR-19 | Export the workspace dataset as JSON. | Settings / reports |
| FR-20 | Toggle and retain dark/light appearance. | Global theme / settings |
| FR-21 | Enable/disable animation effects and retain the preference. | Global motion / settings |
| FR-22 | Find pages, students and programmes using a keyboard-invoked search dialog. | Ctrl/Cmd + K |
| FR-23 | Restore the original sample dataset with an explicit confirmation. | Settings |
| FR-24 | Keep edited records between reloads in browser Local Storage. | Global persistence |

## 3. Non-functional requirements

| ID | Quality attribute | Proposed acceptance criterion |
|---|---|---|
| NFR-01 | Responsiveness | Avoid page-level horizontal scrolling at 390px, 768px and 1440px, except deliberately scrollable data tables. |
| NFR-02 | Usability | Persistent sidebar and clear page headings; add/edit actions discoverable without manual documentation. |
| NFR-03 | Accessibility | Keyboard navigation, visible focus, semantic buttons and labelled inputs; support Escape in dialogs. |
| NFR-04 | Motion accessibility | Disable/reduce effects through settings and respect `prefers-reduced-motion`. |
| NFR-05 | Consistency | Reuse colours, typographic hierarchy, spacing, buttons, cards, states and form elements throughout pages. |
| NFR-06 | Performance | No frontend framework, remote font service, external icon library, or runtime CDN dependencies. |
| NFR-07 | Availability | Static interface and data should operate without internet connectivity. |
| NFR-08 | Data integrity | Form validation for required fields and numerical ranges. |
| NFR-09 | Data persistence | Changes survive page refresh in the same browser unless storage is cleared/reset. |
| NFR-10 | Security awareness | Do not claim that local-only records are authenticated or suitable for sensitive data. |
| NFR-11 | Maintainability | Separate HTML shell, CSS design system, seed data and JavaScript application logic. |
| NFR-12 | Compatibility | Target modern Chromium, Edge, Firefox and Safari browsers; browser-specific checks remain recommended. |

## 4. Use cases for student design exercises

| Use case | Actor | Preconditions | Main flow | Alternative flow |
|---|---|---|---|---|
| Register student | Academic staff | Dashboard open | Open Add Student → fill valid fields → Save → record appears | Invalid/missing data → browser validation prevents save |
| Manage attendance | Academic staff | Student roster exists | Open Attendance → click P/L/A cell → status updates | Record not found → no update |
| Create assignment | Lecturer | Programme exists | Open Assignments → Create → enter title and due date → publish | Missing instructions → cannot submit |
| Schedule session | Academic staff | Programme exists | Open Timetable → Add Session → choose weekday/time → save | End time before start → reject |
| Export report | Academic staff | Records exist | Open Reports → select CSV export → file downloads | No records → header-only CSV |

## 5. Suggested classes for UML exercises

The following are **design models**, not JavaScript class declarations in the current implementation:

- `Student(studentId, name, email, programmeId, status, progress)`
- `Programme(programmeId, code, title, tutor, capacity)`
- `Assignment(assignmentId, title, programmeId, dueDate, status)`
- `AttendanceRecord(studentId, weekday, status)`
- `TimetableSession(sessionId, programmeId, weekday, startTime, endTime, room)`

Relationships to discuss: a Programme has many Students; a Programme has many Assignments and TimetableSessions; a Student has attendance records. In a real database application, these would require proper relational storage and backend validation.

## 6. Test cases

| ID | Scenario | Input / Action | Expected outcome |
|---|---|---|---|
| TC-01 | Initial screen | Open `index.html` | Overview, navigation, logo and KPI widgets render |
| TC-02 | Main navigation | Click each sidebar section | Correct page content and heading render |
| TC-03 | Student creation | Enter valid student name/email | New row appears in roster |
| TC-04 | Student validation | Leave email blank | Form prevents submission |
| TC-05 | Student editing | Change status to On leave | Directory shows updated status |
| TC-06 | Student deletion | Confirm removal | Record removed from roster |
| TC-07 | Student search | Enter a matching student name | Filtered results only |
| TC-08 | Programme creation | Add unique code and required fields | New programme card appears |
| TC-09 | Duplicate programme | Use an existing code | Warning, no duplicate created |
| TC-10 | Attendance update | Click Present twice (Late, then Absent) | Cell and live weekly KPI, donut, weekday segmented bar and student attendance percentage reflect the change |
| TC-11 | Assignment creation | Submit title, programme and due date | New assignment card appears |
| TC-12 | Assignment management | Increase submission count | Value increases up to total capacity |
| TC-13 | Session creation | End time after start | New session appears in weekday column |
| TC-14 | Invalid session time | End time before start | Warning and no session created |
| TC-15 | Session removal | Confirm remove | Session disappears |
| TC-16 | CSV exports | Click Student / Attendance / Assignment export | A corresponding CSV file is created |
| TC-17 | Theme persistence | Toggle theme and refresh | Previous theme is restored |
| TC-18 | Motion controls | Disable motion | Animations become effectively disabled |
| TC-19 | Workspace search | Press Ctrl/Cmd + K and type a name | Matching workspace results appear |
| TC-20 | Reset records | Confirm sample data restoration | Modified records revert to sample records |
| TC-21 | Mobile sidebar | Open on 390px screen, tap menu | Drawer opens, navigation works, drawer closes |
| TC-22 | Desktop overflow | Open at 1440px | No page-level horizontal overflow |

These are intended as a test matrix. Results should be recorded in a separate test execution report after running the project in the target environment.

## 7. Evaluation and further development

### Strengths

- Distinct, responsive academic dashboard design with accessible navigation patterns.
- Modular pages, interaction feedback and consistent visual design.
- Real local data editing, search, filtering, exports and preference persistence.
- Offline assets and simple setup support hands-on practice.

### Limitations

- Local-only storage cannot securely manage personal records or support multiple users.
- Weekly attendance metrics and weekday charts are derived from the editable attendance register; the data itself is illustrative.
- No real authentication, server-validated permissions, file management or audit trails.
- Attendance covers a single sample five-day week.

### Future improvements

- Implement a backend (e.g. Python FastAPI / Django or PHP Laravel) with a database.
- Add secure identity, role-based permissions, auditing and protected file storage.
- Replace sample records with approved institutional test data, and add programme enrolment rules.
- Implement multi-week attendance history, assessment rubric/grading and APIs.
- Conduct usability, keyboard, accessibility and device testing with real users.

---

Developed by **Ko Kyi Phyu Aung** · **kyiphyuaung@strategyfirst.edu.mm**

### Attendance regression checks

| ID | Scenario | Expected outcome |
|---|---|---|
| TC-23 | Toggle Present → Late | Present count falls, Late count rises; participation rate does not fall because Late counts as attending |
| TC-24 | Toggle Late → Absent | Weekly KPI and donut rate decrease; matching day bar and student attendance value update immediately |
| TC-25 | Navigate to Overview and Reports | Live weekly trend and weekday bars reflect updated register values |
| TC-26 | Reload browser | Saved attendance status and calculated charts persist |
| TC-27 | Change one student's attendance | Their course learning progress percentage remains unchanged |
