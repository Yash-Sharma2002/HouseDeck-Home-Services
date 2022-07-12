import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config({ path: './config.env' })


export const PlacesAutoComplete = async (req,res) => {
    try {
        var config = {
            method: 'post',
            url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.body.input}&components=country:in&types=(regions)&key=${ process.env.MAPS_API}`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                return res.send(JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });

    } catch (error) {
        console.log('error in map calling ' + error);
        return res.status(500).json('failed');
    }
}