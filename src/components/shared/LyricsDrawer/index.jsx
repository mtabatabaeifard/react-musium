/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

export function LyricsDrawer() {
    const theme = useTheme();
    const [drawerState, setDrawerState] = useState(false);

    window.onwheel = (e) => {
        const scrollPosition = window.pageYOffset;
        const windowSize = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;

        const bottomDistance = Math.round(
            bodyHeight - (scrollPosition + windowSize),
        );

        if (bottomDistance <= 10 && bottomDistance >= -10) {
            if (e.deltaY >= 0) {
                setDrawerState(true);
            }
        }
        if (scrollPosition === 0) {
            if (e.deltaY < 0) {
                setDrawerState(false);
            }
        }
    };

    const lyricsObj = {
        swim: `<pre>I bet you feel it now, baby
        Especially since we've only known each other one day
        But, I've gotta work shit out, baby
        I'm exercising demons, got 'em runnin' 'round the block now
        
        Location drop, now
        Pedal to the floor like you're runnin' from the cops now
        Oh, what a cop out
        You picked a dance with the devil and you lucked out
        
        Yeah
        The water's getting colder, let me in your ocean, swim
        Out in California, I'll be forward stroking, swim
        So hard to ignore ya, 'specially when I'm smoking, swim
        World is on my shoulders, keep your body open, swim
        I'm swimming, I'm swimming, I'm swimming, yeah
        I'm swimming, I'm swimming, I'm swimming, yeah
        Out in California, I'll be forward stroking, swim
        So hard to ignore ya, keep your body open, swim
        
        Pop a couple pills in the daytime
        Heard you got a friend, what's her head like?
        Probably should've fucked on the first night
        Now I gotta wait for the green light
        I don't wanna wait for no green light
        Narcolepsy got me feeling stage fright
        Luckily I float at insane heights
        Luckily, luckily, luckily, yeah
        
        Location drop, now
        Pedal to the floor like you're runnin' from the cops now
        Oh, what a cop out
        You picked a dance with the devil and you lucked out
        
        Yeah
        The water's getting colder, let me in your ocean, swim
        Out in California, I'll be forward stroking, swim
        So hard to ignore ya, 'specially when I'm smoking, swim
        World is on my shoulders, keep your body open, swim
        I'm swimming, I'm swimming, I'm swimming, yeah
        I'm swimming, I'm swimming, I'm swimming, yeah
        Out in California, I'll be forward stroking, swim
        So hard to ignore ya, keep your body open, swim
        
        Swim, push the water to the edge and watch it drip
        Check your footing, don't get caught up in the rip, no
        I know I said I'd call, I never did, no
        (Swim) swim, swim now
        I can take you, even though I've never been there
        The tide has currently been thrashing around me again and again now
        I've been drowning for a minute, your body keeps pulling me in, girl
        
        The water's getting colder, let me in your ocean, swim
        Out in California, I'll be forward stroking, swim
        So hard to ignore ya, 'specially when I'm smoking, swim
        World is on my shoulders, keep your body open, swim
        I'm swimming, I'm swimming, I'm swimming, yeah
        I'm swimming, I'm swimming, I'm swimming, yeah
        Out in California, I'll be forward stroking, swim
        So hard to ignore ya, keep your body open, swim</pre>`,
        Time: `<pre>Even if we both break down tonight
And you say you hate me, and we go to bed angry
I know everything will be alright
I'll be here waiting, I promise I'm changing
I just need

A little time to show you I'm worth it
I know that I can be a difficult person
I'm a stress case, drive you up the wall when I'm workin'
Actually, I'm probably worse when I'm not, you don't deserve it
Make you nervous 'cause you know I'ma break soon
Every time I do, I say somethin' that hurts you
Actin' like I'm gone, but we both in the same room
I don't like to be wrong, which I know you relate to
And I know I make you feel like you're at the end of your rope
That's when I look at you and tell you I'd be better alone
Just the pride talkin', isn't it? 'Cause both of us know
I'm the definition of "wreck" if you look into my soul
Comes out the most when I feel I'm in a vulnerable place
Made a lot of mistakes I wish I knew how to erase
When I'm afraid, might get distant and I push you away
But no matter the case, I'ma do whatever it takes even if

Even if we both break down tonight
And you say you hate me, and we go to bed angry
I know everything will be alright
I'll be here waiting, I promise I'm changing
I just need

Time (oh)
I, I need time (oh, oh)
I just need time (oh)
I, I need time (oh)
Time (oh), time (oh)

Yeah, way before I bought you the ring
We were fighting back and forth like you were wearin' the thing
Two passionate people not afraid to say what they think
Lead to passionate conversation when it's hard to agree
You know me well, sittin' on the edge of my seat
Lookin' at life, overanalyzin' everything
Always depressed, tryna find a better version of me
Searching for somethin' I know's prolly right in front of my feet
Stubborn as me? Maybe not, but you're close to it
Got a lot of issues, I'm tryin' to work through 'em
Going to therapy for you's somethin' that's worth doin'
When I know you been there for me through all of my worst moments
And I know it hurts knowing that I carry this weight on my chest
Making it difficult for me to open up and connect
Lot of regrets, I apologize for all of the stress
That's not what I meant to do, you know I love you to death even if-

Even if we both break down tonight
And you say you hate me, and we go to bed angry
I know everything will be alright
I'll be here waiting, I promise I'm changing
I just need

Time (oh)
I, I need time (oh, oh)
I just need time (oh)
I, I need time (oh)
Time (oh), time (oh)
I just need time (oh)
I, I need time (oh, oh)
I just need time (oh)
I, I need time (oh)
Time (oh), time (oh)
</pre>`,
        Movies: `<pre>
        Movies, movies
        I want a love like the movies
        
        I look at you like you're perfect for me
        If you are the diamond, then I am the ring
        All of our friends think of us jealously
        We're so sweet, so sweet
        Built us a world and I gave you the key
        Still can't believe that this isn't a dream
        Falling in love with a damn fantasy
        That's so me, so me
        
        But I've been livin'
        Life ain't fiction
        
        In my head, we're dancing in the dark
        In my head, we kiss under the stars
        But we know that's not what we're doing
        'Cause, baby, this ain't like the movies
        
        Movies, movies
        I want a love like the movies
        
        We go to parties with people you know
        We're holdin' hands but it's all just for show
        'Cause Monday through Friday we both barely spoke
        They don't know, they can't know
        Like just on the drive here, I was lookin' through your texts
        I was screamin' my damn head off how you still love your ex?
        And you say that it's over, but why does she call you
        At 3AM and 4AM? That's a funny way of stayin' friends
        
        In my head, we're dancing in the dark
        In my head, we kiss under the stars
        But we know that's not what we're doing
        'Cause, baby, this ain't like the movies
        In my head, we never grow apart
        In my head, you never break my heart
        But we know that's not what we're doing
        'Cause, baby, this ain't like the movies
        
        Movies, movies
        I want a love like the movies
        Movies, movies
        I want a love like the movies
        
        Baby, we lost all this love that we have (movies, movies)
        And I can't pretend that it'll never come back (I want a love like the movies)
        And I think you're seeing right through me (movies, movies)
        But, baby, this ain't like the movies
        
        And I want a love like the movies</pre>`,
        lowkey: `<pre>Wonder what I'll do when the cops come through
        And the whiskey's run out
        'Cause I've been lookin' at you since half past two
        Wanna take this downtown?
        This liquid courage got me way too honest
        Put your phone on vibrate, let's catch a vibe, babe
        While the sun's down
        Hush now, I know we're a little too fucked up to stay still, love
        Be as quiet as you can, 'cause if anyone sees
        They'll just blow shit up
        I don't gotta know if you're taken
        I'll just let ya know bedroom's vacant
        No one's gotta know, just us and the moon 'til the sun starts wakin'
        
        Up's the only direction I see
        As long as we keep this
        
        Low, low, low, low, low, low, low, low-key (ah, ah, ah, ah)
        You ain't even gotta lo- lo- lo- lo- lo- lo- lo-love me (ah, ah, ah, ah)
        Us in a king-size, keep it a secret
        Say I'm your queen, I don't wanna leave this
        Low, low, low, low, low, low, low, low-key
        
        Wizard with words tellin' me my energy's so bewitchin'
        So I'll go first, there's an open bar, let's close this distance
        Oh, oh, oh, oh, oh my, don't make me have to spell it all night
        I don't really give a fuck 'bout all the "he said, she said" bullshit
        So pick your poison, love, let's go somewhere a little more exclusive
        Take a shot, take a chance, take my hand, boy
        Tension so intense like an asteroid
        Be discreet, gotta dodge all the tabloids
        
        Let's not think too much, there ain't no problems
        So long as we keep this
        
        Low, low, low, low, low, low, low, low-key (ah, ah, ah, ah)
        You ain't even gotta lo- lo- lo- lo- lo- lo- lo-love me (ah, ah, ah, ah)
        Us in a king-size, keep it a secret
        Say I'm your queen, I don't wanna leave this
        Low, low, low, low, low, low, low, low-key
        
        low-key, low-key
        low-key, low-key</pre>`,
        Hurt: `<pre>Ooh-whoa, ooh-whoa
        Ooh-whoa, ooh-whoa
        
        보고 싶은 생각에, 들어간 우리 창에
        나는 말을 거는데 보내지는 않을래
        느린 한마디보다 조용함이 더 좋아
        기다리고 있지만 매일 이런 건 아니야 (oh)
        
        난 재미없어 게임 같은 건
        다 필요 없어, 아무리 좋아도 널, no
        말로만은 지겨운걸, 먼저 와서 보여줘
        먼저 와서 보여줘
        'Cause I'm not gonna be the one to get hurt
        
        Hurt, nah-nah
        I'm not gonna be the one to get hurt
        Hurt, nah-nah
        I'm not gonna be the one to get hurt
        Hurt (ooh, ooh, ooh-ooh)
        
        I'm not gonna be the one to get hurt (ooh, ooh, ooh-ooh, ooh-ooh)
        I'm not gonna be the one to get hurt (ooh, ooh, ooh-ooh, ooh-ooh)
        I'm not gonna be the one to get hurt (ooh, ooh, ooh-ooh, ooh-ooh)
        Hurt
        
        매일 잠들기 전에 그리고 또 아침에
        쥐고 있는 내 손엔 너 없는 화면인데
        느린 한마디보다 조용함이 더 좋아
        기다리고 있지만 매일 이런 건 아니야 (ooh)
        
        난 재미없어 게임 같은 건
        다 필요 없어, 아무리 좋아도 널, no
        말로만은 지겨운걸, 먼저 와서 보여줘
        먼저 와서 보여줘
        'Cause I'm not gonna be the one to get hurt
        
        Hurt, nah-nah
        I'm not gonna be the one to get hurt (nah, nah)
        Hurt, nah-nah (nah, nah)
        I'm not gonna be the one to get hurt (nah, nah)
        Hurt (ooh, ooh, ooh-ooh, 안돼)
        Hurt (ooh, ooh, ooh-ooh)
        
        여기까지야, 네가 와있는 곳은 너무 멀었어
        I'm not gonna be the one to get hurt
        여기까지야, 네가 와있는 곳은 너무 멀었어
        I'm not gonna be the one to get hurt</pre>`,
        ILLUSION: `<pre>You're so yummy, yummy, yummy in my tummy, tummy, tummy

        Look at you, 빨라지는 걸음걸이
        Look at me, 호기심을 자극하지
        Look at them, 알아챌 수 없는 거리
        Baby, don't panic, 한밤의 party
        
        차올라 달이 딱 좋은 timing
        이건 비밀이야, 쉿, 우리만의
        한밤의 party, 널 끌어당김
        어쩌니? 내게 뺏겨버린 환심
        
        몽롱한 기분이 좋은 tonight
        색다른 세계로 이끄는 light (i-i-i-i-illusion)
        
        Follow me, come and get illusion (hey!)
        한입에 삼켜 널, delicious
        아찔한 미끼로 hook up (hey!)
        관심을 먹고 growing up (i-i-i-i-illusion)
        
        Follow me, come and get illusion (hey!)
        몸집을 불려가 delicious
        점점 더 커지는 fire (hey!)
        관심을 먹고 growing up (i-i-i-i-illusion)
        
        겁내지 말고, 이리 온 (이리 온)
        (Will o' the wisp)
        겁내지 말고, 이리 온 (이-이-이-이-이리 온)
        
        Easy peasy, 너도 알다시피
        When you dizzy, 내겐 그저 dish
        도깨비불 너를 놀려, boo
        예상 못 한 순간 등장하지 불쑥
        
        첨 보는 style, 멋모를 timing
        너의 약점에다, hit, it's so funny
        한밤의 party, 널 끌어당김
        알아도 막을 수 없는 반칙
        
        낯선 이 기분이 묘한 tonight
        감춰둔 본능을 이끄는 light (i-i-i-i-illusion)
        
        Follow me, come and get illusion (hey!)
        한입에 삼켜 널, delicious
        아찔한 미끼로 hook up (hey!)
        관심을 먹고 growing up (i-i-i-i-illusion)
        
        Follow me, come and get illusion (hey!)
        몸집을 불려가 delicious
        점점 더 커지는 fire (hey!)
        관심을 먹고 growing up (i-i-i-i-illusion)
        
        겁내지 말고, 이리 온 (이리 온)
        (Will o' the wisp)
        겁내지 말고, 이리 온 (이-이-이-이-이리 온)
        
        Yummy, yummy, yummy in your tummy, tummy, tummy (ooh, oh)
        놀란 너의 face, 나를 저격하는 taste (ooh, oh)
        멀리멀리 달아나도 소용없어 이미 (ooh-ooh, yeah, yeah)
        Come, get illusion (i-i-i-i-illusion, so fool)
        
        Follow me, come and get illusion (yeah, yeah, hey!)
        유일한 목격자, you're the one
        방심한 틈을 타, swallow (방심한 틈을 타, hey!)
        환상을 먹고 growing up (i-i-i-i-illusion)
        
        Follow me, come and get illusion (hey!)
        순진한 먹잇감 delicious
        단번에 노리는 hunter (hey!)
        네 맘을 뺏어 growing up (i-i-i-i-illusion)
        
        겁내지 말고, 이리 온 (이리 온)
        (Will o' the wisp)
        겁내지 말고, 이리 온 (i-i-i-i-illusion)
        </pre>`,
        BirdSetFree: `<pre>Clipped wings, I was a broken thing
        Had a voice, had a voice but I could not sing
        You would wind me down
        I struggled on the ground, oh
        So lost, the line had been crossed
        Had a voice, had a voice but I could not talk
        You held me down
        I struggle to fly now, oh
        
        But there's a scream inside that we all try to hide
        We hold on so tight, we cannot deny
        Eats us alive, oh it eats us alive, oh
        Yes, there's a scream inside that we all try to hide
        We hold on so tight, but I don't wanna die, no
        I don't wanna die, I don't wanna die, yeah
        
        And I don't care if I sing off key
        I find myself in my melodies
        I sing for love, I sing for me
        I shout it out like a bird set free
        No, I don't care if I sing off key
        I find myself in my melodies
        I sing for love, I sing for me
        I'll shout it out like a bird set free
        
        I'll shout it out like a bird set free
        I'll shout it out like a bird set free
        
        Now I fly, hit the high notes
        I have a voice, have a voice, hear me roar tonight
        You held me down
        But I fought back loud, oh
        
        There's a scream inside that we all try to hide
        We hold on so tight, we cannot deny
        Eats us alive, oh it eats us alive, oh
        Yes, there's a scream inside that we all try to hide
        We hold on so tight, but I don't wanna die, no
        I don't wanna die, I don't wanna die, yeah
        
        And I don't care if I sing off key
        I find myself in my melodies
        I sing for love, I sing for me
        I shout it out like a bird set free
        No, I don't care if I sing off key
        I find myself in my melodies
        I sing for love, I sing for me
        I'll shout it out like a bird set free
        I'll shout it out like a bird set free
        I'll shout it out like a bird set free
        I'll shout it out like a bird set free
        I'll shout it out like a bird set free
        I'll shout it out like a bird set free
        </pre>`,
        ASkyFullofStars: `<pre>'Cause you're a sky, 'cause you're a sky full of stars
        I'm gonna give you my heart
        'Cause you're a sky, 'cause you're a sky full of stars
        'Cause you light up the path
        
        I don't care, go on and tear me apart
        I don't care if you do, ooh-ooh, ooh
        'Cause in a sky, 'cause in a sky full of stars
        I think I saw you
        
        'Cause you're a sky, 'cause you're a sky full of stars
        I wanna die in your arms, oh, oh-oh
        'Cause you get lighter the more it gets dark
        I'm gonna give you my heart, oh
        
        I don't care, go on and tear me apart
        I don't care if you do, ooh-ooh, ooh
        'Cause in a sky, 'cause in a sky full of stars
        I think I see you
        I think I see you
        
        'Cause you're a sky, you're a sky full of stars
        Such a heavenly view
        You're such a heavenly view
        Yeah, yeah, yeah, ooh</pre>`,
        JusttheTwoofUs: `<pre>I see the crystal raindrops fall
        And the beauty of it all
        Is when the sun comes shining through
        To make those rainbows in my mind
        When I think of you sometime
        And I wanna spend some time with you
        
        Just the two of us
        We can make it if we try
        Just the two of us
        (Just the two of us)
        Just the two of us
        Building castles in the sky
        Just the two of us
        You and I
        
        We look for love, no time for tears
        Wasted water's all that is
        And it don't make no flowers grow
        Good things might come to those who wait
        Not for those who wait too late
        We gotta go for all we know
        
        Just the two of us
        We can make it if we try
        Just the two of us
        (Just the two of us)
        Just the two of us
        Building them castles in the sky
        Just the two of us
        You and I
        
        I hear the crystal raindrops fall
        On the window down the hall
        And it becomes the morning dew
        And darling when the morning comes
        And I see the morning sun
        I wanna be the one with you
        
        Just the two of us
        We can make it if we try
        Just the two of us
        (Just the two of us)
        Just the two of us
        Building big castles way on high
        Just the two of us
        You and I
        
        Just the two of us
        (We can make it, just the two of us)
        Let's get it together baby (yeah)
        (Just the two of us)
        Just the two of us
        (We can make it, just the two of us)
        (Just the two of us)
        (We can make it, just the two of us)
        (Just the two of us)
        (We can make it, just the two of us)
        (Just the two of us)
        (We can make it, just the two of us)
        (Just the two of us)
        (We can make it, just the two of us)
        (Just the two of us)</pre>`,
        ParandeyeMohajer: `<pre>ای پرنده مهاجر
        سفرت سلامت اما
        به کجا میری عزیزم قفسه تموم دنیا
        روی شاخه های دوری چه خوشی داره صبوری
        وقتی خورشیدی نباشه تا همیشه سوت و کوری
        
        میگذره روزای عمرت توی جاده های خلوت
        تا بخوای برگردی خونه گم میشی تو باغ غربت
        واسه ما فرقی نداره هر جا باشیم شب نشینیم
        دلخوشیم به این که شاید سحرو یه روز ببینیم
        
        آخرش یه روزی هجرت در خونتو میکوبه
        تازه اون لحظه میفهمی همه آسمون غروبه
        آخرش یه روزی هجرت در خونتو میکوبه
        تازه اون لحظه میفهمی همه آسمون غروبه
        
        میگذره روزای عمرت توی جاده های خلوت
        تا بخوای برگردی خونه گم میشی تو باغ غربت
        واسه ما فرقی نداره هر جا باشیم شب نشینیم
        دلخوشیم به این که شاید سحرو یه روز ببینیم
        
        آخرش یه روزی هجرت در خونتو میکوبه
        تازه اون لحظه میفهمی همه آسمون غروبه
        آخرش یه روزی هجرت در خونتو میکوبه
        تازه اون لحظه میفهمی همه آسمون غروبه
        </pre>`,
        BlindingLights: `<pre>Yeah

        I've been tryna call
        I've been on my own for long enough
        Maybe you can show me how to love, maybe
        I'm going through withdrawals
        You don't even have to do too much
        You can turn me on with just a touch, baby
        
        I look around and
        Sin City's cold and empty (oh)
        No one's around to judge me (oh)
        I can't see clearly when you're gone
        
        I said, ooh, I'm blinded by the lights
        No, I can't sleep until I feel your touch
        I said, ooh, I'm drowning in the night
        Oh, when I'm like this, you're the one I trust
        (Hey, hey, hey)
        
        I'm running out of time
        'Cause I can see the sun light up the sky
        So I hit the road in overdrive, baby, oh
        
        The city's cold and empty (oh)
        No one's around to judge me (oh)
        I can't see clearly when you're gone
        
        I said, ooh, I'm blinded by the lights
        No, I can't sleep until I feel your touch
        I said, ooh, I'm drowning in the night
        Oh, when I'm like this, you're the one I trust
        
        I'm just walking by to let you know (by to let you know)
        I can never say it on the phone (say it on the phone)
        Will never let you go this time (ooh)
        
        I said, ooh, I'm blinded by the lights
        No, I can't sleep until I feel your touch
        (Hey, hey, hey)
        
        I said, ooh, I'm blinded by the lights
        No, I can't sleep until I feel your touch</pre>`,
    };

    console.log(lyricsObj);

    const drawerS = {
        background: 'linear-gradient(180deg, #39C0D4 0%, #7CEEFF 100%)',
        mx: 23 / 8,
        fontSize: '2rem',
        fontWeight: 600,
        color: '#fff',
        borderRadius: '2.5rem',
        position: 'absolute',
        maxWidth: '381px',
        paddingBottom: `${drawerState ? '25rem' : '1.5rem'}`,
        bottom: `${drawerState ? '16.5rem' : '-8.4rem'}`,
        lineHeight: `${drawerState ? '5rem' : '2.6rem'}`,
        transition: 'all 1s ease-out .2s',
        boxShadow: `inset 0rem .4rem .4rem rgba(0, 0, 0, 0.25)${
            !drawerState ? ', inset 0rem -40rem 5rem -28rem #00000050' : ''
        }`,
        [theme.breakpoints.down('smallMobile')]: {
            bottom: -154,
        },
        [theme.breakpoints.down('smallerMobile')]: {
            bottom: -208,
        },
        [theme.breakpoints.down('smallestMobile')]: {
            bottom: -238,
        },
    };

    return (
        <Box p={25 / 8} sx={drawerS}>
            You never look at the sky <br />
            Cause you think it's too high <br />
            You never look at the stars <br />
            Cause you think they're too far <br />
            But they're showing the lights <br />
            to the way back home <br />
            When you don't know where to go
        </Box>
    );
}
