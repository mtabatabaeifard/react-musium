import trackData from '../../db/tracks.json';

function findeReleaseDate() {
    trackData.songs.map((item) => {
        const releaseDate = new Date(item.date);
        const presentDate = new Date();
        let difference = presentDate.getTime() - releaseDate.getTime();
        difference /= 1000;
        // eslint-disable-next-line no-console
        console.log(difference);
        return difference;
    });
}

export default findeReleaseDate;
