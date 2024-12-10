import dotenv from 'dotenv';
dotenv.config();

export async function getTestimonials() {
    try {
        const response = await fetch(`https://mybusiness.googleapis.com/v4/accounts/${process.env.PLACE_ID}/reviews?key=${process.env.API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.reviews) {
            throw new Error('No reviews found in the response');
        }

        return data.reviews.map(review => ({
            name: review.reviewer.displayName,
            description: review.comment,
            rating: review.starRating,
            date: review.createTime,
            photoUrl: review.reviewer.profilePhotoUrl
        }));
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
}