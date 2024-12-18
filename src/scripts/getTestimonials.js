import dotenv from 'dotenv';
dotenv.config();

export async function getTestimonials() {
    try {
        const url = `https://mybusiness.googleapis.com/v4/accounts/${process.env.PLACE_ID}/reviews?key=${process.env.API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error fetching testimonials: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (!data.reviews || !Array.isArray(data.reviews)) {
            throw new Error('No valid reviews found in the response');
        }

        return data.reviews.map(review => ({
            name: review.reviewer.displayName || 'Anonymous',
            description: review.comment || 'No comments provided.',
            rating: review.starRating || 0,
            date: new Date(review.createTime).toLocaleDateString() || 'Unknown date',
            photoUrl: review.reviewer.profilePhotoUrl || '/public/assets/user.svg',
        }));
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
}
