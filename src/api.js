import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: ' Client-ID AVdKoJbyH1dkNubbhr49TFuwy980EJ7-uwMurBSth8U'
        },
        params: {
            query: term,

        }
    });

    return response.data.results;
}


export default searchImages;

//71