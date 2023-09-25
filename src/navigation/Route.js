import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Splash from "../classes/Splash";
import LoginPage from "../classes/LoginPage";
import SignupPage from "../classes/SignupPage";
import HomePage from "../classes/HomePage";
import F_Password from "../classes/F_Password";
import Verify_Code from "../classes/Verify_Code";
import UserProfile from "../classes/UserProfile";
import Main from "../classes/Main";
import OfferScreen from "../classes/OfferScreen";
import CartScreen from "../classes/CartScreen";
import PersonalDetails from "../classes/PersonalDetails";
import Try from "../classes/Try";
import Pizzas from "../classes/Pizzas";
import Biryanis from "../classes/Biryanis";
import Italians from "../classes/Italians";
import North_Indian from "../classes/North_Indian";
import MenuData from "../classes/MenuData";
import Maps from "../classes/Maps";
import Language from "../classes/Language";
import Rolls from "../classes/Rolls";
import Paratha from "../classes/Paratha";
import Burger from "../classes/Burger";
import Cake from "../classes/Cake";
import south_Indian from "../classes/south_Indian";
import Coffee from "../classes/Coffee";
const Project = createStackNavigator({


    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false
        }
    },
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            headerShown: false,

        }
    },
    SignupPage: {
        screen: SignupPage,
        navigationOptions: {
            headerShown: false
        }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerShown: false
        }
    },
    F_Password: {
        screen: F_Password,
        navigationOptions: {
            headerShown: false,


        }
    },

    Verify_Code: {
        screen: Verify_Code,
        navigationOptions: {
            headerShown: false,

        },

    },

    UserProfile: {
        screen: UserProfile,
        navigationOptions: {
            headerShown: false,

        },

    },


    Main: {
        screen: Main,
        navigationOptions: {
            headerShown: false,

        },

    },

    CartScreen: {
        screen: CartScreen,
        navigationOptions: {
            headerShown: false,

        },

    },
    OfferScreen: {
        screen: OfferScreen,
        navigationOptions: {
            headerShown: false,

        },

    },

    PersonalDetails: {
        screen: PersonalDetails,
        navigationOptions: {
            // headerShown:false, 

        },

    },

    Try: {
        screen: Try,
        navigationOptions: {
            headerShown: false,

        },

    },

    Pizzas: {
        screen: Pizzas,
        navigationOptions: {
            headerShown: false,

        },

    },
    Biryanis: {
        screen: Biryanis,
        navigationOptions: {
            // headerShown:false, 

        },

    },
    Italians: {
        screen: Italians,
        navigationOptions: {
            // headerShown:false, 

        },

    },
    North_Indian: {
        screen: North_Indian,
        navigationOptions: {
            headerShown: false,

        },

    },
    MenuData: {
        screen: MenuData,
        navigationOptions: {
            // headerShown:false, 

        },

    },

    Maps: {
        screen: Maps,
        navigationOptions: {
            // headerShown:false,

        },

    },
    Language: {
        screen: Language,
        navigationOptions: {
            headerShown: false,

        },

    },

    Rolls: {
        screen: Rolls,
        navigationOptions: {
            // headerShown:false,

        },

    },

    Paratha: {
        screen: Paratha,
        navigationOptions: {
            // headerShown:false,

        },

    },
    Burger: {
        screen:Burger,
        navigationOptions: {
            // headerShown:false,

        },

    },
    Cake: {
        screen: Cake,
        navigationOptions: {
            // headerShown:false,

        },

    },
    south_Indian: {
        screen: south_Indian,
        navigationOptions: {
            // headerShown:false,

        },

    },
    Coffee: {
        screen: Coffee,
        navigationOptions: {
            // headerShown:false,

        },

    },







})

export default createAppContainer(Project)