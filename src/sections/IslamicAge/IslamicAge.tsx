import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'
import { Paragraph } from '@/components/Paragraph'
import { setupScrollAnimations, setupParallax } from '@/utils/animations'
import styles from './IslamicAge.module.scss'

export function IslamicAge() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cleanups: (() => void)[] = []

    if (sectionRef.current) cleanups.push(setupScrollAnimations(sectionRef.current))
    if (decorRef.current) cleanups.push(setupParallax(decorRef.current, 40))

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <Section id="islamic-age">
      <div ref={sectionRef} className={styles.wrapper}>
        <SectionTitle data-animate="up" accent>
          {t('islamicAge.title')}
        </SectionTitle>
        <Paragraph data-animate="up">{t('islamicAge.p1')}</Paragraph>
        <Paragraph data-animate="up">{t('islamicAge.p2')}</Paragraph>

        <div ref={decorRef} className={styles.decor}>
          <svg viewBox="0 0 100 100" fill="none">
            <polygon
              points="50,5 61,35 95,35 68,55 79,90 50,70 21,90 32,55 5,35 39,35"
              stroke="#edc574"
              strokeWidth="0.4"
              opacity="0.07"
            />
            <circle cx="50" cy="50" r="30" stroke="#edc574" strokeWidth="0.3" opacity="0.05" />
          </svg>
        </div>
      </div>
    </Section>
  )
}
