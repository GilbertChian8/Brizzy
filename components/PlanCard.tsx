import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Define props for the PlanCard component
interface PlanCardProps {
  title: string;
  imageUri: string;
  labels: { text: string; color: string }[]; // Array of labels with text and color
  rating: number;
  reviewCount: number;
  description: string;
  cost: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  imageUri,
  labels,
  rating,
  reviewCount,
  description,
  cost,
}) => {
  return (
    <View style={styles.card}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {/* Overlay Labels */}
        <View style={styles.labelsContainer}>
          {labels.map((label, index) => (
            <Text
              key={index}
              style={[styles.label, { backgroundColor: label.color }]}
            >
              {label.text}
            </Text>
          ))}
        </View>

        {/* Title and Bookmark */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.bookmarkContainer}>
            <Text style={styles.bookmark}>
              <MaterialIcons name="bookmark-border" size={20} color="black" />
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ratings */}
        <Text style={styles.rating}>
          <AntDesign name="star" size={15} color="#ffe234" /> {rating}/5{' '}
          <Text style={styles.reviews}>({reviewCount} Reviews)</Text>
        </Text>

        {/* Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Footer Section */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.cost}>${cost} AUD</Text>
            <Text style={styles.costDescription}>Estimate Cost / Individual</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 338,
    height: 275,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden', // Ensures rounded corners for the content
    marginBottom: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 }, // Shadow spreads evenly
    shadowOpacity: 0.15, // Slightly lighter shadow
    shadowRadius: 10, // Softer, larger shadow
    // Shadow for Android
    elevation: 6, // Moderate elevation for balanced shadow

  },
  imageContainer: {
    width: 'fit',
    height: 88,
    borderRadius: 20,
    alignItems: "center",
    justifyContent:"center",
    alignSelf:"center",
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Adds shadow to the bottom of the image
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4, // Android shadow
  },
  image: {
    width: 320,
    height: 88,
    borderRadius:20,
    
    
  },
  labelsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: 10,
    left: 10,
  },
  label: {
    fontSize: 10,
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderRadius: 4,
    color: '#fff',
    fontWeight: 'Medium',
    marginRight: 2,
    
  },
  individualLabel: {
    backgroundColor: '#FF5733', // Orange
    marginLeft:6,
  },
  dayTimeLabel: {
    backgroundColor: '#007BFF', // Blue
    marginLeft:6,
  },
  content: {
    padding: 15,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:16,
    marginBottom:2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  rating: {
    fontSize: 14,
    color: '#000',
    marginBottom: 2,
  },
  reviews: {
    color: '#777',
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cost: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: '#000',
  },
  costDescription: {
    fontSize: 12,
    color: '#777',
  },
  bookmarkContainer: {
    //padding: 10,
  },
  bookmark: {
    fontSize: 18,
    color: '#3498DB', // Blue
  },
});

export default PlanCard;
