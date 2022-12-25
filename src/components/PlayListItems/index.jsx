import PlayListItem from 'components/shared/PlayListItem';
import PlayListItem1 from 'assets/images/PlayListItem1.png';
import PlayListItem2 from 'assets/images/PlayListItem2.png';
import PlayListItem3 from 'assets/images/PlayListItem3.png';
import PlayListItem4 from 'assets/images/PlayListItem4.png';
import PlayListItem5 from 'assets/images/PlayListItem5.png';
import PlayListItem6 from 'assets/images/PlayListItem6.png';
import React from 'react';

function PlayListItems() {
    return (
        <div>
            <PlayListItem
                src={PlayListItem1}
                textPrimary="grainy days"
                textSecondary="moody."
                style={{ paddingTop: '4rem' }}
            />

            <PlayListItem
                src={PlayListItem2}
                textPrimary="Coffee"
                textSecondary="Kainbeats"
            />

            <PlayListItem
                src={PlayListItem3}
                textPrimary="raindrops"
                textSecondary="rainyyxx"
            />

            <PlayListItem
                src={PlayListItem4}
                textPrimary="Tokyo"
                textSecondary="SmYang"
            />

            <PlayListItem
                src={PlayListItem5}
                textPrimary="Tokyo"
                textSecondary="SmYang"
            />

            <PlayListItem
                src={PlayListItem6}
                textPrimary="Hazel Eyes"
                textSecondary="moody."
                style={{ background: '0,0,0,.3' }}
            />
        </div>
    );
}

export default PlayListItems;
