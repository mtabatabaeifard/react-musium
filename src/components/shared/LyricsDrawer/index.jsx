/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

export function LyricsDrawer(name) {
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

    const lyricses = () => {
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        if (name === 'swim') {
            return `I bet you feel it now, baby
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
                So hard to ignore ya, keep your body open, swim`;
        }
        return null;
    };

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
            {lyricses}
        </Box>
    );
}
