import React from 'react'
import LinkBtn from '../../Button/LinkBtn'
import SubTitle from '../../Title/SubTitle'
import Title from '../../Title/Title'
import styles from '../Home.module.css'
import {BsChevronDown} from "react-icons/bs";

function CTO() {
  return (
    <div className={styles.cto}>
        <SubTitle text='BLOCKCHAIN LEADER' />
        <Title text='Certified Management Consultant' color='white' />

        <div className={styles.ctodecription}>
            <p>
                Hi, I am Adeshina Ajayi. I am arguably Africa’s foremost blockchain expert and tech educator.   
                In the last 6years, I have helped corporate institutions and individuals to understand the relevance of blockchain 
                technology and positioned them to take their stake in the fast emerging tech space.   I do this through my blockchain 
                consulting and education firm, Digital Focus.   I have provided blockchain solutions to top institutions from different 
                sectors like CMC Connect, Alpha Training Lab (ATL), Nerdzfactory, TLCGLOBAL, Truwiters, Addicio Solutions, Code Tutor 
                to mention a few. My academy, Digital Focus Academy has certified over two thousand (2,000) Blockchain Experts across Nigeria.
            </p>
        </div>

        <div className={styles.ctobtn}>
            <div className={styles.more}>
                <LinkBtn route='/about' text='MORE' color='black' bg='goldenrod' />
            </div>

            <div className={styles.contact}>
                <LinkBtn route='/about' text='CONTACT' color='goldenrod' bg='black' />
            </div>
        </div>

        <div className={styles.toBottom}>
            <BsChevronDown />
        </div>
    </div>
  )
}

export default CTO