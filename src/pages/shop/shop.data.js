const SHOP_DATA = [
    {
      id: 1,
      title: "Vehículos",
      routeName: "vehicles",
      items: [
        {
          id: 1,
          name: "Chevrolet Sail",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chevrolet_Sail_3_China_2015-04-06.jpg/250px-Chevrolet_Sail_3_China_2015-04-06.jpg",
          price: 18190,
        },
        {
          id: 2,
          name: "Chevrolet Spark GT",
          imageUrl: "https://imgcf.ecn.cl/600/72/7221e13b609581c2b8e71ae34f6431c6d5e22fb8.bin.jpg",
          price: 15490,
        },
        {
          id: 3,
          name: "Toyota Yaris AT",
          imageUrl: "https://i2.wp.com/www.deagenciapanama.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-03-at-10.04.46-PM.png?fit=768%2C519&ssl=1",
          price: 19950,
        },
        {
          id: 4,
          name: "Mazda 3",
          imageUrl: "https://cnet1.cbsistatic.com/img/VxWt3hT4ObWB5ZxSOy0Ye9A3-I4=/1200x630/2019/12/20/6c3b5753-c879-4b5b-ac19-f26c92cd773c/00000img-00000-burst20191124142502488-cover.jpg",
          price: 26650,
        },
        {
          id: 5,
          name: "Nissan Sentra",
          imageUrl: "https://i1.wp.com/www.perezloizeau.com/wp-content/uploads/2016/09/Nissan-Sentra-2016_1.jpg?resize=474%2C267",
          price: 22500,
        },
        {
          id: 6,
          name: "Chery QQ",
          imageUrl: "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/chery/qq/11/ve/79a65426-31fd-4f17-b82a-c45d9e5dd335/RT_PU_d0f33d3477f9430f9b2bc2ff56647cf2.jpg",
          price: 13990,
        },
        {
          id: 7,
          name: "Kia Rio",
          imageUrl: "https://autoexitopr.com/wp-content/uploads/2020/06/24022_1_1580571764-800x535.jpeg",
          price: 18450,
        },
      ],
    },
    {
      id: 2,
      title: "Pick Up",
      routeName: "pick-up",
      items: [
        {
          id: 10,
          name: "Nissan Terrano",
          imageUrl: "https://chileautos.pxcrush.net/cars/dealer/5j5dtn15m582g8qzufvsusunv.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480",
          price: 35900,
        },
        {
          id: 11,
          name: "Mitsubishi L200",
          imageUrl: "https://www.autosonline.cl/images/stories/mitsubishi/l200/exterior/imgcache/mitsubishi-l200-1_1575x1050.jpg",
          price: 37290,
        },
        {
          id: 12,
          name: "Toyota Hilux",
          imageUrl: "https://autosdeprimera.com/v2/wp-content/uploads/2018/11/toyota_hilux_2019_b.jpg",
          price: 41990,
        },
        {
          id: 13,
          name: "Mazda BT-50",
          imageUrl: "https://cdn.motor1.com/images/mgl/1xqKW/s1/2021-mazda-bt-50.jpg",
          price: 40500,
        },
        {
          id: 14,
          name: "Great Wall Pao",
          imageUrl: "https://avtotachki.com/wp-content/uploads/2020/05/great_wall_pao_2019_1-e1588709671332.jpg",
          price: 39500,
        },
        {
          id: 15,
          name: "Mahindra Pick UP Plus",
          imageUrl: "https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/CM_9119-36_LOW.jpg?itok=Km92pE4v",
          price: 36990,
        },
      ],
    },
    {
      id: 3,
      title: "Mini Buses / Van",
      routeName: "minibus",
      items: [
        {
          id: 18,
          name: "Mercedes Benz Sprinter Passenger",
          imageUrl: "https://cnet3.cbsistatic.com/img/FD91ptQEIdpuGJaD5wc36sCs0MQ=/1240x775/2021/12/21/79db87a7-5dcb-4bf3-ac94-7e5106db593c/2021MBV040001_1280_01.png",
          price: 76990,
        },
        {
          id: 19,
          name: "Peugeot Boxer Minibus",
          imageUrl: "https://www.actualidadmotor.com/wp-content/uploads/2018/09/Peugeot-Boxer-23.jpg",
          price: 82290,
        },
        {
          id: 20,
          name: "Hyundai H1 Van",
          imageUrl: "https://http2.mlstatic.com/arriendo-minibus-van-hyundai-h1-9-y-12-asientos-sin-chofer-D_NQ_NP_872597-MLC31676497328_082019-O.jpg",
          price: 72300,
        },
      ],
    },
    {
      id: 4,
      title: "Off Road / 4x4",
      routeName: "off-road",
      items: [
        {
          id: 23,
          name: "Jeep Grand Cherokee SRT8",
          imageUrl: "https://i1.wp.com/www.motoradictos.com/images/2012/12/jeep-11-e1356869000719.jpg?fit=580%2C381&ssl=1",
          price: 64960,
        },
        {
          id: 24,
          name: "Jeep Wrangler Rubicon 2.8",
          imageUrl: "https://agenceauto.com/uploads/ImageEntity/jeep-wrangler-2-8-crd-200-fap-rubicon-bva-prepa-large-74029-5e305b4f43354.jpg",
          price: 96000,
        },
        {
          id: 25,
          name: "Toyota RAV4",
          imageUrl: "https://www.motor.es/fotos-noticias/2018/03/toyota-rav4-2019-201845069_1.jpg",
          price: 80960,
        },
        {
          id: 26,
          name: "Land Rover Defender",
          imageUrl: "https://i.blogs.es/7219db/land-rover-defender-2020_/1366_2000.jpg",
          price: 87450,
        },

      ],
    },
   
  ];
  
  export default SHOP_DATA;