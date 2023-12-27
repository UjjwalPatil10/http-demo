import APIS from "../../api/APIS";
import endpoints from "../../api/endpoints";

class UserService {
  static createUser(user) {
    return APIS.post(endpoints?.api?.users?.create, user);
  }
  static updateUser(user, id) {
    return APIS.put(endpoints?.api?.users?.update + id, user);
  }
  static deleteUser(user, id) {
    return APIS.delete(endpoints?.api?.users?.delete + id);
  }
  static getOneUser(user, id) {
    return APIS.get(endpoints?.api?.users?.getOne + id, user);
  }
  static getAllUsers() {
    return APIS.get(endpoints?.api?.users?.getAll);
  }
}

export default UserService;
