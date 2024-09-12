# DesiRhyme

Welcome to the DesiRhyme for Indian and Pakistani rappers! This static website is built using React and Appwrite, providing a platform to explore the vibrant Hip-hop culture of India and Pakistan. Whether you're a fan, artist, or just curious about the scene, this website is designed to keep you informed and entertained.

## Features
- **Rapper Profiles**: Explore the profiles of Indian and Pakistani rappers, including their biographies, discographies, and social media links.
- **Interactive UI**: The website features a user-friendly and interactive interface, making it easy to navigate and find information.
- **Responsive Design**: The website is designed to work seamlessly on various devices and screen sizes.

## Contribution

Here's how you can add more rappers to the website through the `data.js` file:

1. Open the `data.js` file in the project's source code.

2. Scroll down to the bottom of the `data` array, and add a new object for the rapper you want to include. The object should have the following properties:
   - `title`: The name of the rapper.
   - `details`: A brief biography or description of the rapper.
   - `link`: A link to the rapper's profile on a music platform (e.g., Spotify).
   - `imageUrl`: The URL of an image representing the rapper.

   Here's an example of how to add a rapper to the `data` array:

   ```javascript
   {
     title: "New Rapper",
     country: "country name of rapper in lowercase",
     details: "A brief description of the new rapper.",
     link: "https://open.spotify.com/artist/your-artist-profile-link",
     imageUrl: "https://url-to-the-rapper's-image.jpg",
   }
By following these steps, you can help expand the website's database of rappers and contribute to the project's growth. Thank you for your contribution!
