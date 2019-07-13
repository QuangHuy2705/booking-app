const initState = {
    loading: false,
    menuType: 'menu',
    items: [
        {
            name: 'Appetizers',
        },
        {
            name: 'Main Dish',
        },
        {
            name: 'Fried Rice'
        },
        {
            name: 'Noodles and Pho',
        },
        {
            name: 'Rolls'
        },
        {
            name: 'Extra',
        },
        {
            name: 'Drinks',
        },
    ]
}

export default function MenuReducers(state = initState, action) {
    switch (action.type) {
        case 'GET_APPETIZERS':
        case 'GET_MENU':
        case 'GET_MAINDISH':
        case 'GET_FRIEDRICE':
        case 'GET_DRINKS':
        case 'GET_ROLLS':
        case 'GET_EXTRA':
        case 'GET_NOODLESANDPHO':
            return {
                ...state,
                loading: true
            }

        case 'GET_MENU_DONE':
            return initState

        case 'GET_APPETIZERS_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Appetizers',
                items: [
                    {
                        name: 'Mango salad',
                        img: 'https://i.imgur.com/ldoVB49.jpg',
                        price: '5 € - 8 €'
                    },
                    {
                        name: 'Papaya salad',
                        img: 'https://i.imgur.com/HFAK3VO.jpg',
                        price: '5 € - 8 €'
                    },
                    {
                        name: 'Sweet and sour cucumber',
                        img: 'https://i.imgur.com/SY7FdP6.jpg',
                        price: '5 € - 8 €'
                    },
                    {
                        name: 'Russian salad',
                        img: 'https://i.imgur.com/cIpvWsw.jpg',
                        price: '5 € - 8 €'
                    },
                    {
                        name: 'Beef salad',
                        img: 'https://i.imgur.com/51KuyAW.jpg',
                        price: '6 € - 10 €'
                    },
                    {
                        name: 'Chicken salad',
                        img: 'https://i.imgur.com/bTREzJp.jpg',
                        price: '6 € - 10 €'
                    },
                    {
                        name: 'Chicken corn soup',
                        img: 'https://i.imgur.com/2XxFrJR.jpg',
                        price: '6 €'
                    },
                    {
                        name: 'Shrimp soup',
                        img: 'https://i.imgur.com/AUPsmcE.jpg',
                        price: '6 €'
                    },
                    {
                        name: 'Tom yum',
                        img: 'https://i.imgur.com/DLS8SEt.jpg',
                        price: '8 €'
                    }
                ]
            }

        case 'GET_MAINDISH_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Main Dish',
                items: [
                    {
                        name: 'Sweet and sour chicken',
                        img: 'https://i.imgur.com/w8ZFVxR.jpg',
                        price: '12 €'
                    },
                    {
                        name: 'Mango chicken',
                        img: 'https://i.imgur.com/qjHF8qf.jpg',
                        price: '12 €'
                    },
                    {
                        name: 'Spicy chicken',
                        img: 'https://i.imgur.com/9rgf7O1.jpg',
                        price: '12 €'
                    },
                    {
                        name: 'Lemon chicken',
                        img: 'https://i.imgur.com/0a2deIp.jpg',
                        price: '12 €'
                    },
                    {
                        name: 'Curry chicken',
                        img: 'https://i.imgur.com/9o86jms.jpg',
                        price: '13 €'
                    },
                    {
                        name: 'Kungpo chicken',
                        img: 'https://i.imgur.com/cXWMGYq.jpg',
                        price: '13 €'
                    },
                    {
                        name: 'Pork BBQ Hongkong',
                        img: 'https://i.imgur.com/D7rbln5.jpg',
                        price: '12 €'
                    },
                    {
                        name: 'Vietnamese roasted pork',
                        img: 'https://i.imgur.com/WReUHRX.jpg',
                        price: '12 €'
                    },
                    {
                        name: 'Oyste sauce beef',
                        img: 'https://i.imgur.com/Izvs02Y.jpg',
                        price: '15 €'
                    },
                    {
                        name: 'Shaking beef',
                        img: 'https://i.imgur.com/xdGq3PB.jpg',
                        price: '18 €'
                    },
                    {
                        name: 'Beef steak (300g)',
                        img: 'https://i.imgur.com/ap5BmUh.jpg',
                        price: '25 €'
                    },
                    {
                        name: '1/4 duck with pancake',
                        img: 'https://i.imgur.com/twwbDA9.jpg',
                        price: '13 €'
                    },
                    {
                        name: '1/2 duck with pancake',
                        img: 'https://i.imgur.com/twwbDA9.jpg',
                        price: '24 €'
                    },
                    {
                        name: '1 duck with pancake',
                        img: 'https://i.imgur.com/twwbDA9.jpg',
                        price: '46 €'
                    },
                    {
                        name: 'Grilled mussel 7pcs',
                        img: 'https://i.imgur.com/Tl3uj1d.jpg',
                        price: '14 €'
                    },
                    {
                        name: 'Squid w garlic',
                        img: 'https://i.imgur.com/2K08Jcw.jpg',
                        price: '15 €'
                    },
                    {
                        name: 'Grilled squid',
                        img: 'https://i.imgur.com/9isswhA.jpg',
                        price: '18 €'
                    },
                    {
                        name: 'Shrimp w green rice 6pcs',
                        img: 'https://i.imgur.com/nbslJbz.jpg',
                        price: '18 €'
                    },
                    {
                        name: 'Grilled salmon w garlic',
                        img: 'https://i.imgur.com/KTtJikb.jpg',
                        price: '20 €'
                    },
                    {
                        name: 'Steam fish w soy sauce(1000g)',
                        img: 'https://i.imgur.com/GmKhStv.jpg',
                        price: '30 €'
                    },
                    {
                        name: 'Fish dipped in sweet & sour sauce(1000g)',
                        img: 'https://i.imgur.com/74UJWHJ.jpg',
                        price: '30 €'
                    }
                ]
            }

        case 'GET_FRIEDRICE_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Fried rice',
                items: [
                    {
                        name: 'Fried rice w vegetables',
                        img: 'https://i.imgur.com/xErohWj.jpg',
                        price: '8 €'
                    },
                    {
                        name: 'Fried rice w chicken',
                        img: 'https://i.imgur.com/dsIKEHV.jpg',
                        price: '10 €'
                    },
                    {
                        name: 'Fried rice w beef',
                        img: 'https://i.imgur.com/GvjdRH0.jpg',
                        price: '10 €'
                    },
                    {
                        name: 'Fried rice w shrimp',
                        img: 'https://i.imgur.com/2ATRVYk.jpg',
                        price: '12 €'
                    }
                ]
            }

        case 'GET_NOODLESANDPHO_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Noodles and pho',
                items: [
                    {
                        name: 'Pho',
                        img: 'https://i.imgur.com/RfPp97M.jpg',
                        price: '8 €'
                    },
                    {
                        name: 'Padthai w vegetables',
                        img: 'https://i.imgur.com/syS7DBM.jpg',
                        price: '8 €'
                    },
                    {
                        name: 'Padthai w chicken',
                        img: 'https://i.imgur.com/SLhdfoz.jpg',
                        price: '10 €'
                    },
                    {
                        name: 'Padthai w shrimp',
                        img: 'https://i.imgur.com/ljoaVDC.jpg',
                        price: '12 €'
                    },
                    {
                        name: 'Chinese noodle w vegetables',
                        img: 'https://i.imgur.com/q7aurUN.jpg',
                        price: '8 €'
                    },
                    {
                        name: 'Chinese noodle w chicken',
                        img: 'https://i.imgur.com/ojOYcQt.jpg',
                        price: '10 €'
                    },
                    {
                        name: 'Chinese noodle w beef',
                        img: 'https://i.imgur.com/9qGunVT.png',
                        price: '10 €'
                    },
                    {
                        name: 'Chinese noodle w shrimp',
                        img: 'https://i.imgur.com/GV7jRXV.jpg',
                        price: '12 €'
                    },
                ]
            }

        case 'GET_ROLLS_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Rolls',
                items: [
                    {
                        name: 'Spring roll (4pcs)',
                        img: 'https://i.imgur.com/cVjGHhS.jpg',
                        price: '8 €'
                    },
                    {
                        name: 'Summer roll (4pcs)',
                        img: 'https://i.imgur.com/SVuwpvj.jpg',
                        price: '10 €'
                    },
                    {
                        name: 'Seafood roll (5pcs)',
                        img: 'https://i.imgur.com/5nOJZsO.jpg',
                        price: '12 €'
                    }
                ]
            }

        case 'GET_EXTRA_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Extra',
                items: [
                    {
                        name: 'White rice',
                        img: 'https://i.imgur.com/tkRuy1Q.jpg',
                        price: '2 €'
                    },
                    {
                        name: 'French fries',
                        img: 'https://i.imgur.com/e1IUoDT.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Fried rice',
                        img: 'https://i.imgur.com/v8HNIIT.jpg',
                        price: '4 €'
                    },
                    {
                        name: 'Fried noodle',
                        img: 'https://i.imgur.com/zmoHOBh.jpg',
                        price: '4 €'
                    },
                    {
                        name: 'Chicken wings',
                        img: 'https://i.imgur.com/UVLykbR.jpg',
                        price: '7 €'
                    }
                ]
            }

        case 'GET_DRINKS_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Drinks',
                items: [
                    {
                        name: 'Cyprus Coffee',
                        img: 'https://i.imgur.com/fXsEt1H.jpg',
                        price: '2 €'
                    },
                    {
                        name: 'Espresso',
                        img: 'https://i.imgur.com/1JR9HsH.jpg',
                        price: '2.5 €'
                    },
                    {
                        name: 'Vietnamese black coffee',
                        img: 'https://i.imgur.com/mXjh0AM.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Vietnamese milk coffee',
                        img: 'https://i.imgur.com/xWGQNoI.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Cappuccino',
                        img: 'https://i.imgur.com/FPtcrTe.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Latte',
                        img: 'https://i.imgur.com/Qa45CIX.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Americano',
                        img: 'https://i.imgur.com/XRGHPjK.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Frappe',
                        img: 'https://i.imgur.com/Nc0E5Qk.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Hot chocolate',
                        img: 'https://i.imgur.com/OvXpTrR.jpg',
                        price: '4 €'
                    },
                    {
                        name: 'Green ice tea',
                        img: 'https://i.imgur.com/X0bPcaF.jpg',
                        price: '2 €'
                    },
                    {
                        name: 'Green tea',
                        img: 'https://i.imgur.com/U6VQKob.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Lemon tea',
                        img: 'https://i.imgur.com/H0tUmcs.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Lemongrass tea',
                        img: 'https://i.imgur.com/OZN4u9e.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Coke',
                        img: 'https://i.imgur.com/8XyXpfn.jpg',
                        price: '2 €'
                    },
                    {
                        name: 'Ice tea',
                        img: 'https://i.imgur.com/MJpQGOd.jpg',
                        price: '2 €'
                    },
                    {
                        name: 'Water',
                        img: 'https://i.imgur.com/aLnMuwS.jpg',
                        price: '2 €'
                    },
                    {
                        name: 'Apple/Orange juice',
                        img: 'https://i.imgur.com/rv120nZ.jpg',
                        price: '2 €'
                    },
                    {
                        name: 'Redbull',
                        img: 'https://i.imgur.com/80jGYBY.jpg',
                        price: '3 €'
                    },
                    {
                        name: 'Fresh Apple juice',
                        img: 'https://i.imgur.com/rtUGpdo.jpg',
                        price: '3.5 €'
                    },
                    {
                        name: 'Fresh orange juice',
                        img: 'https://i.imgur.com/f0DilXF.jpg',
                        price: '4 €'
                    },
                    {
                        name: 'Watermelon',
                        img: 'https://i.imgur.com/MJZgaSp.jpg',
                        price: '5 €'
                    },
                    {
                        name: 'Mango',
                        img: 'https://i.imgur.com/qJMQEva.jpg',
                        price: '5 €'
                    },
                    {
                        name: 'Avocado',
                        img: 'https://i.imgur.com/rIiPV18.jpg',
                        price: '6 €'
                    },
                ]
            }

        default:
            return state
    }
}