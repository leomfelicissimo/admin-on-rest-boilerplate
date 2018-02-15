import UserResource from './users/UserResource';
import PermissionResource from './permissions/PermissionResource';
import ProfileResource from './profiles/ProfileResource';
import StoreResource from './stores/StoreResource';
import SectorResource from './stores/sectors/SectorResource';
import GroupResource from './stores/groups/GroupResource';
import StoreTypeResource from './stores/storeTypes/StoreTypeResource';

const AdminResources = [
  UserResource(),
  ProfileResource(),
  StoreResource(),
  PermissionResource(),
  SectorResource(),
  GroupResource(),
  StoreTypeResource(),
]

export {
  AdminResources
}
