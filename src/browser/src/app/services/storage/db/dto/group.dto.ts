import { GroupModuleType, GroupType } from 'pc/browser/src/app/services/storage/db/models';
import { RequestParams } from 'pc/browser/src/app/services/storage/db/models/apiData';

export interface GroupDeleteDto {
  id?: number;
  projectUuid: string;
  workSpaceUuid: string;
}

export interface GroupCreateDto {
  name: string;
  type?: GroupType;
  module?: GroupModuleType;
  path?: string;
  depth?: number;
  parentId?: number;
  sort?: number;
  requestParams?: RequestParams;
  projectUuid?: string;
  workSpaceUuid?: string;
}
export interface GroupUpdateDto extends GroupCreateDto {
  id: number;
}
