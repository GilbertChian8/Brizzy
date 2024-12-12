import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ProfilePictureProps {
  imageUrl?: string; // URL of the profile image, optional
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl }) => {
  // Fallback to default image if imageUrl is not provided
  const defaultImage = require('../assets/images/defaultProfilePic.png'); // Replace with your default image path
  const imageSource = imageUrl ? { uri: imageUrl } : defaultImage;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 114,
    height: 114,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1.0)', // Border color
    borderRadius: 100, // To make the image circular
    overflow: 'hidden', // Ensures the image is clipped to the border radius
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image covers the circle properly
  },
});

export default ProfilePicture;
