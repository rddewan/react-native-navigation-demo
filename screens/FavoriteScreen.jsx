
import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";


const FavoriteScreen = () => {
    // using context
    const favoritesMealCtx =  useContext(FavoritesContext);
    // using redux selector
    const favoritesMealIds = useSelector((state) => state.favoriteMeals.ids);

    // using context
    //const favoriteMeals = MEALS.filter((item) => favoritesMealCtx.ids.includes(item.id));

    // using redux
    const favoriteMeals = MEALS.filter((item) => favoritesMealIds.includes(item.id));

    if (favoriteMeals.length === 0) {
       return (
        <View style={styles.rootContainer}>
            <Text style={styles.text}> You have no favorite meals yet.</Text>
        </View>
       );
    }

    return  <MealList items={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        fex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    }

});