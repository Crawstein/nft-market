import CreateAndSell from "./components/CreateAndSell/CreateAndSell";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Popular from "./components/Popular/Popular";
import ResponsiveProtection from "./components/ResponsiveProtection/ResponsiveProtection";
import Subscribe from "./components/Subscribe/Subscribe";
import WeeklyArts from "./components/WeeklyArts/WeeklyArts";

const infoBlockData = [
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
]

function App() {
  return (
    <div>
      {window.innerWidth < 1450 ? (
        <ResponsiveProtection />
      ) : (
        <>
          <Header infoBlockData={infoBlockData[0]} />
          <WeeklyArts />
          <CreateAndSell infoBlockData={infoBlockData[1]} />
          <Popular />
          <Subscribe infoBlockData={infoBlockData[2]} />
          <Footer />
        </>
      )}

    </div>
  );
}

export default App;
