import { Injectable } from '@angular/core';

let menu = {
  "menus": [
    {
      "name": "Main",
      "isAvailable": 1,
      "sections": [
        "Appetizers",
        "Soup & Salad",
        "Freshly Baked Tandoori Breads",
        "Mediterranean Cuisine",
        "Side Orders",
        "Vegetarian Specialties",
        "Tandoori Cuisine",
        "Indian Cuisine",
        "Desserts",
        "Drinks",
        "White Wines (by the bottle)",
        "Red Wines (by the bottle)",
        "House Wines (by the glass)"
      ]
    }
  ],
  "items": [
    {
      "name": "Hummus",
      "description": "The original Middle Eastern dip of garbanzo beans, tahini sauce and a special dressing. Served with pita bread.",
      "images": [
        "6d309416-8ea9-450d-a73c-000af409a58d"
      ],
      "tags": [
        "Vegan",
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Samosas",
      "description": "Two crispy pastries filled with fresh mixed vegetables or delicately spiced lean ground beef.",
      "images": [
        "50df3150-5b75-47f2-af3f-2ec842ffa123",
        "bb22e4ac-0ed8-4de0-ba03-29edc53e0e0e"
      ],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Appetizers",
          "option_groups": {
            "Filling": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Beef",
                  "value": 100
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Pakoras",
      "description": "Delicately spiced fried fritters lightly battered in chickpea flour. Served with cilantro and tamarind chutneys.",
      "images": [
        "466224d2-40fe-4842-89d9-e508fd00c4bd"
      ],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Appetizers",
          "option_groups": {
            "Filling": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Paneer",
                  "value": 200
                },
                {
                  "name": "Cauliflower & Potato",
                  "value": 200
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Paneer Tikka",
      "description": "Tender pieces of cheese marinated with delicate spices and roasted in the Tandoor.",
      "images": [
        "dc8fd481-a8c1-41ff-8ee4-bb0c974cad2f"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 895,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Fish Tikka Kabob",
      "description": "Juicy pieces of fresh cod marinated with spices and roasted in the Tandoor oven. Accompanied with our special cilantro and tamarind chutneys.",
      "menus": {
        "Main": {
          "price": 895,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Cedar's Surprise",
      "description": "A selection of Grape Leaves, Vegetable Cutlet, Vegetable Samosa, Vegetable Pakora and Spinach Pie. Served with chutney.",
      "images": [
        "77a38a64-171d-40fd-a18b-9503470462dd"
      ],
      "menus": {
        "Main": {
          "price": 995,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Mazza Plate",
      "description": "Customer's favorite: Hummus, Baba Ghannoj, Flafill, Grape Leaves and Tabboleh. Served with pita bread.",
      "images": [
        "c2156f14-d25b-4e54-aee3-adabad621017"
      ],
      "menus": {
        "Main": {
          "price": 1595,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Vegetarian Delight",
      "description": "A selection of Vegetable Samosa, Vegetable Pakora, Paneer Pakora, Vegetable Cutlet and Grape leaves. Served with cilantro and tamarind chutneys.",
      "images": [
        "d9d51123-5e35-4585-9719-9f083f3f2f02"
      ],
      "tags": [
        "Vegetarian"
      ],
      "menus": {
        "Main": {
          "price": 995,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Baba Ghannoj",
      "description": "Eggplant smoked on an open fire, pureed and mixed with tahini sauce and our own special dressing. Served with pita bread.",
      "tags": [
        "Vegan",
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Tabboleh",
      "description": "A salad made up of chopped parsley leaves, tomatoes, green onions, bulgur wheat and our own dressing.",
      "images": [
        "4b1982ce-1cd3-4ca0-8ff7-96072fe42567"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Vegetable Cutlets",
      "description": "A medley of vegetables, herbs & spices formed into patties, lightly breaded and sauteÌed. Served with cilantro and tamarind chutneys.",
      "images": [
        "577d60e3-4812-4c90-b716-81e29ebb6f96"
      ],
      "tags": [
        "Vegetarian"
      ],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Grape Leaves",
      "description": "Vine ripened grape leaves stuffed with seasoned rice, onions and delicate spices. Served with cilantro and tamarind chutneys.",
      "images": [
        "210ef4fc-6094-46c8-b817-5165b8f70a8d"
      ],
      "tags": [
        "Gluten Free",
        "Vegetarian"
      ],
      "menus": {
        "Main": {
          "price": 795,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Chicken Tikka",
      "description": "Boneless chicken marinated in yogurt, herbs and spices. Served on a bed of lettuce with cilantro and tamarind chutneys.",
      "images": [
        "870764f0-456a-4fbf-9da1-02b7273fa63e"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 895,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "Bombay Tandoori Chicken Wings",
      "description": "Spicy chicken wings roasted in the Tandoor oven. Served with tamarind and cilantro chutneys.",
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 895,
          "section": "Appetizers"
        }
      },
      "images": [
        "babd855f-3134-458c-afd8-024c3ef2b9de"
      ]
    },
    {
      "name": "Tandoori Delight",
      "description": "A selection of Samosa, Chicken Pakora, Chicken Tikka and Beef Kabob. Served with cilantro and tamarind chutneys.",
      "images": [
        "062006c9-028b-4f0c-bf3a-c3eaa3bea581"
      ],
      "menus": {
        "Main": {
          "price": 995,
          "section": "Appetizers"
        }
      }
    },
    {
      "name": "House Salad",
      "description": "Our house salad consists of fresh garden greens, tomatoes, olives, carrots, bell peppers, mushrooms, and cucumbers. Served with your choice of either Mediterranean or Ranch dressing.",
      "images": [
        "f2a23777-21a4-44e4-b068-307ca6451987"
      ],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Soup & Salad",
          "option_groups": {
            "Dressing": {
              "OPTION_CHOOSE": [
                {
                  "name": "Mediterranean",
                  "value": null
                },
                {
                  "name": "Ranch",
                  "value": null
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Caesar Salad",
      "description": "Fresh romaine lettuce prepared with a classic Caesar dressing.",
      "images": [
        "9da31667-8c6f-40c4-a086-07ee3ec7ed2d"
      ],
      "menus": {
        "Main": {
          "price": 695,
          "section": "Soup & Salad",
          "option_groups": {
            "Add Meat": {
              "OPTION_ADD": [
                {
                  "name": "Chicken",
                  "value": 200
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Dal Soup",
      "description": "Homemade lentil soup prepared in an old Indian tradition.",
      "images": [
        "87266c84-ccdc-4fb8-9fd5-2108f5fc49d4"
      ],
      "menus": {
        "Main": {
          "price": 550,
          "section": "Soup & Salad"
        }
      }
    },
    {
      "name": "Mulligatawny Soup",
      "description": "A rich chicken, lentil and rice soup flavored with Indian spices and finished with a hint of lemon.",
      "images": [
        "2a82968e-a2db-4bea-88a2-b685cb744be2"
      ],
      "menus": {
        "Main": {
          "price": 550,
          "section": "Soup & Salad"
        }
      }
    },
    {
      "name": "Mediterranean Salad",
      "description": "Fresh garden salad made with lettuce, tomatoes, olives, carrots, bell peppers, mushrooms, cucumbers, feta cheese and your choice of either Mediterranean or Ranch dressing.",
      "images": [
        "3d3b8448-7ee9-413c-999d-cf4d9a0f1738"
      ],
      "menus": {
        "Main": {
          "price": 595,
          "section": "Soup & Salad",
          "option_groups": {
            "Dressing": {
              "OPTION_CHOOSE": [
                {
                  "name": "Mediterranean",
                  "value": null
                },
                {
                  "name": "Ranch",
                  "value": null
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Cucumber Mint Yogurt Salad",
      "description": "Cucumbers mixed with yogurt, mint, olive oil and a touch of garlic.",
      "images": [
        "89609f4c-6f9e-4085-8963-51de3fbe9f4c"
      ],
      "menus": {
        "Main": {
          "section": "Soup & Salad",
          "price": 595
        }
      }
    },
    {
      "name": "Mughlai Tomato Soup",
      "description": "A rich curried tomato soup spiced with cumin and curry leaves.",
      "images": [
        "7a2e5080-3a73-42df-bbe4-0f0982a119ee"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "Soup & Salad",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Roti",
      "description": "Unleavened whole wheat bread.",
      "tags": [
        "Vegan"
      ],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Garlic Naan",
      "description": "Leavened bread topped with garlic.",
      "images": [
        "2b024b80-c61f-4953-b3fe-a737df9d6cbd"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 275,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Plain Naan",
      "description": "White Leavened bread.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 255,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Cedars Naan",
      "description": "Leavened bread stuffed with chicken, almonds and herbs.",
      "images": [
        "2fbbfc77-13bd-4554-857c-f4d1fb0da105"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 595,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Onion Kulcha",
      "description": "Leavened bread stuffed with fresh onions.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Paneer Naan",
      "description": "Leavened bread stuffed with traditional Indian homemade cheese.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Spinach Naan",
      "description": "Leavened bread stuffed with seasoned spinach.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Vegetable Naan",
      "description": "Leavened bread stuffed with mixed vegetables and herbs.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Aloo Paratha",
      "description": "Unleavened layered whole wheat bread stuffed with potatoes, onions and fresh spices.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Plain Paratha",
      "description": "Unleavened layered whole wheat bread.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 395,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Pesto Naan",
      "description": "Leavened bread stuffed with pesto.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Mint Naan (Pudina)",
      "description": "Leavened bread stuffed with fragrant mint and spices.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Keema Naan",
      "description": "Leavened bread stuffed with ground beef, ginger, onions and a touch of cumin.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 595,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Spinach & Paneer Naan",
      "description": "Leavened bread stuffed with seasoned spinach and homemade Indian cheese.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Chilli Paratha",
      "description": "Unleavened whole wheat bread layered with chopped serrano chillis and onions.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Freshly Baked Tandoori Breads",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Falafel Plate",
      "description": "A mixture of fava beans, chickpeas, parsley and spices. Garnished with cucumbers, tomatoes and tahini sauce. Served with pita bread.",
      "images": [
        "b82e38c4-bfb8-4039-bb0d-c1888b478af3"
      ],
      "tags": [
        "Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1095,
          "section": "Mediterranean Cuisine",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Combination Plate",
      "description": "Customers favorite: Hummus, Baba Ghannoj, and Falafel. Served on a bed of lettuce with pita bread.",
      "images": [
        "40b62efc-c015-4e32-abf5-cc50702a3cc0"
      ],
      "tags": [
        "Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Mediterranean Cuisine",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Gyros Plate",
      "description": "Strips of marinated beef sauteÌed with onions. Gyros are served on a bed of lettuce with hummus.",
      "images": [
        "abfd5b4d-0c25-47b3-a936-5eb5124a8bc4"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1295,
          "section": "Mediterranean Cuisine",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Vegetarian Plate",
      "description": "Combination of seasonal vegetables sauteÌed and mildly spiced. Served with Basmati rice, Grape leaves, Spinach pie, Falafel, and Bulgar wheat.",
      "tags": [
        "Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1295,
          "section": "Mediterranean Cuisine",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Shish Taouk",
      "description": "Chicken marinated in garlic, oregano, saffron & other Middle Eastern spices. Served on a bed of rice & fresh vegetables.",
      "images": [
        "c7dda4be-7733-4e63-967f-f82d13483a8a"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1495,
          "section": "Mediterranean Cuisine",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Shish Kabob",
      "description": "Tender fillet of lamb or beef kabobs marinated in a special sauce, skewered with onions and tomatoes. Served with rice and fresh vegetables.",
      "images": [
        "435d9732-99a3-4c82-ad65-89ebb9eab430"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1595,
          "section": "Mediterranean Cuisine",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Cedars Delight",
      "description": "Combination of Shish Kabob, Shish Taouk, Prawns & Grape leaves. Served on a bed of rice & fresh vegetables.",
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1895,
          "section": "Mediterranean Cuisine",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Sweet Mango Chutney or Mango Pickle",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Side Orders",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Chopped Onions & Chillies",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 195,
          "section": "Side Orders",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Papadum",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 295,
          "section": "Side Orders",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Cucumber Mint Yogurt",
      "description": "Cucumbers mixed with yogurt, mint, olive oil, and a touch of garlic.",
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Side Orders",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Raita",
      "description": "A refreshing yogurt salad made with cucumbers, carrots and tomatoes.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 350,
          "section": "Side Orders",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Indian Salad",
      "description": "Onions, tomatoes, cucumbers, and green chillies mixed in a tangy sauce.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 350,
          "section": "Side Orders",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Rice",
      "description": "Basmati Rice slow cooked",
      "images": [
        "f8be2f3b-e687-4f8c-80f5-2ce50de150be"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 400,
          "section": "Side Orders",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Sauteed Vegetables",
      "description": "Lightly seasoned fresh vegetables.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Side Orders",
          "option_groups": {
            "Order Size": {
              "OPTION_CHOOSE": [
                {
                  "name": "Half Order",
                  "value": 0
                },
                {
                  "name": "Full Order",
                  "value": 200
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Channa Masala",
      "description": "Chickpeas cooked over a slow fire blended with spices and tomatoes.",
      "images": [
        "e2bdc3aa-0e7e-4394-9176-f612eee0ef41"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1095,
          "section": "Vegetarian Specialties",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Plain",
                  "value": 0
                },
                {
                  "name": "Aloo",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Mutter Masala (Peas)",
      "description": "Fresh green peas cooked in a golden curry sauce.",
      "images": [
        "5fbbb47b-bee6-42a5-b204-50216eed351d"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1095,
          "section": "Vegetarian Specialties",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Aloo",
                  "value": 0
                },
                {
                  "name": "Mushroom",
                  "value": 100
                },
                {
                  "name": "Paneer",
                  "value": 100
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Dal Maharani",
      "description": "Creamed lentils cooked with select herbs and spices.",
      "images": [
        "b267af0b-27d1-4d54-8962-ac52897831f9"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Vegetarian Specialties",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Aloo Gobi",
      "description": "Potatoes and cauliflower sauteÌed with onions and fresh herbs.",
      "images": [
        "7f15b347-dd72-42d2-a7bb-03db2d866b89"
      ],
      "tags": [
        "Vegan",
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Vegetarian Specialties",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Baigan Bhartha (Eggplant)",
      "description": "Eggplant baked over an open flame, mashed and seasoned with herbs, sauteÌed onions, green peas, and tomatoes.",
      "images": [
        "2b40a164-924d-4a56-9687-85c03f090e0e"
      ],
      "tags": [
        "Vegan",
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Vegetarian Specialties",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Navratan Korma",
      "description": "Fresh vegetables and paneer in a cashew nut cream sauce.",
      "images": [
        "ee6d20c8-ea39-480b-8b63-5d13500a88fe"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1295,
          "section": "Vegetarian Specialties",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Vegetable Kofta",
      "description": "Pureed vegetables and cheese kofta served in a butter sauce.",
      "images": [
        "1a1f74de-64bd-490b-aad5-a7b4436e98bc"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 1295,
          "section": "Vegetarian Specialties",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Tandoori Chicken",
      "description": "Juicy spring chicken marinated in flavorful, fresh ground spices. Served with sliced onions and lemons. (On the bone)",
      "images": [
        "6ec22fc0-f7bf-4fd2-b313-63ae135be76e",
        "d501ee52-563f-4b01-9aba-9d2b0f8a789f"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1395,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Tandoori Chicken Tikka",
      "description": "Succulent pieces of boneless chicken rubbed with Indian herbs and spices. Served with sliced onions and lemons.",
      "images": [
        "66ffb416-f2d3-4337-9d53-b65b696808cc"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1495,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Chicken Boti Kabob",
      "description": "Tender pieces of Chicken Breast marinated with our special blend of Indian spices & yogurt.",
      "images": [
        "80563d0f-4cef-4bf6-b843-27462501f838"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1595,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Keema Kabob",
      "description": "Ground beef with onions and fresh herbs.",
      "images": [
        "576b61e7-0a69-4508-aed9-6d4b1ae6572e"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1295,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Lamb Boti Kabob",
      "description": "Tender pieces of lamb marinated with our special blend of Indian spices.",
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1595,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Tandoori Cod",
      "description": "Filet of cod marinated and cooked in the Tandoor. Served with rice, vegetables, and lemon.",
      "images": [
        "d4ed8bf5-99b1-44e5-941f-238d813c45ec"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1495,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Tandoori Salmon",
      "description": "Fresh king salmon cooked in our special Tandoori marinade.",
      "images": [
        "aef9fc29-8568-4939-aac8-0e45784a3d35"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1695,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Tandoori Prawns",
      "description": "Jumbo prawns marinated in a special blend of spices & herbs then roasted in the Tandoor. Served with sliced onions & lemons.",
      "images": [
        "019e8701-dc8a-4cf9-a982-7cf9a8a4223b"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1795,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Tandoori Surprise",
      "description": "An assortment of Tandoori specialties: Chicken, Lamb, Beef and Fish. Served with sliced onions and lemons.",
      "images": [
        "8d1f46d9-947d-4a23-9d08-784b3d4caea1"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1895,
          "section": "Tandoori Cuisine",
          "option_groups": {
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Curry Specialties",
      "description": "A traditional brown curry prepared with tomatoes, onions and fresh herbs.",
      "images": [
        "ddbe775f-a802-47bd-919f-a0feefd1a5e5"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1095,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                },
                {
                  "name": "Chicken",
                  "value": 200
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Coconut Curry",
      "description": "Rich curry cooked with coconuts, ginger, garlic and our special blend of spices.",
      "images": [
        "ea937f1c-2653-4e55-85c9-1e27ecba1eee"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Mango Curry",
      "description": "Tender pieces of meat or vegetables sauteÌed with Major Grey Mango Chutney and a touch of cream.",
      "images": [
        "1d95c953-d1e5-42e5-987f-b0a3c5066a45"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Jalfrazie",
      "description": "Boneless meat or vegetables stir-fried in brown curry with bell peppers, garlic, ginger, tomatoes, and onions.",
      "images": [
        "98a8c27b-2348-4bdd-9867-5d2d16e7394c"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                },
                {
                  "name": "Vegetable",
                  "value": 0
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Karai Gosht",
      "description": "Cooked in a traditional Indian wok with onions, tomatoes, fenugreek leaves, capsicums, fresh ginger, and garlic.",
      "images": [
        "1b6a3572-816d-4ca5-9b80-704240135cfd"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Rogan Josh",
      "description": "This famous dish from Kashmir is cooked with tomatoes and onions then roasted with spices in a rich brown curry sauce.",
      "images": [
        "467fdce4-7eac-41ee-b897-1c7fc0656783"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Royal Biryani",
      "description": "A classic Mughlai dish of Basmati rice cooked with curry, raisins, cashew nuts, and saffron. Served with Raita.",
      "images": [
        "7ecf3d7a-ace1-4efb-ba2e-ac5503f1ad5b"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Shahi Korma",
      "description": "A traditional dish prepared with exotic spices, herbs and a cream based sauce with almonds.",
      "images": [
        "fd9ab224-8359-41e1-8265-2762b9792d4e"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Vindaloo",
      "description": "Zesty curry cooked in a tangy sauce of wine vinegar, ginger, and potatoes.",
      "images": [
        "f9a3cd32-47c0-4f52-a28c-5057cd9f33c8"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                },
                {
                  "name": "min",
                  "value": 0
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Butter Masala",
      "description": " deliciously smooth butter, tomato, and cream sauce, spiced with ginger and garlic.",
      "images": [
        "4e9f6f5c-b608-4630-b0a8-dfdd8a5c471c"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Madras Chilli Masala",
      "description": "This dish originates from the city of Madras. Cooked in a sauce of tomatoes, roasted dry chillies, browned garlic, cumin and other authentic Indian spices.",
      "images": [
        "9d90b51e-d20e-4822-b957-5f8446293250"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Palak Masala",
      "description": "Cream of spinach simmered with onions and spices.",
      "images": [
        "6700a3bd-7fcc-42e7-9186-99129a549e49"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1095,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Aloo",
                  "value": 100
                },
                {
                  "name": "Paneer",
                  "value": 200
                },
                {
                  "name": "Chicken",
                  "value": 300
                },
                {
                  "name": "Beef",
                  "value": 400
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Tikka Masala",
      "description": "A cream based curry cooked with ginger and cilantro in a tomato sauce.",
      "images": [
        "30d8c186-407d-4569-b7df-d9b51850eaa8"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 1195,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Vegetable",
                  "value": 0
                },
                {
                  "name": "Paneer",
                  "value": 100
                },
                {
                  "name": "Chicken",
                  "value": 200
                },
                {
                  "name": "Beef",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Okra Masala",
      "description": "Okra cooked with sauteÌed onion, tomatoes, special herbs and spices.",
      "images": [
        "6caff444-b551-45a3-a87c-d722dd8ae4b0"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 1095,
          "section": "Indian Cuisine",
          "option_groups": {
            "Options": {
              "OPTION_CHOOSE": [
                {
                  "name": "Plain",
                  "value": 0
                },
                {
                  "name": "Chicken",
                  "value": 300
                }
              ]
            },
            "Spice Level": {
              "OPTION_RANGE": [
                {
                  "name": "min",
                  "value": 0
                },
                {
                  "name": "max",
                  "value": 5
                },
                {
                  "name": "step",
                  "value": 1
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "Marble Nut Halvah",
      "description": "A Middle Eastern delicacy made with sesame, Swiss Chocolate, roasted nuts, and honey.",
      "images": [
        "73ec05f1-22a0-4d86-99f4-119a90899286"
      ],
      "tags": [
        "Gluten Free",
        "Can be made Vegan"
      ],
      "menus": {
        "Main": {
          "price": 295,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Baklava",
      "description": "A delicious Middle Eastern pastry, made of nuts baked between layers of thin dough and steeped in syrup that has been flavored with exotic juices.",
      "images": [
        "f0e8065b-0da5-453d-91bb-64ed5a1a15d3"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 395,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Gulab Jamun",
      "description": "An Indian delicacy made from milk dough fried until golden brown, and served in a honey and saffron syrup.",
      "images": [
        "891e898a-4833-41eb-a36d-d090db9f045c"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Kheer",
      "description": "Traditional Indian rice pudding cooked with nuts and cardamom.",
      "images": [
        "db3802fd-a4a3-4c3c-a47f-a9add43caeda"
      ],
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Kulfi",
      "description": "Traditional Indian ice cream made of condensed milk, fresh cream, almonds, and cardamon.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Coconut Almond Ice Cream",
      "description": "Specially prepared ice cream. Local from Snoqualimie creamery,",
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Mango Pistachio Ice Cream",
      "description": "Specially prepared ice cream. Local from Snoqualimie creamery,",
      "tags": [
        "Gluten Free"
      ],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Original Baked New York Cheesecake",
      "description": "The name says it all! Served with mango sauce.",
      "images": [
        "9df69901-9208-4e4e-a8d8-caaaace1704c"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Rasmalai",
      "description": "Delicate homemade cheese patties served in an almond sweetened milk and cardamom sauce.",
      "images": [
        "4127f1c2-4a0b-44e9-b272-0074a5ef3f80"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 495,
          "section": "Desserts",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Chai (Unlimited Refills)",
      "description": "An ancient tea of India, made up of milk, cardamom, cloves, fennel, and sugar.",
      "images": [
        "73954770-f49f-4d06-a9ed-f75af79a5ce6",
        "a3220590-c3e1-48cb-8156-aaa5668c07f5"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 295,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Mango Lemonade",
      "description": "Traditional lemonade with a twist of mango.",
      "images": [
        "834a93a8-87c9-45de-93ae-21cfb8b99f51"
      ],
      "tags": [],
      "menus": {
        "Main": {
          "price": 300,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Plain Lassi",
      "description": "Traditional Indian drink made with homemade yogurt, milk, and rosewater.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 395,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Mango Lassi",
      "description": "Traditional Indian drink made with mango, homemade yogurt, and milk.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 395,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Mango Shake",
      "description": "Vanilla Bean ice cream blended with mango and milk.",
      "tags": [],
      "menus": {
        "Main": {
          "price": 450,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Soda",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Assorted Teas",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Iced Tea",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Lemonade",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Coffee",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Bottled Water",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Lebanese Coffee",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Sparkling Water",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Mango Juice",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 250,
          "section": "Drinks",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Chateau Ste. Michelle Riesling",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 1900,
          "section": "White Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Sebastiani Chardonnay",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2200,
          "section": "White Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Columbia Pinot Gris",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2500,
          "section": "White Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Clos De Bois Chardonnay",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2600,
          "section": "White Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "St. Supery Blanc Sauvignon",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2800,
          "section": "White Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Ferrari Carano Chardonnay",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 3000,
          "section": "White Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Hogue Pinot Grigio",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2800,
          "section": "White Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Blackstone Merlot",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2200,
          "section": "Red Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Forest Glen Cabernet Sauvignon",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2300,
          "section": "Red Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "California Shiraz",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2500,
          "section": "Red Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Gabbiano Chianti",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2700,
          "section": "Red Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Mondavi P.S. Pinot Nior",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2700,
          "section": "Red Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Chateau Ste. Michelle Merlot",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2800,
          "section": "Red Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Peachy Canyon Incredible Zinfandel",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 2800,
          "section": "Red Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Kendall-Jackson Merlot",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 3000,
          "section": "Red Wines (by the bottle)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "House White",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 500,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "House Red",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 500,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "White Zinfandel",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 500,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Red Zinfandel",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 500,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Columbia Crest Two Vines Merlot",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Columbia Crest Chardonnay",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Hogue Cabernet-Merlot",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Hogue Pinot Grigio",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Chateau Ste. Michelle Riesling",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Fetzer Sundial Chardonnay",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "California Shiraz",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    },
    {
      "name": "Tisdale Shiraz",
      "description": "",
      "tags": [],
      "menus": {
        "Main": {
          "price": 550,
          "section": "House Wines (by the glass)",
          "option_groups": {}
        }
      }
    }
  ]
};

@Injectable()
export class Menu {
  private menu: any;

  constructor() {
    this.menu = menu;
  }

  public getSections() {
    return this.menu['menus'][0]['sections'];
  }

  public getItems() {
    return this.menu['items'];
  }

}
