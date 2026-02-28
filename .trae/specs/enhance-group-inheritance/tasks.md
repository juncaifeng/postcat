# Tasks

- [x] Task 1: Update Group Data Model
  - [ ] Update `src/browser/src/app/services/storage/db/models/index.ts` to include `requestParams` (containing `headerParams`, `queryParams`, `restParams`).
  - [ ] Update `src/browser/src/app/services/storage/db/schema/group.schema.json` to allow `requestParams`.
  - [ ] Update `src/browser/src/app/services/storage/db/dto/group.dto.ts` to include `requestParams`.

- [ ] Task 2: Implement Group Header Edit UI
  - [ ] Import `ApiEditModule` or `SharedModule` into `src/browser/src/app/pages/workspace/project/api/group-edit/group.module.ts`.
  - [ ] Modify `src/browser/src/app/pages/workspace/project/api/group-edit/group.component.html` to add a new tab "Request Headers".
  - [ ] Use `<eo-api-edit-form module="header">` component inside the tab to bind to `model.requestParams.headerParams`.
  - [ ] Ensure saving logic persists the new fields.

- [ ] Task 3: Implement Header Inheritance Logic
  - [ ] Update `src/browser/src/app/services/storage/db/services/apiData.service.ts` in `bulkReadDetail` method.
  - [ ] Implement logic to fetch parent group's `requestParams.headerParams`.
  - [ ] Merge parent headers into the API's `requestParams.headerParams`.
    - **Logic**: Parent headers are appended. If same name exists, child overrides parent (or merge? let's stick to append/override logic where child wins).
  - [ ] Ensure this logic is recursive (handles multi-level groups).

- [ ] Task 4: Verification
  - [ ] Create a group with a test header.
  - [ ] Create a child API.
  - [ ] Open the API test page and verify the header is present in the request.
