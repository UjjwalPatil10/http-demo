import APIS from "../../api/APIS";
import endpoints from "../../api/endpoints";

class UserService {
  // static are the methods in that we don't need of object for calling tht method
  static createUser(user) {
    return APIS.post(endpoints?.api?.users?.create, user);
  } //createUser
  static updateUser(id, user) {
    return APIS.put(endpoints?.api?.users?.update + id, user); //here we do +id because we give / in endpoints
  } //updateUser
  static deleteUser(id) {
    return APIS.delete(endpoints?.api?.users?.delete + id); //here we do +id because we give / in endpoints
  } //deleteUser
  static getOneUser(id) {
    return APIS.get(endpoints?.api?.users?.getOne + id); //here we do +id because we give / in endpoints
  } //getOneUser
  static getAllUsers(user) {
    return APIS.get(endpoints?.api?.users?.getAll, user); //here we do +id because we give / in endpoints
  } //getAllUsers
}

export default UserService;
