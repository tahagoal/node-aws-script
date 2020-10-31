var AWS = require('aws-sdk');

const awsParams = {
  region: 'us-east-1',
  credentials: {
    secretAccessKey: 'JlREQ6wvn412xmqb/q6Kj91b0Ml6q4DY7iGsTjbx', 
    accessKeyId: 'ASIASTSREL746VBKYAS4', 
    sessionToken: 'IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDvb661Do4Ap0qexL/Y8YQM9iRlBYxKmSZw+6Hh2FgeWAIgJ6R208T5M0sBYa4nOyAkSDbVhzUk0tvPItXcMci13M0qtgIIfhAAGgwxNzk0ODUwNDA2MzMiDJuKmN7cG6ggKw37mCqTAusqDk/5bBJ82iWCk/PBNTJx1oInOmyhdy+m5SHNeNCtJ91FCdB/ZCaLKFnqS0sYaqyrxrPJBozEyhPuyxQ7Kik1hsxh1sp2VUKQADMckWo6xq+YMPDgdyFxSvCaoSN84wxTDMpDjPpqjjpGUu5rds6T/kVTFXjDQkaSS4x+485pVnV5vNII+KKPr8XyBUtfvB3doc4wTGXyRWO3+KRNzl7IWH23CIMkamj7Q1iCpr9M6X0Syok/zGMJ/UQ1z5KH456eEZEr4DUG2PCVfJsJ7UlBIVMSNDnuiNb9/gbn7smBEU71AaBdsf3JvJvjkOW+ZDMWtyR5v/g5iERNqW24oJ9UIBclPmuV9S5GfpTXlpUAv5WPMMuh9/wFOqMBogzw8PhDnHSlEooSQnErtYTBQANmWrm/Yy4QWGlV8J8wTqJe/PAfh2tUFbtqMySEKL39EhNl/rLTFfyrC8MZEOI+y9lpR2uL6SNBXan02Sww8G8Q0PPC9GRaciDZk0CdNfMOcJj2bbxM0lP/VMFqltdv3mKNz5cGDZwF39EzGE+x4etTnpWYP+jsTg5NzOsrzOMHHM/TlbCjFY9PePsZjezu3Q=='
  }
}

// const awsParams = {
//   region: 'us-east-1',
//   credentials: {
//     secretAccessKey: 'fa/7Ji8bHAREMalZK6ihzFvBJvKYzCpsGYf4jtK7', 
//     accessKeyId: 'ASIASTSREL74VJ3Y62G4', 
//     sessionToken: 'IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDfVrjehY5NM88q+kr6IvXDBeJlicGqC63tb59m/hZh2wIgXh7rL2CE5EI/Qu6UMYhZSjyh51v4brVCPYojp7a6hnkqtgIIfhAAGgwxNzk0ODUwNDA2MzMiDNOCMtuqTSuzyIx9oCqTAjTKpSXQgp5DnaIcBwDUIsyM26lvQ5gtvRGXlh5851tffGowWpWGN0dTDZDWnx4p+UWipWcKLW+VbanFamTZ5tyvzD+OqfBcXVEO90UalS/4H5CeVN/m9cZqhnv2vuN7cant+8pVBUFSpZoWlLc7W2u5FwE8oZo2jy2NHzxU9JowB0nGl1+cQ3hyvvmBUQZFTNZKbbFX7MLEk3/IPhbTLQ4+6EThad2+gkf1RGa5cGM5+rW388wwBi3/BMu+LQfdx//GrwIMhKi8K/GtBSt1JdsDsYjpnwr986aFLNlDmsOftbq2Y8TKgtY4xvRZrdvk83/gMPtahdyylbMIrXS06VQA8GgLsBpcCAOynlQ7RTiQEgzdMNmi9/wFOqMB1azFVHBnwCyIq9QsJYOitHpBO/OlRS7lkQBmzUthanqb8FgO0CUB7WWxr+mM0y71QyslTA8+2PZRWgFaPWBktiLgF6X7YX1MrY8qUeABhhsZp+7hXBDT6EQuBsk6y8TICb8U+i8+YGcLcsfjXJk415vScCkGSEOT9W97Cd0OH9E3L98TTQDfQcFjJnVLEa72nX44Dg1saTvwYLfIhkIm8F2CmQ=='
//   }
// }

AWS.config = awsParams;

const pinpoint = new AWS.Pinpoint();

const params = {
  ApplicationId: 'd706823e711e4e7ea413525a153978a8' /* required */
};

pinpoint.getChannels(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


const [,, ...args] = process.argv

console.log(`Hello World ${args}`)