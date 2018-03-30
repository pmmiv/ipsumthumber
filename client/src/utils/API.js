import axios from "axios";

export default {
  // Gets all books
  getIpsums: function() {
    return axios.get("/api/ipsums");
  },

  // Gets the ipsum with the given id
  getIpsum: function(id) {
    return axios.get("/api/ipsums/" + id);
  },

  getFavorites: function(query) {
    return axios.get("/api/ipsums/favorites", query)
  },

  //These will be for comments when I get the ipsums up and running.
  // Marks the selected entry as a favorite
  favorite: function(id, query) {
    return axios.put("/api/ipsums/" + id, query);
  },
  
  // Saves a comment to the database
  saveComment: function(ipsumData, id) {
    return axios.post("/api/comment/"+id, ipsumData);
  }
};
