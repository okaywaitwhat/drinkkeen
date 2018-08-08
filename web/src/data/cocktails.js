export let methodFilters = [
  'shaken',
  'mixed',
  'direct',
  'frozen'
]

export default [
  {
    name: 'Clásica',
    description: 'Desde el popular Mojito hasta un irresistible Sazerac, los clásicos son los cócteles que todos deberíamos conocer, disfrutar y saber preparar. Un cocktail que ha trascendido a lo largo del tiempo será tu mejor aliado para hacer memorable todo momento, nunca fallará y jamás pasará de moda.',
    history: 'Antes de meternos a fondo en la preparación de las bebidas, es de suma importancia conocer los cocteles que se ha convertido en clásicos y son las bases de la mixología. Existen referencias de que los primeros se prepararon a mediados del siglo XVIII; esto quiere decir que llevamos mezclándolos más de 200 años. La coctelería clásica es la que conocemos y se sigue preparando en los bares de todo el mundo, drinks que no han pasado de moda en estos dos siglos. Uno de los beneficios de nuestro trabajo como bartenders es crear combinaciones aplicando nuevas técnicas, también investigar y recrear estas recetas que nos ha acompañado históricamente en diferentes bares y países. Conocer estos cocteles clásicos nos beneficia en dos sentidos. Primero, podemos entender los componentes y sus fechas de creación (lo que dictamina las tendencias de las barras de la época), así como analizar sus partes para el desarrollo de uno nuevo, basándonos en sus ingredientes y técnicas para darle un twist; El segundo consiste en saber qué opciones existen a lo largo de la historia y poder ofrecérselas a nuestro cliente o invitado. Cocteles como el Dry Martini, el Cosmopolitan, el Mojito, la Margarita o la Paloma son clásicos que se basaron en alguna mezcla o técnica previa, y fueron tan bien balanceados y aceptados por los clientes, que hasta la fecha siguen siendo consumidos. Al conocerlos, podemos educar a nuestros sentidos para preparar, balancear y presentar un coctel, pues dieron pie a lo que ahora llamamos mixología moderna.',
    menu: [
      {
        name: 'Top Shelf Long Island',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [

          {
            ingredient: 'Vodka',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Tequila',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Dry Gin',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Ron especiado',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Grand Marnier',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Refresco de cola',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Sour Mix',
            portion: '1',
            unit: 'dash'
          }
        ],
        steps: [
          'Agregar todos los ingredientes en una coctelera con hielos.',
          'Agitar y servir en un vaso pint.'
        ]
      },
      {
        name: 'Dirty Martini',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Salmuera de aceitunas',
            portion: '1',
            unit: 'dash'
          },
          {
            ingredient: 'Aceituna',
            portion: '1',
            unit: 'u'
          }
        ],
        steps: [
          'En una coctelera con hielo, agregar el Vodka y la salmuera de las aceitunas.',
          'Agitar y colar en una copa de martini.',
          'Adornar con una aceituna.'
        ]
      },
      {
        name: 'Extra Dry Martini',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth seco',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Salmuera de aceituna',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Aceituna',
            portion: '2',
            unit: 'u'
          }
        ],
        steps: [
          'Poner el vermouth seco en un vaso mezclador con hielo.',
          'Agregar el Dry Gin.',
          'Revolver y colar en una copa de martini previamente enfriada.',
          'Decorar con aceitunas al gusto.'
        ]
      },
      {
        name: 'Mint Julep',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Bourbon',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Menta',
            portion: '8',
            unit: 'hojas'
          },
          {
            ingredient: 'Azúcar',
            portion: '2',
            unit: 'cucharadas'
          },
          {
            ingredient: 'Bitter Angostura',
            portion: '2',
            unit: 'dash'
          }
        ],
        steps: [
          'Activar las hojas de hierbabuena con una palmada y dejarlas caer en el vaso preenfriado.',
          'Agregar azúcar y Bitter.',
          'Macerar.',
          'Agregar hielo frappe o triturado hasta 3/4 del vaso.',
          'Verter bourbon y llenar el resto del vaso con hielo frappe o triturado.',
          'Revolver y decorar con hierbabuena.'
        ]
      },
      {
        name: 'Harvey Wallbanger',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de Avellanas',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de naranja',
            portion: '3',
            unit: 'oz'
          },
          {
            ingredient: 'Rodaja de naranja',
            portion: '1',
            unit: 'rodaja'
          }
        ],
        steps: [
          'En un vaso con hielos, agregar Vodka y el jugo de naranja.',
          'Revolver.',
          'Verter la mezcla de licor.',
          'Adornar con una rodaja de naranja.'
        ]
      },
      {
        name: 'Classic Singapore Sling',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Grand Marnier',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Licor herbal francés',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de cereza',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de piña',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter Angostura',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo fresco de limón',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Naranja valencia',
            portion: '1',
            unit: 'oz'
          }
        ],
        steps: [
          'Servir todos los ingredientes en una coctelera con hielo.',
          'Agitar y colar en un vaso highball.',
          'Decorar con una rodaja de naranja o una cereza.',
          'Verter agua mineral al gusto.'
        ]
      },
      {
        name: 'Cuba Libre',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Ron blanco',
            portion: '1.75',
            unit: 'oz'
          },
          {
            ingredient: 'Refresco de cola',
            portion: '6',
            unit: 'oz'
          },
          {
            ingredient: 'Limón',
            portion: '1',
            unit: 'rodaja'
          }
        ],
        steps: [
          'Servir ron blanco en un vaso highball con hielo.',
          'Exprimir un gajo de limón y dejarlo caer.',
          'Verter el refresco de cola y revolver.'
        ]
      },
      {
        name: 'Moscow Mule',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Cerveza de jengibre',
            portion: '4',
            unit: 'oz'
          }
        ],
        steps: [
          'Mezclar en una coctelera con hielo el vodka y cerveza de jengibre.',
          'Servir en una taza de cobre.'
        ]
      },
      {
        name: 'Mai Tai',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Ron especiado',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe de horchata',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de piña',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Granadina',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Piña',
            portion: '1',
            unit: 'rodaja'
          }
        ],
        steps: [
          'Mezclar el jugo de limón, jugo de piña, jarabe de horchata, granadina y el ron especiado en una coctelera con hielo.',
          'Colar en un vaso huracán con hielo.',
          'Decorar con una rodaja de piña.'
        ]
      },
      {
        name: 'Piña Colada',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'frozen',
        ingredients: [
          {
            ingredient: 'Ron especiado',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Mix de piña colada',
            portion: '6',
            unit: 'oz'
          },
          {
            ingredient: 'Cereza',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Piña',
            portion: '1',
            unit: 'cubo'
          }
        ],
        steps: [
          'Poner hielo triturado en una licuadora.',
          'Agregar Spiced Gold y el mix de piña colada en la licuadora.',
          'Licuar hasta hacer espuma.',
          'Poner en un vaso huracán o un vaso alto.',
          'Decorar con una cereza y un cuba de piña.'
        ]
      },
      {
        name: 'Black Russian',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de café',
            portion: '0.75',
            unit: 'oz'
          }
        ],
        steps: [
          'Llenar un vaso old fashioned con hielo.',
          'Agregar Vodka y Baileys Coffee Irish Cream Liqueur.',
          'Revolver.'
        ]
      },
      {
        name: 'Martini',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth seco',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Aceituna',
            portion: '1',
            unit: 'u'
          }
        ],
        steps: [
          'Enfriar una copa martini.',
          'Mezclar el vermouth y el gin en una coctelera con hielo.',
          'Retirar el hielo de la copa y servir.',
          'Decorar con una aceituna.'
        ]
      },
      {
        name: 'Bloody Mary',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de tomate',
            portion: '5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Salsa inglesa',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Pimienta molida',
            portion: '1',
            unit: 'pizca'
          },
          {
            ingredient: 'Tallo de apio',
            portion: '1',
            unit: 'pieza'
          },
          {
            ingredient: 'Pepino',
            portion: '1',
            unit: 'rodaja'
          }
        ],
        steps: [
          'Poner hielo en un vaso highball.',
          'Agregar jugo de limón, jugo de tomate, vodka y pimienta molida.',
          'Revolver.',
          'Agregar los Dashs de salsa inglesa.',
          'Decorar con apio y pepino.'
        ]
      },
      {
        name: 'Tom Collins',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Agua mineral',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Cereza maraschino',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'Verter Jarabe, jugo de limón y ginebra en el vaso.',
          'Revolver.',
          'Agregar hielo y llenar con agua mineral.',
          'Decorar con una cereza maraschino y media rodaja de limón amarillo.'
        ]
      },
      {
        name: 'Riviera Margarita',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Tequila',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Grand Marnier',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Sal',
            portion: '1',
            unit: 'cucharada'
          },
          {
            ingredient: 'Limón',
            portion: '1',
            unit: 'rodaja'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '2',
            unit: 'oz'
          }
        ],
        steps: [
          'Remojar el borde del vaso con limón y escarchar con sal.',
          'Llenar una coctelera con hielo.',
          'Añadir tequila, licor Grand Marnier y jugo de limón.',
          'Agitar bien y colar en el vaso con hielo triturado.',
          'Decorar con una rodaja de limón.'
        ]
      },
      {
        name: 'Bramble #10',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de zarzamora',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Moras frescas',
            portion: '5',
            unit: 'piezas'
          }
        ],
        steps: [
          'Mezclar en una coctelera con hielo todos los ingredientes, excepto el licor de moras.',
          'Colar en un vaso old fashioned lleno de hielo triturado.',
          'Rociar el licor de mora encima.',
          'Decorar con moras.'
        ]
      },
      {
        name: "Horse's Neck",
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Bourbon',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Ginger Ale',
            portion: '4',
            unit: 'oz'
          },
          {
            ingredient: 'Twist de limon',
            portion: '1',
            unit: 'pieza'
          },
          {
            ingredient: 'Bitter',
            portion: '2',
            unit: 'dash'
          }
        ],
        steps: [
          'Servir los ingredientes en las rocas.',
          'Decorar con una rodaja de limón.'
        ]
      },
      {
        name: 'Sex on the Beach',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de durazno',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de arándano',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de naranja',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Naranja',
            portion: '1',
            unit: 'rodaja'
          }
        ],
        steps: [
          'Llenar un vaso highball con hielo.',
          'Agregar en el vaso los ingredientes en el siguiente orden: vodka, jugo de arándano, jugo de naranja y lícor de durazno.',
          'Decorar con una media rodaja de naranja.'
        ]
      },
      {
        name: 'Southside',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Menta',
            portion: '4',
            unit: 'hojas'
          }
        ],
        steps: [
          'Macerar la menta con el jugo de limón y el Jarabe en un vaso mezclador.',
          'Agregar Dry Gin y agitar bien.',
          'Verter en un vaso highball con hielo triturado.',
          'Revolver hasta que el exterior del vaso quede frío.',
          'Añadir agua mineral al gusto y decorar con una ramita de menta.'
        ]
      },
      {
        name: 'Whisky Sour',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Scotch Whisky',
            portion: '1.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Clara de huevo',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'En una coctelera, agregar los ingredientes (la clara de huevo es opcional).',
          'Agregar hielo.',
          'Agitar vigorosamente.',
          'Colar en un vaso old fashion con hielo.',
          'Decorar con un twist de naranja o una cereza maraschino.'
        ]
      },
      {
        name: 'Vodka Martini',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth seco',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Twist de limón',
            portion: '1',
            unit: 'oz'
          }
        ],
        steps: [
          'Introducir en una coctelera con hielo.',
          'Servir en un vaso con hielo triturado.',
          'Agregar unas gotas de vermouth seco.',
          'Adornar con un twist de limón.'
        ]
      },
      {
        name: 'French 75',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Vino espumoso',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.5',
            unit: 'oz'
          }
        ],
        steps: [
          'Agitar Dry Gin, jugo de limón y Jarabe con hielo.',
          'Colar en una flauta de champán. Verter el vino espumoso.'
        ]
      },
      {
        name: 'Sazerac',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Scotch Whisky',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe de azucar morena',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter Angostura',
            portion: '1',
            unit: 'dash'
          },
          {
            ingredient: 'Peychaud',
            portion: '1',
            unit: 'dash'
          }
        ],
        steps: [
          'Revolver los ingredientes en un vaso mezclador con hielo.',
          'Colar en un vaso old fashion previamente enfriado.'
        ]
      },
      {
        name: 'Between the Sheets',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Ron especiado',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Grand Marnier',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Brandy',
            portion: '0.75'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.75'
          },
          {
            ingredient: 'Twist de limón',
            portion: '1'
          }
        ],
        steps: [
          'Llenar la coctelera con hielo.',
          'Agregar Spiced Gold, Grand Marnier, brandy y jugo de limón.',
          'Agitar hasta enfríar la bebida.',
          'Colar en una copa de martini previamente enfriada.',
          'Decorar con una cáscara de limón.'
        ]
      },
      {
        name: 'Manhattan',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Vermouth dulce',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter Angostura',
            portion: '2',
            unit: 'dash'
          },
          {
            ingredient: 'Twist de naranja',
            portion: '1',
            unit: 'pieza'
          },
          {
            ingredient: 'Bourbon',
            portion: '2'
          }
        ],
        steps: [
          'Combinar los ingredientes en un vaso mezclador con hielo.',
          'Revolver.',
          'Colar y servir en una copa de martini preenfriada.',
          'Decorar con una cereza maraschino o twist de naranja (opcional).'
        ]
      },
      {
        name: 'Martinez',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de cereza maraschino',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter Boker',
            portion: '1',
            unit: 'dash'
          },
          {
            ingredient: 'Twist de limón',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'Agregar los ingredientes en un vaso mezclador con hielo.',
          'Revolver.',
          'Colar en una copa de martini preenfriada.',
          'Decorar con un twist de limón.'
        ]
      },
      {
        name: 'White Russian',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Leche espesa',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de moca',
            portion: '0.75',
            unit: 'oz'
          }
        ],
        steps: [
          'Combinar el licor de moca y el Vodka en un vaso old fashion lleno de hielo.',
          'Mezclar y agregar la leche espesa.'
        ]
      },
      {
        name: 'Whisky Old Fashioned',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Whisky',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de amaretto',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter de naranja',
            portion: '3',
            unit: 'dash'
          },
          {
            ingredient: 'Cáscara fresca de naranja',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'Introducir en una coctelera todos los ingredientes con hielo.',
          'Mezclar bien.',
          'Servir en un vaso old fashion.'
        ]
      },
      {
        name: 'Bloody Mary Vodka',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de tomate',
            portion: '5',
            unit: 'oz'
          },
          {
            ingredient: 'Salsa inglesa',
            portion: '8',
            unit: 'gota'
          }
        ],
        steps: [
          'Agregar vodka, jugo de tomate y gotas de salsa inglesa al gusto a un vaso highball con hielo.',
          'Revolver.',
          'Verter en un vaso highball con hielo.'
        ]
      },
      {
        name: 'Blood & Sand',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Whisky',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de cereza',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de naranja',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth dulce',
            portion: '0.75',
            unit: 'oz'
          }
        ],
        steps: [
          'Agregar los ingredientes en una coctelera con hielo.',
          'Agitar y colar en una copa martini preenfriada.',
          'Decorar con un twist de naranja flameado.'
        ]
      },
      {
        name: 'Irish Coffee',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Whisky',
            portion: '1.75',
            unit: 'oz'
          },
          {
            ingredient: 'Crema batida',
            portion: '1.75',
            unit: 'oz'
          },
          {
            ingredient: 'Café recíen preparado',
            portion: '5'
          },
          {
            ingredient: 'Azúcar mascabado',
            portion: '2',
            unit: 'cucharadas'
          }
        ],
        steps: [
          'Verter whisky en una copa martini previamente calentada.',
          'Añadir café caliente con azúcar mascabado.',
          'Revolver bien.',
          'Agregar crema batida hasta arriba.'
        ]
      },
      {
        name: 'Old Fashioned',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Bourbon',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Azúcar',
            portion: '1',
            unit: 'cucharada'
          },
          {
            ingredient: 'Agua',
            portion: '1',
            unit: 'dash'
          },
          {
            ingredient: 'Twist de naranja',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'En un vaso old fashioned, macerar azúcar y Bitter.',
          'Agregar Bourbon, un cubo de hielo grande y un Dash de agua.',
          'Exprimir la cáscara de naranja sobre el cóctel y dejarlo caer.',
          'Además, o en lugar, del twist de naranja se puede decorar con una cereza maraschino.'
        ]
      },
      {
        name: 'Bellini',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Pulpa de durazno',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Vodka',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Prosecco Blanco',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Durazno',
            portion: '1',
            unit: 'rodaja'
          }
        ],
        steps: [
          'Enfriar una copa de champagne.',
          'Servir la pulpa de durazno y vodka.',
          'Revolver.',
          'Llenar con Prosecco Blanco.'
        ]
      },
      {
        name: 'Gin Tonic',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Agua tónica',
            portion: '8',
            unit: 'oz'
          },
          {
            ingredient: 'Twist de limón',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'En una copa fría, servir gin.',
          'Agregar hielo.',
          'Verter sútilmente el agua tónica, esto evita que la burbuja se rompa y el cóctel sepa amargo.',
          'Decorar con un twist de limón.'
        ]
      },
      {
        name: 'White Lady',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Grand Marnier',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.75'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.25'
          }
        ],
        steps: [
          'Llenar una coctelera con hielo.',
          'Agregar Dry Gin, Grand Marnier, jugo de limón y Jarabe en la coctelera.',
          'Agitar bien.',
          'Colar en un vaso highball.'
        ]
      },
      {
        name: 'Rossini',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.75'
          },
          {
            ingredient: 'Fresas',
            portion: '2',
            unit: 'pieza'
          },
          {
            ingredient: 'Ramita de romero',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'Servir hielo en una coctelera.',
          'Servir Tanqueray, jugo de limón, Jarabe y las fresas en la coctelera.',
          'Agitar vigorosamente hasta enfriar.',
          'Colar en un vaso con hielo.',
          'Servir y decorar con una ramita de romero.'
        ]
      },
      {
        name: 'Raspberry Caipiroska',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Limon',
            portion: '4',
            unit: 'rodaja'
          },
          {
            ingredient: 'Frambuesas',
            portion: '5',
            unit: 'pieza'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Azucar mascabo',
            portion: '1',
            unit: 'cucharadas'
          }
        ],
        steps: [
          'Cortar los limones en rodajas.',
          'Servir en un vaso Highball, las rodajas de limón, Jarabe, azúcar mascabado y las frambuesas enteras.',
          'Macerar los ingredientes.',
          'Añadir hielo frappé y servir el vodka.',
          'Revolver.',
          'Servir más hielo.'
        ]
      },
      {
        name: 'Rob Roy',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Vermouth dulce',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter Angostura',
            portion: '2',
            unit: 'dash'
          },
          {
            ingredient: 'Twist de naranja',
            portion: '1',
            unit: 'pieza'
          },
          {
            ingredient: 'Whisky escocés',
            portion: '2',
            unit: 'oz'
          }
        ],
        steps: [
          'Agregar el whisky y el vermouth en un vaso mezclador con hielo.',
          'Revolver hasta mezclar.',
          'Colar en una copa de martini preenfriada.',
          'Decorar con un par de cerezas maraschino.'
        ]
      },
      {
        name: 'Martini Vodka',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth seco',
            portion: '2,5',
            unit: 'oz'
          },
          {
            ingredient: 'Cáscara de limón',
            portion: '1'
          }
        ],
        steps: [
          'Servir todos los ingredientes en en vaso.',
          'Revolver y verter en una copa martini preenfriada.',
          'Decorar con una cáscara de limón.'
        ]
      },
      {
        name: 'Negroni',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth dulce',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Campari',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Cáscara de naranja',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'Combinar todos los ingredientes en un vaso old fashioned.',
          'Revolver.',
          'Decorar con una cáscara de naranja.'
        ]
      },
      {
        name: 'Rickey',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Sour mix',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Agua mineral',
            portion: '3',
            unit: 'oz'
          },
          {
            ingredient: 'Limón',
            portion: '1',
            unit: 'rodaja'
          }
        ],
        steps: [
          'En una coctelera con hielo, agregar Gin, jugo de limón y sour mix.',
          'Agitar y colar en un vaso highball con hielo.',
          'Verter agua mineral.',
          'Decorar con una rodaja de limón.'
        ]
      },
      {
        name: 'Rusty Nail',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Scotch Whisky',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Licor de scotch',
            portion: '0.5',
            unit: 'oz'
          }
        ],
        steps: [
          'Combinar en un vaso con hielo y revolver.'
        ]
      },
      {
        name: 'Vesper',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Vodka',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth seco',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Twist de limón',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'Llenar una coctelera con hielo.',
          'Agregar Dry Gin, Vodka y vermouth seco.',
          'Agitar hasta enfríar.',
          'Colar en una copa de martini.',
          'Decorar con una cáscara de limón.'
        ]
      },
      {
        name: 'Clover Club',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Clara de huevo',
            portion: '1',
            unit: 'pieza'
          },
          {
            ingredient: 'Jarabe de frambuesa',
            portion: '0.75'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.5'
          }
        ],
        steps: [
          'Agregar los ingredientes en una coctelera sin hielo.',
          'Agitar.',
          'Agregar hielo en la coctelera.',
          'Agitar nuevamente.',
          'Doble colado en una copa coupé preenfriada.'
        ]
      },
      {
        name: 'Stinger',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Licor herbal francés',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter',
            portion: '3',
            unit: 'dash'
          }
        ],
        steps: [
          'Mezclar todos los ingredientes en una coctelera.',
          'Colar en un vaso old fashioned con hielo.'
        ]
      },
      {
        name: 'Sidecar',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Cognac',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Triple sec',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Cáscara de limón',
            portion: '1',
            unit: 'pieza'
          }
        ],
        steps: [
          'Verter el brandy, triple sec y jugo de limón en una coctelera con hielo.',
          'Agitar.',
          'Colar en un vaso old fashion.',
          'Decorar con cáscara de limón.'
        ]
      },
      {
        name: 'Alexander',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Brandy',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Crema de cacao',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Crema de leche',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Azúcar',
            portion: '1',
            unit: 'cucharada'
          },
          {
            ingredient: 'Chocolate para espolvorear',
            portion: '1',
            unit: 'cucharada'
          }
        ],
        steps: [
          'Verter el brandy y el chocolate en polvo en una coctelera con hielo.',
          'Añadir la crema de leche, el azúcar.',
          'Agitar vigorosamente.',
          'Servir en una copa Martini y espolvorear con el chocolate en polvo.'
        ]
      },
      {
        name: 'Dry Martini',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Dry Gin',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth seco',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Salmuera de aceituna',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Aceitunas',
            portion: '2',
            unit: 'u'
          }
        ],
        steps: [
          'Poner el vermouth seco en un vaso mezclador con hielo.',
          'Agregar Dry Gin.',
          'Revolver y colar en una copa de martini previamente enfriada.',
          'Decorar con aceitunas al gusto.'
        ]
      },
      {
        name: 'John Collins',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de lima',
            portion: '1'
          },
          {
            ingredient: 'Soda',
            portion: '2'
          }
        ],
        steps: [
          'Servir todos los ingredientes directo en un vaso highball con hielo.',
          'Mezclar.',
          'Decorar con cereza al marraschino y una rodaja de limón.',
          'Agregar un dash de bitter Angostura.'
        ]
      },
      {
        name: 'Gin Fizz',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.75',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '1'
          },
          {
            ingredient: 'Soda',
            portion: '2'
          }
        ],
        steps: [
          'Mezclar todos los ingrediente con hielo menos la soda en una coctelera.',
          'Servir en un vaso highball.',
          'Completar con soda.',
          'Decorar con una rodaja de limón.'
        ]
      },
      {
        name: 'Derby',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter Durazno',
            portion: '2',
            unit: 'gota'
          },
          {
            ingredient: 'Menta',
            portion: '2',
            unit: 'hojas'
          }
        ],
        steps: [
          'Servir todos los ingredientes en un vaso mezclador con hielo.',
          'Mezclar.',
          'Servir en una copa martini.',
          'Decorar con hojas de menta.'
        ]
      },
      {
        name: 'Casino',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Maraschino',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter de naranja',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.25',
            unit: 'oz'
          }
        ],
        steps: [
          'Servir todos los ingredientes en una coctelera con cubos de hielo y batir bien.',
          'Servir en una copa martini pre enfriada y decorar con una cereza y un twist de limón.'
        ]
      },
      {
        name: 'Bacardi',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Bacardi Carta Blanca',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de lima',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Granadina',
            portion: '0.25',
            unit: 'oz'
          }
        ],
        steps: [
          'Servir todos los ingredientes en una coctelera con cubos de hielo y batir bien.',
          'Servir en una copa martini pre enfriada.'
        ]
      },
      {
        name: 'Americano',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Campari',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Vermouth Rosso',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Soda',
            portion: '1',
            unit: 'splash'
          }
        ],
        steps: [
          'Mezclar todos los ingredientes directamente en un vaso old fashion con cubos de hielo.',
          'Agregar un splash de soda.',
          'Decorar con media rodaja de naranja.'
        ]
      },
      {
        name: 'Mary Pickford',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Ron blanco',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Maraschino',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Granadina',
            portion: '0.25'
          },
          {
            ingredient: 'Jugo de ananá',
            portion: '2'
          }
        ],
        steps: [
          'Mezclar en una coctelera con hielo y servir en una copa martini pre enfriada.'
        ]
      },
      {
        name: 'Monkey Gland',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de naranja',
            portion: '1',
            unit: 'oz'
          },
          {
            ingredient: 'Absenta',
            portion: '2',
            unit: 'gota'
          },
          {
            ingredient: 'Granadina',
            portion: '2',
            unit: 'gota'
          }
        ],
        steps: [
          'Mezclar en una coctelera con hielo y servir en una copa martini pre enfriada.'
        ]
      },
      {
        name: 'Paradise',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Apricot Brandy',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de naranja',
            portion: '0.5'
          }
        ],
        steps: [
          'Servir todos los ingredientes en una coctelera llena de hielo.',
          'Batir y servir en una copa martini pre enfriada.'
        ]
      },
      {
        name: "Planter's Punch",
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Ron',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de naranja',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de ananá',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Granadina',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter Angostura',
            portion: '3',
            unit: 'dash'
          }
        ],
        steps: [
          'Servir todos los ingredientes (menos el bitter) en un coctelera llena de hielo y batir bien.',
          'Servir en un vaso highball.',
          'Coronar con bitter Angostura.',
          'Decorar con cereza y ananá.'
        ]
      },
      {
        name: 'Porto Flip',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Brandy',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Red Port',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Yema de huevo',
            portion: '0.5'
          }
        ],
        steps: [
          'Servir todos los ingrediente en una coctelera con hielo y batir bien.',
          'Servir en una copa martini.',
          'Coronar con nuez moscada.'
        ]
      },
      {
        name: 'Ramos Fizz',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'shaken',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '1.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jarabe',
            portion: '0.5',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de lima',
            portion: '0.5'
          },
          {
            ingredient: 'Jugo de limón',
            portion: '1.5'
          },
          {
            ingredient: 'Crema',
            portion: '2'
          },
          {
            ingredient: 'Clara de huevo',
            portion: '1',
            unit: 'pieza'
          },
          {
            ingredient: 'Agua de azahar',
            portion: '3',
            unit: 'dash'
          },
          {
            ingredient: 'Extracto de vainilla',
            portion: '2',
            unit: 'gota'
          },
          {
            ingredient: 'Soda',
            portion: 'c/n'
          }
        ],
        steps: [
          'Servir todos los ingredientes (menos la soda) en una coctelera.',
          'Batir son hielo por 2 minutos.',
          'Agregar hielo y batir otros 2 minutos.',
          'Servir en un vaso highball sin hielo y completar con soda.'
        ]
      },
      {
        name: 'Screwdriver',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'direct',
        ingredients: [
          {
            ingredient: 'Vodka',
            portion: '1.25',
            unit: 'oz'
          },
          {
            ingredient: 'Jugo de naranja',
            portion: '3.25',
            unit: 'oz'
          }
        ],
        steps: [
          'Servir todos los ingredientes en un vaso highball lleno de hielo.',
          'Revolver.',
          'Decorar con una rodaja de naranja.'
        ]
      },
      {
        name: 'Tuxedo',
        img: 'images/mediarecetas/negroni.jpg',
        family: 'classic',
        type: 'mixed',
        ingredients: [
          {
            ingredient: 'Gin',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Dry Vermouth',
            portion: '2',
            unit: 'oz'
          },
          {
            ingredient: 'Maraschino',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Absenta',
            portion: '0.25',
            unit: 'oz'
          },
          {
            ingredient: 'Bitter de naranja',
            portion: '3',
            unit: 'dash'
          }
        ],
        steps: [
          'Poner todos los ingredientes con hielo en un vaso mezclador.',
          'Revolver y colar en una copa martini.',
          'Decorar con una cereza y un twist de limón.'
        ]
      }
    ]

  },
  {
    name: 'Moderna',
    description: 'Estas recetas te harán incursionar en otros horizontes de sabor. Un mundo inexplorado te está esperando con las recetas de cocktails más recientes.',
    history: 'La coctelería moderna se basa en fundamentos saludables, novedosos y creativos de la utilización de productos naturales inspirados en el conocimiento y buen gusto del barman. Es así como se han creado diversos tipos de bebidas combinadas con frutas, hortalizas, plantas aromáticas, especies, productos lácteos, aguas minerales y demás. Hay que tener en cuenta que un buen cóctel debe ser una bebida equilibrada, armoniosa y de calidad, pudiendo producir en la persona que lo bebe sensaciones placenteras en su paladar aparte del goce en la vista, pues el cóctel debe caracterizarse, también, por su presentación agradable, alegre y sugestiva.',
    menu:
      [
        {
          name: 'Scotch & Ginger',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',
          ingredients: [
            {
              ingredient: 'Whisky',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Ginger Ale',
              portion: '2',
              unit: 'oz'
            },
            {
              ingredient: 'Twist de limón',
              portion: '1',
              unit: 'pieza'
            }
          ],

          steps: [
            'Servir whisky en un vaso con hielo.',
            'Agregar ginger ale.',
            'Decorar con un twist de limón.'
          ]
        },

        {
          name: 'Caipiroska',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',
          ingredients: [
            {
              ingredient: 'Vodka',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jarabe',
              portion: '1',
              unit: 'oz'
            },
            {
              ingredient: 'Jugo de limón',
              portion: '0.5',
              unit: 'pieza'
            },
            {
              ingredient: 'Azucar',
              portion: '2',
              unit: 'cucharadas'
            }
          ],
          steps: [
            'Agregar gajos de limón, jarabe  y azúcar en un vaso old fashioned',
            'Macerar el limón y los otros ingredientes',
            'Llenar el vaso con hielo.',
            'Verter vodka.'
          ]
        },

        {
          name: 'Vodka, Albahaca & Limón',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',
          ingredients: [
            {
              ingredient: 'Vodka',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jugo de limón',
              portion: '0.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jarabe',
              portion: '0.5',
              unit: 'oz'
            },
            {
              ingredient: 'Albahaca',
              portion: '2',
              unit: 'hoja'
            }
          ],

          steps: [
            'Servir a un vaso con hielo.',
            'Agregar jugo de limón.',
            'Agregar jarabe de azúcar.',
            'Decorar con hojas de albahaca.'

          ]

        },

        {

          name: 'Kamikaze',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vodka', portion: '1.25', unit: 'oz' },
            { ingredient: 'Triple sec', portion: '0.25', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '0.75', unit: 'oz' }
          ],

          steps: [
            'en una coctelera mezclar vodka, triple seco y jugo de limón',
            'Agitar.',
            'Servir en un vaso de shot.'

          ]

        },

        {

          name: 'Ron & Cola',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Ron', portion: '1.5', unit: 'oz' },
            { ingredient: 'Gaseosa de cola', portion: '5', unit: 'oz' },
            { ingredient: 'Limón', portion: '1', unit: 'rodaja' }
          ],

          steps: [
            'Servir ron en un vaso con hielo.',
            'Agregar gaseosa de cola.',
            'Mezclar y decorar con la cáscara de limón.'

          ]

        },

        {

          name: 'Ron & Gaseosa Lima-Limón',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Ron', portion: '1.5', unit: 'oz' },
            { ingredient: 'Gaseosa de lima-limón', portion: '5', unit: 'oz' }
          ],

          steps: [
            'Llenar un vaso con hielo y añadir Captain Morgan White Ron y el Gaseosa de lima-limón.',
            'Revolver bien.'

          ]

        },

        {

          name: 'Mixed Whisky',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Whisky', portion: '2', unit: 'oz' },
            { ingredient: 'Agua mineral', portion: '1', unit: 'oz' }
          ],

          steps: [
            'Servir whisky en un vaso con hielo picado.',
            'Llenar con el agua mineral y mezclar.',
            'Decorar con un twist de limón.'

          ]

        },

        {

          name: 'Gin Rickey',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Gin', portion: '1.25', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '0.5', unit: 'oz' },
            { ingredient: 'Agua mineral', portion: '3', unit: 'oz' }
          ],

          steps: [
            'Agregar Gin y jugo de limón en un vaso highball con hielo.',
            'Llenar con el agua mineral.'

          ]

        },

        {

          name: 'Ginebra & Ginger Ale',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Gin', portion: '1.25', unit: 'oz' },
            { ingredient: 'Ginger ale', portion: '1', unit: 'dash' },
            { ingredient: 'Limón', portion: '1', unit: 'rodaja' }
          ],

          steps: [
            'En un vaso highball con hielo, agregar y ginger ale.',
            'Decorar con una rodaja de limón.'

          ]

        },

        {

          name: 'Whisky Piña',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'frozen',

          ingredients: [
            { ingredient: 'Whisky', portion: '1', unit: 'oz' },
            { ingredient: 'Jarabe de piña', portion: '1', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '1', unit: 'oz' },
            { ingredient: 'Jerez', portion: '1', unit: 'rodaja' },
            { ingredient: 'Piña', portion: '2', unit: 'rodajas' },
            { ingredient: 'Uvas', portion: '3', unit: 'piezas' }
          ],

          steps: [
            'Licuar las rebanadas de piña, uvas, jarabe de piña, jugo de limón y hielo.',
            'Servir whisky en un vaso con hielo.',
            'Colar el resto de los ingredientes y servir.'

          ]

        },

        {

          name: 'Vodka Pink',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'frozen',

          ingredients: [
            { ingredient: 'Vodka', portion: '1.5', unit: 'oz' },
            { ingredient: 'Granadina', portion: '1.5', unit: 'oz' },
            { ingredient: 'Jugo de piña', portion: '1', unit: 'oz' },
            { ingredient: 'Piña', portion: '1', unit: 'rodaja' }
          ],

          steps: [
            'Añadir Vodka, jugo de granada y jugo de piña a un vaso con hielo.',
            'Mezclar los ingredientes.',
            'Servir en una copa martini previamente enfriada.',
            'Adornar con una rebanada de piña.'

          ]

        },

        {

          name: 'Citrus Flush',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vodka', portion: '1.5', unit: 'oz' },
            { ingredient: 'Jugo de naranja', portion: '1', unit: 'oz' },
            { ingredient: 'Gaseosa de lima-limón', portion: '2', unit: 'oz' },
            { ingredient: 'Naranja', portion: '1', unit: 'rodaja' }
          ],

          steps: [
            'Agregar Smirnoff, jugo de naranja, y Gaseosa de lima-limon.',
            'Revolver',
            'Decorar con una rodaja de naranja.'

          ]

        },

        {

          name: 'Gin Toddy',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Gin', portion: '1.25', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '0.75', unit: 'oz' },
            { ingredient: 'Agua caliente', portion: '2', unit: 'oz' },
            { ingredient: 'Canela', portion: '1', unit: 'rama' }
          ],

          steps: [
            'Agregar Gin, jugo de limón, agua hirviendo y azúcar en una copa toddy',
            'Revolver',
            'Decorar con una rama de canela'

          ]

        },

        {

          name: 'Whisky con Miel y Ginger Ale',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Whisky', portion: '1.5', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '1', unit: 'oz' },
            { ingredient: 'Miel', portion: '0.5', unit: 'oz' },
            { ingredient: 'Ginger ale', portion: '1', unit: 'oz' }
          ],

          steps: [
            'en una coctelera agregar el whisky, jugo de limón amarillo y miel de abeja.',
            'Agregar hielos y agitar, vigorosamente, hasta mezclar perfectamente.',
            'Servir en un vaso alto con hielo cubo.',
            'Completar con ginger ale e integrar con ayuda de la cuchara de bar.',
            'Decorar con una cuña de limón verde y una cuña de limón amarillo.'

          ]

        },

        {

          name: 'Whisky, piña y jugo de arándano',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Whisky', portion: '1.5', unit: 'oz' },
            { ingredient: 'Jugo de piña', portion: '3', unit: 'oz' },
            { ingredient: 'Jugo de arándano', portion: '3', unit: 'oz' }
          ],

          steps: [
            'Añadir whisky en un vaso con hielo.',
            'Agregar jugo de piña y jugo de arándano.'

          ]

        },

        {

          name: 'Scotch & Cola',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Whisky', portion: '1.5', unit: 'oz' },
            { ingredient: 'Gaseosa de cola', portion: '2', unit: 'oz' },
            { ingredient: 'Jugo de arándano', portion: '3', unit: 'oz' }
          ],

          steps: [
            'Agregar whisky y Gaseosa de cola.',
            'Mezclar los ingredientes y servir en las rocas.'

          ]

        },

        {

          name: 'Tequila & Ginger',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Tequila', portion: '1.5', unit: 'oz' },
            { ingredient: 'Limón', portion: '1', unit: 'rodaja' },
            { ingredient: 'inger ale', portion: '3', unit: 'oz' }
          ],

          steps: [
            'Llenar un vaso con hielo.',
            'Exprimir el limón en el vaso.',
            'Añadir el tequila.',
            'Añadir ginger ale.',
            'Revolver bien.'

          ]

        },

        {

          name: 'Luxury Margarita',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Tequila', portion: '1.5', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '0.75', unit: 'oz' },
            { ingredient: 'Miel', portion: '0.75', unit: 'oz' }
          ],

          steps: [
            'Mezclar el Tequila, jugo de limón y miel en una coctelera con hielo y agitar bien.',
            'Colar en un vaso con hielo.',
            'Decorar con una rodaja de limón.'

          ]

        },

        {

          name: 'Gin Breeze',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Gin', portion: '1.25', unit: 'oz' },
            { ingredient: 'Jugo de arándano', portion: '4', unit: 'oz' },
            { ingredient: 'Jugo de pomelo', portion: '0.5', unit: 'oz' },
            { ingredient: 'Limón', portion: '1', unit: 'rodaja' }
          ],

          steps: [
            'en una coctelera lleno de hielo, combinar todos los ingredientes.',
            'Agitar bien.',
            'Colar en un vaso old fashioned lleno de hielo.',
            'Decorar con una rodaja de limón amarillo.'

          ]

        },

        {

          name: 'The Tom Nichol',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Gin', portion: '1.25', unit: 'oz' },
            { ingredient: 'Jugo de pomelo', portion: '0.25', unit: 'oz' },
            { ingredient: 'Jugo de naranja', portion: '0.25', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '0.5', unit: 'oz' },
            { ingredient: 'Jarabe', portion: '0.5', unit: 'rodaja' }
          ],

          steps: [
            'en una coctelera lleno de hielo, agregar todos los jugos, el jarabe y ginebra.',
            'Agitar vigorosamente y colar en una copa de martini preenfriada.',
            'Rallar y agregar las cáscaras de naranja.',
            'Enfriar.'

          ]

        },

        {

          name: 'Vodka & Tonic',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vodka', portion: '1.5', unit: 'oz' },
            { ingredient: 'Agua tónica light', portion: '2.5', unit: 'oz' }
          ],

          steps: [
            'Servir vodka en un vaso con hielo.',
            'Agregar agua tónica.',
            'Mezclar los ingredientes',
            'Decorar con una rodaja de limón.'

          ]

        },

        {

          name: 'Gin & Juice',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Gin', portion: '1.25', unit: 'oz' },
            { ingredient: 'Jugo de naranja', portion: '3', unit: 'oz' },
            { ingredient: 'Cáscara de naranja', portion: '1', unit: 'pieza' }
          ],

          steps: [
            'Servir hielo en un vaso highball.',
            'Verter la ginebra y el jugo de naranja.',
            'Exprimir una cáscara de naranja en el borde del vaso.'

          ]

        },

        {

          name: 'Vodka Minted',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vodka', portion: '1.5', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '0.75', unit: 'oz' },
            { ingredient: 'Jarabe de azúcar', portion: '0.5', unit: 'oz' },
            { ingredient: 'Menta', portion: '1', unit: 'hoja' },
            { ingredient: 'Agua mineral', portion: '1', unit: 'dash' }
          ],

          steps: [
            'Agregar unas hojas de menta en el fondo de un vaso.',
            'Agregar hielo.',
            'Agregar el vodka, jugo de limón, jarabe de azúcar y agua mineral.',
            'Mezclar los ingredientes.',
            'Decorar con hojas de menta.'

          ]

        },

        {

          name: 'Death of a Scotsman',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Whisky', portion: '1', unit: 'oz' },
            { ingredient: 'Miel', portion: '0.25', unit: 'oz' },
            { ingredient: 'Pulpa de maracuyá', portion: '0.25', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '0.25', unit: 'oz' },
            { ingredient: 'Menta', portion: '2', unit: 'hoja' }
          ],

          steps: [
            'Mezclar todos los ingredientes.',
            'Revolver, colar y servir sobre hielo en un vaso.',
            'Decorar con menta y un poco de nuez moscada.'

          ]

        },

        {

          name: 'Scotch & Soda',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Whisky', portion: '1.5', unit: 'oz' },
            { ingredient: 'Agua mineral', portion: '6', unit: 'oz' },
            { ingredient: 'Limón', portion: '1', unit: 'rodaja' }
          ],

          steps: [
            'Llenar un vaso con hielo.',
            'Servir whisky y agregar el agua mineral.',
            'Decorar con una rodaja de limón.'

          ]

        },

        {

          name: 'Ponche Corsario',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vino tinto', portion: '2', unit: 'oz' },
            { ingredient: 'Jugo de cereza', portion: '0.75', unit: 'oz' },
            { ingredient: 'Gaseosa de cola', portion: '1', unit: 'oz' },
            { ingredient: 'Naranja', portion: '1', unit: 'rodaja' },
            { ingredient: 'Limón', portion: '1', unit: 'rodaja' },
            { ingredient: 'Cerezas sin hueso', portion: '3', unit: 'pieza' },
            { ingredient: 'Lima', portion: '1', unit: 'rodaja' },
            { ingredient: 'Ron', portion: '1', unit: 'oz' }
          ],

          steps: [
            'Mezclar los ingredients en una coctelera con hielo.',
            'Servir en un vaso.'

          ]

        },

        {

          name: 'Espresso Martini',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vodka', portion: '1.5', unit: 'oz' },
            { ingredient: 'Café Expresso', portion: '1.5', unit: 'oz' },
            { ingredient: 'Jarabe de azúcar', portion: '0.5', unit: 'oz' },
            { ingredient: 'Granos de café', portion: '3', unit: 'pieza' }
          ],

          steps: [
            'Agregar el vodka, el café y el jarabe de azúcar a la coctelera, agregar hielo y mezclar.',
            'Servir en una copa de martini previamente enfriada.',
            'Decorar con los granos de café.'

          ]

        },

        {

          name: 'TLC',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Gin', portion: '1.25', unit: 'oz' },
            { ingredient: 'Agua tónica', portion: '3.5', unit: 'oz' },
            { ingredient: 'Jarabe  de pepino', portion: '0.25', unit: 'oz' },
            { ingredient: 'Limón', portion: '1', unit: 'gajo' },
            { ingredient: 'Pepino', portion: '3', unit: 'rodaja' }
          ],

          steps: [
            'Macerar el pepino, el jarabe  y el gajo de limón en un vaso mezclador.',
            'Agregar hielo y ginebra.',
            'Agitar bien.',
            'Poner en un vaso collins y verter agua tónica.',
            'Decorar con una rodaja de pepino.'

          ]

        },

        {

          name: 'Ron Bloody Madras',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Ron', portion: '1.25', unit: 'oz' },
            { ingredient: 'Jugo de naranja', portion: '4', unit: 'oz' },
            { ingredient: 'Jugo de arándano', portion: '1', unit: 'dash' },
            { ingredient: 'Naranja', portion: '3', unit: 'rodaja' }
          ],

          steps: [
            'Servir el ron, jugo de naranja y jugo de arándano en un vaso con hielo y revolver.',
            'Decorar con una rebanada de naranja.'

          ]

        },

        {

          name: 'Limonada con Bourbon',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Bourbon', portion: '1.5', unit: 'oz' },
            { ingredient: 'Limonada', portion: '4', unit: 'oz' },
            { ingredient: 'Limón', portion: '1', unit: 'rodaja' }
          ],

          steps: [
            'Servir en las rocas o licuar con hielo.',
            'Adornar con una rebanada de limón.'

          ]

        },

        {

          name: 'Cuban T&T',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Gin', portion: '1.25', unit: 'oz' },
            { ingredient: 'Agua tónica', portion: '3', unit: 'rodaja' },
            { ingredient: 'Jugo de limón', portion: '0.5', unit: 'rodaja' },
            { ingredient: 'Menta', portion: '5', unit: 'hoja' },
            { ingredient: 'Menta', portion: '1', unit: 'rama' }
          ],

          steps: [
            'Macerar las hojas de menta en un vaso, hasta mover los aceites por las paredes internas del vaso.',
            'Agregar la ginebra y jugo fresco de limón',
            'Agregar agua tónica y decorar con una rama de menta.'

          ]

        },

        {

          name: 'Vodka & Arándano',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vodka', portion: '1.5', unit: 'oz' },
            { ingredient: 'Jugo de arándano', portion: '4', unit: 'oz' },
            { ingredient: 'Jugo de pomelo rosado', portion: '0.5', unit: 'oz' }
          ],

          steps: [
            'en una coctelera lleno de hielo combinar, jugo de arándano y jugo de pomelo.',
            'Agitar bien.',
            'Vaciar en un vaso de cristal o Collins con mucho hielo.',
            'Adornar con rebanadas de lima.'

          ]

        },

        {

          name: 'Paloma Rusa',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vodka', portion: '1.5', unit: 'oz' },
            { ingredient: 'Gaseosa de pomelo', portion: '6', unit: 'oz' },
            { ingredient: 'Jugo de limón', portion: '1', unit: 'dash' },
            { ingredient: 'Salsa picante', portion: '2', unit: 'gota' },
            { ingredient: 'Limón', portion: '1', unit: 'rodaja' },
            { ingredient: 'Sal', portion: '1', unit: 'pizca' }
          ],

          steps: [
            'Poner hielo en un tarro.',
            'Verter el vodka y Gaseosa de pomelo.',
            'Agregar jugo de limón, sal y salsa Tabasco.',
            'Revolver.',
            'Decorar con una rodaja de limón.'

          ]

        },

        {

          name: 'Vodka Greyhound',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Vodka', portion: '1', unit: 'oz' },
            { ingredient: 'Jugo de pomelo', portion: '1', unit: 'roz' },
            { ingredient: 'Cáscara de limón', portion: '1', unit: 'pieza' }
          ],

          steps: [
            'Combinar el vodka y el jugo de pomelo en un vaso old fashioned con hielo.',
            'Revolver.',
            'Decorar con una cáscara de limón.'

          ]

        },

        {

          name: 'Ginebra Platinum',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Licor de naranja', portion: '0.25', unit: 'oz' },
            { ingredient: 'Jugo de piña', portion: '1.5', unit: 'oz' },
            { ingredient: 'Ginger ale', portion: '1', unit: 'dash' },
            { ingredient: 'Piña', portion: '3', unit: 'rodaja' },
            { ingredient: 'Ginebra', portion: '1', unit: 'oz' }
          ],

          steps: [
            'Mezclar Gin, licor de naranja, jugo de piña y ginger ale.',
            'Poner en un vaso con hielo.',
            'Decorar con una rodaja de piña.'

          ]

        },

        {

          name: 'Chocolate Caliente con Crema Irlandesa',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            { ingredient: 'Crema irlandesa', portion: '1.5', unit: 'oz' },
            { ingredient: 'Chocolate caliente', portion: '5', unit: 'rodaja' },
            { ingredient: 'Crema batida', portion: '1', unit: 'cuchara' },
            { ingredient: 'Chocolate para espolvorear', portion: '1', unit: 'cuchara' }
          ],

          steps: [
            'Agregar el chocolate caliente y la crema irlandesa al vaso.',
            'Decorar con la crema batida y el chocolate en polvo.'

          ]

        },

        {

          name: 'Shrunken Head',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            {
              ingredient: 'Ron',
              portion: '1',
              unit: 'oz'
            },
            {
              ingredient: 'Licor de hierbas',
              portion: '0.5',
              unit: 'oz'
            },
            {
              ingredient: 'Gaseosa de cola',
              portion: '5',
              unit: 'oz'
            },
            {
              ingredient: 'Naranja',
              portion: '3',
              unit: 'rodaja'
            },
            {
              ingredient: 'Canela',
              portion: '1',
              unit: 'rama'
            }
          ],

          steps: [
            'Combinar todos los ingredientes en un vaso con hielo.',
            'Revolver bien.',
            'Decorar con una rodaja de naranja y/o una rama de canela.'
          ]

        },
        {

          name: 'Spiced Barrel',
          img: 'images/mediarecetas/mojito.jpg',
          family: 'modern',
          type: 'direct',

          ingredients: [
            {
              ingredient: 'Ron',
              portion: '1',
              unit: 'oz'
            },
            {
              ingredient: 'Whisky',
              portion: '0.5',
              unit: 'oz'
            },
            {
              ingredient: 'Gaseosa de cola',
              portion: '5',
              unit: 'oz'
            }
          ],

          steps: [
            'Combinar todos los ingredientes en un vaso con hielo.',
            'Revolver bien.',
            'Decorar con una rodaja de limón.'
          ]
        }
      ]
  },
  {
    name: 'De autor',
    description: 'Estas recetas te harán incursionar en otros horizontes de sabor. Un mundo inexplorado te está esperando con las recetas de cocktails más recientes.',
    history: 'La coctelería moderna se basa en fundamentos saludables, novedosos y creativos de la utilización de productos naturales inspirados en el conocimiento y buen gusto del barman. Es así como se han creado diversos tipos de bebidas combinadas con frutas, hortalizas, plantas aromáticas, especies, productos lácteos, aguas minerales y demás. Hay que tener en cuenta que un buen cóctel debe ser una bebida equilibrada, armoniosa y de calidad, pudiendo producir en la persona que lo bebe sensaciones placenteras en su paladar aparte del goce en la vista, pues el cóctel debe caracterizarse, también, por su presentación agradable, alegre y sugestiva.',
    menu:
      [
        {

          name: 'Luque',
          img: 'images/mediarecetas/luque.jpg',
          family: 'author',
          type: 'direct',

          ingredients: [
            {
              ingredient: 'Licor cerezas al marraschino',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Licor de café gallego',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jarabe de praliné',
              portion: '0.25',
              unit: 'oz'
            }
          ],

          steps: [
            'Coronar una vaso old fashion con jarabe y praliné de almendras.',
            'Agregar dos rocas de hielo y ambos licores.'
          ]
        },
        {

          name: 'Luque',
          img: 'images/mediarecetas/luque.jpg',
          family: 'author',
          type: 'direct',

          ingredients: [
            {
              ingredient: 'Licor de cerezas al marraschino',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Licor de café gallego',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jarabe de praliné de almendras',
              portion: '0.25',
              unit: 'oz'
            }
          ],

          steps: [
            'Coronar una vaso old fashion con jarabe y praliné de almendras.',
            'Agregar dos rocas de hielo y ambos licores.'
          ]
        },
        {

          name: 'Luque',
          img: 'images/mediarecetas/luque.jpg',
          family: 'author',
          type: 'direct',

          ingredients: [
            {
              ingredient: 'Licor de cerezas al marraschino',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Licor de café gallego',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jarabe de praliné de almendras',
              portion: '0.25',
              unit: 'oz'
            }
          ],

          steps: [
            'Coronar una vaso old fashion con jarabe y praliné de almendras.',
            'Agregar dos rocas de hielo y ambos licores.'
          ]
        }
      ]
  },
  {
    name: 'Molecular',
    description: 'Estas recetas te harán incursionar en otros horizontes de sabor. Un mundo inexplorado te está esperando con las recetas de cocktails más recientes.',
    history: 'La coctelería moderna se basa en fundamentos saludables, novedosos y creativos de la utilización de productos naturales inspirados en el conocimiento y buen gusto del barman. Es así como se han creado diversos tipos de bebidas combinadas con frutas, hortalizas, plantas aromáticas, especies, productos lácteos, aguas minerales y demás. Hay que tener en cuenta que un buen cóctel debe ser una bebida equilibrada, armoniosa y de calidad, pudiendo producir en la persona que lo bebe sensaciones placenteras en su paladar aparte del goce en la vista, pues el cóctel debe caracterizarse, también, por su presentación agradable, alegre y sugestiva.',
    menu:
      [
        {

          name: 'Luque',
          img: 'images/mediarecetas/luque.jpg',
          family: 'author',
          type: 'direct',

          ingredients: [
            {
              ingredient: 'Licor cerezas al marraschino',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Licor de café gallego',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jarabe de praliné',
              portion: '0.25',
              unit: 'oz'
            }
          ],

          steps: [
            'Coronar una vaso old fashion con jarabe y praliné de almendras.',
            'Agregar dos rocas de hielo y ambos licores.'
          ]
        },
        {

          name: 'Luque',
          img: 'images/mediarecetas/luque.jpg',
          family: 'author',
          type: 'direct',

          ingredients: [
            {
              ingredient: 'Licor de cerezas al marraschino',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Licor de café gallego',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jarabe de praliné de almendras',
              portion: '0.25',
              unit: 'oz'
            }
          ],

          steps: [
            'Coronar una vaso old fashion con jarabe y praliné de almendras.',
            'Agregar dos rocas de hielo y ambos licores.'
          ]
        },
        {

          name: 'Luque',
          img: 'images/mediarecetas/luque.jpg',
          family: 'author',
          type: 'direct',

          ingredients: [
            {
              ingredient: 'Licor de cerezas al marraschino',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Licor de café gallego',
              portion: '1.5',
              unit: 'oz'
            },
            {
              ingredient: 'Jarabe de praliné de almendras',
              portion: '0.25',
              unit: 'oz'
            }
          ],

          steps: [
            'Coronar una vaso old fashion con jarabe y praliné de almendras.',
            'Agregar dos rocas de hielo y ambos licores.'
          ]
        }
      ]
  }
]
