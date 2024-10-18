import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    image: string;
    description?: string;
    price: number;
    category?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [like, setLike] = useState<boolean>(false);

  return (
    <Pressable style={styles.container}>
      <Image 
        source={{ uri: product.image || 'https://via.placeholder.com/150' }} 
        style={styles.img} 
      />
      <View style={styles.content}>
        <Text style={styles.text}>{product.title || 'No title'}</Text>
        <Text style={[styles.text, { color: 'grey' }]}>{`$${product.price || 0}`}</Text>
      </View>
      <Pressable style={styles.heart} onPress={() => setLike(!like)}>
        {like ? (
          <AntDesign name="heart" size={24} color="#fc034e" />
        ) : (
          <AntDesign name="hearto" size={24} color="#fc034e" />
        )}
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5, 
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden', // Prevent content from overflowing
    borderColor: '#ccc', // Add optional border
    borderWidth: 1,
  },
  img: {
    height: 150, // Adjusted for better card layout
    width: '100%', // Ensure the image fills the container width
    borderRadius: 10,
  },
  content: {
    padding: 10,
  },
  text: {
    marginVertical: 2,
    fontWeight: '400',
    fontSize: 16,
  },
  heart: {
    backgroundColor: '#fae3eb',
    position: 'absolute',
    padding: 5,
    right: 10,
    top: 10,
    borderRadius: 20,
  },
});
