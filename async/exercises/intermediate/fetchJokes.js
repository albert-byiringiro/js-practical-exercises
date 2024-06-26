function fetchJokes(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network issues while fetching jokes");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error("There's a problem in fetching data"));
}

fetchJokes('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');


const data = [
    {
        name: {
            common: 'Rwanda',
            official: 'Republic of Rwanda',
            nativeName: {
                eng: {
                    official: 'Republic of Rwanda',
                    common: 'Rwanda'
                },
                fra: {
                    official: 'République rwandaise',
                    common: 'Rwanda'
                },
                kin: {
                    official: "Repubulika y'u Rwanda",
                    common: 'Rwanda'
                }
            }
        },
        tld: ['.rw'],
        cca2: 'RW',
        ccn3: '646',
        cca3: 'RWA',
        cioc: 'RWA',
        independent: true,
        status: 'officially-assigned',
        unMember: true,
        currencies: {
            RWF: { name: 'Rwandan franc', symbol: 'Fr' }
        },
        idd: { root: '+2', suffixes: ['50'] },
        capital: ['Kigali'],
        altSpellings: [
            'RW',
            'Republic of Rwanda',
            "Repubulika y'u Rwanda",
            'République du Rwanda'
        ],
        region: 'Africa',
        subregion: 'Eastern Africa',
        languages: {
            eng: 'English',
            fra: 'French',
            kin: 'Kinyarwanda'
        },
        translations: {
            ara: {
                official: 'جمهورية رواندا',
                common: 'رواندا'
            },
            bre: {
                official: 'Republik Rwanda',
                common: 'Rwanda'
            },
            ces: {
                official: 'Rwandská republika',
                common: 'Rwanda'
            },
            cym: {
                official: 'Republic of Rwanda',
                common: 'Rwanda'
            },
            deu: {
                official: 'Republik Ruanda',
                common: 'Ruanda'
            },
            est: {
                official: 'Rwanda Vabariik',
                common: 'Rwanda'
            },
            fin: {
                official: 'Ruandan tasavalta',
                common: 'Ruanda'
            },
            fra: {
                official: 'République rwandaise',
                common: 'Rwanda'
            },
            hrv: {
                official: 'Republika Ruandi',
                common: 'Ruanda'
            },
            hun: {
                official: 'Ruandai Köztársaság',
                common: 'Ruanda'
            },
            ita: {
                official: 'Repubblica del Ruanda',
                common: 'Ruanda'
            },
            jpn: { official: 'ルワンダ共和国', common: 'ルワンダ' },
            kor: { official: '르완다 공화국', common: '르완다' },
            nld: {
                official: 'Republiek Rwanda',
                common: 'Rwanda'
            },
            per: {
                official: 'جمهوری رواندا',
                common: 'رواندا'
            },
            pol: {
                official: 'Republika Rwandy',
                common: 'Rwanda'
            },
            por: {
                official: 'República do Ruanda',
                common: 'Ruanda'
            },
            rus: {
                official: 'Республика Руанда',
                common: 'Руанда'
            },
            slk: {
                official: 'Rwandská republika',
                common: 'Rwanda'
            },
            spa: {
                official: 'República de Rwanda',
                common: 'Ruanda'
            },
            srp: {
                official: 'Република Руанда',
                common: 'Руанда'
            },
            swe: {
                official: 'Republiken Rwanda',
                common: 'Rwanda'
            },
            tur: {
                official: 'Ruanda Cumhuriyeti',
                common: 'Ruanda'
            },
            urd: {
                official: 'جمہوریہ روانڈا',
                common: 'روانڈا'
            },
            zho: { official: '卢旺达共和国', common: '卢旺达' }
        },
        latlng: [-2, 30],
        landlocked: true,
        borders: ['BDI', 'COD', 'TZA', 'UGA'],
        area: 26338,
        demonyms: {
            eng: { f: 'Rwandan', m: 'Rwandan' },
            fra: { f: 'Rwandaise', m: 'Rwandais' }
        },
        flag: '🇷🇼',
        maps: {
            googleMaps: 'https://goo.gl/maps/j5xb5r7CLqjYbyP86',
            openStreetMaps: 'https://www.openstreetmap.org/relation/171496'
        },
        population: 12952209,
        gini: { '2016': 43.7 },
        fifa: 'RWA',
        car: { signs: ['RWA'], side: 'right' },
        timezones: ['UTC+02:00'],
        continents: ['Africa'],
        flags: {
            png: 'https://flagcdn.com/w320/rw.png',
            svg: 'https://flagcdn.com/rw.svg',
            alt: 'The flag of Rwanda is composed of three horizontal bands of light blue, yellow and green. The light blue band is twice the height of the other two bands and bears a yellow sun with twenty-four rays on its fly side.'
        },
        coatOfArms: {
            png: 'https://mainfacts.com/media/images/coats_of_arms/rw.png',
            svg: 'https://mainfacts.com/media/images/coats_of_arms/rw.svg'
        },
        startOfWeek: 'monday',
        capitalInfo: { latlng: [-1.95, 30.05] }
    }
]