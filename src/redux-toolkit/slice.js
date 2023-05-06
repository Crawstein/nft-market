import { createSlice } from "@reduxjs/toolkit";



const toolkitSlice = createSlice({
    name: 'state',
    initialState: {
        count: 0,
        headerStatsData: {
            artwork: 8.9,
            artist: 65.3,
            collection: 87.2
        },
        popularsData: [
            {
                name: `Osvaldo Percy`
            },
            {
                name: `Ranson Sqiure`
            },
            {
                name: `Sebastian Waltan`
            },
            {
                name: `Abraham Zack`
            },
            {
                name: `Cristio Leo`
            },
        ],
        footerLinksData: [
            {
                title: 'Explore',
                links: [
                    `Art Sign In`,
                    `Collectibles`,
                    `Domain Name`,
                    `Utility`
                ]
            },
            {
                title: 'Statistic',
                links: [
                    `Ranking`,
                    `Collectibles`,
                    `Activity`
                ]
            },
            {
                title: 'Company',
                links: [
                    `About Us`,
                    `Career`,
                    `Support`,
                    `Partners`
                ]
            },
            {
                title: 'Resources',
                links: [
                    `Help Center`,
                    `Platform Status`,
                    `Blog`
                ]
            },
        ],
        infoBlockData: [
            {
                title: (
                    <>
                        Discover and Collect The Best NFTs <span>Digital Art.</span>
                    </>
                ),
                text: `Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`,
                buttons: {
                    buttonText: 'Explore Now',
                    buttonLink: '/explore-now',
                    subButtonText: 'Learn More',
                    subButtonLink: '/learn-more'
                }
            },
            {
                title: (
                    <>
                        Create And Sell Your <span>Best NFTs</span>
                    </>
                ),
                text: `Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`,
                buttons: {
                    buttonText: 'Create  Now',
                    buttonLink: '/create-now',
                    subButtonText: 'Learn More',
                    subButtonLink: '/learn-more'
                }
            },
            {
                title: (
                    <>
                        Subscribe And <span>get our Updates</span> Every Week
                    </>
                ),
                text: `We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly`,
                buttons: 'subscribe'
            }
        ],
        createAndSellParallaxStyles: [
            {
                position: 'absolute',
                top: '0px',
                right: '0px'
            },
            {
                position: 'absolute',
                bottom: '0px',
                left: '0px'
            }
        ],
        subscribeParallaxStyles: [
            {
                position: 'absolute',
                top: '0px',
                left: '0px'
            },
            {
                position: 'absolute',
                bottom: '0px',
                right: '0px'
            }
        ],
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        }
    }
})

export default toolkitSlice.reducer
export const { increment } = toolkitSlice.actions