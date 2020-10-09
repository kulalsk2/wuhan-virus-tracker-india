{
  // data = [
  //   { name: "Total", lat: 24.070541, long: 83.003948 },
  //   { name: "Maharashtra", lat: 19.25023195, long: 73.16017493 },
  //   { name: "Andhra Pradesh", lat: 14.7504291, long: 78.57002559 },
  //   { name: "Tamil Nadu", lat: 12.92038576, long: 79.15004187 },
  //   { name: "Karnataka", lat: 12.57038129, long: 76.91999711 },
  //   { name: "Uttar Pradesh", lat: 27.59998069, long: 78.05000565 },
  //   { name: "Delhi", lat: 28.6699929, long: 77.23000403 },
  //   { name: "West Bengal", lat: 22.58039044, long: 88.32994665 },
  //   { name: "Odisha", lat: 20.94092, long: 84.803467 },
  //   { name: "Telangana", lat: 17.123184, long: 79.208824 },
  //   { name: "Bihar", lat: 25.78541445, long: 87.4799727 },
  //   { name: "Assam", lat: 26.244156, long: 92.537842 },
  //   { name: "Kerala", lat: 8.900372741, long: 76.56999263 },
  //   { name: "Gujarat", lat: 22.309425, long: 72.13623 },
  //   { name: "Rajasthan", lat: 26.44999921, long: 74.63998124 },
  //   { name: "Haryana", lat: 28.45000633, long: 77.01999101 },
  //   { name: "Madhya Pradesh", lat: 21.30039105, long: 76.13001949 },
  //   { name: "Punjab", lat: 31.51997398, long: 75.98000281 },
  //   { name: "Chhattisgarh", lat: 21.295132, long: 81.828232 },
  //   { name: "Jharkhand", lat: 23.80039349, long: 86.41998572 },
  //   { name: "Jammu and Kashmir", lat: 34.29995933, long: 74.46665849 },
  //   { name: "Uttarakhand", lat: 30.32040895, long: 78.05000565 },
  //   { name: "Goa", lat: 15.491997, long: 73.81800065 },
  //   { name: "Puducherry", lat: 11.93499371, long: 79.83000037 },
  //   { name: "Tripura", lat: 23.83540428, long: 91.27999914 },
  //   { name: "Himachal Pradesh", lat: 31.10002545, long: 77.571167 },
  //   { name: "Chandigarh", lat: 30.71999697, long: 77.16659704 },
  //   { name: "Manipur", lat: 24.79997072, long: 93.95001705 },
  //   { name: "Arunachal Pradesh", lat: 27.10039878, long: 93.61660071 },
  //   { name: "Nagaland", lat: 25.6669979, long: 94.11657019 },
  //   { name: "Meghalaya", lat: 25.57049217, long: 91.8800142 },
  //   { name: "Ladakh", lat: 34.209515, long: 77.615112 },
  //   { name: "Andaman and Nicobar Islands", lat: 11.66702557, long: 92.73598262 },
  //   {
  //     name: "Dadra and Nagar Haveli and Daman and Diu",
  //     lat: 20.26657819,
  //     long: 73.0166178,
  //   },
  //   { name: "Sikkim", lat: 27.3333303, long: 88.6166475 },
  //   { name: "Mizoram", lat: 23.71039899, long: 92.72001461 },
  //   { name: "State Unassigned", lat: 0, long: 0 },
  //   { name: "Lakshadweep", lat: 10.56257331, long: 72.63686717 },
  // ];
}

{
  // data2 = data1.map((state) => {
  //   return { statecode: state.statecode, name: state.state };
  // });
}
{
  // let data3 = [];
  // for (let i = 0; i < data2.length; i++) {
  //   for (let j = 0; j < data.length; j++) {
  //     if (data2[i].name == data[j].name) {
  //       let tmp = {
  //         ...data2[i],
  //         lat: data[j].lat,
  //         long: data[i].long,
  //       };
  //       data3.push(tmp);
  //     }
  //   }
  // }
}

data4 = [
  { statecode: "TT", name: "Total", lat: 24.070541, long: 83.003948 },
  {
    statecode: "MH",
    name: "Maharashtra",
    lat: 19.25023195,
    long: 73.16017493,
  },
  {
    statecode: "AP",
    name: "Andhra Pradesh",
    lat: 14.7504291,
    long: 78.57002559,
  },
  {
    statecode: "TN",
    name: "Tamil Nadu",
    lat: 12.92038576,
    long: 79.15004187,
  },
  {
    statecode: "KA",
    name: "Karnataka",
    lat: 12.57038129,
    long: 76.91999711,
  },
  {
    statecode: "UP",
    name: "Uttar Pradesh",
    lat: 27.59998069,
    long: 78.05000565,
  },
  {
    statecode: "DL",
    name: "Delhi",
    lat: 28.6699929,
    long: 77.23000403,
  },
  {
    statecode: "WB",
    name: "West Bengal",
    lat: 22.58039044,
    long: 88.32994665,
  },
  { statecode: "OR", name: "Odisha", lat: 20.94092, long: 84.803467 },
  {
    statecode: "TG",
    name: "Telangana",
    lat: 17.123184,
    long: 79.208824,
  },
  {
    statecode: "BR",
    name: "Bihar",
    lat: 25.78541445,
    long: 87.4799727,
  },
  { statecode: "AS", name: "Assam", lat: 26.244156, long: 92.537842 },
  {
    statecode: "KL",
    name: "Kerala",
    lat: 8.900372741,
    long: 76.56999263,
  },
  { statecode: "GJ", name: "Gujarat", lat: 22.309425, long: 72.13623 },
  {
    statecode: "RJ",
    name: "Rajasthan",
    lat: 26.44999921,
    long: 74.63998124,
  },
  {
    statecode: "HR",
    name: "Haryana",
    lat: 28.45000633,
    long: 77.01999101,
  },
  {
    statecode: "MP",
    name: "Madhya Pradesh",
    lat: 21.30039105,
    long: 76.13001949,
  },
  {
    statecode: "PB",
    name: "Punjab",
    lat: 31.51997398,
    long: 75.98000281,
  },
  {
    statecode: "CT",
    name: "Chhattisgarh",
    lat: 21.295132,
    long: 81.828232,
  },
  {
    statecode: "JH",
    name: "Jharkhand",
    lat: 23.80039349,
    long: 86.41998572,
  },
  {
    statecode: "JK",
    name: "Jammu and Kashmir",
    lat: 34.29995933,
    long: 74.46665849,
  },
  {
    statecode: "UT",
    name: "Uttarakhand",
    lat: 30.32040895,
    long: 78.05000565,
  },
  { statecode: "GA", name: "Goa", lat: 15.491997, long: 73.81800065 },
  {
    statecode: "PY",
    name: "Puducherry",
    lat: 11.93499371,
    long: 79.83000037,
  },
  {
    statecode: "TR",
    name: "Tripura",
    lat: 23.83540428,
    long: 91.27999914,
  },
  {
    statecode: "HP",
    name: "Himachal Pradesh",
    lat: 31.10002545,
    long: 77.571167,
  },
  {
    statecode: "CH",
    name: "Chandigarh",
    lat: 30.71999697,
    long: 77.16659704,
  },
  {
    statecode: "MN",
    name: "Manipur",
    lat: 24.79997072,
    long: 93.95001705,
  },
  {
    statecode: "AR",
    name: "Arunachal Pradesh",
    lat: 27.10039878,
    long: 93.61660071,
  },
  {
    statecode: "NL",
    name: "Nagaland",
    lat: 25.6669979,
    long: 94.11657019,
  },
  {
    statecode: "ML",
    name: "Meghalaya",
    lat: 25.57049217,
    long: 91.8800142,
  },
  { statecode: "LA", name: "Ladakh", lat: 34.209515, long: 77.615112 },
  {
    statecode: "AN",
    name: "Andaman and Nicobar Islands",
    lat: 11.66702557,
    long: 92.73598262,
  },
  {
    statecode: "DN",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    lat: 20.26657819,
    long: 73.0166178,
  },
  {
    statecode: "SK",
    name: "Sikkim",
    lat: 27.3333303,
    long: 88.6166475,
  },
  {
    statecode: "MZ",
    name: "Mizoram",
    lat: 23.71039899,
    long: 92.72001461,
  },
  { statecode: "UN", name: "State Unassigned", lat: 0, long: 0 },
  {
    statecode: "LD",
    name: "Lakshadweep",
    lat: 10.56257331,
    long: 72.63686717,
  },
];
console.log(data3.length);
