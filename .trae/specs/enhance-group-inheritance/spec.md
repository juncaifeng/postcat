# Enhance Group Inheritance Spec

## Why
Currently, API Groups only support authentication inheritance. Users need to set common headers (like `X-Device-ID`, `Cookie`, etc.) at the group level so that all child APIs automatically inherit these settings, reducing duplication and maintenance effort.

## What Changes
- **Data Model**:
  - Add `requestParams` (containing `headerParams`, `queryParams`, `restParams`) to the `Group` model.
- **UI**:
  - Add a "Request Headers" tab to the Group Edit page.
  - Integrate the `eo-api-edit-form` component to allow editing headers in Groups.
- **Logic**:
  - Implement recursive retrieval and merging of `headerParams` in `DbGroupService`.
  - Update `DbApiDataService` to merge group headers into API data during `bulkReadDetail`.

## Impact
- **Affected Specs**: Group management, API testing.
- **Affected Code**:
  - `src/browser/src/app/services/storage/db/models/index.ts` (Group Interface)
  - `src/browser/src/app/services/storage/db/schema/group.schema.json` (Validation)
  - `src/browser/src/app/pages/workspace/project/api/group-edit/group.component.html` (UI)
  - `src/browser/src/app/services/storage/db/services/group.service.ts` (Inheritance Logic)
  - `src/browser/src/app/services/storage/db/services/apiData.service.ts` (Data Merging)

## ADDED Requirements
### Requirement: Group Header Configuration
The system SHALL allow users to configure Request Headers in the Group Edit page.

#### Scenario: User adds a header to a group
- **WHEN** user opens Group Edit page
- **AND** navigates to "Request Headers" tab
- **AND** adds a header `X-Test: 1`
- **AND** saves the group
- **THEN** the group data is updated with `requestParams.headerParams`.

### Requirement: Header Inheritance
Child APIs (and sub-groups) SHALL inherit headers from their parent groups.

#### Scenario: API inherits group headers
- **GIVEN** a parent group has header `X-Group: A`
- **AND** a child API is inside this group
- **WHEN** the API is loaded for testing
- **THEN** the API's request headers include `X-Group: A`.

## MODIFIED Requirements
### Requirement: Group Edit UI
Modified to include a tab for editing request parameters (specifically headers).

### Requirement: API Data Loading
Modified to merge inherited headers from parent groups.
