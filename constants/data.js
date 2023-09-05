const apartmentData = [
    {
        id: '1',
        name: 'Brisa Villas',
        address: '1600 Valdora St, Davis, CA 95618',
        latitude: 38.538580,
        longitude: -121.723950
    },
    {
        id: '2',
        name: 'Oxford Parkside',
        address: '1424 Wake Forest Dr, Davis, CA 95616',
        latitude: 38.548240,
        longitude: -121.765790
    },
    {
        id: '3',
        name: 'Seville at Mace Ranch',
        address: '4501 Alhambra Dr, Davis, CA 95618',
        latitude: 38.559030,
        longitude: -121.696980
    },
    {
        id: '4',
        name: 'Ellington Apartment Homes',
        address: '4849 El Cemonte Ave, Davis, CA 95618',
        latitude: 38.550650,
        longitude: -121.691140
    },
    {
        id: '5',
        name: 'Avalon Apartments',
        address: '1617 Valdora St, Davis, CA 95618',
        latitude: 38.5380433,
        longitude: -121.7242379
    },
    {
        id: '6',
        name: 'Pinecrest Apartments',
        address: '920 Cranbrook Ct, Davis, CA 95616',
        latitude: 38.55942,
        longitude: -121.7405815
    },
    {
        id: '7',
        name: 'Sorrento Apartments',
        address: '1540 Valdora St, Davis, CA 95618',
        latitude: 38.5395534,
        longitude: -121.7240985
    },
    {
        id: '8',
        name: 'Octave',
        address: '1659 Drew Cir, Davis, CA 95618',
        latitude: 38.53789,
        longitude: -121.7269721
    },
    {
        id: '9',
        name: 'Sharps & Flats Apartment Homes',
        address: '1660 Drew Cir, Davis, CA 95618',
        latitude: 38.5381572,
        longitude: -121.7267762
    },
    {
        id: '10',
        name: 'Cottages on 5th',
        address: '500 Pole Line Rd, Davis, CA 95618',
        latitude: 38.548918,
        longitude: -121.726475
    },
    {
        id: '11',
        name: 'Renaissance Park Apartments',
        address: '3000 Lillard Dr, Davis, CA 95618',
        latitude: 38.543199,
        longitude: -121.71485
    },
    {
        id: '12',
        name: 'The Edge',
        address: '4005 Cowell Blvd, Davis, CA 95618',
        latitude: 38.5482009,
        longitude: -121.7030635
    },
    {
        id: '13',
        name: 'Tanglewood',
        address: '1880 Cowell Blvd, Davis, CA 95618',
        latitude: 38.5399214,
        longitude: -121.7296281
    },
    {
        id: '14',
        name: 'Parkside Apartments',
        address: '1420 F Street, Davis, CA 95616',
        latitude: 38.5572133,
        longitude: -121.7433308
    },
    {
        id: '15',
        name: 'Anderson Place Apartments',
        address: '1850 Hanover Drive, Davis, CA 95616',
        latitude: 38.5599344,
        longitude: -121.7561671
    },
    {
        id: '16',
        name: 'Sycamore Lane Apartments',
        address: '614 Sycamore Ln, Davis, CA 95616',
        latitude: 38.5476253,
        longitude: -121.7617337
    },
    {
        id: '17',
        name: 'Adobe At Evergreen Apartments',
        address: '1500 Shasta Dr, Davis, CA 95616',
        latitude: 38.560806,
        longitude: -121.772469
    },
    {
        id: '18',
        name: 'The Green at West Village',
        address: '2228 Tilia St, Davis, CA 95616',
        latitude: 38.5404132,
        longitude: -121.7710651
    },
    {
        id: '19',
        name: 'Sol at West Village',
        address: '1580 Jade St, Davis, CA 95616',
        latitude: 38.5408288,
        longitude: -121.771163
    },
    {
        id: '20',
        name: 'The Trees',
        address: '510 Lake Blvd, Davis, CA 95616',
        latitude: 38.5477347,
        longitude: -121.789198
    },
    {
        id: '21',
        name: 'Oakshade Commons',
        address: '2120 Cowell Blvd, Davis, CA 95618',
        latitude: 38.5402676,
        longitude: -121.7240232
    },
    {
        id: '22',
        name: 'Academy Lane Apartment Homes',
        address: '1124 F St #10, Davis, CA 95616',
        latitude: 38.5544505,
        longitude: -121.7424705
    },
    {
        id: '23',
        name: 'Cambridge House',
        address: '619 Pole Line Rd, Davis, CA 95618',
        latitude: 38.550677,
        longitude: -121.7275062
    },
    {
        id: '24',
        name: 'J Street Apartments',
        address: '1111 J St, Davis, CA 95616',
        latitude: 38.5560153,
        longitude: -121.7404666
    },
    {
        id: '25',
        name: 'Clearwater Apartments',
        address: '4141 Cowell Blvd, Davis, CA 95618',
        latitude: 38.5483203,
        longitude: -121.7014884
    },
    {
        id: '26',
        name: 'Westwood Apartment Townhomes',
        address: '800 Adams St, Davis, CA 95616',
        latitude: 38.5505612,
        longitude: -121.7688309
    },
    {
        id: '27',
        name: 'Alvarado Parkside Apartments',
        address: '520 Alvarado Ave, Davis, CA 95616',
        latitude: 38.561683,
        longitude: -121.751551
    },
    {
        id: '28',
        name: 'Lexington Apartments',
        address: '1100 Olive Dr, Davis, CA 95616',
        latitude: 38.5416209,
        longitude: -121.7372429
    },
    {
        id: '29',
        name: 'Redwood Tree Apartments',
        address: '607 E 8th St, Davis, CA 95616',
        latitude: 38.5512636,
        longitude: -121.7432119
    },
    {
        id: '30',
        name: 'University Square',
        address: '300 J St, Davis, CA 95616',
        latitude: 38.54565,
        longitude: -121.735813
    },
    {
        id: '31',
        name: 'Alvarado Sunset Apartments',
        address: '606 Alvarado Ave, Davis, CA 95616',
        latitude: 38.56159,
        longitude: -121.754108
    },
    {
        id: '32',
        name: 'Arlington Farm',
        address: '2901 Portage Bay W, Davis, CA 95616',
        latitude: 38.548366,
        longitude: -121.788455
    },
    {
        id: '33',
        name: 'The Arbors',
        address: '1280 Olive Dr, Davis, CA 95616',
        latitude: 38.5432936,
        longitude: -121.7332408
    },
    {
        id: '34',
        name: 'Sterling Pointe Apartments',
        address: '1805 Anderson Rd, Davis, CA 95616',
        latitude: 38.5592601,
        longitude: -121.7586198
    },
    {
        id: '35',
        name: 'Clubside Apartments',
        address: '1050 Lake Blvd, Davis, CA 95616',
        latitude: 38.552552,
        longitude: -121.787338
    },
    {
        id: '36',
        name: 'Woodside Apartments',
        address: '808 F St, Davis, CA 95616',
        latitude: 38.55206,
        longitude: -121.7419104
    },
    {
        id: '37',
        name: 'Aggie Square Apartments',
        address: '644 Alvarado Ave, Davis, CA 95616',
        latitude: 38.5620074,
        longitude: -121.7568819
    },
    {
        id: '38',
        name: 'Meadow Ridge',
        address: '4447 Cowell Blvd, Davis, CA 95618',
        latitude: 38.5481875,
        longitude: -121.6966166
    },
    {
        id: '39',
        name: 'Chaparral Apartments',
        address: '2689 Sycamore Ln, Davis, CA 95616',
        latitude: 38.5659874,
        longitude: -121.7660834
    },
    {
        id: '40',
        name: 'Wake Forest Apartments',
        address: '1313 Wake Forest Dr, Davis, CA 95616',
        latitude: 38.5481233,
        longitude: -121.7633866
    },
    {
        id: '41',
        name: 'DaVinci',
        address: '1666 Da Vinci Ct, Davis, CA 95618',
        latitude: 38.5375697,
        longitude: -121.7322771
    },
    {
        id: '42',
        name: 'Sundance Apartments',
        address: '510 Arthur St, Davis, CA 95616',
        latitude: 38.5470419,
        longitude: -121.7702967
    },
    {
        id: '43',
        name: 'Silverstone Apartments',
        address: '2400 Pole Line Rd, Davis, CA 95618',
        latitude: 38.564265,
        longitude: -121.730847
    },
    {
        id: '44',
        name: 'University Court',
        address: '515 Sycamore Ln, Davis, CA 95616',
        latitude: 38.5466208,
        longitude: -121.7618965
    },
    {
        id: '45',
        name: 'Suntree Apartments',
        address: '2033 F St, Davis, CA 95616',
        latitude: 38.5611514,
        longitude: -121.7449094
    },
    {
        id: '46',
        name: 'The Drake and Anderson Court Apartments',
        address: '1905 Anderson Rd, Davis, CA 95616',
        latitude: 38.5596626,
        longitude: -121.7586142
    },
    {
        id: '47',
        name: 'Fox Creek Apartments',
        address: '1515 Valdora St, Davis, CA 95618',
        latitude: 38.5397544,
        longitude: -121.7244715
    },
    {
        id: '48',
        name: 'Pennsylvania Place Apartments',
        address: '911 Pennsylvania Pl, Davis, CA 95616',
        latitude: 38.5515508,
        longitude: -121.7391948
    },
    {
        id: '49',
        name: 'La Salle Apartments',
        address: '880 Alvarado Ave, Davis, CA 95616',
        latitude: 38.5620357,
        longitude: -121.7612911
    },
    {
        id: '50',
        name: 'Lakeshore',
        address: '1175 Lake Blvd, Davis, CA 95616',
        latitude: 38.5532215,
        longitude: -121.7876752
    },
    {
        id: '51',
        name: 'Stratford Place Apartments',
        address: '745 F St, Davis, CA 95616',
        latitude: 38.5506952,
        longitude: -121.7420698
    },
    {
        id: '52',
        name: 'Le Tournesol',
        address: '2640 Portage Bay E, Davis, CA 95616',
        latitude: 38.5480115,
        longitude: -121.7826142
    },
    {
        id: '53',
        name: 'Eastlake',
        address: '1420 Lake Blvd, Davis, CA 95616',
        latitude: 38.5555232,
        longitude: -121.7872014
    },
    {
        id: '54',
        name: 'The U Apartments',
        address: '1175 Lake Blvd, Davis, CA 95616',
        latitude: 38.5488675,
        longitude: -121.7202493
    },
    {
        id: '55',
        name: 'Chestnut Place Apartments',
        address: '1175 Lake Blvd, Davis, CA 95616',
        latitude: 38.55382,
        longitude: -121.7317554
    },
    {
        id: '56',
        name: 'Casitas',
        address: '717 Alvarado Ave, Davis, CA 95616',
        latitude: 38.5621813,
        longitude: -121.758784
    },
    {
        id: '57',
        name: 'Sterling 5th Street',
        address: '2100 5th St, Davis, CA 95616',
        latitude: 38.549332,
        longitude: -121.724337
    },
    {
        id: '58',
        name: 'El Macero',
        address: '4735 Cowell Blvd, Davis, CA 95618',
        latitude: 38.5488292,
        longitude: -121.6934559
    },
    {
        id: '59',
        name: 'The Celeste',
        address: '3820 Chiles Rd, Davis, CA 95618',
        latitude: 38.5500571,
        longitude: -121.7050498
    },
    {
        id: '60',
        name: 'Marco at the Cannery',
        address: '2500 Cannery Loop, Davis, CA 95616',
        latitude: 38.5628997,
        longitude: -121.7388248
    },
    {
        id: '61',
        name: 'Ryder on Olive',
        address: '1133 Olive Dr, Davis, CA 95616',
        latitude: 38.542834,
        longitude: -121.7357573
    },
    {
        id: '62',
        name: 'Orchard Park Apartments',
        address: '5002 Orchard Park Cir, Davis, CA 95616',
        latitude: 38.545956,
        longitude: -121.764371
    },
    {
        id: '63',
        name: 'Saratoga West',
        address: '2121 Glacier Dr, Davis, CA 95616',
        latitude: 38.5594832,
        longitude: -121.7765511
    },
    {
        id: '64',
        name: 'The Willows',
        address: '1959 Lake Blvd, Davis, CA 95616',
        latitude: 38.5605745,
        longitude: -121.7862762
    },
]

module.exports = {
    apartmentData
  };