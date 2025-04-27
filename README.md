# PatientAppointment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.
It is made totally using stand alone components.
For styling, Angular Material and Tailwind CSS is used.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## AI Tools & Assistance
- Gemini AI, Chat GPT:
For translation of what is written in the image, brainstorming, general question/answers and for pair programming.
Gemini AI is good at syntax, becuase it has access to latest data
Chat GPT is good at providing basic layouts and implementation without errors
So I used Chat GPT to get a component first, then I used Gemini AI to fix minor issues. Finally I checked the output to confirm.
Chat GPT makes mistakes with latest syntax of Angular, but Gemini is aware of it, so it can convert old syntax to new.

## Flow
src/
└── app/
    ├── dashboard/
    │   ├── dashboard.component.ts
    │   ├── dashboard.component.html
    │   ├── dashboard.component.css
    │   ├── top-bar/
    │   │   ├── top-bar.component.ts
    │   │   ├── top-bar.component.html
    │   │   ├── top-bar.component.css
    │   ├── navigation-bar/
    │   │   ├── navigation-bar.component.ts
    │   │   ├── navigation-bar.component.html
    │   │   ├── navigation-bar.component.css
    │   ├── worklist/
    │   │   ├── worklist.component.ts
    │   │   ├── worklist.component.html
    │   │   ├── worklist.component.css
    │   │   ├── worklist-item/
    │   │       ├── worklist-item.component.ts
    │   │       ├── worklist-item.component.html
    │   │       ├── worklist-item.component.css
    │   ├── sidebar/
    │       ├── sidebar.component.ts
    │       ├── sidebar.component.html
    │       ├── sidebar.component.css
    │       ├── shortcuts/
    │       │   ├── shortcuts.component.ts
    │       │   ├── shortcuts.component.html
    │       │   ├── shortcuts.component.css
    │       ├── recent-patients/
    │           ├── recent-patients.component.ts
    │           ├── recent-patients.component.html
    │           ├── recent-patients.component.css
    |
    ├──PatientVisitFormComponent (Main Container)
    │
    ├── PatientDetailsFormComponent
    │   └─ Inputs for:
    │        - Full name
    │        - Date of birth
    │        - Patient ID
    │
    ├── VisitDetailsFormComponent
    │   └─ Inputs for:
    │        - Event type (Tapahtuman tyyppi)
    │        - Visit reasons (Käynnin syyt)
    │        - Additional notes (Lisähuomiot)
    │
    ├── StatusSelectorComponent
    │   └─ Radio buttons for:
    │        - Luonnos, Valmis, Hyväksytty
    │
    ├── DoctorAppointmentInfoComponent
    │   └─ Fields for:
    │        - Doctor name (readonly)
    │        - Appointment date/time (readonly, editable icon)
    │
    └── FormActionsComponent
        └─ Buttons:
            - "Luo tapahtuma" (Create Event)
            - "Sulje" (Close)
