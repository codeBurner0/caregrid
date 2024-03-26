const mongoose=require('mongoose');
const validator=require('validator')
const hospitalSchema=new mongoose.Schema({
      hospitalId: {
          type: string,
          description: "Unique identifier for the hospital",
          minLength: 1,
          required:true
        },
        hospitalName: {
          type: string,
          description: "The name of the hospital",
          minLength: 1,
          required:true
        },
        email: {
          type: string,
          format: email,
          description: "Hospital's contact email address",
          required:true
        },
        password: {
          type: string,
          format: password,
          description: "Password for secure access",
          minLength: 6,
          required:true
        },
        phoneNumber: {
          type: string,
          description: "Hospital's contact phone number",
          pattern: '^\\d{10}$'
        },
        address: {
          type: string,
          description: "Hospital's physical address",
          required:true
        },
        city: {
          type: string,
          description: "City where the hospital is located",
          required:true
        },
        state: {
          type: string,
          description: "State where the hospital is located",
          required:true
        },
        zipCode: {
          type: string,
          description: "Postal code of the hospital's location",
          pattern: "^\\d{5}(-\\d{4})?$"
        },
        country: {
          type: string,
          description: "Country where the hospital is located",
          required:true
        }
        // Additional fields can be added as needed
      },
);
  