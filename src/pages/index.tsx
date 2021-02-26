import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox'

import styles from './index.module.scss'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { CountdownContextProvider } from '../contexts/CountdownContext'
import { ChallengesContextProvider } from '../contexts/ChallengesContext'

const Home = (props: HomeProps) => {
  return (
    <ChallengesContextProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownContextProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownContextProvider>

      </div>
    </ChallengesContextProvider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


