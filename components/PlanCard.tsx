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
  currency?: string; // Optional prop for currency
  isBookmarked: boolean;
  
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  imageUri,
  labels,
  rating,
  reviewCount,
  description,
  cost,
  currency = '$',
  isBookmarked = false, // Default to unbookmarked
}) => {

  const [bookmarked, setBookmarked] = React.useState(isBookmarked); // Local state

  const toggleBookmark = () => {
    setBookmarked(!bookmarked); // Toggle state
  };

  return (
    <View style={styles.shadowWrapper}> 
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
              <MaterialIcons
                name={isBookmarked ? "bookmark" : "bookmark-border"} // Toggle the icon
                size={20}
                color="black"
              />
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
              <Text style={styles.cost}>
                {currency}
                {cost} AUD
              </Text>
              <Text style={styles.costDescription}>
                Estimate Cost / Individual
              </Text>
            </View>
          </View>
        </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  shadowWrapper: {
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow position
    shadowOpacity: 0.1, // Adjust shadow transparency
    shadowRadius: 8, // Spread of shadow
    elevation: 6, // For Android shadow
    backgroundColor: 'transparent', // Ensure no background covers the shadow
    borderRadius: 20, // Match the card's borderRadius
  },
  card: {
    width: 338,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden', // Keep rounded corners but avoid clipping shadow
    marginBottom: 20,
  },
  imageContainer: {
    width: 320, 
    height: 88,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
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
    fontWeight: '500',
    marginRight: 2,
  },
  content: {
    padding: 15,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 2,
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
    color: '#000',
    textAlign: 'right'
  },
  costDescription: {
    fontSize: 12,
    color: '#777',
  },
  bookmarkContainer: {
    padding: 5, 
  },
});

export default PlanCard;