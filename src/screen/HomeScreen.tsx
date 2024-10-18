import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import Header from '@/src/components/Header';
import Searchbar from '@/src/components/Searchbar';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

interface shopData {
  id: string,
  title: string,
  image: string,
  description?: string,
  price: number,
  category?: string,
}

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<shopData[]>([]);
  const [categories, setCategories] = useState<string[]>([]); // Unique categories

  const [loaded] = useFonts({
    Playwrite: require('../../assets/fonts/PlaywriteDEGrund-VariableFont_wght.ttf'),
  });

  // Don't return early if fonts aren't loaded. Always call hooks in the same order.
  useEffect(() => {
    if (loaded) {
      fetchShopData();
    }
  }, [loaded]); // This ensures we only fetch data once fonts are loaded

  const fetchShopData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        const fetchedData = response.data as shopData[];
        setData(fetchedData);

        // Extract and set unique categories
        const uniqueCategories = Array.from(new Set(fetchedData.map(item => item.category)));
        setCategories(uniqueCategories as string[]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!loaded) {
    return null; // Ensure this is not conditional after hooks are called
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={['#f7d0de', '#fcf5f8']} style={styles.container}>
        <StatusBar style="light" backgroundColor="#192f6a" />
        <Header />
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.matchText}>Match Your Style</Text>
              <Searchbar searchText={searchText} setSearchText={setSearchText} />
              <View>
                <FlatList
                  data={categories}
                  keyExtractor={(item) => item}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <Categories
                      item={item}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                  )}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          renderItem={({ item }) => (
            <ProductCard product={item} /> 
          )}
        />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  matchText: {
    marginTop: 10,
    fontSize: 25,
    color: "black",
    fontFamily: "Playwrite",
    fontWeight: "500"
  }
});
