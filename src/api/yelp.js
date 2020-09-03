import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer HKJ128YwWpAswwNgkdhf0SAnpYImAlcRe9qpHwgt4IAohaCU8ZNYAyx-eQHoADRRZ2QlhWVXWPcbBU2D1Mk_uKYwHI32gvXVsJUsyXuI8gm7Mt_YZYmQP9dSUbNLX3Yx",
  },
});
