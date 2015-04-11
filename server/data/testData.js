var someData = 
{
  "restaurants" : [
    { "id": 1,
      "name": "asdf",
      "location": "04917",
      "price": 30
    },
    { "id": 2,
      "name": "second one",
      "location": "04917",
      "price": 50
    }
  ],

  "reviews": [

    {
      "id": 1,
      "restaurantID": 1,
      "dishname": "hamburger",
      "stars": 4,
      "reviewText": "I like the hamburger which tasted good and very much like a hamburger."
    },

    {
      "id": 2,
      "restaurantID": 1,
      "dishname": "hotdog",
      "stars": 1,
      "reviewText": "I did not like the hot dog which tasted bad and very much like a bad hot dog."
    },
    {
      "id": 1,
      "restaurantID": 2,
      "dishname": "hamburger",
      "stars": 4,
      "reviewText": "hi2"
    },

    {
      "id": 2,
      "restaurantID": 2,
      "dishname": "hotdog",
      "stars": 1,
      "reviewText": "hi2"
    }

  ]


}

exports.data = someData;