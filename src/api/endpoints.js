export default {
  // this is server related configuration if our server is change then we come here and
  // make changes and we also take json in that we don't need to rebuild,reconstruct json is recommended
  serverBaseURL: "http://localhost:9999",
  api: {
    users: {
      //here don't need to add id we just pass data here
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getOne: "/users",
      getAll: "/users",
    },
  },
};
