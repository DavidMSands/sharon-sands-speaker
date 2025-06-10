import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from "react-helmet";

import momsOfProdigals from '../Data/Workshop/moms-of-prodigals.png'
import graphImage from '../Data/GraphImage.jpg'

function WorkshopMain() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div>
              <Helmet>
                <meta property='og:title' content='Workshop - Sharon Sands Speaker' />
                <meta property="og:url" content="https://sharonsandsspeaker.com/workshop" />
                <meta property="og:description" content="Moms of Prodigals Workshop" />
                <meta property="og:image" content={graphImage} />
              </Helmet>
              <div className='header-center'>
                <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <img src={momsOfProdigals} alt="Moms of Prodigals Workshop" className='workshop-header-image' />
                </motion.div>
              </div>

              <section className="workshop" role="region" aria-labelledby="workshop-heading">
                    <div className="workshop__intro">
                        <p>
                        There is almost nothing more painful than to have one of your children walk
                        away from their faith, struggle with addiction, leave your family, and run
                        toward things that you know are unhealthy for them.
                        </p>

                        <p>Having a prodigal child can feel…</p>

                        <ul className="workshop__feelings">
                        <li>isolating</li>
                        <li>shameful</li>
                        <li>hopeless</li>
                        <li>scary</li>
                        <li>heartbreaking</li>
                        </ul>

                        <p className="workshop__exclaim">It can take the breath right out of you!</p>
                    </div>

                    <article className="workshop__response">
                        <p>
                        As a mom who has walked this journey more than once, I have such a burden
                        for moms that are on this journey!
                        </p>

                        <p>
                        As we have shared our <strong>“Moms of Prodigals Workshop”</strong> with
                        different women’s groups, the responses have been relief, gratitude, tears,
                        a sense of no longer being alone—less shame, less isolation. I was deeply
                        touched by the depth of their responses!
                        </p>
                    </article>

                    <h2 id="workshop-heading" className="workshop__title">
                        Moms&nbsp;of&nbsp;Prodigals&nbsp;Workshop&nbsp;· 2&nbsp;Hours
                    </h2>

                    <div className="workshop__sessions">
                        <section>
                        <h3>Session&nbsp;1 – How to Tend to Your Soul as You Wait</h3>
                        <p>
                            Prodigals push us into a season of waiting…we don’t ask for it, and yet
                            here we are—holding our breath, praying, mourning, asking “why,” losing
                            sleep, feeling guilty and helpless.
                        </p>
                        <p>
                            This seminar invites you to stop holding your breath—it’s an invitation
                            to a holy exhale. God is not done with <strong>you</strong>, and His
                            plans for <strong>your life</strong> are not on hold simply because your
                            child struggles.
                        </p>
                        </section>

                        <section>
                        <h3>Session&nbsp;2 – Prayer Warriors and Bridge Builders</h3>
                        <p>
                            Practical ways to pray and to build bridges to the hearts of your
                            prodigal kids, plus resources to encourage you on this journey.
                        </p>
                        </section>

                        <section>
                        <h3>Session&nbsp;3 – Q&amp;A + Prayer</h3>
                        <p>
                            Ask anything on your heart, then we’ll close with prayer for every mom
                            and every prodigal child.
                        </p>
                        </section>
                    </div>
      
                    <aside className="workshop__note" aria-label="Workshop note">
                        <p>
                            <strong>Note:</strong> The workshop can be shortened or lengthened to
                            fit each group’s particular need.
                        </p>
                        <p>
                            It can also be offered to <em>Parents of Prodigals</em>&nbsp;— including
                            dads&nbsp;— if desired.
                        </p>
                    </aside>
                </section>
              
            </div>
            </motion.div>
    )
}

export default WorkshopMain