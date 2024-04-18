const shopFields = {
  name: "",
  username: "",
  password: "",
  email: "",
};

const companyWebPageFields ={
  logo: "",
  banner: "",
  cover: "",
}

const companyFields = {
  phone: "",
  address: "",
  website: "",
  description: "",
  webpage: companyWebPageFields,
  language: [],
  currency: "",
  category_status: ""
}

export const shopModel = {
    id: "",
    shop: shopFields,
    company_attrs: companyFields,
    members:  [],
    inputs: [],
    carts: [],
    reviews: [],
    settings:  {},
    timestamp: "",
}