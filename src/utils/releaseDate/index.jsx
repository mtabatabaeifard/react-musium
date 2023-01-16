import trackData from '../../db/tracks.json';

function findeReleaseDate() {
    trackData.songs.map((item) => {
        const releaseDate = new Date(item.date);
        const presentDate = new Date();
        const difference = presentDate.getTime() - releaseDate.getTime();
        const days = Math.floor(difference / (24 * 60 * 60 * 1000));
        // eslint-disable-next-line no-console
        console.log(days);
        return days;
    });
}

export default findeReleaseDate;
