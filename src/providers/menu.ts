import { Injectable } from '@angular/core';

let menu = {
  "name": "Lunch",
  "start": "11:30:00",
  "end": "16:00:00",
  "isAvailable": 1,
  "sections": [
    {
      "name": "Lunch Deals!",
      "items": [
        {
          "name": "Soup, Salad & Focaccia Bread",
          "description": "Featuring a bowl of homemade Minestrone or Soup of the Day, a Caesar or House Salad and our fresh baked Focaccia Bread, served with dipping oil.",
          "price": 799,
          "section": "Lunch Deals!",
          "menu": "Lunch",
          "option_groups": {},
          "images": [
            "5e36d9aa-101b-11e7-8b29-28cfe91e4031"
          ],
          "uid": "029b8ce1-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Mamma's Mac and Cheese",
          "description": "Squiggly pasta, smoked prosciutto and a blend of zesty cheeses topped with crispy Italian breadcrumbs. Baked to perfection! Served with your choice of salad or homemade soup.",
          "images": [
            "4a08e81f-bf40-4feb-88ea-06dec9eaa854",
            "5300cb77-866f-462e-b0cf-47b8c13a2e9b",
            "22816a77-7362-4499-a636-e3f6f89dbcae"
          ],
          "price": 999,
          "section": "Lunch Deals!",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                }
              ]
            },
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8ce2-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Pasta Special!",
          "description": "Choose Fetuccine Alfredo with our creamy Garlic Parmesan Cheese Sauce or Spaghetti with homemade Marinara Sauce. Topped with Parmesan cheese. Both served with choice of salad or homemade soup.",
          "price": 1099,
          "section": "Lunch Deals!",
          "menu": "Lunch",
          "option_groups": {
            "Pasta & Sauce": {
              "OPTION_CHOOSE": [
                {
                  "name": "Fettuccine and Creamy Garlic Parmesan Cheese Sauce",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "Spaghetti and Homemade Marinara Sauce",
                  "values": 0,
                  "value": null,
                  "is_default": 0
                }
              ]
            },
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                }
              ],
              "OPTION_COUNT": [
                {
                  "name": "Tuscano's Homemade Meatballs",
                  "value": 150,
                  "is_default": 0
                }
              ]
            },
            "Side": {
              "OPTION_CHOOSE": [
                {
                  "name": "House Salad",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "Homemade Soup",
                  "value": 0,
                  "is_default": 0
                }
              ]
            },
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "d9d05a26-1009-11e7-8066-28cfe91e4031"
          ],
          "uid": "029b8ce4-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Tuscano's Pizza Special",
          "description": "A personal size cheese pizza served with soup or salad.",
          "price": 1099,
          "section": "Lunch Deals!",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Pepperoni",
                  "value": 100,
                  "is_default": 0
                },
                {
                  "name": "Sausage",
                  "value": 100,
                  "is_default": 0
                }
              ]
            },
            "Side": {
              "OPTION_CHOOSE": [
                {
                  "name": "House Salad",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "Homemade Soup",
                  "value": 0,
                  "is_default": 0
                }
              ]
            },
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "9100487a-101c-11e7-a4ca-28cfe91e4031"
          ],
          "uid": "029b8ce5-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Cheese Ravioli",
          "description": "Ravioli filled with Mozzarella cheese topped with your choice of Marinara or Alfredo Sauce. Served with your choice of salad or homemade soup.",
          "price": 1149,
          "section": "Lunch Deals!",
          "menu": "Lunch",
          "option_groups": {
            "Sauce": {
              "OPTION_CHOOSE": [
                {
                  "name": "Alfredo",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "Marinara",
                  "value": 0,
                  "is_default": 0
                }
              ],
              "OPTION_ADD": [
                {
                  "name": "Pesto",
                  "value": 100,
                  "is_default": 0
                },
                {
                  "name": "Bolognese",
                  "value": 100,
                  "is_default": 0
                }
              ]
            },
            "Side": {
              "OPTION_CHOOSE": [
                {
                  "name": "House Salad",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "Homemade Soup",
                  "value": 0,
                  "is_default": 0
                }
              ]
            },
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "987d5592-1004-11e7-bcaf-28cfe91e4031"
          ],
          "uid": "029b8ce6-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Eight Layer Lasagna",
          "description": "A lunch-size portion of our hearty handmade Lasagna with 8 layers of pasta, meat sauce, Ricotta Mozzarella, Provolone and Parmesan cheeses with spicy Italian sausage in the center. Served with your choice of salad or homemade soup.",
          "images": [
            "a1812ae6-bc96-4cd1-b86c-46ef757b636d"
          ],
          "price": 1299,
          "section": "Lunch Deals!",
          "menu": "Lunch",
          "option_groups": {
            "Side": {
              "OPTION_CHOOSE": [
                {
                  "name": "House Salad",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "Homemade Soup",
                  "value": 0,
                  "is_default": 0
                }
              ]
            },
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8ce7-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        }
      ]
    },
    {
      "name": "Burgers & Sandwiches",
      "items": [
        {
          "name": "Bacon Cheeseburger",
          "description": "Charbroiled half-pound burger topped with Tillamook Cheddar cheese and 2 strips of thick cut bacon.",
          "price": 1449,
          "section": "Burgers & Sandwiches",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_CHOOSE": [
                {
                  "name": "Sidewinder Fries",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "House Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Caesar Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Soup",
                  "value": 199,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "b7df2f44-1001-11e7-b01e-28cfe91e4031"
          ],
          "uid": "029b8ce9-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Portobello Mushroom Burger",
          "description": "Charbroiled half-pound burger topped with Mozzarella, marinated Portobello mushrooms and roasted garlic.",
          "price": 1499,
          "section": "Burgers & Sandwiches",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_CHOOSE": [
                {
                  "name": "Sidewinder Fries",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "House Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Caesar Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Soup",
                  "value": 199,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "8e997dd6-1017-11e7-bdbb-28cfe91e4031"
          ],
          "uid": "029b8cea-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Gorgonzola Burger",
          "description": "Charbroiled half-pound burger topped with grilled sweet onions, Gorgonzola cheese and crispy prosciutto.",
          "price": 1449,
          "section": "Burgers & Sandwiches",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_CHOOSE": [
                {
                  "name": "Sidewinder Fries",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "House Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Caesar Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Soup",
                  "value": 199,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "760211e4-1007-11e7-a6d0-28cfe91e4031"
          ],
          "uid": "029b8ceb-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Prime Rib Dip",
          "description": "Delicious slow roasted prime rib layerd on a toasted baguette, then smothered with melted Mozzarella. Served with rich, house made au jus on the side.",
          "images": [
            "f347b975-49f8-49fc-96e3-d97f5dd0c062"
          ],
          "price": 1549,
          "section": "Burgers & Sandwiches",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_CHOOSE": [
                {
                  "name": "Sidewinder Fries",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "House Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Caesar Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Soup",
                  "value": 199,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8cec-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Chicken Parmesan",
          "description": "Lightly breaded chicken breast, topped with our homemade Marinara Sauce and Mozzarella cheese. Baked in our brick oven. Topped with fresh basil.",
          "price": 1399,
          "section": "Burgers & Sandwiches",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_CHOOSE": [
                {
                  "name": "Sidewinder Fries",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "House Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Caesar Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Soup",
                  "value": 199,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8ced-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Italian Club",
          "description": "Smoked prosciutto, Mozzarella cheese, grilled chicken breast, oven baked then topped with garlic mayo, oil & vinegar, red onion, tomatoes and lettuce.",
          "price": 1449,
          "section": "Burgers & Sandwiches",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_CHOOSE": [
                {
                  "name": "Sidewinder Fries",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "House Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Caesar Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Soup",
                  "value": 199,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "2826d0bc-1008-11e7-ba6a-28cfe91e4031"
          ],
          "uid": "029b8cee-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Meatball Sandwich",
          "description": "Fresh baguette slathered with garlic butter, then stuffed with meatballes, Marinara Sauce and Mozzarella cheese. Baked in our brick oven. Topped with fresh basil.",
          "price": 1399,
          "section": "Burgers & Sandwiches",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_CHOOSE": [
                {
                  "name": "Sidewinder Fries",
                  "value": 0,
                  "is_default": 1
                },
                {
                  "name": "House Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Caesar Salad",
                  "value": 199,
                  "is_default": 0
                },
                {
                  "name": "Soup",
                  "value": 199,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "31332f88-1009-11e7-8387-28cfe91e4031"
          ],
          "uid": "029b8cef-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        }
      ]
    },
    {
      "name": "Soups & Salads",
      "items": [
        {
          "name": "Greek Salad",
          "description": "Organic Kale, spinach and red & green chard tossed with Feta cheese, Kalamata olives, jicama, red peppers, grape tomatoes, red onions and cucumbers in our Honey Balsamic Garlic Dressing with a touch of red pepper flakes.",
          "images": [
            "031f4b7e-46cb-4548-a8bc-4965461bdd11",
            "8687ae5f-0b0c-4a20-9e57-3147077c4567"
          ],
          "price": 0,
          "section": "Soups & Salads",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Sauteed Shrimp",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Crispy Fried Calamari",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Wild Alaskan Grilled Salmon Fillet",
                  "value": 999,
                  "is_default": 0
                }
              ]
            },
            "Price": {
              "OPTION_CHOOSE": [
                {
                  "name": "Small",
                  "value": 899,
                  "is_default": 1
                },
                {
                  "name": "Large",
                  "value": 1199,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8cf0-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Italian Cobb",
          "description": "Crisp Romaine lettuce, grilled chicken breast, artichoke hearts, grape tomatoes, crispy fried prosciutto, hard-boiled egg, black olives and Gorgonzola cheese. Served with our house-made Ranch dressing.",
          "images": [
            "3cb382f2-8bc0-4439-a225-2a39c38597d6",
            "e8b315b2-7c6f-4ac9-94a1-5d65b3fe3862"
          ],
          "price": 0,
          "section": "Soups & Salads",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Sauteed Shrimp",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Crispy Fried Calamari",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Wild Alaskan Grilled Salmon Fillet",
                  "value": 999,
                  "is_default": 0
                }
              ]
            },
            "Price": {
              "OPTION_CHOOSE": [
                {
                  "name": "Small",
                  "value": 1099,
                  "is_default": 1
                },
                {
                  "name": "Large",
                  "value": 1399,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8cf2-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Tuscano's Caesars!",
          "description": "Crisp Romaine lettuce, Tuscano's delicious Caesars dressing, croutons and shredded Parmesan cheese.",
          "images": [
            "ed0cc041-72ef-4168-b4dd-d627f7474d68"
          ],
          "price": 0,
          "section": "Soups & Salads",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Sauteed Shrimp",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Crispy Fried Calamari",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Wild Alaskan Grilled Salmon Fillet",
                  "value": 999,
                  "is_default": 0
                }
              ]
            },
            "Price": {
              "OPTION_CHOOSE": [
                {
                  "name": "Small",
                  "value": 629,
                  "is_default": 1
                },
                {
                  "name": "Large",
                  "value": 899,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8cf4-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Tuscano's Chopped Salad",
          "description": "Crisp Romaine, Mozzarella, Genoa salami, prosciutto, garbanzo beans, tomatoes, black olives and red onions, all tossed in our Italian Vinaigrette.",
          "images": [
            "cd72d2a1-cae0-4d7e-a2af-9e1d6fb1c265"
          ],
          "price": 0,
          "section": "Soups & Salads",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Sauteed Shrimp",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Crispy Fried Calamari",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Wild Alaskan Grilled Salmon Fillet",
                  "value": 999,
                  "is_default": 0
                }
              ]
            },
            "Price": {
              "OPTION_CHOOSE": [
                {
                  "name": "Small",
                  "value": 949,
                  "is_default": 1
                },
                {
                  "name": "Large",
                  "value": 1299,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8cf6-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Apple Walnut Insalata",
          "description": "Field Greens with candied walnuts, dried cranberries and Gorgonzola cheese tossed with house-made Honey Dijon dressing. Topped with fresh sliced apples",
          "images": [
            "8f774795-c971-49ea-9e00-ae360d19cd4b"
          ],
          "price": 0,
          "section": "Soups & Salads",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Sauteed Shrimp",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Crispy Fried Calamari",
                  "value": 499,
                  "is_default": 0
                },
                {
                  "name": "Wild Alaskan Grilled Salmon Fillet",
                  "value": 999,
                  "is_default": 0
                }
              ]
            },
            "Price": {
              "OPTION_CHOOSE": [
                {
                  "name": "Small",
                  "value": 899,
                  "is_default": 1
                },
                {
                  "name": "Large",
                  "value": 1249,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8cf8-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Soup of the Day",
          "description": "Enjoy a bowl of our homemade Soup of the Day. Ask your server for today's choice",
          "images": [
            "1f497392-101b-11e7-a5af-28cfe91e4031"
          ],
          "price": 649,
          "section": "Soups & Salads",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8cfa-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Zuppa di Minestrone",
          "description": "Made from scratch! Vegetable bean medley. Italian sausage, pepperoni, black olives and fresh Italian herbs in a savory tomato broth",
          "images": [
            "a341547c-fa74-409f-ab48-f4ed5b8d3a7b"
          ],
          "price": 649,
          "section": "Soups & Salads",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8cfc-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        }
      ]
    },
    {
      "name": "Tuscano's Classics",
      "items": [
        {
          "name": "Chicken Parmesan",
          "description": "Tender chicken breast, lightly breaded and fried. Then topped with homemade Marinara Sauce and Mozzarella cheese. Served with a side of spaghetti.",
          "price": 0,
          "section": "Tuscano's Classics",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "House Salad",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 399,
                  "is_default": 0
                }
              ]
            },
            "Price": {
              "OPTION_CHOOSE": [
                {
                  "name": "Lunch Portion",
                  "value": 1299,
                  "is_default": 1
                },
                {
                  "name": "Regular",
                  "value": 1599,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "b0cde972-1004-11e7-9ead-28cfe91e4031"
          ],
          "uid": "029b8cfe-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Spicy Shrimp Putanesca",
          "description": "Jumbo shrimp, Kalamata olives, capers, grape tomatoes, garlic and Parmesan cheese tossed with spaghetti, olive oil and crushed red peppers.",
          "images": [
            "e3f3e959-0a9f-4f12-ab85-47e5cc4aa102"
          ],
          "price": 0,
          "section": "Tuscano's Classics",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "House Salad",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 399,
                  "is_default": 0
                }
              ]
            },
            "Price": {
              "OPTION_CHOOSE": [
                {
                  "name": "Lunch Portion",
                  "value": 1399,
                  "is_default": 1
                },
                {
                  "name": "Regular",
                  "value": 1699,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d02-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Salmon Picatta",
          "description": "Grilled Wild Alaskan Salmon topped with our Lemon Butter Caper Sauce. Served with sauteed season vegetables and Garlic Parmesan Mashed Potatoes.",
          "images": [
            "0d580c7e-5b66-49ab-9e5a-f2611d582f1b",
            "9a1ca3ef-2b02-45e9-9d50-ab1cdd05299d"
          ],
          "price": 1999,
          "section": "Tuscano's Classics",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "House Salad",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 399,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d04-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Tuscano's Chicken Carbonara",
          "description": "Grilled chicken, green peas, sundried tomatoes and mushrooms tossed with spaghetti noodles in our Prosciutto Cream Sauce.",
          "images": [
            "ba7d7d04-dbed-4305-a87c-a4fafa8c7b9f"
          ],
          "price": 1499,
          "section": "Tuscano's Classics",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "House Salad",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 399,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d06-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Steak Marsala",
          "description": "Tender Fillet Medallions lightly seasoned. Served on a bed of Garlic Parmesan mashed potatoes Topped with our delicious homemade Marsala Sauce with roasted garlic and portabella mushroomes.",
          "images": [
            "a631f2dc-2021-4a24-ab80-6d939c62de3e"
          ],
          "price": 1899,
          "section": "Tuscano's Classics",
          "menu": "Lunch",
          "option_groups": {
            "Substitute": {
              "OPTION_CHOOSE": [
                {
                  "name": "Pan Seared Chicken",
                  "value": 1699,
                  "is_default": 1
                },
                {
                  "name": "Pan Seared Chicken (Lunch Portion)",
                  "value": 1399,
                  "is_default": 0
                }
              ]
            },
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "House Salad",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 399,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d08-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Pollo Con Fresca",
          "description": "Light and healthy! Grilled chicken breast served with Italian herb linguini topped with sundried tomatoes. Includes a side of Bruschetta and grilled asparagus.",
          "images": [
            "7ce6e6c5-1069-4ae6-9dec-1b78c00a3e84"
          ],
          "price": 1349,
          "section": "Tuscano's Classics",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "House Salad",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 399,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d0a-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Cajun Chicken Pasta",
          "description": "Blackened Chicken Breast served over Rigatoni pasta, tossed with Arrabiatta Sauce and sliced mushrooms in our spicy Cajun cream sauce. Topped with diced tomatoes, Parmesan cheese and fresh chopped basil. If you like Spicy, give it a try! It's delicious!",
          "images": [
            "6c1d9f0b-a1c2-44f7-ae18-cb6d123b48d5",
            "22879099-d7a0-462d-bcab-5f992e033f51"
          ],
          "price": 1799,
          "section": "Tuscano's Classics",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "House Salad",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 399,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d0c-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        }
      ]
    },
    {
      "name": "Brick Oven Pizzas",
      "items": [
        {
          "name": "The Godfather",
          "description": "Slow roasted Prime Rib, Gorgonzola cheese, caramelized onions drizzled with a balsamic reduction, all layered over our thin crust, lightly basted in garlic olive oil.",
          "images": [
            "75d38d46-f6f3-441c-9fd4-f1ab39df2559"
          ],
          "price": 1799,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d20-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Big Kahuna",
          "description": "Tuscano's delicious scratch pizza crust topped with homemade pizza sauce, five cheese blend, thinly-sliced prosciutto and sweet Hawaiian pineapple. Aloha!",
          "price": 1599,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "4a00b852-1002-11e7-80b7-28cfe91e4031"
          ],
          "uid": "029b8d22-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Meat Lovers' Pizza",
          "description": "Loaded with spicy Arrabiatta sausage, salami, pepperoni, prosciutto and Mozzarella cheese.",
          "images": [
            "88592375-035b-4579-aa73-858ed9377ae2"
          ],
          "price": 1799,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d24-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "The Greek",
          "description": "Thin crust brushed with olive oil and topped with roasted garlic, Kalamata olives, Feta and Provolone cheeses, roasted grape tomatoes and fresh spinach.",
          "images": [
            "0e679fa9-14b3-4364-9047-013339ffafaf"
          ],
          "price": 1599,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Sauteed Shrimp",
                  "value": 449,
                  "is_default": 0
                }
              ]
            },
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d26-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Pepperoni",
          "description": "The classic! Tomato sauce, pepperoni and Mozzarella.",
          "images": [
            "c508903e-235a-4b88-be91-cc2ea39bda7a"
          ],
          "price": 1499,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d28-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Arrabiatta",
          "description": "Spicy Italian sausage, sliced mushrooms, pepperoni, red pepper flakes and a blend of four cheeses. A guest favorite!",
          "images": [
            "274cded0-eabf-47e5-9bc8-8f3a952f6239"
          ],
          "price": 1699,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d2a-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Garden Fresh Pizza",
          "description": "Thin crust topped with our Pesto Sauce, artichoke hearts, sliced mushrooms, red onions, roasted red pepers, Roma tomatoes, pine nuts and Goat & Mozzarella cheeses. Topped with organic greens.",
          "price": 1599,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {
            "Topping": {
              "OPTION_ADD": [
                {
                  "name": "Grilled Chicken",
                  "value": 399,
                  "is_default": 0
                },
                {
                  "name": "Sauteed Shrimp",
                  "value": 449,
                  "is_default": 0
                }
              ]
            },
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "images": [
            "3c96af32-1007-11e7-826f-28cfe91e4031"
          ],
          "uid": "029b8d2c-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Margherita",
          "description": "Hand-made crust basted in virgin olive oil. Topped with fresh Mozzarella, vine-ripe sliced tomatoes and fresh chopped basil leaves.",
          "images": [
            "cd80825e-bcfb-4710-9be1-03bca739333f"
          ],
          "price": 1499,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d2e-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "BBQ Chicken",
          "description": "Marinated grilled chicken breast coated in BBQ sauce. Topped with Mozzarella cheese, sliced red onions and fresh basil over our special sauce.",
          "images": [
            "26bf7fcf-7fd8-4fb0-abee-e8dec99c8adb"
          ],
          "price": 1599,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {
            "Sides": {
              "OPTION_ADD": [
                {
                  "name": "Greek Salad",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Italian Cobb",
                  "value": 1099,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Caesars!",
                  "value": 629,
                  "is_default": 0
                },
                {
                  "name": "Tuscano's Chopped Salad",
                  "value": 949,
                  "is_default": 0
                },
                {
                  "name": "Apple Walnut Insalata",
                  "value": 899,
                  "is_default": 0
                },
                {
                  "name": "Soup of the Day",
                  "value": 649,
                  "is_default": 0
                },
                {
                  "name": "Zuppa di Minestrone",
                  "value": 649,
                  "is_default": 0
                }
              ]
            }
          },
          "uid": "029b8d30-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Cheese Pizza!",
          "description": "",
          "price": 1399,
          "section": "Brick Oven Pizzas",
          "menu": "Lunch",
          "option_groups": {},
          "images": [
            "6475adf8-1004-11e7-866a-28cfe91e4031"
          ],
          "uid": "029b8d32-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        }
      ]
    },
    {
      "name": "Appetizers",
      "items": [
        {
          "name": "Piccante Italian Wings",
          "description": "Guests rave about Tuscano's Wings! Tender juicy wings and drummetts. Coated in our spicy herb-infused sauce. Served with homemade Pesto Ranch dipping sauce.",
          "images": [
            "1b1409a1-a837-49ac-b0de-9e8cfebf01ee"
          ],
          "price": 1199,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d35-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Crispy Fried Raviolis",
          "description": "Lightly breaded Raviolis filled with sausage & cheese, fried and then topped with Parmesan. Served with our homemade Marinara Sauce for dipping.",
          "images": [
            "329df30a-d281-4bd9-9686-0eab3f44f6d1"
          ],
          "price": 899,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d37-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Garlic Cheese Bread",
          "description": "Slathered in garlic herb butter, topped with Mozzarella cheese then baked golden brown.",
          "images": [
            "fe5f2dab-1f01-437e-ae3d-158882074534"
          ],
          "price": 599,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d39-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Tomato Bruschetta",
          "description": "Garlic herb crostinis topped with ripe diced Toma tomatoes, fresh sweet basil, estra virgin olive oil and a drizzle of honey balsamic reduction.",
          "images": [
            "fefd8981-cfba-4243-95ab-7dcdb8d9531a"
          ],
          "price": 949,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d3b-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Spinach Artichoke Dip",
          "description": "A blend of fresh spinach and artichoke hearts in a rich creamy garlic Cheese Sauce. Baked and topped with Parmesan and breadcrumbs.",
          "images": [
            "1c6c9cf8-b7cf-4371-b83d-7cbdead52bf1"
          ],
          "price": 1049,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d3d-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Crispy Calamari",
          "description": "Calamari rings and tentacles lightly floured and flash fried. Served with creamy Pesto Ranch dipping sauce.",
          "images": [
            "5609c5b8-8518-403e-aa96-a06c52309ea5"
          ],
          "price": 1099,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d3f-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Corn Fritters",
          "description": "A basket of ten delicious corn fritters fried to a golden brown. Served with our sweet honey butter.",
          "images": [
            "bb931372-1570-4868-8eff-efca04f5cb9a"
          ],
          "price": 899,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d41-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Tuscano's Caprese",
          "description": "Vine ripen tomatoes, sweet basil and fresh Mozzarella, drizzled with extra virgin olive oil and balsamic vinegar.",
          "images": [
            "025680b8-dca2-4469-88de-798c7d8a3aed"
          ],
          "price": 999,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d43-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Hand-Made Fried Mozzarella",
          "description": "Lightly breaded Mozzarella triangles, flash fried and served with our Marinara dipping sauce.",
          "images": [
            "f0daf551-7eca-45fc-a773-eda01c6867aa"
          ],
          "price": 949,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d46-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        },
        {
          "name": "Butter Clams",
          "description": "A pound of butter clams in Tuscano's Lemon Butter Sauce with fresh garlic and Italian parsley.",
          "images": [
            "a4c25904-0cd2-4b4a-8496-e5e32a9980c4"
          ],
          "price": 1299,
          "section": "Appetizers",
          "menu": "Lunch",
          "option_groups": {},
          "uid": "029b8d48-11b9-11e7-98bd-47ec529294fb",
          "isAvailable": 1
        }
      ]
    }
  ],
  "uid": "41083b90-11b9-11e7-bdfa-8557e1cb7530"
}

@Injectable()
export class Menu {
  public menu: any;

  constructor() {
    this.menu = menu;
  }

}
