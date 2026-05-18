# Requirements Document

## Introduction

This document defines the requirements for the "Continue with Session" feature, which provides returning users with a one-click resume button on the landing page. The feature persists the user's last branch and semester selection to localStorage and renders a styled button below the selector card for quick navigation back to their previous dashboard context.

## Glossary

- **Landing_Page**: The main entry page of the KTU Node application (`src/app/page.tsx`) containing the hero section with branch/semester selectors
- **Session_Hook**: The `useSessionPersistence` custom React hook responsible for reading, writing, and clearing session data from localStorage
- **Continue_Button**: The `ContinueSessionButton` component that renders the resume navigation button with dismiss functionality
- **Validator**: The `validateSession` function that checks stored data conforms to the expected schema
- **Saved_Session**: A data object containing a branch identifier and semester number representing the user's last selection
- **STORAGE_KEY**: The localStorage key (`"ktunode-session"`) under which session data is persisted
- **Branch_ID**: One of the valid branch identifiers: "cs", "ec", "me", "ce", "ee"
- **MagneticButton**: The existing reusable button component with blue gradient styling and magnetic hover effect

## Requirements

### Requirement 1: Session Persistence on Dashboard Navigation

**User Story:** As a returning user, I want my branch and semester selection saved when I navigate to the dashboard, so that I can quickly resume my previous context on my next visit.

#### Acceptance Criteria

1. WHEN a user selects a valid branch and semester and clicks "Open Dashboard", THE Session_Hook SHALL persist the Saved_Session to localStorage under the STORAGE_KEY as a JSON string containing the branch identifier and semester number
2. WHEN a user navigates to the dashboard and a valid Saved_Session exists in localStorage under the STORAGE_KEY, THE Session_Hook SHALL restore the branch and semester values from the stored JSON within 100ms of hook initialization
3. IF the user has not selected both a branch and a semester when "Open Dashboard" is triggered, THEN THE Landing_Page SHALL NOT persist any session data to localStorage
4. IF localStorage is unavailable or a write operation fails, THEN THE Session_Hook SHALL allow navigation to proceed without persisting session data and without displaying an error to the user
5. IF the Saved_Session in localStorage contains malformed JSON or a branch value not in the valid set or a semester value outside the 1-8 range, THEN THE Session_Hook SHALL discard the invalid entry from localStorage and proceed as if no prior session exists

### Requirement 2: Session Retrieval on Page Load

**User Story:** As a returning user, I want my previous selection detected when I visit the landing page, so that I can see the continue button without re-selecting my branch and semester.

#### Acceptance Criteria

1. WHEN the Landing_Page mounts on the client, THE Session_Hook SHALL read the Saved_Session from localStorage using the STORAGE_KEY and return the parsed object if it passes validation
2. WHEN valid session data exists in localStorage (a JSON object with a branch field matching one of the valid Branch_IDs and a semester field that is an integer between 1 and 8), THE Session_Hook SHALL return the Saved_Session object to the Landing_Page
3. WHEN no session data exists in localStorage, THE Session_Hook SHALL return null
4. WHILE the page is rendering on the server (SSR), THE Session_Hook SHALL return null without accessing browser APIs
5. IF localStorage contains data at the STORAGE_KEY that is malformed JSON or fails validation, THEN THE Session_Hook SHALL remove the corrupted entry and return null

### Requirement 3: Session Data Validation

**User Story:** As a developer, I want stored session data validated before use, so that corrupted or outdated data does not cause application errors.

#### Acceptance Criteria

1. THE Validator SHALL return true only when the branch field is a string matching one of the valid Branch_IDs ("cs", "ec", "me", "ce", "ee") and return false otherwise
2. THE Validator SHALL return true only when the semester field is an integer between 1 and 8 inclusive (rejecting floats, strings, and non-numeric types) and return false otherwise
3. WHEN localStorage value at STORAGE_KEY "ktunode-session" contains a string that cannot be parsed as JSON, THE Session_Hook SHALL remove the entry at that key and return null
4. WHEN localStorage value at STORAGE_KEY "ktunode-session" contains valid JSON that the Validator rejects, THE Session_Hook SHALL remove the entry at that key and return null
5. IF the stored data is null, undefined, an array, or any type other than a plain object, THEN THE Validator SHALL return false
6. IF the stored data object is missing the branch field or the semester field, THEN THE Validator SHALL return false

### Requirement 4: Continue Button Display

**User Story:** As a returning user, I want to see a clearly labeled continue button on the landing page, so that I can identify and resume my previous session at a glance.

#### Acceptance Criteria

1. WHEN a Saved_Session exists in localStorage containing both a non-empty Branch_ID and a semester number between 1 and 8, THE Continue_Button SHALL render immediately below the selector card within the hero section
2. THE Continue_Button SHALL display the label in the format "Continue with S{semester} {branch_short_label}" where semester is the integer semester number (1-8) and branch_short_label is the Branch_ID converted to uppercase (e.g., "Continue with S4 CS")
3. IF no Saved_Session exists in localStorage, or the Saved_Session is missing a Branch_ID or semester value, THEN THE Landing_Page SHALL NOT render the Continue_Button
4. THE Continue_Button SHALL use the MagneticButton component with the same blue gradient styling and magnetic hover effect as the "Open Dashboard" button
5. WHEN the Continue_Button is rendered, THE Continue_Button SHALL be visible without scrolling on viewports 768px wide or larger

### Requirement 5: Continue Button Navigation

**User Story:** As a returning user, I want to click the continue button and arrive at my previous dashboard context, so that I save time re-selecting my branch and semester.

#### Acceptance Criteria

1. WHEN a user clicks the Continue_Button, THE Landing_Page SHALL navigate to `/dashboard?branch={branch}&sem={semester}` using the stored Saved_Session values
2. THE Continue_Button SHALL include an ArrowRight icon from lucide-react to indicate navigation affordance
3. IF the Saved_Session contains a branch value not present in the valid Branch_IDs or a semester value outside the range 1-8, THEN THE Landing_Page SHALL NOT render the Continue_Button

### Requirement 6: Session Dismissal

**User Story:** As a user, I want to dismiss the continue button, so that I can make a fresh selection without being prompted by my previous choice.

#### Acceptance Criteria

1. THE Continue_Button SHALL include a dismiss icon button rendered as the X icon from lucide-react, positioned within the button with a minimum tap target size of 44x44 CSS pixels and an accessible label of "Dismiss session"
2. WHEN a user clicks the dismiss icon, THE Session_Hook SHALL remove the Saved_Session from localStorage by invoking clearSession()
3. WHEN a user clicks the dismiss icon, THE Continue_Button SHALL be removed from the display
4. WHEN a user clicks the dismiss icon, THE Continue_Button SHALL prevent the click from triggering navigation on the parent MagneticButton by stopping event propagation

### Requirement 7: Animated Entrance and Exit

**User Story:** As a user, I want the continue button to appear and disappear smoothly, so that the interface feels polished and does not cause jarring layout shifts.

#### Acceptance Criteria

1. WHEN the Continue_Button appears, THE Continue_Button SHALL animate from initial state {opacity: 0, y: 16, scale: 0.95} to {opacity: 1, y: 0, scale: 1} over a duration of 0.4 seconds using Framer Motion
2. WHEN the Continue_Button is dismissed, THE Continue_Button SHALL animate from {opacity: 1, y: 0, scale: 1} to exit state {opacity: 0, y: -8, scale: 0.95} over a duration of 0.4 seconds using AnimatePresence
3. THE Continue_Button entrance and exit animations SHALL use the cubic-bezier easing curve [0.16, 1, 0.3, 1]
4. WHILE the Continue_Button is animating in or out, THE Continue_Button SHALL not cause surrounding content to shift position or resize

### Requirement 8: Graceful Degradation

**User Story:** As a user on a restricted browser, I want the application to work normally even when localStorage is unavailable, so that the core functionality is never broken by this feature.

#### Acceptance Criteria

1. IF localStorage is unavailable (typeof window.localStorage throws or is undefined), THEN THE Session_Hook SHALL return null and the Continue_Button SHALL not appear
2. IF localStorage.getItem throws an error, THEN THE Session_Hook SHALL catch the error and return null without re-throwing
3. IF localStorage.setItem throws an error, THEN THE Session_Hook SHALL catch the error and allow the current user action (navigation) to complete without interruption
4. IF localStorage.removeItem throws an error, THEN THE Session_Hook SHALL catch the error and update component state to hide the Continue_Button regardless
