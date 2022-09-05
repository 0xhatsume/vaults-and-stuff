import type { NextPage } from 'next';
import { BasePage, VaultCard, NavBar } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
      <BasePage>

          {/* accordions */}
          <VaultCard title={'Vault 2'} >
              <div className='
                p-4 font-normal text-left
                border border-x-gray-200 border-b-gray-200 rounded-b-xl
                '>Ayo Mr White</div>
          </VaultCard>

      </BasePage>

    </>
  )
}

export default Home
