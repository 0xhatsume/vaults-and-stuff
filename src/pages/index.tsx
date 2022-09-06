import type { NextPage } from 'next';
import { BasePage, VaultCard, NavBar } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
      <BasePage>

          {/* accordions */}
          <VaultCard />

      </BasePage>

    </>
  )
}

export default Home
